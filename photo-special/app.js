(() => {
  const days = window.PHOTO_DAYS || [];
  const themes = window.PHOTO_THEMES || [];
  const key = 'honeymoon-photo-2026-v1';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch (_) { saved = {}; }
  if (!saved.shots) saved.shots = {};
  const now = new Date();
  const localDate = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  let activeDay = days.find(d => d.date === localDate)?.date || days[0]?.date;
  let activeView = 'days';
  let activeFilter = 'all';
  const $ = (selector) => document.querySelector(selector);
  const el = (tag, className, content) => { const node = document.createElement(tag); if (className) node.className = className; if (content != null) node.textContent = content; return node; };
  const persist = () => {
    for (const [id, value] of Object.entries(saved.shots)) if (!value.done && !value.file) delete saved.shots[id];
    try { localStorage.setItem(key, JSON.stringify(saved)); } catch (_) {}
  };
  persist();
  const flat = days.flatMap(d => d.shots.map(s => ({ day: d, shot: s, tags: s[4].split(',') })));
  const fmtDate = date => `${Number(date.slice(5,7))}月${Number(date.slice(8,10))}日`;

  function showView(name) {
    activeView = name;
    document.querySelectorAll('.view').forEach(v => { v.hidden = v.id !== `${name}-view`; });
    document.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('active', b.dataset.view === name));
    if (name === 'themes') renderThemes();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => showView(b.dataset.view)));

  function renderTabs() {
    const nav = $('#day-tabs'); nav.replaceChildren();
    for (const d of days) {
      const button = el('button', `day-tab${d.date === activeDay ? ' active' : ''}`);
      button.type = 'button'; button.setAttribute('role','tab'); button.setAttribute('aria-selected', d.date === activeDay);
      button.append(el('b', '', fmtDate(d.date)), el('small', '', d.city));
      button.addEventListener('click', () => { activeDay = d.date; renderTabs(); renderDay(); });
      nav.append(button);
    }
    const current = nav.querySelector('.active');
    if (current) nav.scrollLeft = Math.max(0, current.offsetLeft - nav.offsetLeft - 12);
  }
  function renderDay() {
    const d = days.find(v => v.date === activeDay); if (!d) return;
    const panel = $('#day-panel'); panel.replaceChildren();
    const head = el('div','day-heading');
    const title = el('div'); title.append(el('span','kicker',`${fmtDate(d.date)} · ${d.city}`),el('h3','',d.title),el('p','',d.priority));
    const done = d.shots.filter(s => saved.shots[s[0]]?.done).length;
    head.append(title,el('span','progress',`${done} / ${d.shots.length} 已拍`)); panel.append(head);
    const list = el('div','shot-list');
    for (const s of d.shots) {
      const [id,place,action,method,tags] = s;
      const state = saved.shots[id] || {};
      const card = el('article',`shot-card${state.done?' complete':''}`);
      const top = el('div','shot-top'); top.append(el('span','shot-id',id),el('span','shot-place',place)); card.append(top);
      card.append(el('h4','',action),el('p','shot-method',method));
      const tagRow = el('div','tags');
      for (const tag of tags.split(',')) {
        const tagButton = el('button','tag',`# ${tag}`); tagButton.type='button';
        tagButton.title=`查看“${tag}”成片主题`;
        tagButton.addEventListener('click', () => { showView('themes'); activeFilter='all'; renderFilter(); renderThemes(tag); });
        tagRow.append(tagButton);
      }
      card.append(tagRow);
      const fields = el('div','shot-fields');
      const label = el('label','done-label'); const check = el('input'); check.type='checkbox'; check.checked=!!state.done;
      check.addEventListener('change',()=> { saved.shots[id] = {...(saved.shots[id]||{}),done:check.checked}; persist(); renderTabs(); renderDay(); });
      label.append(check,el('span','','已拍')); fields.append(label);
      const file = el('input','file-input'); file.type='text'; file.placeholder='素材文件名 / 备注（例 DJI_0042.MP4）'; file.value=state.file||''; file.setAttribute('aria-label',`${id} 素材文件名或备注`);
      file.addEventListener('change',()=> { saved.shots[id] = {...(saved.shots[id]||{}),file:file.value.trim()}; persist(); });
      fields.append(file); card.append(fields); list.append(card);
    }
    panel.append(list);
    const foot=el('p','day-foot','同一素材可同时用于多个主题；上方标签就是后期复用关系。路线、营业和门票以主路书及当日官方信息为准。'); panel.append(foot);
    const paging=el('div','paging'); const index=days.indexOf(d);
    if(index>0){const prev=el('button','','← 前一天');prev.type='button';prev.onclick=()=>{activeDay=days[index-1].date;renderTabs();renderDay();};paging.append(prev);}
    if(index<days.length-1){const next=el('button','','后一天 →');next.type='button';next.onclick=()=>{activeDay=days[index+1].date;renderTabs();renderDay();};paging.append(next);} panel.append(paging);
  }
  function renderFilter(){document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter===activeFilter));}
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{activeFilter=b.dataset.filter;renderFilter();renderThemes();}));
  function renderThemes(focus){
    const grid=$('#theme-grid');grid.replaceChildren();
    for(const t of themes.filter(x=>activeFilter==='all'||x.tier===activeFilter)){
      const matches=flat.filter(x=>x.tags.includes(t.id));
      const card=el('article',`theme-card${focus===t.id?' focused':''}`);card.id=`theme-${t.id}`;
      const meta=el('div','theme-meta');meta.append(el('span',t.tier==='主片'?'tier core':'tier',t.tier),el('span','',t.length));card.append(meta);
      card.append(el('h3','',t.name),el('p','',t.idea));
      const info=el('dl');
      for(const [name,value] of [['要拍',t.need],['我会怎么剪',t.edit]]){info.append(el('dt','',name),el('dd','',value));}
      card.append(info);
      const coverage=el('div','coverage');coverage.append(el('b','',`${matches.length} 个镜头 · ${new Set(matches.map(x=>x.day.date)).size} 天`));
      const ids=el('small','',matches.map(x=>x.shot[0]).join(' · '));coverage.append(ids);card.append(coverage);grid.append(card);
    }
    if(focus) requestAnimationFrame(()=>$('#theme-'+CSS.escape(focus))?.scrollIntoView({block:'center',behavior:'smooth'}));
  }
  $('#export-progress').addEventListener('click',()=>{
    const payload={project:'美国蜜月摄影特辑',exportedAt:new Date().toISOString(),record:saved.shots,shots:flat.map(x=>({id:x.shot[0],date:x.day.date,place:x.shot[1],action:x.shot[2],themes:x.tags,done:!!saved.shots[x.shot[0]]?.done,file:saved.shots[x.shot[0]]?.file||''}))};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
    const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download='摄影特辑-拍摄记录.json';link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);
  });
  renderTabs();renderDay();renderFilter();
})();
