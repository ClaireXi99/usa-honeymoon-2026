/* 2026-09-23: New York route after the confirmed October 11 Casa Mono lunch. */
(() => {
  const row=(time,title,body)=>`<div class="time-row"><div class="time">${time}</div><div class="time-card"><strong>${title}</strong><p>${body}</p></div></div>`;
  const link=(url,label)=>`<a class="btn light" href="${url.replaceAll('&','&amp;')}" target="_blank" rel="noopener">${label}</a>`;
  const maps=(origin,destination,mode='walking')=>`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${mode}`;
  const mapPath=(places,mode='walking')=>`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(places[0])}&destination=${encodeURIComponent(places.at(-1))}&waypoints=${encodeURIComponent(places.slice(1,-1).join('|'))}&travelmode=${mode}`;
  const day=(date,title,subtitle,items,ops)=>{
    const el=document.getElementById('date-panel-'+date);
    if(!el)throw new Error('Missing New York date panel '+date);
    el.querySelector('.day-head h3').textContent=title;
    el.querySelector('.day-head p').textContent=subtitle;
    el.querySelector('.timeline').innerHTML=items.map(x=>row(...x)).join('');
    el.querySelector('.ops').innerHTML=ops;
  };

  day('2026-10-11','10月11日 · Central Park（中央公园）、The Met（大都会艺术博物馆）、Casa Mono（卡萨莫诺）与 Broadway（百老汇）','公园与博物馆 → 已订午餐 → 格林威治村 → 《阿拉丁》候选',[
    ['07:15—08:40','早餐、化妆与地铁到公园','前晚备早餐。08:10左右从酒店步行到 34 St–Penn Station（34街宾州车站），乘 C 线到 72 St（72街站），从 Central Park West & W 72nd St（中央公园西路与西72街）入园。周日不按 B 线规划。帝国大厦外观改在回酒店时顺路看，不占用上午。'],
    ['08:40—09:55','Central Park（中央公园）单向步行','依次看 Strawberry Fields / Imagine Mosaic（草莓园／想象马赛克）、Bow Bridge（弓桥）、Bethesda Terrace（毕士大露台），从东侧到 The Met（大都会艺术博物馆）。地图纯步行约24分钟、约1.8公里，余时用于拍照；不折返公园南端。'],
    ['10:00—11:45','The Met Fifth Avenue（大都会艺术博物馆第五大道馆）','1000 Fifth Avenue（第五大道1000号）。官网周日10:00开馆，外州及海外成人普通票30美元／人。约1小时45分钟只选埃及馆、欧洲绘画或美国馆中的两处；想深逛博物馆，就删减午餐后的街区。'],
    ['11:45—12:30','打车去 Casa Mono（卡萨莫诺）','从博物馆正门叫正规网约车到 52 Irving Place（欧文广场街52号）。地图车程约25分钟，但叫车与交通需留40–45分钟；目标12:30到达。不在已订午餐前插入 Flatiron Building（熨斗大厦）。'],
    ['12:45—14:30','Casa Mono（卡萨莫诺）· 已确认午餐','两人，Standard · Casa Mono – Indoor Seating（普通室内座位）。餐厅迟到宽限10分钟；若预计超过12:55到店，立即电话联系。两人座位保留1小时45分钟。少于1天取消或未到店，每人收费50美元。'],
    ['14:30—16:35','书店、纽约大学与 SoHo（苏豪区）','从餐厅步行至 Strand Book Store（斯特兰德书店，828 Broadway），再到 Washington Square Arch（华盛顿广场拱门）及 New York University（纽约大学）街区，沿 Broadway（百老汇大道）与 Prince Street（王子街）逛店。McNally Jackson Books（麦克纳利·杰克逊书店，134 Prince Street）只在有余量时进入；其旧址52 Prince已过时。要喝咖啡可在 La Cabra（拉卡布拉咖啡，284 Lafayette Street）短停，但小红书也记录了排队与座位少；Prince Street Pizza（王子街披萨）排队不超过10分钟才买一片。纯步行约38分钟，其余时间留给店铺。'],
    ['16:35—18:00','地铁去 New Amsterdam Theatre（新阿姆斯特丹剧院）','从 Prince St（王子街站）乘周日运行的 N 或 R 线至 Times Sq–42 St（时代广场—42街站），走到 214 West 42nd Street（西42街214号）。地图车站到剧院约18分钟，实际预留25–35分钟；约17:15—17:30到，在剧院周围吃小食、短拍 Times Square（时代广场），18:00前入场。'],
    ['18:30—21:00','Aladdin（《阿拉丁》）· 可购场次','10月11日18:30官方场次已核实，演出约2小时30分钟，含中场。门票尚未报告购买；若不看演出，就把这段留给苏豪区、时代广场和晚餐。'],
    ['21:00后','简餐并回酒店','剧院与酒店同在中城，按体力吃热食或外带，乘车或走人流较多的主街回酒店。']
  ],`<h4>交通与固定时间</h4><p><b>去公园：</b>酒店步行到 34 St–Penn Station（34街宾州车站），C 线到 72 St（72街站）；公园横穿后在10:00入大都会。<b>去午餐：</b>11:45从博物馆打车，目标12:30到 Casa Mono（卡萨莫诺）；已确认12:45两人室内。迟到联系餐厅 +1 212-253-2773。<b>去剧院：</b>王子街站乘 N／R 线至时代广场—42街站；《阿拉丁》18:30场次尚未报告购票。</p><p><b>电影与街区：</b>Flatiron Building（熨斗大厦）是2002年《蜘蛛侠》号角日报外观，但放在本日主线会折返；若特别想拍，用它替换一段苏豪区购物。现址 Joe’s Pizza（乔氏披萨）与《蜘蛛侠2》旧店有关联，非电影原店面。小意大利、唐人街也只作替换，不叠加。</p><div class="actions">${link('https://www.opentable.com/r/casa-mono-new-york','餐厅资料')}${link('https://aladdinthemusical.com/event/20261011-1830-show/','《阿拉丁》官方场次')}${link(mapPath(['Central Park West & W 72nd St New York','Strawberry Fields Imagine Mosaic New York','Bow Bridge Central Park New York','Bethesda Terrace New York','The Metropolitan Museum of Art New York']),'公园→大都会步行地图')}${link(maps('The Metropolitan Museum of Art New York','Casa Mono 52 Irving Place New York','driving'),'大都会→餐厅打车地图')}${link(mapPath(['Casa Mono 52 Irving Place New York','Strand Book Store 828 Broadway New York','Washington Square Arch New York','McNally Jackson Books 134 Prince St New York','Prince Street Pizza 27 Prince St New York']),'餐厅→书店→苏豪步行地图')}${link('https://www.xiaohongshu.com/explore/67a9111f0000000029030905','小红书：斯特兰德书店参考')}</div>`);

  day('2026-10-12','10月12日 · Lower Manhattan（曼哈顿下城）、Staten Island Ferry（史泰登岛渡轮）、DUMBO（丹波区）与 NBA（美职篮）','世贸与华尔街 → 免费渡轮 → 丹波区与大桥 → 酒店休息 → 比赛',[
    ['08:15—08:45','地铁到 World Trade Center（世贸中心）','酒店步行至 34 St–Herald Sq（34街—先驱广场站），乘 R 线到 Cortlandt St（科特兰街站），步行至 The Oculus（世贸中心交通枢纽）。地图约22分钟；10月12日是假日，不以 W 线班次为前提。'],
    ['08:45—09:50','The Oculus（世贸中心交通枢纽）与 9/11 Memorial（九一一纪念广场）','网红“贝壳车站”的可搜索名称是 The Oculus（世贸中心交通枢纽）。拍室内对称视角，走到纪念广场；当天不进博物馆与观景台。'],
    ['09:50—10:30','Wall Street（华尔街）→ Whitehall Terminal（白厅码头）','从纪念广场步行经 Trinity Church（三一教堂）、New York Stock Exchange（纽约证券交易所）、Federal Hall（联邦国家纪念堂）和 Charging Bull（华尔街铜牛）至白厅码头；纯步行约21分钟，拍照只挑重点。若10:00船赶不上，就乘之后班次。'],
    ['10:30—12:15','Staten Island Ferry（史泰登岛渡轮）往返','免费乘船远看 Statue of Liberty（自由女神像），不上岛。单程约25分钟；到 St. George Terminal（圣乔治码头）后下船，重新排队搭回程。官方假日特别班次列表未列10月12日，按周一常规班次做计划，出发前仍查当天公告。'],
    ['12:15—13:00','Stone Street（石街）午餐→Pier 11（11号码头）','白厅码头步行到 Stone Street Tavern（石街酒馆）吃汉堡或三明治，再走到11号码头；两段纯步行合计约14分钟。如果返程船晚、等座超过10分钟，改 Leo’s Bagels（利奥贝果，3 Hanover Square）外带。午餐与候船时间可前后浮动。'],
    ['13:00—13:35','NYC Ferry（纽约渡轮）到 DUMBO（丹波区）','在 Pier 11（11号码头）买 East River Route（东河航线）至 DUMBO / Fulton Ferry（丹波区富尔顿码头）的单程票。此段付费，与之前免费渡轮不同；航程约9分钟，乘午餐后第一班合适的船。秋季精确时刻待官方发布，不把13:00当固定发船时间。'],
    ['13:35—14:35','DUMBO（丹波区）河岸与小店','从码头先到 Jane’s Carousel（简氏旋转木马）与 Brooklyn Bridge Park（布鲁克林大桥公园）河岸，再去 Washington Street & Water Street（华盛顿街与水街交叉口）拍曼哈顿大桥；沿 Water Street（水街）小店或 Time Out Market（时光美食市场）坐下喝水。上述三处走到布鲁克林大桥步道入口纯步行约30分钟，拍照另留30—40分钟。'],
    ['14:35—16:15','Brooklyn Bridge（布鲁克林大桥）→ 地铁回酒店','体力允许就从布鲁克林一侧步行过桥回曼哈顿，桥上约30—40分钟；曼哈顿桥头再乘地铁回34街酒店，给候车与步行留约30—40分钟。晚高峰打车可能更慢。若累，就从丹波区直接叫车或乘地铁回酒店，删去完整过桥。目标16:15到酒店。'],
    ['16:15—18:00','休息、赛前简餐','酒店休息、补妆、核对两张电子票。17:15左右吃 NY Pizza Suprema（纽约至上披萨）或同档简餐，不带大包入场。'],
    ['18:15—22:15','Madison Square Garden（麦迪逊广场花园）NBA季前赛','19:30森林狼对尼克斯；18:15左右抵达安检。散场后沿主街回酒店或直接叫车。']
  ],`<h4>当天交通与缓冲</h4><p><b>去下城：</b>34 St–Herald Sq（34街—先驱广场站）乘 R 线到 Cortlandt St（科特兰街站），之后下城各点步行。<b>两段船：</b>Staten Island Ferry（史泰登岛渡轮）免费往返；Pier 11（11号码头）→DUMBO（丹波区）的 NYC Ferry（纽约渡轮）另付费。免费渡轮候船是当天最大变量；若返程晚，石街改贝果外带，桥上步行可删。<b>回酒店：</b>过桥后地铁优先；预留16:15休息。<b>夜间：</b>球票已报付款，两张有效电子票转入情况另核对；不要购买停车通行证。</p><p><b>电影关联：</b>史泰登岛渡轮是《蜘蛛侠：英雄归来》的故事场景；渡轮大战使用布景与特效，不把真实甲板当完整实拍地点。</p><div class="actions">${link('https://siferry.com/schedules/','免费渡轮时刻')}${link('https://www.ferry.nyc/routes-and-schedules/east-river/','东河渡轮时刻')}${link(mapPath(['The Oculus New York','9/11 Memorial New York','Trinity Church Wall Street New York','New York Stock Exchange New York','Charging Bull New York','Whitehall Terminal New York']),'世贸→华尔街→白厅步行地图')}${link(mapPath(['Whitehall Terminal New York','Stone Street Tavern 52 Stone St New York','Pier 11 Wall Street New York']),'白厅→石街→11号码头地图')}${link(mapPath(['DUMBO Fulton Ferry Landing Brooklyn','Janes Carousel Brooklyn','Washington Street and Water Street Brooklyn','Brooklyn Bridge pedestrian entrance Brooklyn']),'丹波区不折返步行地图')}${link('https://www.xiaohongshu.com/explore/693e2f99000000001f00d5bb','小红书：石街餐饮参考')}</div>`);

  day('2026-10-13','10月13日 · Fifth Avenue（第五大道）、The High Line（高线公园）与 Chelsea Market（切尔西市场）','购物与小吃 → 16:00取行李 → 17:00去机场酒店',[
    ['08:30—09:15','退房、寄存行李并出发','大箱留酒店，护照及贵重物品随身。今天不安排中央公园与博物馆，下午有机场酒店转场。'],
    ['09:15—11:45','Fifth Avenue（第五大道）向南购物','从 Louis Vuitton 57th Street（路易威登57街临时店，6 East 57th Street）巨型行李箱装置向南走；看 Tiffany & Co.（蒂芙尼）、MoMA Design Store（现代艺术博物馆设计商店）、St. Patrick’s Cathedral（圣帕特里克大教堂）、Rockefeller Center（洛克菲勒中心），喜欢游戏可进 Nintendo NY（任天堂纽约店，10 Rockefeller Plaza）。只选2–3家进店。'],
    ['11:45—12:30','New York Public Library（纽约公共图书馆）与 Bryant Park（布莱恩特公园）','沿第五大道到42街，短看图书馆外观、大厅开放区域与布莱恩特公园。Rose Main Reading Room（玫瑰主阅览室）公众参观时段通常是10:00—11:00，不按11:45可进入安排。Grand Central Terminal（中央车站）在东边，需绕行；想看就替换一家商店，不叠加。'],
    ['12:30—13:15','7号线去 Hudson Yards（哈德逊城市广场）','在 5 Av–Bryant Park（第五大道—布莱恩特公园站）乘 7 线到 34 St–Hudson Yards（34街—哈德逊广场站），地图约10分钟；到后短看 Vessel（维塞尔）外观与 The Shed（棚屋艺术中心）建筑。饿了在 Mercado Little Spain（小西班牙市场）买轻食，否则把正餐留给切尔西市场。'],
    ['13:15—14:20','The High Line（高线公园）北向南','从哈德逊广场附近30街入口上高线，沿旧铁轨步行，经 10th Avenue Square（第十大道广场）附近视角，到16街出口下至 Chelsea Market（切尔西市场）。只走北段，不要求走完整条公园。'],
    ['14:20—15:15','Chelsea Market（切尔西市场）小吃与采购','选 LOS TACOS No.1（一号玉米卷）或 Los Mariscos（洛斯马里斯科斯海鲜玉米卷）作主食；想换口味可选 Lobster Place（龙虾海鲜市场），甜点看 L’Arte del Gelato（冰淇淋店）或 Seed + Mill（芝麻甜点店）。别排长队；买次日凌晨可带走的固体早餐。Very Fresh Noodles（非常鲜面馆）官网显示周二不营业，不列当天备选。'],
    ['15:15—17:00','地铁回勒苏蕾酒店、取行李','15:15前离开市场，步行到 14 St–8 Av（14街—第八大道站），乘 A／C／E 线至 34 St–Penn Station（34街宾州车站），再步行到酒店；给进站、候车与步行留30—35分钟，目标16:00到。雨天或体力不足可打车，但需更早离开，下午车程可能更慢。取行李后17:00从酒店打车去已订机场附近酒店。'],
    ['17:00—19:30','Manhattan（曼哈顿）→ JFK（肯尼迪机场）附近酒店','工作日晚高峰给车程和办理入住留余量；入住时确认凌晨03:00左右的接驳班次、航站楼与预约规则。']
  ],`<h4>交通与硬截止</h4><p><b>上午：</b>第五大道向南步行；图书馆只看外观和开放大厅，不承诺中午可进玫瑰主阅览室。<b>转高线：</b>第五大道—布莱恩特公园站乘7线直达哈德逊广场；高线30街上、16街下。<b>回酒店：</b>切尔西市场步行至14街—第八大道站，乘 A／C／E 线到34街宾州车站，再步行到酒店。地铁比下午打车更可控；若改打车，15:00前离开。15:15地铁离开、16:00取行李、17:00打车去机场酒店。次日06:30航班。</p><p><b>替换：</b>MoMA（现代艺术博物馆）、The Frick Collection（弗里克收藏馆）或 Top of the Rock（洛克菲勒中心观景台）每次只选一个，替换高线，不叠加。Little Island（小岛公园）也是替换项。</p><div class="actions">${link('https://eu.louisvuitton.com/eng-e1/magazine/articles/57th-street-nyc','LV行李箱地点')}${link('https://www.nintendo.com/us/retail-locations/new-york/','任天堂纽约店营业时间')}${link('https://www.nypl.org/connect/tours/schwarzman','图书馆参观规则')}${link(mapPath(['Louis Vuitton 6 East 57th Street New York','Tiffany and Co 57th Street New York','MoMA Design Store 53rd Street New York','St Patricks Cathedral New York','Nintendo NY 10 Rockefeller Plaza New York','New York Public Library 476 Fifth Avenue']),'第五大道单向步行地图')}${link(maps('New York Public Library 476 Fifth Avenue','Hudson Yards New York','transit'),'图书馆→哈德逊广场地铁')}${link(mapPath(['Hudson Yards New York','High Line 30th Street Entrance New York','10th Avenue Square High Line New York','Chelsea Market New York']),'高线北段步行地图')}${link(maps('Chelsea Market New York','Executive Hotel Le Soleil New York','transit'),'切尔西市场→酒店地铁')}${link('https://www.xiaohongshu.com/explore/67b0a787000000002803da00','小红书：高线与切尔西参考')}</div>`);

  // Move the existing real-person DUMBO examples to the new Brooklyn day.
  const first=document.getElementById('date-panel-2026-10-11');
  const second=document.getElementById('date-panel-2026-10-12');
  const brooklynPhotos=second.querySelector('.photo-duo');
  for(const figure of first.querySelectorAll('.photo-duo figure')){
    if(figure.querySelector('img[src*="nyc-dumbo"],img[src*="nyc-carousel"]'))brooklynPhotos.append(figure);
  }
  for(const figure of second.querySelectorAll('.photo-duo figure')){
    if(figure.querySelector('img[src*="nyc-central"]'))first.querySelector('.photo-duo').append(figure);
  }
  for(const panel of [first,second]){
    const seen=new Set();
    for(const figure of panel.querySelectorAll('.photo-duo figure')){
      const src=figure.querySelector('img')?.getAttribute('src');
      if(seen.has(src))figure.remove();else seen.add(src);
    }
  }

  // The overview's “逐日执行” tab has a second copy of these three days.
  // Keep its timeline, notes and photo order identical to the city/date tabs.
  for(const date of ['2026-10-11','2026-10-12','2026-10-13']){
    const label=`${Number(date.slice(-2))}日`;
    const daily=[...document.querySelectorAll('#daily article.day')].find(el=>el.querySelector('.day-head h3')?.textContent.startsWith(`10月${label}`));
    const city=document.getElementById('date-panel-'+date);
    if(!daily||!city)throw new Error('Missing daily or city copy for '+date);
    daily.querySelector('.day-head h3').textContent=city.querySelector('.day-head h3').textContent;
    daily.querySelector('.day-head p').textContent=city.querySelector('.day-head p').textContent;
    daily.querySelector('.timeline').innerHTML=city.querySelector('.timeline').innerHTML;
    daily.querySelector('.ops').innerHTML=city.querySelector('.ops').innerHTML;
    daily.querySelector('.photo-duo').innerHTML=city.querySelector('.photo-duo').innerHTML;
  }

  const body=document.querySelector('#nyc .reference-body');
  if(body){
    body.innerHTML=`<div class="grid"><article class="card span-4"><span class="badge orange">10月11日</span><h3>公园、博物馆与已订午餐</h3><p>08:40中央公园精选路段；10:00—11:45大都会艺术博物馆；12:45 Casa Mono（卡萨莫诺）两人室内午餐；下午书店、纽约大学与苏豪区；18:30《阿拉丁》是可购场次。</p></article><article class="card span-4"><span class="badge blue">10月12日</span><h3>下城、布鲁克林与NBA</h3><p>世贸中心、华尔街、免费渡轮远看自由女神像；石街午餐后付费渡轮至丹波区，体力允许走布鲁克林大桥；16:15回酒店，19:30球赛。</p></article><article class="card span-4"><span class="badge darkbadge">10月13日</span><h3>购物与离城</h3><p>第五大道LV行李箱、圣帕特里克教堂与洛克菲勒；7号线至哈德逊广场，走高线北段到切尔西市场；16:00取行李，17:00去机场酒店。</p></article><article class="card span-12"><h3>景点取舍</h3><p><b>入馆：</b>大都会艺术博物馆安排10月11日；MoMA（现代艺术博物馆）与 Frick（弗里克收藏馆）列为替换项，不与大都会叠加。<b>外观：</b>帝国大厦、洛克菲勒、中央图书馆、圣帕特里克教堂与LV行李箱。<b>选逛：</b>格林威治村、纽约大学、苏豪区。<b>顺路短看：</b>翠贝卡区。<b>可替换：</b>小意大利、唐人街、洛克菲勒观景台、小岛公园；选择一个就删去当天同等时长的项目。</p><p><b>蜘蛛侠：</b>熨斗大厦对应2002年《蜘蛛侠》号角日报外观；现址 Joe’s Pizza（乔氏披萨）与《蜘蛛侠2》旧店有关联；史泰登岛渡轮与《蜘蛛侠：英雄归来》的剧情有关。2026年《蜘蛛侠：崭新之日》主要纽约街景在英国拍摄。</p></article><article class="card span-12"><h3>地图与核对入口</h3><div class="actions">${link('https://www.metmuseum.org/plan-your-visit','大都会门票与开放时间')}${link('https://www.ticketmaster.com/aladdin-new-york-new-york-10-11-2026/event/030064AEEB4B18D7','10月11日《阿拉丁》票')}${link('https://siferry.com/schedules/','免费渡轮时刻')}${link('https://www.ferry.nyc/routes-and-schedules/east-river/','东河渡轮时刻')}</div></article></div>`;
  }
})();
