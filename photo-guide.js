(() => {
  const asset = 'assets/photo-guide/';
  const shots = [
    {
      id:'sf-california', day:'0929', no:'01', title:'加州街坡道', place:'California St & Powell St', status:'顺路',
      photos:[
        ['sf-california-half.webp','女生半身','09.29 原图 02'],
        ['sf-california-video.webp','半身动作 · 带字截图','09.29 原图 05'],
        ['sf-california-full.webp','男生全身 ①','09.29 原图 04'],
        ['sf-california-full-blue.webp','男生全身 ②','09.29 原图 06'],
        ['sf-california-arms.webp','背影动作','09.29 原图 03']
      ],
      position:'Powell St 附近人行道，朝加州街下坡方向拍；截图的街心角度只能参考。',
      pose:'半身：人物靠画面一侧，扶墨镜或整理头发。全身：自然站立、双手插兜即可。',
      camera:'手机 2×—3×；半身留出街道远景，全身让人物稍大一些。',
      route:'缆车下车后顺路。不要停在车道或轨道上。',
      map:'California St & Powell St, San Francisco, CA'
    },
    {
      id:'sf-cable', day:'0929', no:'02', title:'缆车入画', place:'California St & Powell St', status:'顺路',
      photos:[['sf-cable-car.webp','缆车与坡道','09.29 原图 07']],
      position:'与上一机位相同，在人行道等缆车经过。',pose:'可以不放人；有人时站在画面边缘。',camera:'手机 2×，先构好街道画面，再等车进入。',route:'与加州街人像共用停留时间。',map:'California St & Powell St, San Francisco, CA'
    },
    {
      id:'sf-warming', day:'0929', no:'03', title:'Warming Hut 窗景', place:'Warming Hut Park Store', status:'顺路',
      photos:[['sf-warming-window.webp','窗边看书','09.29 原图 09'],['sf-warming-window-alt.webp','窗框与大桥','09.29 原图 08']],
      position:'店内面向大桥的窗边，具体窗格以现场为准。',pose:'拿书站在窗旁，侧身或看向窗外。',camera:'手机 1×—2×；稍降曝光，保住窗外桥塔。',route:'店没开或时间紧就跳过，直接去桥边。',map:'Warming Hut Park Store, San Francisco, CA'
    },
    {
      id:'sf-battery-east', day:'0929', no:'04', title:'金门桥南岸', place:'Welcome Center / Battery East 一带', status:'顺路',
      photos:[['sf-battery-east.webp','靠栏杆站姿','09.29 原图 12'],['sf-battery-east-portrait.webp','近桥人像','09.29 原图 11'],['sf-battery-east-red.webp','红外套人像','09.29 原图 19']],
      position:'沿 Welcome Center 至 Battery East 的开放步道找桥塔背景；示例栏杆不保证是同一点。',pose:'侧身看桥或回头；人站步道内侧。',camera:'手机 2×，桥塔与人同框。',route:'主线路段，不越过护栏。',map:'Battery East Vista, San Francisco, CA'
    },
    {
      id:'sf-beach', day:'0929', no:'05', title:'桥下海滩', place:'West Bluff 附近开放沙滩', status:'备选',
      photos:[['sf-crissy-beach.webp','海滩与大桥','09.29 原图 14']],
      position:'从 6 号 Crissy Field / West Bluff 停车点沿开放步道走向海滩；准确沙段待现场判断。',pose:'沿岸线慢走。',camera:'手机 1×—2× 横拍，人物保持小比例。',route:'从 6 号停车点步行的备选；天色暗或涨潮就跳过。',map:'West Bluff Picnic Area, Marine Dr, San Francisco, CA'
    },
    {
      id:'sf-overlook', day:'0929', no:'06', title:'树框大桥', place:'Golden Gate Overlook', status:'备选',
      photos:[['sf-golden-overlook.webp','树框构图','09.29 原图 27']],
      position:'从 8 号 Welcome Center 按步行导航约 10 分钟到观景点，在开放步道找树干之间的桥景。',pose:'可拍环境照，或让人物小比例站在前景。',camera:'手机 1× 横拍。',route:'从 8 号点单程约步行 10 分钟，拍完原路返回；看剩余时间决定。',map:'Golden Gate Overlook, San Francisco, CA'
    },
    {
      id:'sf-spencer', day:'0929', no:'07', title:'北岸俯拍大桥', place:'Battery Spencer', status:'备选 · 需过桥',
      photos:[['sf-battery-spencer.webp','桥身与人物','09.29 原图 24'],['sf-battery-spencer-cap.webp','帽子双姿势','09.29 原图 23']],
      position:'过桥后重新停车，再沿 Battery Spencer 公共步道到观景区；车位有限。',pose:'人靠一侧，留出桥身与城市。',camera:'手机 1×—2× 竖拍。',route:'过桥、重新停车和步行都要另留时间；只列备选。',map:'Battery Spencer, Sausalito, CA'
    },
    {
      id:'sv-arch', day:'0930', no:'08', title:'斯坦福入口拱门', place:'Main Quad Entrance · Palm Drive Gate', status:'顺路',
      photos:[['sv-stanford-arch.webp','入口拱门','09.30 原图 01']],
      position:'Palm Drive 尽头，朝 Main Quad 入口拱门拍。',pose:'站在拱门前，走两步回头。',camera:'手机 1× 竖拍，保留棕榈树和完整拱门。',route:'斯坦福步行路线起点。',map:'Stanford Main Quad Entrance, Palm Drive, Stanford, CA'
    },
    {
      id:'sv-arcade', day:'0930', no:'09', title:'斯坦福拱廊', place:'Main Quad', status:'顺路',
      photos:[['sv-stanford-arcade.webp','拱廊人像','09.30 原图 03'],['sv-stanford-arcade-alt.webp','拱廊透视','09.30 原图 04']],
      position:'Main Quad 开放拱廊，沿廊道退后拍。',pose:'靠石柱站，轻微侧身。',camera:'手机 2× 竖拍，用重复拱洞作背景。',route:'主方庭内顺路。',map:'Main Quad, Stanford University, Stanford, CA'
    },
    {
      id:'sv-church', day:'0930', no:'10', title:'斯坦福纪念教堂', place:'Stanford Memorial Church', status:'顺路',
      photos:[['sv-stanford-church.webp','教堂外墙人像','09.30 原图 06']],
      position:'Main Quad 内教堂正面开放区域。',pose:'人物站画面一侧，走动时回头。',camera:'手机 1×—2× 竖拍，纳入彩色外墙。',route:'拍外观即可，不依赖室内开放。',map:'Stanford Memorial Church, Stanford, CA'
    },
    {
      id:'sv-google', day:'0930', no:'11', title:'Google Visitor Experience', place:'2000 N Shoreline Blvd', status:'备选',
      photos:[['sv-google-g.webp','彩色 G','09.30 原图 11'],['sv-google-pinwheel.webp','风车','09.30 原图 09']],
      position:'Visitor Experience 公共区域；装置位置以现场为准。',pose:'人站 G 的一侧，留出完整字母。',camera:'手机 1× 竖拍。',route:'Apple 后须向北折返；只有时间宽裕才去。',map:'Google Visitor Experience, 2000 N Shoreline Blvd, Mountain View, CA'
    },
    {
      id:'sf-ferry', day:'0929', no:'12', title:'渡轮大楼钟楼', place:'Ferry Building', status:'顺路',
      photos:[['assets/sf-ferry-couple.jpg','钟楼与人物','旧主页参考']],
      position:'Ferry Building 正面广场，摄影者退到 Market Street 一侧。',pose:'双人照只作比例参考；人物站广场中央或略偏一侧，拍正面与回头各一张。',camera:'手机 2×，保留钟楼顶端。',route:'抵达后的午餐站点，拍照与吃饭共用时间。',map:'Ferry Building, San Francisco, CA'
    },
    {
      id:'sf-on-car', day:'0929', no:'13', title:'缆车车厢', place:'California Street Cable Car', status:'顺路',
      photos:[['assets/sf-cablecar-couple.jpg','车门与扶手','旧主页参考']],
      position:'加州街缆车车厢或车辆停稳的站台。',pose:'扶住车厢扶手，拍半身和车门环境。',camera:'手机 1× 竖拍，给人物和车身都留空间。',route:'只在车辆停稳、工作人员允许时拍；行驶中不探身。',map:'California St & Drumm St, San Francisco, CA'
    },
    {
      id:'sf-book', day:'0929', no:'14', title:'中文教材接力', place:'金门桥周边', status:'碰运气',
      photos:[['assets/sf-book-relay-person.jpg','书与桥同框','旧主页参考']],
      position:'书的位置会变动，也可能已经被取走；现场只走开放步道。',pose:'若偶遇，拍人在木桩旁翻书与签名页。',camera:'手机 1×—2×，让桥在后方可辨认。',route:'顺路碰运气，不下陡坡寻找；拍后放回原处防水袋。',map:'Golden Gate Bridge Welcome Center, San Francisco, CA'
    },
    {
      id:'sv-church-wide', day:'0930', no:'15', title:'教堂中轴线', place:'Stanford Memorial Church', status:'顺路',
      photos:[['assets/road-stanford-person.jpg','中轴线远景','旧主页参考']],
      position:'Main Quad 中轴线，摄影者可退到拱廊阴影处。',pose:'人物站在画面下半部，教堂正面完整入画。',camera:'手机 1× 竖拍，保持建筑垂直。',route:'与教堂外墙机位共用停留时间。',map:'Stanford Memorial Church, Stanford, CA'
    },
    {
      id:'sv-apple', day:'0930', no:'16', title:'Apple 游客中心', place:'Apple Park Visitor Center', status:'顺路',
      photos:[['assets/road-apple-visitor-people.jpg','室内模型','旧主页参考']],
      position:'游客中心内的园区模型旁；具体可站区域以现场为准。',pose:'人物站模型短边，侧身看模型。',camera:'手机 1×，稍变角度避免玻璃反光。',route:'只在对公众开放的游客中心拍，不进入员工园区。',map:'Apple Park Visitor Center, 10600 N Tantau Ave, Cupertino, CA'
    },
    {
      id:'road-moonstone', day:'0930', no:'17', title:'月光石海滩', place:'Moonstone Beach Boardwalk', status:'顺路',
      photos:[['assets/road-moonstone-02.webp','海边走动','旧主页参考']],
      position:'入住后从木栈道走向允许进入的沙滩。',pose:'沿湿沙平行海岸慢走，拍自然回头。',camera:'手机 2× 连拍，人物与海面分开。',route:'抵达晚或风浪大时只在木栈道短拍。',map:'Moonstone Beach Boardwalk, Cambria, CA'
    },
    {
      id:'road-hendrys', day:'1001', no:'18', title:'亨德里海滩', place:"Hendry's Beach", status:'顺路',
      photos:[['https://karendphoto.com/wp-content/uploads/2018/04/04-12265-post/hendrys-beach-santa-barbara-3.jpg','海滩走动','旧主页参考']],
      position:'海滩开放区域，摄影者站靠内陆一侧。',pose:'沿湿沙平行海岸慢走，不向海浪靠近。',camera:'手机 2×，用海面作背景。',route:'当天继续长途驾驶，按停车时间短拍。',map:"Hendry's Beach, Santa Barbara, CA"
    },
    {
      id:'la-universal', day:'1002', no:'19', title:'环球影城地球仪', place:'Universal Studios Hollywood', status:'顺路',
      photos:[['assets/la-universal-person.jpg','地球仪人像','旧主页参考']],
      position:'园区入口地球仪旁，站在允许停留的区域。',pose:'正面站姿或回头抓拍。',camera:'手机 1× 竖拍，地球仪完整入画。',route:'开园前人多可改离园时拍，不堵出口。',map:'Universal Studios Hollywood Globe, Universal City, CA'
    },
    {
      id:'la-sign', day:'1003', no:'20', title:'好莱坞标志', place:'Lake Hollywood Park', status:'顺路',
      photos:[['assets/la-hollywood-sign-person.jpg','草坪与标志','旧主页参考']],
      position:'公园草坪或 Canyon Lake Drive 靠公园一侧。',pose:'侧身看标志，或从草坪自然走过。',camera:'手机 2× 竖拍，压缩人物与标志距离。',route:'不站道路拍照。',map:'Lake Hollywood Park, Los Angeles, CA'
    },
    {
      id:'la-griffith', day:'1003', no:'21', title:'格里菲斯天文台', place:'East Terrace', status:'顺路',
      photos:[['assets/la-griffith-night-person.jpg','露台与城市','旧主页参考']],
      position:'天文台东侧露台开放区域，人物靠石栏内侧。',pose:'侧身或背影，留出城市背景。',camera:'手机 1×—2×；参考图是夜景，本日按日落时间拍。',route:'拍完及时去官方上车区，不为蓝调夜景拖延。',map:'Griffith Observatory East Terrace, Los Angeles, CA'
    },
    {
      id:'la-castle', day:'1004', no:'22', title:'睡美人城堡', place:'Disneyland Park', status:'顺路',
      photos:[['assets/la-disneyland-person.jpg','城堡侧桥','旧主页参考']],
      position:'城堡侧桥的开放区域。',pose:'靠桥边自然站立，拍正面和回头。',camera:'手机 1× 竖拍，保留塔尖。',route:'午后顺路拍，不耽误早晨项目。',map:'Sleeping Beauty Castle, Disneyland Park, Anaheim, CA'
    },
    {
      id:'la-santa-sand', day:'1005', no:'23', title:'码头南侧沙滩', place:'Santa Monica State Beach', status:'顺路',
      photos:[['assets/la-santa-monica-couple.jpg','栈桥与人物','旧主页参考']],
      position:'Santa Monica Pier 南侧开放沙滩，站在栈桥柱外侧干沙区。',pose:'双人照仅参考光线与比例；侧身看海，再慢走一组。',camera:'手机 2×，日落前侧逆光。',route:'潮水靠近时离开柱间区域。',map:'Santa Monica State Beach South of Pier, Santa Monica, CA'
    },
    {
      id:'la-santa-wheel', day:'1005', no:'24', title:'太平洋摩天轮', place:'Santa Monica Pier', status:'顺路',
      photos:[['assets/la-santa-monica-person.jpeg','摩天轮远景','旧主页参考']],
      position:'码头南侧海滩，摄影者退远朝摩天轮拍。',pose:'人站画面下三分之一，让摩天轮从肩旁露出。',camera:'手机 2× 竖拍。',route:'日落前完成，不另去远处机位。',map:'Santa Monica Pier, Santa Monica, CA'
    },
    {
      id:'vegas-antelope', day:'1007', no:'25', title:'下羚羊谷', place:'Lower Antelope Canyon', status:'随团',
      photos:[['assets/vegas-antelope-person2.jpg','亮面岩壁','旧主页参考'],['assets/vegas-antelope-person.jpg','岩壁前景','旧主页参考']],
      position:'仅在向导开放的游览路线内。',pose:'靠亮面岩壁侧身；另一张用岩壁框住人物。',camera:'手机 1×，随队快速拍。',route:'不触摸脆弱岩壁，不为摆拍脱队。',map:'Lower Antelope Canyon, Page, AZ'
    },
    {
      id:'vegas-sphere', day:'1008', no:'26', title:'巨型球外观', place:'Sphere Vista Point Bridge', status:'可删',
      photos:[['assets/vegas-sphere-person.jpeg','天桥与球体','旧主页参考']],
      position:'威尼斯人与永利之间的公共天桥方向。',pose:'人靠玻璃边，放在画面下三分之一。',camera:'手机 1×，让球体完整入画。',route:'当天已有演出和换酒店；疲劳时先删外观拍照。',map:'Sphere Vista Point Bridge, Las Vegas, NV'
    },
    {
      id:'vegas-bellagio', day:'1008', no:'27', title:'百乐宫喷泉', place:'Fountains of Bellagio', status:'可选',
      photos:[['assets/vegas-bellagio-person.jpg','喷泉人像','旧主页参考']],
      position:'百乐宫湖边公共步道，站在栏杆内侧。',pose:'侧身看喷泉，等水柱升起。',camera:'手机 1×—2×，留住湖面和酒店。',route:'《O》散场后若有体力，短看一轮；不单独保证演出时间。',map:'Fountains of Bellagio, Las Vegas, NV'
    },
    {
      id:'vegas-fashion', day:'1009', no:'28', title:'时尚秀商场外观', place:'Fashion Show Mall', status:'备选',
      photos:[['assets/vegas-fashion-show.jpg','白色顶棚','旧主页参考']],
      position:'商场外公共步道。',pose:'建筑线条为主，人像可省略。',camera:'手机 1× 横拍。',route:'购物恢复日不专门拍照；仅当日改去商场时顺手拍。',map:'Fashion Show Mall, Las Vegas, NV'
    },
    {
      id:'nyc-dumbo', day:'1012', no:'29', title:'DUMBO 大桥街景', place:'Washington St & Water St', status:'顺路',
      photos:[['assets/nyc-dumbo-person.jpg','街道与曼哈顿大桥','旧主页参考']],
      position:'Washington St 与 Water St 路口附近的安全路边。',pose:'人靠画面一侧，朝镜头走两步。',camera:'手机 2×，压缩桥体。',route:'不在车道中停留拍照。',map:'Washington St & Water St, Brooklyn, NY'
    },
    {
      id:'nyc-carousel', day:'1012', no:'30', title:'简氏旋转木马', place:"Jane's Carousel", status:'顺路',
      photos:[['assets/nyc-carousel-person.jpg','木马与布鲁克林大桥','旧主页参考']],
      position:'Brooklyn Bridge Park 河岸，玻璃建筑外侧。',pose:'人物侧身，背后带入布鲁克林大桥。',camera:'手机 1×—2× 竖拍。',route:'与 DUMBO 河岸步行段共用时间。',map:"Jane's Carousel, Brooklyn, NY"
    },
    {
      id:'nyc-park', day:'1011', no:'31', title:'中央公园走动照', place:'Bow Bridge / The Mall', status:'顺路',
      photos:[['assets/nyc-central-park-person.jpeg','林荫步道','旧主页参考']],
      position:'弓桥附近或 The Mall 步道。',pose:'慢走、回头或整理头发，各拍一小组。',camera:'手机 2× 连拍。',route:'10月中旬不保证红叶峰值。',map:'The Mall, Central Park, New York, NY'
    },
    {
      id:'nyc-highline', day:'1013', no:'32', title:'高线公园', place:'The High Line', status:'顺路',
      photos:[['assets/nyc-highline-couple.webp','步道纵深','旧主页参考']],
      position:'高线公园开放步道，找保留旧铁轨的路段。',pose:'双人照只参考景别；人物站步道一侧，拍正面和回头。',camera:'手机 2× 竖拍，用步道作引导线。',route:'不堵窄通道，按当天步行节奏短拍。',map:'The High Line, New York, NY'
    }
  ];

  const days = [
    ['0929','9月29日','旧金山','sf','加州街 → Warming Hut → 金门桥南岸'],
    ['0930','9月30日','硅谷与海岸','road','斯坦福 → Apple → 坎布里亚；Google 为备选'],
    ['1001','10月1日','前往洛杉矶','la','亨德里海滩 → 好莱坞还车'],
    ['1002','10月2日','环球影城','la','环球影城一日'],
    ['1003','10月3日','洛杉矶','la','好莱坞标志 → 格里菲斯天文台'],
    ['1004','10月4日','迪士尼','la','迪士尼乐园主园'],
    ['1005','10月5日','圣塔莫尼卡','la','购物 → 圣塔莫尼卡日落'],
    ['1006','10月6日','飞往拉斯维加斯','vegas','飞行、入住与休息'],
    ['1007','10月7日','下羚羊谷','vegas','下羚羊谷与马蹄湾一日团'],
    ['1008','10月8日','巨型球与《O》','vegas','巨型球 → 换酒店 → 《O》'],
    ['1009','10月9日','拉斯维加斯','vegas','购物与休息；商场为备选'],
    ['1010','10月10日','飞往纽约','nyc','飞行与入住'],
    ['1011','10月11日','中央公园','nyc','中央公园 → 大都会 → Casa Mono → SoHo'],
    ['1012','10月12日','下城与 DUMBO','nyc','下城 → DUMBO → 尼克斯比赛'],
    ['1013','10月13日','曼哈顿西侧','nyc','高线公园 → 切尔西市场 → 机场酒店'],
    ['1014','10月14日','返程','nyc','凌晨从 JFK 出发，经达拉斯转机']
  ];
  const dayInfo = Object.fromEntries(days.map(day => [day[0],{date:day[1],name:day[2],city:day[3],summary:day[4]}]));
  const sourceLinks = {
    'sf-ferry':'https://bilykart.com/ferry-building/',
    'sf-on-car':'https://bilykart.com/cable-car/',
    'sf-book':'https://www.youtube.com/shorts/ZUbISCdFitE',
    'sv-church-wide':'https://www.dealmoon.com/post/2385650',
    'sv-apple':'https://www.tripadvisor.com/Attraction_Review-g32273-d13331376-Reviews-Apple_Park_Visitor_Center-Cupertino_California.html',
    'road-moonstone':'https://www.flyingdawnmarie.com/new-blog/cambria-moonstone-beach',
    'road-hendrys':'https://karendphoto.com/hendrys-beach-engagement-photos-suzypaul/',
    'la-universal':'https://www.dealmoon.com/post/2405995',
    'la-sign':'https://www.dealmoon.com/post/2531971',
    'la-griffith':'https://www.dealmoon.com/post/2484319',
    'la-castle':'https://www.dealmoon.com/post/2240572',
    'la-santa-sand':'https://akikoliu.photos/2020/01/17/santa-monica-pier-session/',
    'la-santa-wheel':'https://www.dealmoon.com/post/2658899',
    'vegas-antelope':'https://www.dealmoon.com/post/1996308',
    'vegas-sphere':'https://www.dealmoon.com/post/3234310',
    'vegas-bellagio':'https://www.dealmoon.com/post/2362031',
    'vegas-fashion':'https://www.dealmoon.com/post/2017914',
    'nyc-dumbo':'https://www.dealmoon.com/post/703414',
    'nyc-carousel':'https://www.dealmoon.com/post/1429599',
    'nyc-park':'https://www.dealmoon.com/guide/1001999',
    'nyc-highline':'https://www.rachelwatkinson.com/rachelwatkinson/new-york-city-the-highline-engagement-photography-session'
  };
  const order = {
    '0929':['sf-ferry','sf-california','sf-cable','sf-on-car','sf-warming','sf-battery-east','sf-book','sf-beach','sf-overlook','sf-spencer'],
    '0930':['sv-arch','sv-arcade','sv-church','sv-church-wide','sv-apple','sv-google','road-moonstone']
  };
  const lists = Object.fromEntries(days.map(([day]) => [day,shots.filter(shot => shot.day === day).sort((a,b) =>
    (order[day]?.indexOf(a.id) ?? shots.indexOf(a)) - (order[day]?.indexOf(b.id) ?? shots.indexOf(b)))]));
  const esc = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const photoUrl = file => /^(assets\/|https?:\/\/)/.test(file) ? file : asset + file;
  const isoDate = day => '2026-' + day.slice(0,2) + '-' + day.slice(2);
  const routeLink = day => `index.html#${dayInfo[day].city}/${isoDate(day)}/route`;
  const photosLink = day => `index.html#${dayInfo[day].city}/${isoDate(day)}/photos`;
  const mapLink = query => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
  const byId = Object.fromEntries(shots.map(shot => [shot.id,shot]));
  const selected = Object.fromEntries(days.map(([day]) => [day,lists[day][0]?.id || null]));
  const dialog = document.querySelector('.photo-dialog');
  const tabs = document.querySelector('.day-tabs');
  const panels = document.getElementById('day-panels');

  tabs.innerHTML = days.map(([day]) => `<button class="day-tab" type="button" id="tab-${day}" role="tab" aria-controls="day-${day}" data-day="${day}">${dayInfo[day].date} <b>${esc(dayInfo[day].name)}</b></button>`).join('');
  panels.innerHTML = days.map(([day]) => `<section class="day-panel" id="day-${day}" role="tabpanel" aria-labelledby="tab-${day}" hidden>
    <div class="day-line"><p>${esc(dayInfo[day].summary)}</p><a href="${routeLink(day)}">查看路线 ↗</a></div>
    <nav class="spot-grid" id="index-${day}" aria-label="${dayInfo[day].date}机位"></nav>
    <div class="spot-detail" id="shots-${day}" aria-live="polite"></div>
  </section>`).join('');

  const spotNo = shot => String(lists[shot.day].indexOf(shot) + 1).padStart(2,'0');
  function photoButton([file,label,ref]) {
    return `<button class="photo-item" type="button" data-photo="${esc(file)}" data-caption="${esc(label + ' · ' + ref)}" aria-label="放大${esc(label)}"><img src="${esc(photoUrl(file))}" alt="${esc(label)}" loading="lazy" decoding="async"><span>${esc(label)}<small>${esc(ref)}</small></span></button>`;
  }
  function detail(shot) {
    return `<article class="detail-card" aria-labelledby="selected-title-${esc(shot.id)}">
      <div class="detail-head"><div><span class="detail-meta">${spotNo(shot)} · ${esc(shot.status)} · ${esc(shot.place)}</span><h2 id="selected-title-${esc(shot.id)}">${esc(shot.title)}</h2></div><span>${shot.photos.length} 张参考</span></div>
      <div class="photo-grid">${shot.photos.map(photoButton).join('')}</div>
      <dl class="tips-grid"><div><dt>位置</dt><dd>${esc(shot.position)}</dd></div><div><dt>拍法</dt><dd>${esc(shot.pose)}</dd></div><div><dt>镜头</dt><dd>${esc(shot.camera)}</dd></div><div><dt>行程</dt><dd>${esc(shot.route)}</dd></div></dl>
      <div class="detail-actions"><a class="primary" href="${mapLink(shot.map)}" target="_blank" rel="noopener">Google Maps ↗</a><a href="${routeLink(shot.day)}">当天路线 →</a>${sourceLinks[shot.id] ? `<a href="${esc(sourceLinks[shot.id])}" target="_blank" rel="noopener">参考来源 ↗</a>` : ''}</div>
    </article>`;
  }

  for (const [day] of days) {
    document.getElementById('index-' + day).innerHTML = lists[day].map(shot => `<button type="button" class="spot-tile" data-shot="${shot.id}" aria-pressed="false"><img src="${esc(photoUrl(shot.photos[0][0]))}" alt="" loading="lazy" decoding="async"><span><small>${spotNo(shot)} · ${esc(shot.status)}</small><b>${esc(shot.title)}</b></span></button>`).join('');
  }

  function render(scrollTarget) {
    const hash = location.hash.slice(1);
    const shot = byId[hash];
    const requested = hash.startsWith('day-') ? hash.slice(4) : '';
    const day = shot?.day || (dayInfo[requested] ? requested : (document.querySelector('.day-tab[aria-selected="true"]')?.dataset.day || '0929'));
    if (shot) selected[day] = shot.id;
    for (const [current] of days) {
      const active = current === day;
      const tab = document.getElementById('tab-' + current);
      tab.setAttribute('aria-selected',String(active)); tab.tabIndex = active ? 0 : -1;
      document.getElementById('day-' + current).hidden = !active;
    }
    document.querySelector('.back-link').href = photosLink(day);
    document.querySelector('.route-link').href = routeLink(day);
    document.querySelectorAll('#index-' + day + ' .spot-tile').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.shot === selected[day])));
    document.getElementById('shots-' + day).innerHTML = selected[day] ? detail(byId[selected[day]]) : '<div class="empty-day"><h2>当天没有专门拍照机位</h2><p>这天以行程和休息为主，现场遇到合适光线再随手记录即可。</p></div>';
    document.getElementById('tab-' + day).scrollIntoView({block:'nearest',inline:'nearest'});
    if (scrollTarget) requestAnimationFrame(() => {
      if (scrollTarget === 'detail') document.getElementById('shots-' + day).scrollIntoView({block:'start'});
      else window.scrollTo({top:0,behavior:'instant'});
    });
  }

  tabs.addEventListener('click', event => {
    const tab = event.target.closest('.day-tab'); if (!tab) return;
    if (location.hash === '#day-' + tab.dataset.day) render('top');
    else location.hash = 'day-' + tab.dataset.day;
  });
  tabs.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const current = days.findIndex(([day]) => day === document.activeElement.dataset.day);
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? days.length - 1 :
      event.key === 'ArrowRight' ? Math.min(current + 1,days.length - 1) : Math.max(current - 1,0);
    const next = document.getElementById('tab-' + days[index][0]); next.focus(); next.click();
  });
  panels.addEventListener('click', event => {
    const button = event.target.closest('.spot-tile'); if (!button) return;
    if (location.hash === '#' + button.dataset.shot) render('detail');
    else location.hash = button.dataset.shot;
  });
  document.querySelector('main').addEventListener('click', event => {
    const button = event.target.closest('.photo-item'); if (!button) return;
    const img = dialog.querySelector('img'); img.src = photoUrl(button.dataset.photo); img.alt = button.dataset.caption;
    dialog.querySelector('p').textContent = button.dataset.caption; dialog.showModal();
  });
  dialog.querySelector('.close-dialog').addEventListener('click',() => dialog.close());
  dialog.addEventListener('click',event => { if (event.target === dialog) dialog.close(); });
  window.addEventListener('hashchange',() => render(location.hash.startsWith('#day-') ? 'top' : 'detail'));
  render(location.hash && byId[location.hash.slice(1)] ? 'detail' : 'top');
})();
