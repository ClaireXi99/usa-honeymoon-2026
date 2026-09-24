(() => {
  'use strict';
  const day = document.getElementById('date-panel-2026-09-30');
  if (!day) return;
  const route = day.querySelector('.detail-grid');
  if (!route) return;
  const search = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const directions = (origin, destination, waypoints, mode = 'driving') => {
    const url = new URL('https://www.google.com/maps/dir/');
    url.searchParams.set('api', '1');
    url.searchParams.set('origin', origin);
    url.searchParams.set('destination', destination);
    url.searchParams.set('travelmode', mode);
    if (waypoints) url.searchParams.set('waypoints', waypoints);
    return url.href.replaceAll('&', '&amp;');
  };
  const queen = 'Queen Anne Hotel, 1590 Sutter St, San Francisco';
  const stanford = 'Galvez Lot L-96, 295 Galvez St, Stanford, CA';
  const gotts = "Gott's Roadside, 855 El Camino Real, Palo Alto, CA";
  const apple = 'Apple Park Visitor Center, 10600 N Tantau Ave, Cupertino, CA';
  const google = 'Google Visitor Experience, 2000 N Shoreline Blvd, Mountain View, CA';
  const googleParking = 'Shoreline Amphitheatre Parking Lot C, 1 Amphitheatre Pkwy, Mountain View, CA';
  const target = 'Target, 2305 Theatre Dr, Paso Robles, CA';
  const hotel = 'El Colibri Hotel & Spa, 5620 Moonstone Beach Dr, Cambria, CA';
  const boardwalk = 'Moonstone Beach Boardwalk, Cambria, CA';
  const dinner = 'Moonstone Beach Bar & Grill, 6550 Moonstone Beach Dr, Cambria, CA';
  const stops = [
    [1, 'Queen Anne 退房', queen],
    [2, 'Stanford 停车', stanford],
    [3, 'Gott’s 午餐', gotts],
    [4, 'Apple 游客中心', apple],
    [5, 'Paso Robles 休息', target],
    [6, 'El Colibri 酒店', hotel],
    [7, 'Moonstone 栈道', boardwalk],
    [8, 'Moonstone 晚餐', dinner],
  ];
  const legs = [
    ['1→2 酒店→Stanford', directions(queen, stanford)],
    ['2→3 Stanford→Gott’s', directions(stanford, gotts)],
    ['3→4 Gott’s→Apple', directions(gotts, apple)],
    ['5→6 Paso Robles→酒店', directions(target, hotel)],
    ['6→7 酒店→栈道 · 步行', directions(hotel, boardwalk, null, 'walking')],
    ['7→8 栈道→晚餐 · 步行', directions(boardwalk, dinner, null, 'walking')],
  ];
  const guide = document.createElement('section');
  guide.className = 'sf-route-guide sf-day2-guide';
  guide.id = 'sf-day2-map';
  guide.setAttribute('aria-label', '九月三十日交通总览与 Google 地图导航');
  guide.innerHTML = `<div class="sf-route-head"><div><h4>第二天 · 地图与交通顺序</h4><p>酒店退房 → Stanford → Palo Alto 午餐 → Apple → Paso Robles 休息 → Cambria 酒店、海边和晚餐。全天自驾，酒店至海边可步行。</p></div></div>
    <figure class="sf-route-map"><a href="assets/sf-day2-route-map.webp?v=20260924-google-option" target="_blank" rel="noopener" aria-label="放大第二天路线总览图"><img src="assets/sf-day2-route-map.webp?v=20260924-google-option" width="1500" height="860" loading="lazy" decoding="async" alt="9月30日从旧金山到坎布里亚的1至8号站点位置；硅谷和坎布里亚另有放大图；橙色G为可选Google游客区"></a><figcaption>1—8 按抵达顺序；橙色 G 是可选 Google Visitor Experience，不纳入固定时间表。线只表示方位，不是实际道路。</figcaption></figure>
    <ol class="sf-route-stops" aria-label="第二天站点顺序">${stops.map(([number, name, query]) => `<li><span class="sf-route-letter">${number}</span><a href="${search(query)}" target="_blank" rel="noopener">${name} ↗</a></li>`).join('')}</ol>
    <div class="sf-day2-choice"><h5>Apple 后现场二选一</h5><div class="sf-day2-choice-grid"><div class="sf-day2-choice-card"><b>A · 按原路线直行</b><p>Apple → Target Paso Robles（第 5 站）。给 Cambria 入住和海边留出更多余量。</p><a href="${directions(apple, target)}" target="_blank" rel="noopener">打开直达导航 ↗</a></div><div class="sf-day2-choice-card optional"><b>B · 途经 Google</b><p>Apple → Google Visitor Experience → Target Paso Robles。Google 在 Apple 北面，需要折返；若已晚于计划离开 Apple 的 12:40，优先 A。</p><a href="${directions(apple, target, google)}" target="_blank" rel="noopener">打开经 Google 导航 ↗</a></div></div><p>两个链接终点都是第 5 站 Target；从 Target 到酒店用下方 5→6 链接。若实际为 Tesla，Paso Robles 休息点改用车载导航选择超充，不能把 Target 当充电站。</p></div>
    <div class="sf-route-links"><h5>其余分段导航</h5><div class="segments">${legs.map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener">${name} ↗</a>`).join('')}</div><p class="sf-route-caveat">Google 官方游客区：2000 N Shoreline Blvd，周三商店 09:00—19:00，咖啡厅／其他游客空间 09:00—18:00；免费停车可选 Shoreline Amphitheatre Lot C，步行约 4 分钟，演出日 Lot C 可能关闭。此处是开放游客空间，不是员工办公园区参观。<a href="${search(googleParking)}" target="_blank" rel="noopener">停车地图 ↗</a> <a href="https://visit.withgoogle.com/plan-your-visit/" target="_blank" rel="noopener">Google 官方信息 ↗</a></p></div>`;
  route.before(guide);
})();
