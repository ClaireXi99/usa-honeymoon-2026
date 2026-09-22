/* Restaurant alternatives do not change the itinerary or budget ledger. */
(() => {
  'use strict';
  const research = window.restaurantResearch;
  if (!research || !Array.isArray(research.zones)) return;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const url = value => { try { const u = new URL(value); return /^https?:$/.test(u.protocol) ? u.href : ''; } catch { return ''; } };
  const link = (href, label) => url(href) ? `<a href="${esc(url(href))}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>` : '';
  const amount = n => Number(n).toLocaleString('zh-CN', {maximumFractionDigits:0});
  const price = c => Array.isArray(c.price) && c.price.length === 2 && c.price.every(Number.isFinite) ? `两人 ¥${amount(c.price[0])}—${amount(c.price[1])}` : '价格待核实';
  const name = c => esc(c.name) + (c.zh ? `（${esc(c.zh)}）` : '');
  const booking = c => c.booking && typeof c.booking === 'object' ? c.booking : {mode:'unknown',text:typeof c.booking === 'string' ? c.booking : ''};
  const bookingLabel = c => ({walkin:'现场候位',recommended:'建议预约',required:'需要预约',unknown:'订位规则待核实'}[booking(c).mode] || '订位规则待核实');
  const seated = c => /室内座位|室内堂食|有座位|可坐下|桌边服务|坐下用餐|提供座位|有座/.test(c.comfort || '') && !/未核实|待核实|未知|无座|没有座|站食/.test(c.comfort || '');
  let serial = 0;
  const card = (c, rank, expanded = false) => {
    const b = booking(c);
    const score = Number.isFinite(c.rating) ? `谷歌 ${esc(c.rating)} 分${c.reviews !== null && c.reviews !== undefined ? ` · ${esc(c.reviews)} 条评价` : ' · 评价数未核实'}` : '谷歌评分未核实';
    const xhs = Array.isArray(c.xhs) ? c.xhs : [];
    const el = document.createElement('article');
    el.className = 'restaurant-option';
    el.innerHTML = `<div class="restaurant-option-heading"><span class="restaurant-rank">${rank}</span><h5>${name(c)}</h5><b>${esc(price(c))}</b></div>
      <div class="restaurant-meta"><span>${score}</span><span>${esc(c.walk || '步行距离未核实')}</span></div>
      <div class="restaurant-tags"><span>${esc(c.comfort || '座位情况未核实')}</span><span>${esc(bookingLabel(c))}</span></div>
      ${c.reason ? `<p class="restaurant-reason">${esc(c.reason)}</p>` : ''}
      <div class="restaurant-actions">${link(c.mapsUrl, '地图与路线')}${b.mode !== 'walkin' ? link(b.source || c.official, '查看订位规则') : ''}</div>
      <details class="restaurant-more"${expanded ? ' open' : ''}><summary>点餐、订位与参考资料</summary><div>
      ${c.dish ? `<p><b>点餐参考：</b>${esc(c.dish)}</p>` : ''}
      <p><b>订位：</b>${esc(b.text || '尚未核实，请查看餐厅官方说明。')}</p>
      ${b.advance || c.lead ? `<p><b>订位建议：</b>${esc(b.advance || c.lead)}${b.mode === 'unknown' ? '（建议预留时间，不代表官方放位规则。）' : ''}</p>` : ''}
      ${b.release ? `<p><b>放位规则：</b>${esc(b.release)}</p>` : ''}
      <p class="restaurant-price-note">价格为两人含税、不含小费的估算，按实际点单结算。评分核对：${esc(research.checked || '日期未注明')}。</p>
      <div class="restaurant-evidence"><b>小红书参考</b>${xhs.length ? xhs.map(x => `<p>${link(x.url, x.title || '查看笔记')}${x.summary ? `<span>${esc(x.summary)}</span>` : ''}</p>`).join('') : '<p>未找到匹配的推荐笔记，不据此标为热门店。</p>'}</div>
      <div class="restaurant-actions">${link(c.official, '餐厅官网')}${link(b.source, '订位来源')}</div>
      </div></details>`;
    return el;
  };
  const zoneElement = zone => {
    const id = `restaurant-zone-${++serial}`;
    const all = Array.isArray(zone.candidates) ? zone.candidates : [];
    const chosen = all.filter(c => c.selected === true);
    const omitted = all.filter(c => c.selected !== true);
    const section = document.createElement('section');
    section.className = 'restaurant-zone';
    section.id = id;
    section.innerHTML = `<header><div><span class="restaurant-window">${esc(zone.window || '')}</span><h4>${esc(zone.title)}</h4></div>${link(zone.mapsUrl, '查看区域')}</header>
      ${zone.anchor ? `<p class="restaurant-anchor">休息点：${esc(zone.anchor)}</p>` : ''}${zone.note ? `<p class="restaurant-zone-note">${esc(zone.note)}</p>` : ''}
      <div class="restaurant-first"><span class="restaurant-first-label">优先参考</span></div>
      <details class="restaurant-compare"><summary>展开 ${chosen.length} 家对比</summary><div class="restaurant-controls" aria-label="餐厅筛选">
      <label><input type="checkbox" data-filter="price"> 两人 ¥300 以内</label><label><input type="checkbox" data-filter="seats"> 可以坐下休息</label><label><input type="checkbox" data-filter="walkin"> 无需提前预约</label>
      <label class="restaurant-sort">排序 <select aria-label="餐厅排序"><option value="rank">综合顺序</option><option value="price">价格低优先</option></select></label></div>
      <p class="restaurant-result-count" role="status" aria-live="polite"></p><div class="restaurant-options-grid"></div><div class="restaurant-empty" hidden>没有同时符合这些条件的餐厅。<button type="button">清除筛选</button></div></details>
      <details class="restaurant-audit"><summary>${all.length} 家筛选记录</summary><p>保留 ${chosen.length} 家；以下 ${omitted.length} 家未纳入当前推荐。候选不是额外行程。</p><ul>${omitted.map(c => `<li><b>${name(c)}</b><span>${esc(c.reason || '未提供筛除理由。')}</span>${link(c.mapsUrl, '地图')}</li>`).join('')}</ul></details>`;
    const first = section.querySelector('.restaurant-first');
    if (chosen.length) first.append(card(chosen[0], 1)); else first.innerHTML = '<p>当前区域暂无已核实的推荐餐厅。</p>';
    const compare = section.querySelector('.restaurant-compare');
    const grid = section.querySelector('.restaurant-options-grid');
    const filters = [...section.querySelectorAll('[data-filter]')];
    const sort = section.querySelector('select');
    const render = () => {
      const active = Object.fromEntries(filters.map(f => [f.dataset.filter, f.checked]));
      let rows = chosen.map((c, i) => ({c, rank:i + 1})).filter(({c}) =>
        (!active.price || (Array.isArray(c.price) && Number.isFinite(c.price[1]) && c.price[1] <= 300)) &&
        (!active.seats || seated(c)) && (!active.walkin || booking(c).mode === 'walkin'));
      if (sort.value === 'price') rows.sort((a, b) => (a.c.price?.[0] ?? Infinity) - (b.c.price?.[0] ?? Infinity) || a.rank - b.rank);
      grid.replaceChildren(...rows.map(({c,rank}) => card(c,rank)));
      section.querySelector('.restaurant-result-count').textContent = `显示 ${rows.length} / ${chosen.length} 家；序号为综合推荐顺序。`;
      section.querySelector('.restaurant-empty').hidden = rows.length > 0;
    };
    compare.addEventListener('toggle', () => { first.hidden = compare.open; });
    filters.forEach(f => f.addEventListener('change', render));
    sort.addEventListener('change', render);
    section.querySelector('.restaurant-empty button').addEventListener('click', () => { filters.forEach(f => f.checked = false); render(); });
    render();
    return section;
  };
  const days = [...document.querySelectorAll('.city-days article.day')];
  days.forEach(day => {
    const date = day.dataset.date;
    const index = Math.round((Date.parse(`${date}T00:00:00Z`) - Date.UTC(2026,8,29)) / 86400000);
    let zones = research.zones.filter(z => Array.isArray(z.dates) && z.dates.includes(index));
    // Shared neighborhood data must respect each day's actual meal window.
    if (index === 8) zones = zones.map(z => z.id !== 'flamingo' ? z : ({
      ...z, title:'返团后酒店附近补给', window:'10月7日 · 22:00左右，按返团时间调整',
      note:'晚归后优先少走路、买简餐。Nook Express（林克快捷咖啡）地图记录为24小时营业，出发前再核对；其余餐厅在当晚22点是否仍接单尚未确认，不直接按白天营业安排。',
      candidates:z.candidates.map(c => c.selected ? {...c,
        reason:/^Nook Express$/.test(c.name) ? '晚归补给首选。地图记录为24小时营业，以简餐、点心为主，不按口味评分优先；仍需核对当日营业。' : '当晚22点营业及最后接单时间待确认；仅仍接单时考虑，不沿用前一天的早晚餐安排。'
      } : {...c, reason:'未纳入返团后补给推荐；营业时间与用餐所需时长未确认适合22点晚归。'}).sort((a,b) => Number(/^Nook Express$/.test(b.name) && b.selected) - Number(/^Nook Express$/.test(a.name) && a.selected))
    }));
    if (index === 10) zones.sort((a,b) => ({artsoutlets:0,fontaine:1}[a.id] ?? 2) - ({artsoutlets:0,fontaine:1}[b.id] ?? 2));
    const dining = day.querySelector('.daily-dining');
    if (!zones.length || !dining) return;
    const inner = dining.querySelector('.dining-inner');
    if (!inner || inner.querySelector('.restaurant-research')) return;
    const oldNote = inner.querySelector('.dining-note');
    const oldGrid = inner.querySelector('.meal-grid');
    if (oldGrid) {
      const fixed = [...oldGrid.children].filter(c => /Kali Restaurant|卡利餐厅/.test(c.querySelector('h4')?.textContent || ''));
      const prior = document.createElement('details');
      prior.className = 'restaurant-original';
      prior.innerHTML = '<summary>早餐与既定用餐</summary><p class="restaurant-original-note">原行程的用餐安排。附近餐厅备选用于替换或临时休息，不增加一顿餐。</p>';
      oldGrid.before(prior);
      if (fixed.length) {
        const fixedGrid = document.createElement('div'); fixedGrid.className = 'meal-grid restaurant-fixed';
        fixed.forEach(c => fixedGrid.append(c)); prior.before(fixedGrid);
      }
      if (oldGrid.children.length) prior.append(oldGrid); else { oldGrid.remove(); prior.remove(); }
    }
    if (oldNote) {
      let prior = inner.querySelector('.restaurant-original');
      if (!prior) { prior = document.createElement('details'); prior.className = 'restaurant-original'; prior.innerHTML = '<summary>早餐与既定用餐</summary>'; inner.append(prior); }
      prior.querySelector('summary').after(oldNote);
    }
    const root = document.createElement('div');
    root.className = 'restaurant-research';
    root.innerHTML = '<p class="restaurant-budget-note">以下为沿途餐厅备选，每餐选一家，不叠加计费。当天餐饮预算保持不变。</p>';
    const zoneNodes = zones.map(z => zoneElement(z));
    if (zoneNodes.length > 1) {
      const shortcuts = document.createElement('nav');
      shortcuts.className = 'restaurant-zone-shortcuts';
      shortcuts.setAttribute('aria-label', '当天餐厅区域');
      zoneNodes.forEach((node, i) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = zones[i].title;
        button.setAttribute('aria-controls', node.id);
        button.addEventListener('click', () => { node.scrollIntoView({behavior:'smooth',block:'start'}); node.focus({preventScroll:true}); });
        shortcuts.append(button);
        node.tabIndex = -1;
      });
      root.append(shortcuts);
    }
    zoneNodes.forEach(node => root.append(node));
    const original = inner.querySelector('.restaurant-original');
    if (original) original.before(root); else inner.append(root);
  });
  // The city router scrolls before these sections are inserted. Re-align only
  // the initial food deep-link after the final layout, without stealing scroll
  // after a user has already started navigating.
  const initialHash = location.hash;
  if (/^#(?:sf|road|la|vegas|nyc)\/\d{4}-\d{2}-\d{2}\/food$/.test(initialHash)) {
    let interrupted = false;
    const stop = () => { interrupted = true; };
    ['wheel','touchstart','pointerdown','keydown'].forEach(type => window.addEventListener(type,stop,{once:true,passive:true}));
    const align = () => requestAnimationFrame(() => requestAnimationFrame(() => {
      if (!interrupted && location.hash === initialHash) document.getElementById('food-' + initialHash.split('/')[1])?.scrollIntoView({block:'start',behavior:'instant'});
    }));
    align();
    if (document.readyState !== 'complete') window.addEventListener('load', align, {once:true});
    document.fonts?.ready.then(align);
  }
})();
