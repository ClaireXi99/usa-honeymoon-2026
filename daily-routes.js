(() => {
  'use strict';
  const plans = window.dailyRoutePlans || [];
  const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const mapSearch = query => {
    const url = new URL('https://www.google.com/maps/search/');
    url.searchParams.set('api', '1');
    url.searchParams.set('query', query);
    return url.href;
  };
  const directions = (from, to, mode, waypoints) => {
    const url = new URL('https://www.google.com/maps/dir/');
    url.searchParams.set('api', '1');
    url.searchParams.set('origin', from);
    url.searchParams.set('destination', to);
    url.searchParams.set('travelmode', mode);
    if (waypoints) url.searchParams.set('waypoints', waypoints);
    return url.href;
  };
  const modeNames = {driving:'驾车 / 叫车',walking:'步行',transit:'公共交通',shuttle:'接驳',flight:'航班',guided:'随团',ferry:'渡轮',inside:'园内'};
  const navigable = new Set(['driving','walking','transit']);
  for (const plan of plans) {
    const day = document.getElementById('date-panel-' + plan.date);
    const route = day?.querySelector('.detail-grid');
    if (!route || plan.legs.length !== plan.stops.length - 1) continue;
    const section = document.createElement('section');
    section.className = 'daily-route-guide';
    section.id = 'daily-route-' + plan.date;
    section.setAttribute('aria-label', plan.date + '路线示意与分段导航');
    const image = 'assets/daily-route-' + plan.date + '.svg';
    const stops = plan.stops.map((stop, i) => `<li><span class="daily-route-number${stop.optional || stop.pending?' optional':''}">${i+1}</span><span>${escapeHtml(stop.name)}${stop.optional?'<small>可选</small>':stop.pending?'<small>地址待订</small>':''}</span>${stop.pending?'<span class="daily-route-no-link">待确认</span>':`<a href="${escapeHtml(mapSearch(stop.query))}" target="_blank" rel="noopener" aria-label="在 Google Maps 中查看${escapeHtml(stop.name)}">位置 ↗</a>`}</li>`).join('');
    const segments = plan.legs.map((leg, i) => {
      const from = plan.stops[i], to = plan.stops[i+1];
      const label = `${i+1}→${i+2} ${modeNames[leg.mode]}`;
      let action = `<span class="daily-route-no-link">${leg.mode === 'flight' ? '按最终机票' : leg.mode === 'guided' ? '随团 / 向导' : leg.mode === 'ferry' ? '按渡轮时刻' : leg.mode === 'inside' ? '以园内指引为准' : '按现场指引'}</span>`;
      if (navigable.has(leg.mode) && !from.pending && !to.pending) {
        const caption = from.optional || to.optional ? '备选分段 ↗' : '打开分段导航 ↗';
        action = `<a href="${escapeHtml(directions(from.query, to.query, leg.mode, leg.waypoints))}" target="_blank" rel="noopener">${caption}</a>`;
      }
      return `<li><b>${escapeHtml(label)}</b><span>${escapeHtml(leg.note || `${from.name} → ${to.name}`)}</span>${action}</li>`;
    }).join('');
    let skip = '';
    if (plan.date === '2026-10-03') {
      skip = `<p class="daily-route-skip"><a href="${escapeHtml(directions(plan.stops[1].query, plan.stops[3].query, 'driving'))}" target="_blank" rel="noopener">跳过农夫市集：TCL 中国剧院 → 学院电影博物馆 ↗</a></p>`;
    }
    const caption = plan.geo ? '编号按地理位置标记；虚线只连接地点方位，不表示实际道路或车程。标“约”的点使用园区或近邻位置，到场以现场导览为准。' : '编号只表示当天顺序，不是地理地图或实际道路。';
    section.innerHTML = `<div class="daily-route-heading"><div><span>${escapeHtml(plan.kind)} · ${plan.stops.length} 站</span><h5>当天路线总览</h5><p>${escapeHtml(plan.title)}</p></div><a class="daily-route-image-link" href="${image}" target="_blank" rel="noopener">放大路线图 ↗</a></div><figure class="daily-route-map"><a href="${image}" target="_blank" rel="noopener" aria-label="放大${escapeHtml(plan.date)}路线图"><img src="${image}" loading="lazy" decoding="async" alt="${escapeHtml(plan.date)} ${escapeHtml(plan.title)}的编号${plan.geo?'地理位置':'行程顺序'}示意图；非道路导航"></a><figcaption>${caption}实际地面交通请用下方 Google Maps 分段链接。</figcaption></figure><details class="daily-route-details"><summary>查看 ${plan.stops.length} 个站点与分段导航</summary><div class="daily-route-details-body"><ol class="daily-route-stops">${stops}</ol><h6>分段打开导航</h6><ol class="daily-route-segments">${segments}</ol>${skip}<p class="daily-route-note">${escapeHtml(plan.note)}</p></div></details>`;
    route.before(section);
  }
})();
