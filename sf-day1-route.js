(() => {
  'use strict';
  const day = document.getElementById('date-panel-2026-09-29');
  if (!day) return;
  const route = day.querySelector('.detail-grid');
  if (!route) return;
  const mapSearch = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const directions = (origin, destination, mode, waypoints) => {
    const url = new URL('https://www.google.com/maps/dir/');
    url.searchParams.set('api', '1');
    url.searchParams.set('origin', origin);
    url.searchParams.set('destination', destination);
    url.searchParams.set('travelmode', mode);
    if (waypoints) url.searchParams.set('waypoints', waypoints);
    return url.href;
  };
  const hotel = 'Queen Anne Hotel, 1590 Sutter St, San Francisco';
  const ferry = 'Ferry Building Marketplace, 1 Ferry Building, San Francisco';
  const drumm = 'California St & Drumm St, San Francisco';
  const powell = 'California St & Powell St, San Francisco';
  const west = 'Crissy Field Parking, Marine Dr, San Francisco';
  const hut = 'Warming Hut Park Store, 983 Marine Dr, San Francisco';
  const welcome = 'Golden Gate Bridge Welcome Center, San Francisco';
  const battery = 'Battery East Vista, San Francisco';
  const beach = 'West Bluff Picnic Area, Marine Dr, San Francisco, CA';
  const overlook = 'Golden Gate Overlook, San Francisco';
  const spencer = 'Battery Spencer, Sausalito, CA';
  const ramen = 'HINODEYA Ramen Japantown, 1737 Buchanan St, San Francisco';
  const thrive = 'Thrive City, 1 Warriors Way, San Francisco';
  const chase = 'Chase Center, 1 Warriors Way, San Francisco';
  const office = '1455 3rd St, San Francisco, CA 94158';
  const stops = [
    [1, 'SFO 机场 → Avis 取车', 'San Francisco International Airport', 'SFO 机场'],
    [2, 'Queen Anne Hotel', hotel, 'Queen Anne'],
    [3, 'Ferry Building', ferry, '渡轮大楼'],
    [4, 'California St & Drumm St', drumm, '缆车上车'],
    [5, 'California St & Powell St', powell, '缆车下车'],
    [6, 'Crissy Field Parking', west, 'Crissy 停车'],
    [7, 'Warming Hut', hut, 'Warming Hut'],
    [8, '金门大桥游客中心', welcome, '大桥游客中心'],
    [9, 'Battery East Vista', battery, 'Battery East'],
    [10, 'HINODEYA 日本城店', ramen, '日本城晚餐'],
  ];
  const legs = [
    ['机场→酒店 · 自驾', directions('San Francisco International Airport Rental Car Center', hotel, 'driving')],
    ['酒店→渡轮大楼 · 网约车', directions(hotel, ferry, 'driving')],
    ['渡轮大楼→缆车起点 · 步行', directions(ferry, drumm, 'walking')],
    ['缆车起点→终点 · 公交', directions(drumm, powell, 'transit')],
    ['终点→酒店 · 网约车', directions(powell, hotel, 'driving')],
    ['酒店→两处桥边停车场 · 自驾', directions(hotel, welcome, 'driving', west)],
    ['West Bluff→Warming Hut · 步行', directions(west, hut, 'walking')],
    ['游客中心→Battery East · 步行', directions(welcome, battery, 'walking')],
    ['桥边→酒店 · 自驾', directions(welcome, hotel, 'driving')],
    ['酒店→晚餐 · 步行', directions(hotel, ramen, 'walking')],
  ];
  const guide = document.createElement('section');
  guide.className = 'sf-route-guide';
  guide.id = 'sf-day1-map';
  guide.setAttribute('aria-label', '旧金山落地日交通总览与 Google 地图导航');
  guide.innerHTML = `<div class="sf-route-head"><div><h4>第一天 · 地图与交通顺序</h4><p>机场至市区先取车，市中心改用网约车与缆车，傍晚再自驾去金门大桥。</p></div></div>
    <figure class="sf-route-map"><a href="assets/sf-day1-route-map.webp?v=20260927-photo-geo" target="_blank" rel="noopener" aria-label="放大第一天路线总览图"><img src="assets/sf-day1-route-map.webp?v=20260927-photo-geo" width="1500" height="860" loading="lazy" decoding="async" alt="旧金山第一天 1 至 10 号主线站点，以及海滩、Golden Gate Overlook、Battery Spencer 等橙色备选标记"></a><figcaption>1—10 为主线顺序；橙色标记为备选。海滩与 Golden Gate Overlook 从已有停车点步行，Battery Spencer 须过桥并重新停车。图只示意位置，导航用下方分段链接。</figcaption></figure>
    <div class="sf-route-key"><span style="--swatch:#2876b7"><i></i>网约车</span><span style="--swatch:#218278"><i></i>自驾</span><span style="--swatch:#dc7138"><i></i>步行</span><span style="--swatch:#8051a8"><i></i>缆车</span></div>
    <ol class="sf-route-stops" aria-label="第一天站点顺序">${stops.map(([number, name, query, short]) => `<li><span class="sf-route-letter">${number}</span><a href="${mapSearch(query)}" target="_blank" rel="noopener" aria-label="${number} ${name.replaceAll('&', '&amp;')} 的地图">${short} ↗</a></li>`).join('')}</ol>
    <div class="sf-route-links"><h5>分段打开 Google Maps</h5><div class="segments">${legs.map(([name, url]) => `<a href="${url.replaceAll('&', '&amp;')}" target="_blank" rel="noopener">${name} ↗</a>`).join('')}<a href="https://www.sfmta.com/routes/california-cable-car" target="_blank" rel="noopener">缆车官方线路 ↗</a></div><p class="sf-route-caveat">10:30 为现有路书的计划落地时间，尚未核到两人的电子客票。入境、取车和路况会改变后续时间；若晚到，先删室内逛店，再删缆车与 Warming Hut。Google Maps 的公交方案未必固定显示缆车，乘车以前往 SFMTA 实时信息为准。</p></div>`;
  guide.insertAdjacentHTML('beforeend', `<details class="sf-route-optional"><summary>拍照备选 · 停车与步行</summary><p><b>海滩：</b>沿用 6 号 Crissy 停车点，从 West Bluff 的开放步道走到可进入的沙滩；不必再开车。具体沙段按现场通道与潮水判断。</p><p><b>树框大桥：</b>沿用 8 号游客中心停车点，按步行导航约 10 分钟到 Golden Gate Overlook，走开放步道，拍完原路返回；不另排主线站点。</p><p><b>北岸俯拍：</b>Battery Spencer 必须开车过桥，在 Conzelman Road 一带找合法车位，再步行到观景点。车位有限，返回旧金山也会经过桥梁收费方向；落地日时间紧就跳过。</p><div class="segments"><a href="${directions(west, beach, 'walking').replaceAll('&', '&amp;')}" target="_blank" rel="noopener">6→West Bluff · 步行 ↗</a><a href="${directions(welcome, overlook, 'walking').replaceAll('&', '&amp;')}" target="_blank" rel="noopener">8→树框观景点 · 步行 ↗</a><a href="${directions(welcome, spencer, 'driving').replaceAll('&', '&amp;')}" target="_blank" rel="noopener">8→北岸 · 自驾 ↗</a><a href="https://presidio.gov/explore/attractions/golden-gate-overlook" target="_blank" rel="noopener">Presidio · Golden Gate Overlook ↗</a><a href="https://presidio.gov/explore/attractions/crissy-field-west-bluff-picnic-area" target="_blank" rel="noopener">Presidio · West Bluff ↗</a><a href="https://www.nps.gov/places/000/battery-spencer-overlook.htm" target="_blank" rel="noopener">NPS · Battery Spencer ↗</a><a href="https://www.goldengate.org/bridge/tolls-payment/rental-vehicles/" target="_blank" rel="noopener">大桥租车收费规则 ↗</a></div></details><details class="sf-route-optional"><summary>其他备选 · Chase Center 与 OpenAI 外观</summary><p>这两处在市区东南侧，不是 9 月 29 日拍照主线。若要去，需替换渡轮大楼和缆车时段，自驾到球馆附近停车后步行；不要追加到已经紧凑的落地日。OpenAI 建筑不提供可确认的游客参观或标志拍照位。</p><div class="segments"><a href="${mapSearch(chase)}" target="_blank" rel="noopener">Chase Center 地图 ↗</a><a href="${mapSearch(office)}" target="_blank" rel="noopener">1455 3rd St 地图 ↗</a><a href="${mapSearch('Chase Center Garage, 99 Warriors Way, San Francisco')}" target="_blank" rel="noopener">球馆停车地图 ↗</a></div></details>`);
  route.before(guide);
})();
