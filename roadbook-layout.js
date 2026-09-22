/* City tabs contain a date selector and one active day. */
(() => {
  'use strict';
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const make = (tag, className, html='') => {
    const node=document.createElement(tag);node.className=className;node.innerHTML=html;return node;
  };
  const cities={sf:['旧金山','9月29日'],road:['硅谷与海岸','9月30日'],la:['洛杉矶','10月1日—5日'],vegas:['拉斯维加斯','10月6日—9日'],nyc:['纽约与返程','10月10日—14日']};
  const hotel=(key,name,short,address,dates,note) => ({key,name,short,address,dates,note});
  const hotels={
    anne:hotel('9月29—30日','Queen Anne Hotel（安妮女王酒店）','安妮女王酒店','1590 Sutter Street, San Francisco（旧金山萨特街1590号）','9月29日—30日 · 1晚','已含早餐。抵达先寄存所有行李，取车游览时车内不留物品；停车按酒店实际收费。'),
    colibri:hotel('9月30日—10月1日','El Colibri Hotel & Spa（雅黛科乐比酒店及水疗中心）','雅黛科乐比酒店','5620 Moonstone Beach Drive, Cambria（坎布里亚月光石海滩路5620号）','9月30日—10月1日 · 1晚','先放行李，再短途开车去海滩。次日早餐提前准备；房间楼层以酒店安排为准。'),
    loews:hotel('10月1—6日','Loews Hollywood Hotel（洛伊斯好莱坞酒店）','洛伊斯好莱坞酒店','1755 North Highland Avenue, Los Angeles（洛杉矶北高地大道1755号）','10月1日—6日 · 5晚','不换酒店。房费已含目的地服务费；早餐不含。10月1日还车后带行李叫车到酒店，不拖箱步行。'),
    flamingo:hotel('10月6—8日','Flamingo Las Vegas Hotel & Casino（弗拉明戈拉斯维加斯酒店）','弗拉明戈酒店','3555 South Las Vegas Boulevard（南拉斯维加斯大道3555号）','10月6日—8日 · 2晚','订单已含度假村费，最新扣款状态待核对。10月8日退房后在此寄存，看完巨型球回来取。'),
    fontaine:hotel('10月8—10日','Fontainebleau Las Vegas（拉斯维加斯枫丹白露酒店）','枫丹白露酒店','Fontainebleau Las Vegas（拉斯维加斯枫丹白露酒店）','10月8日—10日 · 2晚','已报房款3,698.25元，到店另付835.18元。8日下午入住；10日06:45出发去机场。'),
    soleil:hotel('10月10—13日','Executive Hotel Le Soleil New York（纽约勒苏蕾行政酒店）','纽约勒苏蕾行政酒店','Executive Hotel Le Soleil New York（纽约勒苏蕾行政酒店）','10月10日—13日 · 3晚','房费扣款状态待核对，已含所报度假村费和城市税。13日退房寄存行李，16:00回酒店取行李，17:00出发去机场酒店。'),
    airport:hotel(null,'John F. Kennedy International Airport（纽约肯尼迪国际机场）附近酒店','机场附近酒店','', '10月13日—14日 · 1晚','已报在外部平台预订，酒店名称和实付金额待补。必须确认凌晨接驳班次、是否预约及出发航站楼。')
  };
  const meta=[
    ['sf','anne','渡轮大楼、加州街缆车、金门大桥','机场取车＋市内网约车','抵达后先寄存'],
    ['road','colibri','斯坦福、苹果游客中心、月光石海滩','101号公路自驾','退房后开车；海边入住'],
    ['la','loews','圣塔芭芭拉早午餐、好莱坞还车','101号公路＋短途网约车','还车后入住'],
    ['la','loews','好莱坞环球影城','地铁B线＋园区接驳','续住'],
    ['la','loews','好莱坞标志、天文台、卡利晚餐','网约车','续住'],
    ['la','loews','迪士尼主园','往返网约车','续住'],
    ['la','loews','购物、比弗利山庄、圣塔莫尼卡','网约车','续住；晚上整理行李'],
    ['vegas','flamingo','12:10飞拉斯维加斯、直升机夜景','飞机＋网约车','洛杉矶退房；弗拉明戈入住'],
    ['vegas','flamingo','下羚羊谷、马蹄湾一日团','小团接送','续住'],
    ['vegas','fontaine','11:00巨型球（已购）、换酒店、18:30《O》','步行＋网约车','弗拉明戈寄存；下午枫丹白露入住'],
    ['vegas','fontaine','艺术区、北奥特莱斯、酒店休息','网约车','续住；射击可替换艺术区'],
    ['nyc','soleil','09:59飞纽约、18:12抵达','飞机＋机场捷运＋铁路＋出租车','枫丹白露退房；纽约入住'],
    ['nyc','soleil','中央公园、大都会、12:45卡萨莫诺、苏豪区、阿拉丁候选','地铁＋步行＋网约车','续住'],
    ['nyc','soleil','世贸、华尔街、自由女神远观、丹波区、布鲁克林大桥、尼克斯季前赛','地铁＋渡轮＋步行','续住'],
    ['nyc','airport','第五大道购物、高线公园、切尔西市场、17:00去机场酒店','步行＋出租车','市区退房寄存；机场酒店入住'],
    ['nyc',null,'03:30到航站楼、06:30起飞','酒店接驳或出租车＋飞机','凌晨退房；机上过夜']
  ];
  const days=$$('#daily article.day').map((node,i)=>({node,i,city:meta[i][0],hotel:hotels[meta[i][1]],brief:meta[i][2],transport:meta[i][3],transition:meta[i][4],dining:diningDays[i],date:new Date(Date.UTC(2026,8,29+i)).toISOString().slice(0,10)}));
  if(days.length!==16)throw new Error('Expected 16 itinerary days');
  const href=d=>'#'+d.city+'/'+d.date;
  const knownHotel=h=>h?.key?budgetLedger.filter(r=>r.category==='酒店'&&(r.name.startsWith(h.key)||(h===hotels.fontaine&&r.name.startsWith('枫丹白露酒店')))):[];
  const hotelTotal=h=>knownHotel(h).reduce((sum,row)=>sum+row.amount,0);
  const referenceFor={};
  const bodies={};
  const originals={};
  for(const [id,[name,range]] of Object.entries(cities)){
    const panel=document.getElementById(id);originals[id]=make('div','reference-body');
    while(panel.firstChild)originals[id].append(panel.firstChild);
    $('.section-head',originals[id])?.remove();
    panel.append(make('header','city-heading',`<div><span class="city-range">${range} · 2026</span><h2>${name}</h2></div><p>选择日期，查看当天住宿、行程与餐厅</p>`));
    const dateNav=make('nav','city-date-tabs');dateNav.setAttribute('role','tablist');dateNav.setAttribute('aria-label',name+'日期');
    days.filter(d=>d.city===id).forEach(d=>{const button=make('button','city-date-tab',`<b>${d.dining.date}</b><span>周${'日一二三四五六'[new Date(d.date+'T12:00:00Z').getUTCDay()]}</span>`);button.type='button';button.dataset.date=d.date;button.id='date-tab-'+d.date;button.setAttribute('role','tab');button.setAttribute('aria-controls','date-panel-'+d.date);button.addEventListener('click',()=>navigate(href(d)));dateNav.append(button);});panel.append(dateNav);
    bodies[id]=make('div','city-days');panel.append(bodies[id]);
    const details=make('details','city-reference','<summary>本城资料 · 停车、地图与购票</summary>');
    details.id='reference-'+id;details.append(originals[id]);referenceFor[id]=details;panel.append(details);
  }
  // Preserve existing images and sources, moving them to the relevant day.
  const photoDay={
    'sf':0,'road':1,'la-universal':3,'la-hollywood':4,'la-disneyland':5,'la-griffith':4,'la-santa':6,
    'vegas-antelope':8,'vegas-bellagio':9,'vegas-fashion':10,'vegas-sphere':9,'nyc-dumbo':13,'nyc-carousel':13,'nyc-central':12
  };
  const photoIndex=src=>{
    const name=src.split('/').pop();const key=Object.keys(photoDay).find(k=>name.startsWith(k));return key===undefined?null:photoDay[key];
  };
  // The fountain belongs after O on October 8, not on the helicopter evening.
  const fountainBox=$('.photo-duo',days[0+7].node);
  if(fountainBox&&$('img[src*="vegas-bellagio"]',fountainBox))$('.day-body',days[9].node).append(fountainBox);
  const oldFountainNote=$$('p',days[7].node).find(p=>p.textContent.startsWith('喷泉机位：'));
  if(oldFountainNote)$('.ops',days[9].node).append(oldFountainNote);
  for(const original of Object.values(originals)){
    for(const figure of $$('.shot-grid figure',original)){
      const src=$('img',figure)?.getAttribute('src');const index=src?photoIndex(src):null;
      if(index===null)continue;
      const body=$('.day-body',days[index].node);
      const exists=$$('img',body).some(img=>img.getAttribute('src')===src);
      if(!exists){let gallery=$('.photo-duo',body);if(!gallery){gallery=make('div','photo-duo');body.append(gallery);}figure.className='photo-mini';gallery.append(figure);}else figure.remove();
    }
    $$('.shot-grid',original).filter(g=>!g.children.length).forEach(g=>g.remove());
  }
  // Remove only duplicate city schedules. Keep their navigation links on the canonical day.
  const duplicateTitles={
    sf:['早餐与退房'],road:['San Francisco（旧金山）→','Cambria（坎布里亚）→'],
    la:['入住与补给','好莱坞环球影城','城市日 + 米其林一星','Disneyland Park（迪士尼乐园主园）单园','购物、比弗利山庄、圣塔莫尼卡','Los Angeles（洛杉矶）→'],
    vegas:['落地、入住、直升机夜景','Lower Antelope Canyon（下羚羊谷）+','巨型球、换酒店与《O》','购物与休闲','Las Vegas（拉斯维加斯）→'],
    nyc:['到达','Lower Manhattan（曼哈顿下城）+','Central Park（中央公园）、Midtown','Manhattan West Side（曼哈顿西侧）+','06:30起飞']
  };
  for(const [id,original] of Object.entries(originals)){
    $$('.card',original).forEach(card=>{
      const title=$('h3',card)?.textContent||'';
      if(!(duplicateTitles[id]||[]).some(t=>title.startsWith(t)))return;
      const badge=$('.badge',card)?.textContent||'';
      const day=days.find(d=>badge.includes(d.dining.date));
      if(day){const actions=$('.actions',card);if(actions)$('.ops',day.node)?.append(actions);}
      card.remove();
    });
    // Standalone duplicate timeline in the old San Francisco section.
    if(id==='sf'){
      $$('.timeline',original).forEach(t=>t.remove());
      const breakfast=$$('h3',original).find(h=>h.textContent==='第二天早餐');
      if(breakfast){if(breakfast.nextElementSibling?.tagName==='P')breakfast.nextElementSibling.remove();breakfast.remove();}
    }
    $$('.section-head',original).filter(h=>/给她拍|真人机位/.test(h.textContent)).forEach(h=>h.remove());
    $$('.grid',original).filter(g=>!g.children.length).forEach(g=>g.remove());
  }
  // Useful day-specific supplements live with the relevant day, not a competing schedule.
  const supplements=new Map();
  const moveCard=(city,match,index)=>{
    const card=$$('.card',originals[city]).find(c=>($('h3',c)?.textContent||'').startsWith(match));
    if(card){if(!supplements.has(index))supplements.set(index,[]);supplements.get(index).push(card);card.remove();}
  };
  moveCard('la','Kali Restaurant',4);
  moveCard('vegas','Battlefield Vegas',10);moveCard('vegas','另外两类场地',10);moveCard('vegas','可以体验',10);
  moveCard('nyc','Viagogo',13);
  const tipRows=$$('#tips tbody tr');
  const ledgerOnDay=i=>budgetLedger.filter(r=>
    (i===0&&(r.name.startsWith('9月29日 上海')||r.category==='美国租车'))||
    (i===7&&r.name.startsWith('10月6日 伯班克'))||
    (i===9&&(r.name.includes('《O》')||r.name.includes('Sphere')))||(i===11&&r.name.startsWith('10月10日 拉斯'))||
    (i===13&&r.name.startsWith('NBA'))||(i===15&&r.name.startsWith('10月14日 纽约')));
  const extraKeys={3:['10月2日 ·'],4:['卡利餐厅 ·','10月3日 ·'],5:['10月4日 ·'],7:['10月6日 ·'],8:['下羚羊谷'],9:['10月8日 ·'],12:['卡萨莫诺餐厅小费','10月11日 · 阿拉丁','10月11日 · 大都会'],14:['机场前夜酒店']};
  const seatBasics='<p><b>Section / SEC（区域）→ Row（排）→ Seat（座位号）</b>，按这三个字段找位。普通座席不能在同排随意换座；不确定就把电子票给 Ushers（引座员）看。</p><p>只有票面明确写 General Admission / GA（不指定座位入场）或 Unreserved（不指定座位）时，才按该区域规则先到先得；Standing Room Only / SRO（仅站席）不提供座位。GA票上的数字有时只是库存编号，不能当固定座位。<a target="_blank" rel="noopener" href="https://help.ticketmaster.com/hc/en-us/articles/9663297585297-What-is-General-Admission-unreserved-seating-standing-or-Standing-Room-Only">票务平台规则</a></p>';
  const showGuides={
    9:'<h4>Sphere（巨型球《绿野仙踪》）</h4><p>普通座席按区域、排、座位号就座。已购406美元，计人民币2,720.20元；尚未提供电子票座位，不能据金额推断座位。按原行程11:00开场，10:15到场；实际场次看电子票。官方提前45分钟开门，不允许迟到入场，影片中不能拍照录像。<a target="_blank" rel="noopener" href="https://www.thesphere.com/shows/wizard-of-oz-experience">官方入场说明</a></p><h4>O by Cirque du Soleil（太阳马戏《O》）</h4><p>普通座席同样对号入座。已付人民币1,805元（票务商购买，票未完整交付，存在无法交票风险）。向票务商确认两张最终电子票的区域、排和座位号，以及是否相邻；只看到“201区”或座位范围，不能确定你们的两张票。</p><p>若最终是201区：官网把 O排6—9号、P排7—8号列为安全栏杆遮挡座位；不要把“201区还可以”理解为该区所有座位视野相同。这里是字母O排，不是数字0。<a target="_blank" rel="noopener" href="https://bellagio.mgmresorts.com/en/entertainment/o-by-cirque-du-soleil.html">百乐宫官方座位提示</a></p><p>17:45—18:00到剧场，18:30开场；若交付方式为 Will Call（现场取票），官方要求最晚提前1小时取票，须改为17:30前办妥，并提前核对取票人证件要求；不要只拿付款聊天记录进场。</p>',
    13:'<h4>NBA（美国职业篮球联赛）尼克斯季前赛</h4><p>Madison Square Garden（麦迪逊广场花园）的普通座席按电子票区域、排和座位号就座，不是同排随便坐。两张票需要分别核对，套房或仅站席则按各自票种规则。先找区入口，再请引座员指示所在排及座位；不要看见空位就换过去。<a target="_blank" rel="noopener" href="https://www.msg.com/madison-square-garden/seating/msg-knicks">球馆官方座位图</a></p><p>尚未提供最终区排座；订单确认或付款金额不能代替入场票。提前在官方票务账户或支持的手机钱包中打开两张票；动态票不要依赖二维码截图。</p>'
  };
  for(const d of days){
    const {node,i,hotel:h}=d;const body=$('.day-body',node);
    node.dataset.date=d.date;node.dataset.city=d.city;node.tabIndex=-1;node.id='date-panel-'+d.date;node.setAttribute('role','tabpanel');node.setAttribute('aria-labelledby','date-tab-'+d.date);
    $('.day-head p',node).textContent=d.brief;
    const nav=make('nav','day-section-nav',`<a href="${href(d)}/stay">住宿</a><a href="${href(d)}/route">时间轴</a><a href="${href(d)}/photos">照片</a><a href="${href(d)}/food">餐厅</a><a href="${href(d)}/cost">费用参考</a>`);nav.setAttribute('aria-label',d.dining.date+'内容导航');
    const total=h?hotelTotal(h):0;
    const mapQuery=h?encodeURIComponent(h.name.split('（')[0]+(h.address!==h.name?' '+h.address.split('（')[0]:'')):'';
    const stay=make('section','stay-card',h?`<div><span class="label">当晚住宿 · ${d.transition}</span><h4>${h.name}</h4><p>${h.dates}</p>${h.address&&h.address!==h.name?`<p>${h.address}</p>`:''}<p>${h.note}</p>${h.address?`<a href="https://www.google.com/maps/search/?api=1&amp;query=${mapQuery}" target="_blank" rel="noopener">酒店位置 ↗</a>`:''}</div><div class="stay-price">${total?money(total):'金额待补'}<small>${total?'整段住宿合计，不是单晚价':'暂按总预算预留'}</small></div>`:`<div><span class="label">返程</span><h4>凌晨从机场酒店退房</h4><p>03:30前到航站楼，06:30起飞。机上过夜，不再增加酒店费用。</p></div>`);
    stay.id='stay-'+d.date;body.prepend(nav,stay);
    const route=$('.detail-grid',body);const routeTitle=make('h4','day-section-title','时间轴与交通');routeTitle.id='route-'+d.date;route.before(routeTitle);
    const galleries=$$('.photo-duo',body);const gallery=make('div','photo-duo');
    galleries.forEach(g=>{while(g.firstChild)gallery.append(g.firstChild);g.remove();});
    const photosTitle=make('h4','day-section-title','照片与机位');photosTitle.id='photos-'+d.date;route.after(photosTitle,gallery);
    if(!gallery.children.length)gallery.replaceWith(make('p','empty-photos','暂无独立照片参考。'));
    $$('img',node).forEach(img=>{img.loading='lazy';img.decoding='async';});
    const dining=$('.daily-dining',node);dining.open=true;dining.id='food-'+d.date;body.append(dining);
    if(showGuides[i]){const seats=make('section','show-seating card',`<h3>入场与座位</h3>${seatBasics}${showGuides[i]}`);seats.id='seating-'+d.date;body.append(seats);}
    if(supplements.has(i)){
      const extra=make('details','city-reference','<summary>当天补充资料</summary>');const grid=make('div','grid');supplements.get(i).forEach(card=>{card.classList.remove('span-4','span-5','span-6','span-7','span-8');card.classList.add('span-12');grid.append(card);});extra.append(grid);body.append(extra);
    }
    if(i===3||i===5){const link=make('a','reference-jump','乐园票价与通行规则 →');link.href='#la/reference/dated-park-tickets';body.append(link);}
    const cost=make('section','day-related-budget',`<h4>当天费用参考</h4><p>人民币 · 两人。引用分类总预算中的项目，不是额外支出；不作为完整单日总价。</p>`);cost.id='cost-'+d.date;
    const rows=[...ledgerOnDay(i).map(r=>({name:r.name,price:money(r.amount),note:'已确定金额 · '+r.note})),{name:'日常餐饮',price:budgetRange(d.dining.low,d.dining.high),note:'含税，不含小费'+(i===4?'；卡利另列':'')},...budgetEstimates.filter(r=>(r.category!=='food'||r.name.startsWith('卡利餐厅'))&&(extraKeys[i]||[]).some(k=>r.name.startsWith(k))).map(r=>({name:r.name,price:budgetRange(r.low,r.high),note:'预估 · '+r.note}))];
    rows.forEach(r=>cost.append(make('div','day-cost-row',`<span>${r.name}<small>${r.note}</small></span><b>${r.price}</b>`)));
    const tip=tipRows.find(row=>$('td b',row)?.textContent===d.dining.date);
    if(tip){const cells=$$('td',tip);cost.append(make('div','day-tip',`<b>当天小费</b><p>${cells[2].innerHTML}</p><p>${cells[3].innerHTML}</p>`));}
    const budgetLink=make('a','reference-jump','查看全程分类预算 →');budgetLink.href='#budget';cost.append(budgetLink);body.append(cost);
    const pager=make('nav','day-pager',`${i?`<a href="${href(days[i-1])}">← ${days[i-1].dining.date} · ${cities[days[i-1].city][0]}</a>`:'<span></span>'}${i<15?`<a href="${href(days[i+1])}">${days[i+1].dining.date} · ${cities[days[i+1].city][0]} →</a>`:'<a href="#daily">返回逐日执行 →</a>'}`);body.append(pager);
    bodies[d.city].append(node);
  }
  // Keep onward travel discoverable from the origin city without duplicating the day.
  for(const [city,index] of [['sf',1],['road',2],['la',7],['vegas',11]]){
    const d=days[index];bodies[city].append(make('div','city-onward',`<a class="btn light" href="${href(d)}">下一段 · ${d.dining.date} ${d.brief} →</a>`));
  }
  const daily=document.getElementById('daily');daily.replaceChildren(make('header','city-heading','<div><span class="city-range">2026年9月29日—10月14日</span><h2>逐日执行</h2></div><p>全程简表 · 点击查看当天详情</p>'));
  const summary=make('div','trip-summary');
  days.forEach(d=>summary.append(make('article','summary-day',`<div class="summary-date"><b>${d.dining.date}</b><small>周${'日一二三四五六'[new Date(d.date+'T12:00:00Z').getUTCDay()]}</small></div><div class="summary-main"><b>${d.brief}</b><small>${cities[d.city][0]} · ${d.transport}</small></div><div class="summary-stay">${d.hotel?.short||'机上过夜'}<small>${d.transition}</small></div><a href="${href(d)}" aria-label="查看${d.dining.date}详情">详情 ↗</a>`)));
  daily.append(summary);
  const seatsSummary=make('details','city-reference','<summary>演出与球赛 · 如何看区、排、座位号</summary><div class="reference-body">'+seatBasics+showGuides[9]+showGuides[13]+'</div>');
  document.getElementById('book').append(seatsSummary);
  // Replace the second competing overview timetable with one clear entry point.
  const oldTable=$$('#overview table').find(t=>$('th',t)?.textContent==='日期');
  if(oldTable)oldTable.closest('.table-wrap').replaceWith(make('div','notice','<b>16天行程</b><p>逐日执行查看简表；城市页选择日期查看当天完整安排。</p><a class="btn light" href="#daily">查看逐日执行 →</a>'));
  document.querySelector('main').append(document.getElementById('budget'));
  // Replace the old replaceState-only tabs, supporting back/forward and day deep links.
  $$('.tabs .tab').forEach(old=>{const next=old.cloneNode(true);old.replaceWith(next);next.setAttribute('role','tab');next.setAttribute('aria-controls',next.dataset.tab);next.id='tab-'+next.dataset.tab;next.addEventListener('click',()=>navigate('#'+next.dataset.tab));});
  const cityTabs=$$('.tabs .tab');const panelList=$$('.panel');
  panelList.forEach(panel=>panel.setAttribute('aria-labelledby','tab-'+panel.id));
  const oldDay=/^#(?:itinerary-day-|dining-day-)(\d+)$/;
  const selectedDates={};
  function renderLocation(scroll=true){
    let value=location.hash||'#overview';const legacy=value.match(oldDay);
    if(legacy&&days[+legacy[1]])value=href(days[+legacy[1]]);
    const [requested,date,part]=value.slice(1).split('/');const city=panelList.some(p=>p.id===requested)?requested:'overview';
    panelList.forEach(p=>p.classList.toggle('active',p.id===city));
    cityTabs.forEach(t=>{const active=t.dataset.tab===city;t.classList.toggle('active',active);t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;});
    $('.tab.active')?.scrollIntoView({block:'nearest',inline:'nearest'});
    if(cities[city]){
      const local=days.filter(d=>d.city===city);const active=local.find(d=>d.date===date)||local.find(d=>d.date===selectedDates[city])||local[0];selectedDates[city]=active.date;
      local.forEach(d=>{d.node.hidden=d!==active;const tab=document.getElementById('date-tab-'+d.date);tab.classList.toggle('active',d===active);tab.setAttribute('aria-selected',String(d===active));tab.tabIndex=d===active?0:-1;});
      document.getElementById('date-tab-'+active.date)?.scrollIntoView({block:'nearest',inline:'nearest'});
    }
    let target=null;
    if(date==='reference'&&referenceFor[city]){
      referenceFor[city].open=true;target=(part&&document.getElementById(part))||referenceFor[city];
    }else if(date){
      const d=days.find(d=>d.date===date&&d.city===city);
      if(d)target=part?document.getElementById(({food:'food',cost:'cost',photos:'photos',stay:'stay',route:'route',pay:'pay'}[part]||'route')+'-'+date):document.querySelector('#'+city+' .city-date-tabs');
    }
    if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}));
    else if(scroll)window.scrollTo({top:0,behavior:'instant'});
  }
  function navigate(hash){if(location.hash===hash)renderLocation();else location.hash=hash;}
  window.addEventListener('hashchange',()=>renderLocation());
  $$('.city-date-tabs').forEach(nav=>nav.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)||!event.target.matches('.city-date-tab'))return;event.preventDefault();const tabs=$$('.city-date-tab',nav),index=tabs.indexOf(event.target);const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[next].focus();tabs[next].click();}));
  document.addEventListener('click',event=>{const anchor=event.target.closest('a[href^="#"]');if(anchor&&anchor.getAttribute('href')===location.hash){event.preventDefault();renderLocation();}});
  $('.tabs').addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)||!event.target.matches('.tab'))return;
    event.preventDefault();const index=cityTabs.indexOf(event.target);const next=event.key==='Home'?0:event.key==='End'?cityTabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+cityTabs.length)%cityTabs.length;cityTabs[next].focus();navigate('#'+cityTabs[next].dataset.tab);
  });
  renderLocation(true);
})();
