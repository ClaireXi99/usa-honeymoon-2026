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
    ['08:40—09:55','Central Park（中央公园）单向步行','依次看 Strawberry Fields / Imagine Mosaic（草莓园／想象马赛克）、Bow Bridge（弓桥）、Bethesda Terrace（毕士大露台），从东侧到 The Met（大都会艺术博物馆）。含拍照约75分钟；若09:30还没到 Bethesda Terrace（毕士大露台），就删弓桥停留、直接向博物馆走，不折返公园南端。'],
    ['10:00—11:30','The Met Fifth Avenue（大都会艺术博物馆第五大道馆）','1000 Fifth Avenue（第五大道1000号）。官网周日10:00—17:00；海外成人普通票30美元／人，网上购票可直接到展厅入口，仍须过安检。90分钟只看 Egypt（埃及馆）的 Temple of Dendur（丹铎神庙，第131展厅）及邻近一区；入馆排队时进一步缩减展厅，不推迟11:30离馆。'],
    ['11:30—12:30','打车去 Casa Mono（卡萨莫诺）','11:25—11:30从博物馆正门开始叫正规网约车到 52 Irving Place（欧文广场街52号）。当前地图驾车约31分钟不是10月11日保证值；连同叫车预留45—60分钟，目标12:15—12:30到店，给12:45已订午餐留余量。若仍在馆内排队或临时堵车，立即缩短博物馆停留，不加 Flatiron Building（熨斗大厦）。'],
    ['12:45—14:30','Casa Mono（卡萨莫诺）· 已确认午餐','两人，Standard · Casa Mono – Indoor Seating（普通室内座位）。餐厅迟到宽限10分钟；若预计超过12:55到店，立即电话联系。两人座位保留1小时45分钟。少于1天取消或未到店，每人收费50美元。'],
    ['14:30—16:40','书店、纽约大学与 SoHo（苏豪区）','从 Casa Mono（卡萨莫诺）走到 Strand Book Store（斯特兰德书店，828 Broadway／百老汇大道828号），再经 Washington Square Arch（华盛顿广场拱门）与 New York University（纽约大学）街区到 Prince Street（王子街）。只挑 McNally Jackson Books（麦克纳利·杰克逊书店，134 Prince Street）或 Stüssy New York（斯图西纽约店，50 Prince Street）进一间；后者官网周日12:00—18:00。旧 Stüssy 176 Spring Street（春街176号）和旧书店52 Prince Street（王子街52号）都不要用来导航。若博物馆转场晚了，下午缩成 Strand（斯特兰德书店）→地铁，不再去 SoHo。'],
    ['16:40—18:00','地铁去 New Amsterdam Theatre（新阿姆斯特丹剧院）','16:40左右进 Prince St（王子街站），最迟16:45上 N 或 R 线至 Times Sq–42 St（时代广场—42街站），步行到 214 West 42nd Street（西42街214号）。目标17:15—17:30到，在剧院附近买不排长队的小食、短拍 Times Square（时代广场）；若购买18:30《阿拉丁》，18:00前入场。周末地铁改线以当天 MTA（纽约大都会运输署）公告为准。'],
    ['18:30—21:00','Aladdin（《阿拉丁》）· 可购场次','10月11日18:30官方场次已核实，演出约2小时30分钟，含中场。门票尚未报告购买；若不看演出，就把这段留给苏豪区、时代广场和晚餐。'],
    ['21:00后','简餐并回酒店','若看《阿拉丁》，约21:00散场后从剧院向南去 Shake Shack Herald Square（先驱广场昔客堡，1333 Broadway／百老汇大道1333号）吃简餐；官网周日营业至次日03:00。随后沿 Broadway（百老汇大道）和 West 36th Street（西36街）回酒店。两人一起走有人流和照明的主街；疲劳就从剧院直接叫正规网约车。']
  ],`<h4>交通与固定时间</h4><p><b>去公园：</b>酒店步行到 34 St–Penn Station（34街宾州车站），C 线到 72 St（72街站）；公园横穿后10:00入大都会。<b>去午餐：</b>11:25—11:30从博物馆叫车，目标12:15—12:30到 Casa Mono（卡萨莫诺）；已确认12:45两人室内。若预计超过12:55到店，立即联系餐厅 +1 212-253-2773。<b>去剧院：</b>最迟16:45从王子街站乘 N／R 线至 Times Sq–42 St（时代广场—42街站）；《阿拉丁》18:30场次尚未报告购票。</p><p><b>购物与电影：</b>午后仅在 McNally Jackson Books（麦克纳利·杰克逊书店）与 Stüssy New York（斯图西纽约店）中选一家。Flatiron Building（熨斗大厦）是2002年《蜘蛛侠》号角日报外观，但放在本日主线会折返；若特别想拍，用它替换苏豪区购物。现址 Joe’s Pizza（乔氏披萨）与《蜘蛛侠2》旧店有关联，非电影原店面。小意大利、唐人街只作其他日期的替换项。</p><div class="actions">${link('https://www.opentable.com/r/casa-mono-new-york','餐厅资料')}${link('https://aladdinthemusical.com/event/20261011-1830-show/','《阿拉丁》官方场次')}${link(mapPath(['Central Park West & W 72nd St New York','Strawberry Fields Imagine Mosaic New York','Bow Bridge Central Park New York','Bethesda Terrace New York','The Metropolitan Museum of Art New York']),'公园→大都会步行地图')}${link(maps('The Metropolitan Museum of Art New York','Casa Mono 52 Irving Place New York','driving'),'大都会→餐厅打车地图')}${link(mapPath(['Casa Mono 52 Irving Place New York','Strand Book Store 828 Broadway New York','Washington Square Arch New York','Stussy New York 50 Prince St New York']),'餐厅→书店→王子街步行地图')}${link('https://www.stussy.com/blogs/chapters/stussy-new-york','Stüssy纽约店现址')}${link('https://www.xiaohongshu.com/explore/67a9111f0000000029030905','小红书：斯特兰德书店参考')}</div>`);

  day('2026-10-12','10月12日 · Lower Manhattan（曼哈顿下城）、Staten Island Ferry（史泰登岛渡轮）、DUMBO（丹波区）与 NBA（美职篮）','世贸与华尔街 → 免费渡轮 → 丹波区与大桥 → 酒店休息 → 比赛',[
    ['08:15—08:45','地铁到 World Trade Center（世贸中心）','酒店步行至 34 St–Herald Sq（34街—先驱广场站），乘 R 线到 Cortlandt St（科特兰街站），步行至 The Oculus（世贸中心交通枢纽）。地图约22分钟；10月12日是假日，不以 W 线班次为前提。'],
    ['08:45—09:35','The Oculus（世贸中心交通枢纽）与 9/11 Memorial（九一一纪念广场）','网红“贝壳车站”的可搜索名称是 The Oculus（世贸中心交通枢纽）。拍室内对称视角，走到纪念广场；当天不进博物馆与观景台。09:35前离开，否则下城后段只选华尔街一处拍照。'],
    ['09:35—10:20','Wall Street（华尔街）→ Whitehall Terminal（白厅码头）','从纪念广场步行经 Trinity Church（三一教堂）、New York Stock Exchange（纽约证券交易所）、Federal Hall（联邦国家纪念堂）和 Charging Bull（华尔街铜牛）至白厅码头；各处只拍外观，假日不预期进入 Federal Hall（联邦国家纪念堂）。纯步行约21分钟，铜牛排队就跳过；10:15还没到 Bowling Green（保龄绿地）附近就直接去码头，争取10:20前到。赶不上10:30前后的船，就压缩午餐或布鲁克林停留。'],
    ['10:30前后—约12:20','Staten Island Ferry（史泰登岛渡轮）往返','免费乘船远看 Statue of Liberty（自由女神像），不上岛；单程约25分钟。到 St. George Terminal（圣乔治码头）后必须下船、重新排队搭回程。10月12日为假日，不能假定两段渡轮都按普通周一班次；前一晚及当天查官方时刻，回白厅约12:00—12:45是浮动窗口。'],
    ['回白厅后—约13:10','Leo’s Bagels（利奥贝果）外带→Pier 11（11号码头）','默认步行到 Leo’s Bagels（利奥贝果，3 Hanover Square／汉诺威广场3号）买贝果外带，再去 Wall Street / Pier 11（华尔街11号码头）候船。Stone Street（石街）可顺路短拍；只有免费船顺利且确有至少一小时余量，才改 Stone Street Tavern（石街酒馆）坐下吃。若连贝果也排队，直接在 DUMBO（丹波区）的 Time Out Market（时光美食市场）吃。'],
    ['午餐后第一班—约13:45','NYC Ferry（纽约渡轮）到 DUMBO（丹波区）','在 Pier 11（11号码头）按官方应用核 East River A（东河A线）或当日实际停 DUMBO / Fulton Ferry（丹波区富尔顿码头）的班次与登船口；单程票4.50美元/人，不与先前免费渡轮混用。航程约9分钟，秋季及假日时刻以临行前官方发布为准，不把13:00当固定发船。'],
    ['约13:45—14:30','DUMBO（丹波区）河岸与小店','码头先看 Jane’s Carousel（简氏旋转木马）与 Brooklyn Bridge Park（布鲁克林大桥公园）河岸，再去 Washington Street & Water Street（华盛顿街与水街交叉口）拍 Manhattan Bridge（曼哈顿大桥）。若在 Time Out Market（时光美食市场）吃午饭，就删河岸小店。14:30前到 Washington Street & Prospect Street（华盛顿街与普罗斯佩克特街）东北角的 Brooklyn Bridge pedestrian entrance（布鲁克林大桥步行入口）；不要从车道上桥。'],
    ['14:30—16:15','Brooklyn Bridge（布鲁克林大桥）→ 地铁回酒店','若14:30还未到步道入口，就不再上桥，改从 York St（约克街站）乘 F 线回酒店。顺利上桥后步行约30—40分钟到曼哈顿，若15:30还未到曼哈顿桥头就立即走最近的合法出口换地铁；目标16:15左右回酒店，给晚上比赛留休息。不要因为要坐Uber（优步）而在桥上停留等车。'],
    ['16:15—18:00','休息、赛前简餐','酒店休息、补妆、核对两张已转入且可扫码的电子票。17:15左右到 NY Pizza Suprema（纽约至上披萨，413 Eighth Avenue／第八大道413号）吃简餐；赛前排队超过15分钟就换同街区快餐。只带小斜挎包去球馆。'],
    ['18:15—22:15','Madison Square Garden（麦迪逊广场花园）NBA季前赛','19:30 Minnesota Timberwolves（明尼苏达森林狼）对 New York Knicks（纽约尼克斯）；18:15左右抵达安检。MSG（麦迪逊广场花园）官方要求包能放在座位下，超过22×14×9英寸的包禁止入场；尽量只带证件、手机和小斜挎包。散场后与观众沿主街回酒店，疲劳就叫正规网约车。']
  ],`<h4>当天交通与缓冲</h4><p><b>去下城：</b>34 St–Herald Sq（34街—先驱广场站）乘 R 线到 Cortlandt St（科特兰街站），之后下城各点步行；假日地铁服务当天核对。<b>两段船：</b>Staten Island Ferry（史泰登岛渡轮）免费往返；Pier 11（11号码头）→DUMBO（丹波区）的 NYC Ferry（纽约渡轮）另付4.50美元/人。10月12日是假日，两段船都查当日官方班次，不按普通周一推算。免费船回程晚则默认 Leo’s Bagels（利奥贝果）外带或丹波区 Time Out Market（时光美食市场），不硬坐石街酒馆。<b>回酒店：</b>14:30还未到 Washington Street &amp; Prospect Street（华盛顿街与普罗斯佩克特街）东北角步道入口，就删过桥，乘地铁回去，守住赛前休息。<b>球票：</b>前晚确认两张有效电子票已转入、座位与入口，不买停车证；球馆不带购物袋和大包。</p><p><b>电影关联：</b>史泰登岛渡轮是《蜘蛛侠：英雄归来》的故事场景；渡轮大战使用布景与特效，不把真实甲板当完整实拍地点。</p><div class="actions">${link('https://siferry.com/schedules/','免费渡轮时刻')}${link('https://www.ferry.nyc/routes-and-schedules/east-river/','东河渡轮时刻')}${link('https://www.ferry.nyc/ticketing-info/','NYC Ferry官方票价')}${link(mapPath(['The Oculus New York','9/11 Memorial New York','Trinity Church Wall Street New York','New York Stock Exchange New York','Charging Bull New York','Whitehall Terminal New York']),'世贸→华尔街→白厅步行地图')}${link(mapPath(['Whitehall Terminal New York','Leos Bagels 3 Hanover Square New York','Pier 11 Wall Street New York']),'白厅→贝果→11号码头地图')}${link(mapPath(['DUMBO Fulton Ferry Landing Brooklyn','Janes Carousel Brooklyn','Washington Street and Water Street Brooklyn','Washington Street and Prospect Street Brooklyn']),'丹波区→大桥入口地图')}${link('https://www.xiaohongshu.com/explore/66e7b610000000002700468a','小红书：免费渡轮视角参考')}</div>`);

  day('2026-10-13','10月13日 · Top of the Rock（洛克菲勒观景台）、Fifth Avenue（第五大道）、The High Line（高线公园）与 Chelsea Market（切尔西市场）','上午登顶与购物 → 高线和小吃 → 16:00取行李 → 17:00去机场酒店',[
    ['08:30—09:15','退房、寄存行李并出发','大箱留酒店，护照及贵重物品随身。今天不安排中央公园与博物馆，下午有机场酒店转场。'],
    ['09:15—10:15','Fifth Avenue（第五大道）北段打卡','从酒店乘地铁到57街附近，或按当天Uber（优步）报价和预计到达时间选择；Google Maps（谷歌地图）当前酒店到 LV（路易威登）57街店公交约19分钟、开车约31分钟。先拍 Louis Vuitton 57th Street（路易威登57街临时店，6 East 57th Street）行李箱外观；商店周二10:00才开，09:15只拍建筑外观。途经 Tiffany & Co.（蒂芙尼）外观，10:15前到观景台入口。'],
    ['10:30—11:40','Top of the Rock（洛克菲勒观景台）登顶','建议预订普通 Timed Admission（定时入场票）10:30场；从高层室外露台看 Empire State Building（帝国大厦）与 Central Park（中央公园）。官网9月23日查询10月13日该时段两人票面98美元，含税约106.70美元（约人民币715元）；未购买。预留安检、上楼与拍照约70分钟，不加购 Beam（钢梁体验）或 Skylift（升降观景台）。'],
    ['11:40—12:35','洛克菲勒周边、图书馆与布莱恩特公园','St. Patrick’s Cathedral（圣帕特里克大教堂）与 Nintendo NY（任天堂纽约店）只选一处短停；沿第五大道向南到 New York Public Library（纽约公共图书馆）与 Bryant Park（布莱恩特公园），看外观及开放区域。Rose Main Reading Room（玫瑰主阅览室）的游客时段10:00—11:00已错过，不按进入阅览室规划。12:35离开，不加逛其他店。'],
    ['12:35—13:15','7号线去 Hudson Yards（哈德逊城市广场）','在 5 Av–Bryant Park（第五大道—布莱恩特公园站）乘 7 线到 34 St–Hudson Yards（34街—哈德逊广场站），地图约10分钟；到后短看 Vessel（维塞尔）外观。饿了在 Mercado Little Spain（小西班牙市场）买轻食，否则把正餐留给切尔西市场。'],
    ['13:15—14:20','The High Line（高线公园）北向南','从哈德逊广场附近30街入口上高线，沿旧铁轨步行，经 10th Avenue Square（第十大道广场）附近视角，到16街出口下至 Chelsea Market（切尔西市场）。只走北段，不要求走完整条公园。'],
    ['14:20—15:00','Chelsea Market（切尔西市场）小吃与采购','选 LOS TACOS No.1（一号玉米卷）或 Los Mariscos（洛斯马里斯科斯海鲜玉米卷）作主食；想换口味可选 Lobster Place（龙虾海鲜市场）。别排长队，15:00前离开。若要去 Trader Joe’s Chelsea（乔氏超市切尔西店，675 Sixth Avenue）买同事礼物，应14:20前完成午餐，以超市替换市场逛店；不要两边都慢逛。次日早餐买固体、可带走的食物。'],
    ['15:00—17:00','地铁回勒苏蕾酒店、取行李','15:00前离开市场或乔氏超市，按实时路线乘地铁回酒店；从市场可步行到 14 St–8 Av（14街—第八大道站），乘 A／C／E 线至 34 St–Penn Station（34街宾州车站），再步行到酒店。目标15:45—16:00到，预留约45分钟取箱、称重与上洗手间；17:00从酒店打车去机场附近酒店。若为购物袋较多而改打车，要提前看叫车与路况时间。'],
    ['17:00—19:30','Manhattan（曼哈顿）→ JFK（肯尼迪机场）附近酒店','工作日晚高峰给车程和办理入住留余量。机场前夜酒店口述已订，但路书尚无酒店名称、地址和订单号；出发前先补完整地址，不要只导航到 JFK（肯尼迪机场）。入住时确认凌晨接驳是否需预约、是否直达出发航站楼；若只到 Federal Circle（联邦环路站），还须换 AirTrain（机场捷运）。']
  ],`<h4>交通、订票与硬截止</h4><p><b>上午：</b>酒店至57街先看地铁与Uber（优步）的实时到达时间；第五大道短拍后10:15前到50 West 50th Street（西50街50号）观景台入口。<b>订票：</b>优先官网普通 Timed Admission（定时入场票），建议10月7—9日看短期天气后订10月13日10:30；若怕时段售罄可提前买，但官网改期申请须至少提前24小时，仍受余票与规则限制，且13日是离城日。晴朗能见度优先于日落时段。<b>转高线：</b>第五大道—布莱恩特公园站乘7线直达哈德逊广场；高线30街上、16街下。<b>回酒店：</b>切尔西市场乘 A／C／E 线回34街宾州车站，15:00离开、16:00取行李、17:00打车去机场酒店。次日06:30航班。</p><p><b>取舍：</b>Top of the Rock（洛克菲勒观景台）入主线；Edge（边缘观景台）虽在哈德逊广场顺路，但额外排队会压缩高线与机场缓冲。SUMMIT One Vanderbilt（范德比尔特一号峰会）适合镜面人像，需要更多时间且要绕到东侧。MoMA（现代艺术博物馆）和 The Frick Collection（弗里克收藏馆）若要入馆，需替换高线，不再叠加。</p><div class="actions">${link('https://www.rockefellercenter.com/tickets/top-of-the-rock-observation-deck/','洛克菲勒观景台官网门票')}${link('https://www.rockefellercenter.com/contact/manage-ticket','观景台改期规则')}${link('https://www.edgenyc.com/get-tickets/','Edge官网备选')}${link('https://summitov.com/tickets/','SUMMIT官网备选')}${link('https://eu.louisvuitton.com/eng-e1/magazine/articles/57th-street-nyc','LV行李箱地点')}${link('https://www.nintendo.com/us/retail-locations/new-york/','任天堂纽约店营业时间')}${link('https://www.nypl.org/connect/tours/schwarzman','图书馆参观规则')}${link(mapPath(['Louis Vuitton 6 East 57th Street New York','Tiffany and Co 57th Street New York','Top of the Rock 50 West 50th Street New York','St Patricks Cathedral New York','New York Public Library 476 Fifth Avenue']),'第五大道→观景台→图书馆地图')}${link(maps('New York Public Library 476 Fifth Avenue','Hudson Yards New York','transit'),'图书馆→哈德逊广场地铁')}${link(mapPath(['Hudson Yards New York','High Line 30th Street Entrance New York','10th Avenue Square High Line New York','Chelsea Market New York']),'高线北段步行地图')}${link(maps('Chelsea Market New York','Executive Hotel Le Soleil New York','transit'),'切尔西市场→酒店地铁')}${link('https://www.xiaohongshu.com/explore/67b0a787000000002803da00','小红书：高线与切尔西参考')}</div>`);

  document.querySelector('#date-panel-2026-10-13 .ops').insertAdjacentHTML('beforeend','<p><b>机场前夜酒店待核：</b>目前只知已订，路书没有名称、完整地址、订单号及凌晨接驳班次；请先补酒店信息，再把导航目的地改为准确地址。次日06:30航班以03:30前到实际航站楼为目标。<a target="_blank" rel="noopener" href="https://www.jfkairport.com/explore-jfk/hotels">JFK（肯尼迪机场）酒店接驳说明</a></p>');

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
    body.innerHTML=`<div class="grid"><article class="card span-4"><span class="badge orange">10月11日</span><h3>公园、博物馆与已订午餐</h3><p>08:40中央公园精选路段；10:00—11:45大都会艺术博物馆；12:45 Casa Mono（卡萨莫诺）两人室内午餐；下午书店、纽约大学与苏豪区；18:30《阿拉丁》是可购场次。</p></article><article class="card span-4"><span class="badge blue">10月12日</span><h3>下城、布鲁克林与NBA</h3><p>世贸中心、华尔街、免费渡轮远看自由女神像；石街午餐后付费渡轮至丹波区，体力允许走布鲁克林大桥；16:15回酒店，19:30球赛。</p></article><article class="card span-4"><span class="badge darkbadge">10月13日</span><h3>登顶、购物与离城</h3><p>第五大道LV行李箱、10:30 Top of the Rock（洛克菲勒观景台）建议票、7号线至哈德逊广场、走高线北段到切尔西市场；16:00取行李，17:00去机场酒店。观景台未购票。</p></article><article class="card span-12"><h3>景点取舍</h3><p><b>入馆：</b>大都会艺术博物馆安排10月11日；MoMA（现代艺术博物馆）与 Frick（弗里克收藏馆）列为替换项，不与大都会叠加。<b>登顶：</b>10月13日洛克菲勒观景台为主选；若天气欠佳，先比较当日实时能见度，不把另一座楼当作自动补救。<b>外观：</b>帝国大厦、中央图书馆、圣帕特里克教堂与LV行李箱。<b>选逛：</b>格林威治村、纽约大学、苏豪区。<b>顺路短看：</b>翠贝卡区。<b>可替换：</b>小意大利、唐人街、小岛公园。</p><p><b>蜘蛛侠：</b>熨斗大厦对应2002年《蜘蛛侠》号角日报外观；现址 Joe’s Pizza（乔氏披萨）与《蜘蛛侠2》旧店有关联；史泰登岛渡轮与《蜘蛛侠：英雄归来》的剧情有关。2026年《蜘蛛侠：崭新之日》主要纽约街景在英国拍摄。</p></article><article class="card span-12"><h3>地图与核对入口</h3><div class="actions">${link('https://www.metmuseum.org/plan-your-visit','大都会门票与开放时间')}${link('https://www.rockefellercenter.com/tickets/top-of-the-rock-observation-deck/','洛克菲勒观景台官方票')}${link('https://www.ticketmaster.com/aladdin-new-york-new-york-10-11-2026/event/030064AEEB4B18D7','10月11日《阿拉丁》票')}${link('https://siferry.com/schedules/','免费渡轮时刻')}${link('https://www.ferry.nyc/routes-and-schedules/east-river/','东河渡轮时刻')}</div></article></div>`;
    body.innerHTML=body.innerHTML.replace('10:00—11:45大都会艺术博物馆','10:00—11:30大都会艺术博物馆').replace('石街午餐后付费渡轮至丹波区，体力允许走布鲁克林大桥','利奥贝果外带后换付费渡轮至丹波区；14:30前到入口才过布鲁克林大桥').replace('观景台未购票。</p>','观景台未购票，机场酒店地址待补。</p>');
  }
})();
