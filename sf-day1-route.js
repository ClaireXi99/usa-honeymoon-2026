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
    <figure class="sf-route-map"><a href="assets/sf-day1-route-map.webp?v=20260924-numeric" target="_blank" rel="noopener" aria-label="放大第一天路线总览图"><img src="assets/sf-day1-route-map.webp?v=20260924-numeric" width="1500" height="860" loading="lazy" decoding="async" alt="旧金山第一天 1 至 10 号站点位置总览：左图含 SFO 机场，右图放大市区和金门大桥；橙色标记勇士主场与 OpenAI 两处备选点"></a><figcaption>左图看 SFO 至市区，右图看 2—10 号站点；数字按首次到达顺序，酒店折返沿用 2 号。橙色是未排进当天的勇士主场与 OpenAI。直线只表示方位，不是道路导航；实际交通用下方 Google Maps 链接。</figcaption></figure>
    <div class="sf-route-key"><span style="--swatch:#2876b7"><i></i>网约车</span><span style="--swatch:#218278"><i></i>自驾</span><span style="--swatch:#dc7138"><i></i>步行</span><span style="--swatch:#8051a8"><i></i>缆车</span></div>
    <ol class="sf-route-stops" aria-label="第一天站点顺序">${stops.map(([number, name, query, short]) => `<li><span class="sf-route-letter">${number}</span><a href="${mapSearch(query)}" target="_blank" rel="noopener" aria-label="${number} ${name.replaceAll('&', '&amp;')} 的地图">${short} ↗</a></li>`).join('')}</ol>
    <div class="sf-route-links"><h5>分段打开 Google Maps</h5><div class="segments">${legs.map(([name, url]) => `<a href="${url.replaceAll('&', '&amp;')}" target="_blank" rel="noopener">${name} ↗</a>`).join('')}<a href="https://www.sfmta.com/routes/california-cable-car" target="_blank" rel="noopener">缆车官方线路 ↗</a></div><p class="sf-route-caveat">10:30 为现有路书的计划落地时间，尚未核到两人的电子客票。入境、取车和路况会改变后续时间；若晚到，先删室内逛店，再删缆车与 Warming Hut。Google Maps 的公交方案未必固定显示缆车，乘车以前往 SFMTA 实时信息为准。</p></div>`;
  guide.insertAdjacentHTML('beforeend', `<details class="sf-route-optional"><summary>备选 · 勇士主场／Thrive City＋OpenAI 外观照</summary><p>橙色两点在市区图右下角：Chase Center 是金州勇士主场，旁边是可逛的 Thrive City 广场；OpenAI 官方登记地址为 1455 3rd St。Google Maps 显示球馆到办公楼步行约 4 分钟，Thrive City 到办公楼约 3 分钟、0.2 英里。这不是从原行程站点出发的时间：最近的渡轮大楼到 Thrive City 步行约 47 分钟。可从 3rd St 公共人行道拍办公楼外立面；不保证有可见的 OpenAI 标志。未查到官方面向游客的参观预约入口。</p><p>若放在落地日，把“渡轮大楼＋加州街缆车”整段替换为“酒店→球馆／Thrive City→1455 3rd St 外观→酒店取车”，保留傍晚金门大桥；不要额外叠加。</p><p>更合适的备选是次日 9 月 30 日退房后，自驾经过球馆和 OpenAI 外观，再继续去斯坦福。地图当前显示酒店直达斯坦福约 40 分钟，经两点约 51 分钟；多出的约 11 分钟只是车程，不含停车、拍照及当天早高峰。若现场方便合法停车，可短停拍照；否则车上看一眼就继续走，不改原定主线。</p><p>停车首选 Chase Center Garage（99 Warriors Way）。官网列工作日非球馆活动日 08:00 开放，$7/小时、每日上限 $35；若有球馆活动，收费与进场规则会变。9 月 30 日官方日历目前只列中午 Thrive City 活动；出发前再看当日安排。球馆官网明确目前没有公众参观团；球馆内临时周边摊位只在活动期间营业，但外广场 Golden State Shop 每天 10:00—17:00 对公众开放，活动日通常延长。若按 08:00 到，只能看外观拍照、不能进店购物。外观短停 30—40 分钟已足够；为等开店到 10:00 会大幅压缩斯坦福和后续行程，不建议。</p><div class="segments"><a href="${mapSearch(chase)}" target="_blank" rel="noopener">Chase Center 地图 ↗</a><a href="${mapSearch(thrive)}" target="_blank" rel="noopener">Thrive City 地图 ↗</a><a href="${mapSearch(office)}" target="_blank" rel="noopener">1455 3rd St 地图 ↗</a><a href="${directions(chase, office, 'walking').replaceAll('&', '&amp;')}" target="_blank" rel="noopener">球馆→OpenAI 步行 ↗</a><a href="${directions(hotel, 'Stanford Visitor Center, 295 Galvez St, Stanford', 'driving', chase + '|' + office).replaceAll('&', '&amp;')}" target="_blank" rel="noopener">次日酒店→两处→斯坦福 ↗</a><a href="${mapSearch('Chase Center Garage, 99 Warriors Way, San Francisco')}" target="_blank" rel="noopener">99 Warriors Way 停车 ↗</a><a href="https://www.chasecenter.com/plan-your-visit/transportation/parking/" target="_blank" rel="noopener">停车收费官网 ↗</a><a href="https://www.chasecenter.com/plan-your-visit/a-to-z-guide/" target="_blank" rel="noopener">球馆参观与商店规则 ↗</a><a href="https://openai.com/policies/eu-terms-of-use/" target="_blank" rel="noopener">OpenAI 官方地址 ↗</a><a href="https://chasecenter.com/thrive-city/" target="_blank" rel="noopener">Thrive City 官方介绍 ↗</a></div></details>`);
  route.before(guide);
})();
