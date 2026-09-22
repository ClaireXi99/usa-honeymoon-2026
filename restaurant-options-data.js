/* Maps observations: 2026-09-22 to 2026-09-23. Estimates are not menu quotations. */
(() => {
  const maps = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  const zones = [];
  function zone(id,title,dates,window,anchor,area,note,chosen,rejected) {
    const candidates = chosen.trim().split('\n').map(line => {
      const [name,zh,rating,reviews,range,mode,reason,dish,location] = line.split('~');
      const mapsUrl=maps(`${name} ${location || area}`);
      return {name,zh,rating:+rating,reviews:+reviews,price:range.split('-').map(Number),selected:true,reason,dish,
        mapsUrl,walk:location || area,comfort:'地图显示堂食；座位是否空闲以到店为准',xhs:[],
        booking:mode==='R'?{mode:'recommended',text:'Google Maps（谷歌地图）显示订位入口；支持预约不等于必须预约。建议先查看可订时段。',advance:'建议提前1—3天；热门周末提前3—7天。这是行程建议，不是官方放位天数。',release:'未查到统一放位周期。',source:mapsUrl}:
          mode==='F'?{mode:'walkin',text:'餐厅可预约，但本日免费渡轮到达时间浮动；建议到店询位，候位超过10分钟改外带。',advance:'不提前锁定午餐时段；假日营业和空位当天确认。',source:mapsUrl}:
          mode==='W'?{mode:'walkin',text:'柜台点单或现场候位；不依赖提前订桌。候位不保证立即入座。',advance:'无需提前几天；到附近再点单或排队。',source:mapsUrl}:
          {mode:'unknown',text:'地图未提供明确订位入口，不能据此判断不接受预约。可到店询位，或从地图拨打餐厅电话确认。',advance:'建议前一天确认两人能否预约；当天排队超过20分钟就换备选。',release:'未核实。',source:mapsUrl}};
    });
    rejected.trim().split('\n').forEach(line=>{const [name,zh,reason]=line.split('~');candidates.push({name,zh,reason,selected:false,mapsUrl:maps(`${name} ${area}`)});});
    zones.push({id,title,dates,window,anchor,note,area,mapsUrl:maps(`restaurants ${area}`),candidates});
  }
  zone('ferry','轮渡大楼午餐',[0],'9月29日 · 14:10—14:45','Ferry Building（轮渡大楼）','Ferry Building San Francisco','只留35分钟时优先柜台简餐；海鲜桌餐需要延长至60—75分钟，并相应减少下午逛街时间。',`
Gott’s SF Ferry Building~戈茨轮渡大楼店~4.3~2580~240-380~W~就在轮渡大楼，点餐直接，适合落地第一餐。~汉堡、薯条；饮料按需~1 Ferry Building San Francisco
Hog Island Oyster Co.~霍格岛生蚝餐厅~4.6~4166~450-800~W~海鲜有地方特色；排队超过20分钟不等，避免压缩金门大桥时间。~蛤蜊浓汤、生蚝；生食按个人接受度选择~1 Ferry Building San Francisco
Perry’s Embarcadero~佩里滨海大道店~4.2~1212~320-480~R~想坐下吃完整午餐时选；不是轮渡大楼内档口。~汉堡或三明治~155 Steuart St San Francisco
Terrene~特林餐厅~4.1~246~420-600~R~适合需要室内桌餐的备选，价格高于柜台简餐。~沙拉、主食~8 Mission St San Francisco
Harborview Restaurant & Bar~海港景粤菜餐厅~4.3~1950~500-850~R~想吃中餐可选；留足桌餐时间，少量点菜。~点心、炒面~4 Embarcadero Center San Francisco
La Mar Cocina Peruana San Francisco~拉玛秘鲁餐厅~4.5~5013~900-1500~R~升级用餐备选，不作为今天短午餐首选。~海鲜、秘鲁菜~Pier 1.5 San Francisco`, `Pier 23 Cafe Restaurant & Bar~23号码头咖啡餐厅~地图当次显示周三才营业，周二不作可靠午餐安排。
Waterbar Restaurant~水吧海鲜餐厅~价位高，落地短午餐不优先。
Boulevard~林荫大道餐厅~主要是晚餐时段，不适合14点午餐。
Angler~垂钓者海鲜餐厅~费用和用餐时间都超过本段简餐需要。`);
  zone('japantown','日本城晚餐',[0],'9月29日 · 19:45左右','Queen Anne Hotel（安妮女王酒店）返回方向','Japantown San Francisco','当天飞行加观光后，不为热门店长时间站着排队。主食店候位超过20分钟，直接换同区下一家。',`
HINODEYA Ramen Japantown~日出屋日本城拉面~4.5~3323~280-400~Q~热汤面比长桌餐更适合第一晚；官网列周二营业至22点。~高汤拉面~1737 Buchanan St San Francisco
Udon Mugizo - SF~麦藏乌冬面旧金山店~4.7~2544~300-440~Q~评分高，小红书有明确探店；也有排队超过一小时的记录，不硬等。~明太子奶油乌冬或汤乌冬~1581 Webster St San Francisco
Kui Shin Bo~贪吃坊日料~4.4~886~220-350~Q~同一商场范围内的平价替换，比专门开车找店省事。~定食、面饭~22 Peace Plaza San Francisco
Fermentation Lab~发酵实验室餐吧~4.5~200~350-600~R~想坐下吃餐吧主食时的升级备选，先确认晚餐余位。~主食，不点酒~1700A Post St San Francisco
Marufuku Ramen~丸福拉面~4.5~3121~300-440~Q~特色豚骨拉面，热门时需候位，放在有余力时。~豚骨拉面~1581 Webster St Ste 235 San Francisco
Yakitori Edomasa~江户政烧鸟~4.5~646~350-550~R~可以坐下慢吃，串烧按份点容易超支。~鸡肉串、米饭~1581 Webster St San Francisco`, `YUJI~裕司日料~高价套餐，不适合落地后简便晚餐。
An Japanese Restaurant~安日料~高价主厨套餐，时间与预算不匹配。
Oma San Francisco Station~欧玛寿司~高价套餐，今晚不优先。
K Dragon cuisine~龙记餐厅~查询显示约20点关门，19:45到达余量不足。`);
  zone('paloalto','斯坦福参观后午餐',[1],'9月30日 · 10:50—11:35','Stanford Shopping Center（斯坦福购物中心）','Stanford Shopping Center Palo Alto','原计划的戈茨镇村购物中心店仍可保留；这里六家是另一处商场内的替换，需重新停车，不是校园内餐厅。11点才开门的店尽量点简餐，11:40前离开。',`
The Melt~融芝汉堡店~4.5~2405~180-300~W~周三官网10点开门，能承接较早午餐，露台座位适合歇脚。~芝士汉堡或烤芝士三明治
Tender Greens~嫩绿轻食~4.2~956~280-420~W~不想连续吃汉堡时选蛋白质加蔬菜餐盘。~烤肉蔬菜餐盘
World Wrapps~世界卷饼~4.5~272~220-330~W~柜台简餐，适合赶下一站苹果园区。~卷饼或饭碗
True Food Kitchen~真食厨房~4.2~2995~320-500~R~菜品相对清爽；11点开门后桌餐只留45分钟略紧。~沙拉、饭碗
Bazille at Nordstrom~诺德斯特龙巴齐尔餐厅~4.3~170~350-550~R~百货内桌餐备选，适合临时减少校园参观后慢吃。~三明治、沙拉
Pacific Catch~太平洋渔获餐厅~4.2~820~350-550~R~想吃鱼类和饭碗时选择；11点开门。~鱼肉饭碗`, `Zaytinya~扎伊蒂尼亚地中海餐厅~地图显示晚间营业，不作早午餐。
Nola~新奥尔良风味餐厅~在市中心，需要额外转场停车。
RH Rooftop Restaurant at RH Palo Alto~帕洛阿尔托屋顶餐厅~用餐较慢且价格高。
Tootsie's At The Stanford Barn~斯坦福谷仓咖啡~不在这处购物中心内，今天少换停车点。`);
  zone('paso','帕索罗布尔斯途中休息',[1],'9月30日 · 15:35左右，按疲劳调整','Target Paso Robles（帕索罗布尔斯塔吉特百货）','Paso Robles California','正常只上洗手间、补水休息20分钟，不新增正餐。以下仅在午餐没吃好或提前到达时替换；坐下吃饭至少多留45分钟，可能减少月光石海滩停留。不要酒后开车。',`
El Rinconcito~小角落墨西哥餐厅~4.2~52~180-300~Q~靠近原休息片区，想补主食时比进老城省事。~玉米卷或饭碗~2307 Theatre Dr Paso Robles
Ciao Papi at River Lodge~河畔旅馆意餐~4.2~19~300-450~R~在南侧道路片区；评价样本较少，作为坐下休息备选。~披萨或意面~1955 Theatre Dr Paso Robles
Firestone Walker Taproom Restaurant~火石行者餐厅~4.5~2597~300-480~Q~当地餐厅，完整主食选择多；驾驶者只喝无酒精饮品。~汉堡、三明治~1395 Vendels Cir Paso Robles
Enoteca~艾诺特卡餐厅~4.5~188~350-550~R~酒店餐厅型备选，先确认下午是否供热食。~简餐，按当时菜单~206 Alexa Ct Paso Robles
Etto Pasta Bar~埃托意面吧~4.6~326~320-480~R~可换意面，但需要驶离原休息点；不是20分钟快停。~意面~3070 Limestone Way Paso Robles
TASTE! craft eatery~味觉创意餐厅~4.5~697~320-480~R~进市中心的替代午餐，只有愿意压缩海边时间才选。~小份主食组合~810 11th St Paso Robles`, `Grace & Rose~格蕾丝与玫瑰餐厅~17点才开门，错过下午休息窗口。
in bloom~花开餐厅~晚餐时段且绕行，不用于途中休息。
Smash N Roll~汉堡卷餐厅~评分较低，没有优于同区备选的理由。
Sabor & Sazón~风味餐厅~在市中心且费用偏高，不必专程绕路。`);
  zone('cambria','月光石海滩与坎布里亚晚餐',[1],'9月30日 · 19:15入座','Moonstone Beach（月光石海滩）','Cambria California','海边日落后立即吃饭。首选官网晚餐17:00—20:30；罗宾餐厅周三约20点结束，不把它当21点宵夜。镇中心餐厅需短程开车，晚间不沿暗路走回酒店。',`
Moonstone Beach Bar & Grill~月光石海滩餐吧~4.3~3343~350-650~Q~不离开海岸片区；官网有室内及海景露台，最贴合今晚路线。~蛤蜊浓汤、鱼肉玉米卷或炸鱼薯条~6550 Moonstone Beach Dr Cambria
Linn’s Restaurant~琳恩餐厅~4.6~3938~320-500~Q~镇中心家常餐与派；比高价海鲜套餐容易控制费用。~主食、两人分享一份派~2277 Main St Cambria
Robin’s Restaurant~罗宾餐厅~4.6~1753~450-700~R~想坐下来吃一顿完整晚餐可提前订19:00或19:15，别晚到。~当季主菜~4095 Burton Dr Cambria
Indigo Moon~靛蓝月亮餐厅~4.5~655~450-700~R~镇中心桌餐备选；开车前先确认晚间余位。~海鲜或肉类主菜~1980 Main St Cambria
Sea Chest Oyster Bar~海箱生蚝吧~4.5~1266~650-1000~W~现金支付、现场候位；海鲜特色明确，但排队和预算都不如首选可控。~海鲜主菜~6216 Moonstone Beach Dr Cambria
Old Stone Station~老石站餐厅~4.2~424~320-480~Q~主食型备用，不必为某一家网红店耽误休息。~汉堡或美式主菜~713 Main St Cambria`, `The Hidden Kitchen - Cambria~隐秘厨房坎布里亚店~不是周三晚餐可靠选择。
Brydge~布里奇餐厅~地图当次显示周四才营业。
The Sow’s Ear~母猪耳餐厅~可吃但与已有镇中心桌餐重复，保留更顺路的六家。
Cambria Mimosas Steak & Seafood~坎布里亚米莫萨餐厅~与现有美式主餐重复，不另加用餐点。`);
  zone('santabarbara','亨德里海滩早午餐',[2],'10月1日 · 10:45—11:45','Boathouse at Hendry’s Beach（亨德里海滩船屋餐厅）','Santa Barbara California','首选就在海滩；其余是开车替换，不是步行隔壁。若首选长队，优先改简餐而不是再游览码头；12点离开，保留洛杉矶还车冗余。',`
Boathouse at Hendry’s Beach~亨德里海滩船屋餐厅~4.5~4980~350-550~W~同学推荐且有小红书实地记录；海景和停靠路线匹配。~班尼迪克蛋；11点后可选午餐~2981 Cliff Dr Santa Barbara
Shoreline Cafe~海岸线咖啡餐厅~4.4~1835~320-500~Q~另一处海边座餐，只有首选排队太长才开车换。~早餐盘或三明治~Shoreline Cafe Santa Barbara
Brophy Bros. Santa Barbara~布罗菲兄弟海鲜餐厅~4.6~4246~400-650~Q~港口海鲜替代，停车和入座另留时间，不同时打卡两家。~蛤蜊浓汤、海鲜主食~Brophy Bros Santa Barbara Harbor
Meun Fan Thai Cafe~梦饭泰餐~4.4~185~220-350~Q~在梅萨片区，想吃热饭比去市中心更直接。~炒饭、泰式炒面~1819 Cliff Dr Santa Barbara
Meet Up Chinese Cuisine~遇见音乐餐厅~4.5~549~300-480~Q~想吃中餐时的驾车备选，11点开门。~炒饭、家常菜~2251 Las Positas Rd Santa Barbara
Santa Barbara FisHouse~圣塔芭芭拉鱼屋~4.4~3069~450-700~R~海鲜桌餐替代，11:30才开门，若选它须相应提前收尾海滩。~鱼肉主菜~101 E Cabrillo Blvd Santa Barbara`, `Secret Bao~秘密包餐厅~11:30开始且需进市中心，窗口紧。
Szechuan Restaurant~四川餐厅~11:45才开始营业，影响12点离开。
PANG ZI NOODLE SHOP~胖子面馆~下午营业且方向绕路。
Sama Sama Kitchen~萨玛萨玛厨房~12点才开始，已到计划离开时间。`);
  zone('hollywood','好莱坞酒店周边',[2,3,5,6],'入住晚餐／返程后简餐','Loews Hollywood Hotel（洛伊斯好莱坞酒店）','Hollywood Highland Los Angeles','优先酒店连接商场及主街店，不为了便宜绕进小巷。10月1日还车后只选一家；乐园回来太晚时先查厨房是否仍接单。',`
The Win-Dow Hollywood~温多好莱坞汉堡店~4.5~326~150-280~W~酒店旁商场内的简餐，费用低、少转场；不是豪华正餐。~汉堡、薯条~6801 Hollywood Blvd Ste 257 Los Angeles
Johnny Rockets~约翰尼火箭汉堡~4.3~1732~220-350~W~同一商场内，可作为首选排队时的直接替换。~汉堡套餐~6801 Hollywood Blvd Los Angeles
Mel’s Drive-In Hollywood~梅尔好莱坞美式餐厅~4.2~4390~300-460~Q~传统美式餐厅，适合想坐下来吃完整一餐。~早餐盘、三明治或汉堡~1660 Highland Ave Los Angeles
Hard Rock Cafe~硬石餐厅~4.4~5841~400-650~R~位置近、主题明确；比普通汉堡店贵，音乐也可能较响。~汉堡或烤肉主食~6801 Hollywood Blvd Ste 105 Los Angeles
La Popular Hollywood~拉波普拉墨西哥餐厅~4.5~109~400-650~R~同一商场内换口味，评价样本较少。~玉米卷、墨西哥主菜~6801 Hollywood Blvd Ste 255 Los Angeles
Running Goose~奔跑的鹅餐厅~4.6~799~400-650~R~愿意多走一段时选，适合不赶时间的晚餐。~当季主食或小盘组合~1620 N Cahuenga Blvd Los Angeles`, `The Backyard~后院餐厅~距离更远且价格偏高。
Petit Trois~小三法餐厅~需要额外转场，不适合酒店附近歇脚。
Musso & Frank Grill~穆索与弗兰克餐厅~历史特色明确但价格高，已有卡利晚餐。
Cafe Cancun~坎昆咖啡馆~下午较早结束，不适合作为返酒店晚餐。`);
  zone('universal','环球影城园内',[3],'10月2日 · 午餐／下午休息','Universal Studios Hollywood（好莱坞环球影城）','Universal Studios Hollywood California','只保留园内六家。上园区玩时就近吃，不为餐厅反复上下扶梯；主题餐厅不等于高评分。餐饮时间以当天园区营业和官方应用为准。',`
The Three Broomsticks~三把扫帚餐厅~4.2~891~320-460~W~上园区主餐首选；英国主题和正餐更适合坐下恢复体力。~烤鸡、炸鱼薯条~100 Universal City Plaza California
Krusty Burger~小丑汉堡~4.0~3690~240-360~W~辛普森区域的直接备选，不为吃饭出园。~汉堡套餐~49 Production Plaza Universal Studios Hollywood
Minion Cafe~小黄人咖啡馆~3.7~117~240-380~W~上园区顺路，适合简餐；不是奥兰多同名店。~三明治或当日套餐~Minion Cafe Universal Studios Hollywood California
Jurassic Cafe~侏罗纪咖啡馆~3.0~307~260-420~W~只有正在下园区且很累时优先；评分偏低，不专程打卡。~主食餐盘~Jurassic Cafe Universal Studios Hollywood
Toadstool Cafe~奇诺比奥咖啡馆~3.1~1377~320-480~R~马里奥主题拍照优先于餐食品质；订到合适时间才选。~马里奥汉堡、路易吉三明治~127 James Stewart Ave California
Hollywood & Dine~好莱坞食堂~3.0~130~230-380~W~位置方便时兜底，评分不高，不作为美食目标。~当日快餐~4461 Main Way Universal California`, `Cafe Sierra~希尔顿海鲜餐厅~园外酒店内，午餐需要出园绕行。
Buca di Beppo Italian Restaurant~布卡意餐~城市大道园外餐厅，更适合离园后。
The Front Yard~前院餐厅~不在园内，需要额外交通。
The Toothsome Chocolate Emporium & Savory Feast Kitchen~齿轮巧克力工坊~园外且用餐较慢，不作园内休息点。`);
  zone('grove','农夫市场与格罗夫午餐',[4],'10月3日 · 12:15左右','The Original Farmers Market（原始农夫市场）','6333 W 3rd St Los Angeles','晚餐已有卡利，午餐以主食为主，不点多道大餐。市场公共座位不保证有空位；人多先看座位再决定买哪家。',`
Noodle Art~一面之缘~4.7~445~200-320~W~小红书有具体探店；在市场内，想吃热面最直接。~炒拉条、牛肉面，口味评价有分歧
Pampas Grill Churrascaria~潘帕斯巴西烤肉~4.5~2205~280-440~W~按重量取餐，可控制份量；肉取太多容易超预算。~烤肉配蔬菜和米饭
Gott’s LA Farmers Market~戈茨洛杉矶农夫市场店~4.3~62~240-380~W~柜台点单，适合不想挑档口时；评价数量目前不多。~汉堡、薯条
Du-Pars Restaurant and Bakery~杜帕餐厅与烘焙~4.3~3126~300-460~Q~想要完整桌餐、避免公共座位时备选。~煎饼、三明治
El Granjero Cantina~农夫墨西哥餐厅~4.4~767~350-550~Q~在市场片区换墨西哥口味，不增加转场。~玉米卷、主食碗
Savta~萨夫塔餐厅~4.5~161~400-600~R~桌餐升级备选；今晚还有正式晚餐，控制份量。~沙拉、披萨或当季主菜`, `Oste~奥斯特意餐~离市场有距离，不为午餐额外走路。
Bacari W. 3rd~第三街巴卡里餐厅~主要晚餐取向。
Sticky Rice~糯米泰餐~不在市场内，需要额外步行。
Ettore Vino e Cucina~埃托雷意餐酒馆~与晚间卡利安排重复，午餐不再安排慢餐。`);
  zone('griffith','天文台前山下休息',[4],'10月3日 · 下午，按体力选','Los Feliz（洛斯费利斯街区）','Los Feliz Los Angeles','这是去天文台前的山下替换，不是山顶步行可达的咖啡店。如果已在天文台，不为吃东西下山再上山。下午只点饮品或小食，别影响卡利晚餐。',`
Alcove~壁龛咖啡餐厅~4.5~2167~130-260~Q~咖啡和蛋糕适合短休息；价格是两人饮品小食，不是一顿正餐。~咖啡、分享一份蛋糕~1929 Hillhurst Ave Los Angeles
House of Pies~派屋餐厅~4.3~3999~140-280~Q~想坐下吃甜点的平价替换，不需要点完整晚饭。~派、咖啡~1869 N Vermont Ave Los Angeles
Fred 62~弗雷德62美式餐厅~4.5~2136~180-320~Q~美式餐厅，可点小食；适合同行者想咸食时。~三明治或分享小食~1850 N Vermont Ave Los Angeles
Home Restaurant~家园餐厅~4.6~3228~250-450~R~坐下慢休息时选，主餐份量不必吃满。~沙拉、轻食~1760 Hillhurst Ave Los Angeles
Figaro Bistrot~费加罗法式小馆~4.4~1436~200-380~Q~咖啡与法式点心备选；不要再叠加一顿法式正餐。~咖啡、点心~1802 N Vermont Ave Los Angeles
Messhall Kitchen~食堂厨房~4.4~1126~280-480~R~山下桌餐备用；如果只是累了，前几家更合适。~分享前菜~4500 Los Feliz Blvd Los Angeles`, `Cafe Los Feliz~洛斯费利斯咖啡馆~16点结束，下午行程稍晚就赶不上。
The Dresden Restaurant & Lounge~德累斯顿餐厅酒廊~偏夜间餐酒体验，今天已有晚餐。
Little Dom’s~小多姆意餐~正餐取向，不必在卡利前再吃。
Los Feliz Cafe~洛斯费利斯早餐餐厅~距离与较早结束时间均不占优。`);
  zone('disney','迪士尼主园餐厅',[5],'10月4日 · 午餐／下午休息／晚餐','Disneyland Park（迪士尼乐园主园）','Disneyland Park Anaheim','午餐优先广场餐厅，西侧游玩时用饿熊替换；不为餐厅跨园。下面有快餐和预约桌餐，选一家即可。两人价格不含人物早餐或演出套餐。',`
Plaza Inn~广场餐厅~4.4~559~280-430~W~午晚餐是柜台式，室内外有座位；小红书有实际炸鸡和休息体验。~炸鸡套餐、当日鱼类主菜
Hungry Bear Barbecue Jamboree~饿熊烧烤餐厅~3.9~956~260-400~W~西侧园区玩累时就近，官方确认有遮棚座位。~烧烤餐盘
The Tropical Hideaway~热带秘境小食店~4.4~147~140-260~W~适合下午冰品和短休息，不代替完整正餐。~菠萝冰品、包点
Carnation Cafe~康乃馨咖啡餐厅~3.9~587~400-650~R~美国小镇大街桌餐，想稳定坐下休息可提前订。~美式主菜
Cafe Orleans~新奥尔良咖啡餐厅~4.2~1490~450-700~R~新奥尔良区域桌餐；没有预约时别为候位耗太久。~三明治或新奥尔良风味主菜
Blue Bayou Restaurant~蓝湾餐厅~4.1~1958~850-1300~R~加勒比海盗场景内用餐，属于环境升级选项，不是性价比首选。~主菜套餐`, `Goofy’s Kitchen~高飞厨房~在迪士尼酒店内，不在主园。
Tangaroa Terrace Tropical Bar & Grill~坦加罗亚热带餐吧~园外酒店餐厅，单园当天不绕出。
Carthay Circle Restaurant~卡塞圆环餐厅~位于加州冒险园，主园票不能进入。
Lamplight Lounge~灯光酒廊~位于加州冒险园，不符合这次单园门票。`);
  zone('beverly','比弗利购物中途',[6],'10月5日 · 午后','Rodeo Drive（罗迪欧大道）','Beverly Hills California','这一带正式餐厅普遍偏贵。只想歇脚就咖啡轻食，不必为了坐一会儿点高价套餐。下面低价首选是饮品加小食预算。',`
La La Land (Reserve)~啦啦乐园咖啡精选店~4.3~175~140-260~W~购物途中喝咖啡更合适；店名的精选不代表必须预约。~咖啡、吐司~341 N Canon Dr Beverly Hills
Nua~努阿地中海餐厅~4.5~414~350-600~R~想吃完整午餐时优先，比同区高价餐厅更易控制。~沙拉、主食~403 N Crescent Dr Beverly Hills
Il Pastaio~意面坊~4.4~2782~450-750~R~位置顺路、意面特色明确；人多就不要为了打卡排长队。~一人一份意面~400 N Canon Dr Beverly Hills
Via Alloro~月桂街意餐~4.3~971~450-750~R~意餐桌餐替换，适合预约到合适时段后坐下吃。~意面、沙拉~301 N Canon Dr Beverly Hills
Azur Beverly Hills~蔚蓝比弗利餐厅~4.7~146~600-1000~R~较贵的升级选项，评价数少，不仅凭高分排前。~按当季菜单~453 N Canon Dr Beverly Hills
Khinkali House~欣卡利格鲁吉亚餐厅~4.8~180~550-900~R~想尝不同菜系时选，预算高于咖啡和简餐。~格鲁吉亚饺子、主食~345 N Canon Dr Beverly Hills`, `Dante Beverly Hills~但丁比弗利餐厅~高价屋顶体验，今天不额外安排。
Jade Beverly Hills~翡翠比弗利日料~晚间营业，不适合午后歇脚。
Bad Roman~坏罗马人餐厅~价格高且评论样本少。
Wally’s Beverly Hills~沃利比弗利餐厅~酒和高价餐饮取向，今天更需要简单休息。`);
  zone('santamonica','圣莫尼卡逛街与晚餐',[6],'10月5日 · 下午至晚餐','Third Street Promenade（第三街步行街）','Santa Monica California','从码头返回商业街吃饭，不为了餐厅沿海滩继续走远。先看有无座位；下午早到时不要选17点以后才开门的店。',`
The Curious Palate~好奇味蕾餐厅~4.7~857~320-480~Q~购物中心内，适合逛累后坐下吃；不必单独赶去海边餐厅。~三明治、沙拉~395 Santa Monica Pl 3rd Floor
UOVO Santa Monica~乌沃意面圣莫尼卡店~4.6~1926~350-550~Q~意面专门店，位置在第二街；候位长就换下一家。~意面~1320 2nd St Santa Monica
Bruxie~布鲁西炸鸡华夫饼~4.5~1483~220-340~W~步行街内简餐，想少花一些时比正式意餐合适。~炸鸡华夫饼三明治~1412 3rd Street Promenade Santa Monica
Barney’s Beanery~巴尼美式餐吧~4.2~1738~300-460~R~步行街上有完整主餐，环境热闹，不是安静咖啡厅。~汉堡或三明治~1351 3rd Street Promenade Santa Monica
North Italia~北意餐厅~4.4~2307~420-650~R~愿意坐下来慢吃时选择，晚餐可提前预约。~意面或披萨~1442 2nd St Santa Monica
Ugo Trattoria~乌戈意大利小馆~4.4~155~320-480~Q~步行街晚餐替换，地图显示16:30开始。~意面~1237 3rd Street Promenade Santa Monica`, `1212 Santa Monica~1212圣莫尼卡餐厅~17点才营业，午后休息不适合。
Tar & Roses~焦香与玫瑰餐厅~17:30开始且费用高。
LouLou Santa Monica~露露圣莫尼卡餐厅~价格较高，非本次平价优先。
All’antico Vinaio~老酒商三明治~更偏快捷三明治，本轮优先可坐下吃饭的其他候选。`);
  zone('flamingo','弗拉明戈与林克步行街',[7,8],'10月6日早晚餐／10月7日返团后','Flamingo Las Vegas（弗拉明戈酒店）','LINQ Flamingo Las Vegas','10月6日16:45吃早晚餐，17:30左右结束；直升机前不喝酒。10月7日返团时间不确定，只考虑仍营业的简餐；早餐店不能当宵夜。',`
Jaburritos~日式寿司卷饼店~4.5~2042~240-300~W~适合直升机前的简餐；两份主食接近250元预算，饮料与加料另算。~寿司卷饼或饭碗~3545 Las Vegas Blvd S Suite L12 Las Vegas
In-N-Out Burger LINQ~林克步行街进出汉堡~4.5~15315~160-220~W~预算最低的主食备选；柜台排队，座位需要现场找。~汉堡、分享薯条~3545 Las Vegas Blvd S Suite L24 Las Vegas
Haute Doggery~精品热狗店~4.0~744~180-250~W~步行街简餐，适合不想吃太多的晚上。~热狗、分享配菜~3545 Las Vegas Blvd S Las Vegas
Yard House~庭院餐厅林克店~4.5~7072~300-450~Q~想要正式桌餐时升级选择；高于两人250元日常目标。~两份主食，不点酒~3545 S Las Vegas Blvd Las Vegas
Off the Strip~大道之外餐厅~4.3~2836~300-460~R~同一商业区的坐下用餐备选，16:45较避开高峰。~汉堡、三明治~3535 Las Vegas Blvd S Las Vegas
Nook Express~林克快捷咖啡~3.4~63~140-280~W~地图显示24小时，只作为返团很晚的补给，不以口味评分推荐。~三明治、点心~3535 Las Vegas Blvd S Las Vegas`, `Hash House A Go Go at The LINQ~林克大份早午餐~地图显示15点结束，不能拿来安排16:45晚餐。
The Boss Cafe~老板咖啡馆~17点结束，行程一晚点就不稳。
Gordon Ramsay Burger Flamingo~戈登拉姆齐弗拉明戈汉堡店~两人约400—650元，品牌溢价不适合这顿简餐。
Battista’s Hole in the Wall~巴蒂斯塔意餐~两人约450—650元，完整桌餐留给不赶集合的晚上。`);
  zone('venetian','巨型球后午餐与购物',[9],'10月8日 · 12:45—14:15','The Venetian Resort（威尼斯人度假村）','The Venetian Resort Las Vegas','11点看巨型球后顺路到威尼斯人。午餐加逛街共90分钟，14:15前收尾，再取行李换酒店；不为了餐厅另去大道另一端。',`
Grand Lux Cafe~威尼斯人格兰德豪华咖啡餐厅~4.5~8166~320-500~Q~正式座位、菜单选择多，适合看完秀恢复体力；指定威尼斯人店而非帕拉佐店。~三明治、主食沙拉~3355 Las Vegas Blvd S Las Vegas
Turkey and the Wolf Las Vegas~火鸡与狼三明治~4.5~64~220-340~W~新美食广场柜台餐，想留更多时间购物时选。~三明治~Via Via Food Hall Venetian Las Vegas
All’Antico Vinaio~老酒商威尼斯人三明治店~4.3~105~280-420~W~在美食广场内，适合简餐；大份三明治可按饭量分享。~意式三明治~Via Via Food Hall Venetian Las Vegas
Cañonita~卡尼奥塔墨西哥餐厅~4.3~1795~420-650~R~运河区桌餐，坐下休息和看室内景观一起完成。~墨西哥主菜~3377 S Las Vegas Blvd Las Vegas
Canaletto Ristorante Veneto~卡纳莱托意餐~4.2~1401~450-750~R~想在运河购物区慢吃意餐时选；别点过多道。~意面~3377 S Las Vegas Blvd Unit 2440 Las Vegas
SUGARCANE~甘蔗餐厅~4.3~1124~400-650~R~酒店内桌餐替换，选12:45附近的预约较稳。~主食、小盘菜~3355 S Las Vegas Blvd Las Vegas`, `BOA Steakhouse Las Vegas~博亚牛排馆~晚间开门，不适合本次午餐。
Bouchon at The Venetian~威尼斯人布雄法餐~所查当天显示晚间营业，不能按午餐默认。
Fire of Brazil Express~巴西之火快捷餐~评分偏低，简餐另有更好候选。
Curry Pot~咖喱锅餐厅~评分低，不作为这次休息餐首选。`);
  zone('bellagio','百乐宫演出前后',[9],'10月8日 · 17:20轻食／20:15晚餐','O Theatre at Bellagio（百乐宫O秀剧场）','Bellagio Las Vegas','17:20到百乐宫后不要再跨马路找正餐。演前选馆内轻食，18点左右入场；跨街的平价店只放在演后，并接受额外走路。',`
Bellagio Patisserie~百乐宫甜点咖啡~4.2~1436~180-300~W~演前垫肚子最省转场；只算饮品和轻食，不是完整晚餐。~咖啡、三明治或点心~3600 S Las Vegas Blvd Las Vegas
Earl of Sandwich~三明治伯爵~4.3~3631~200-320~W~演后想省钱可以选；在好莱坞星球酒店内，不是百乐宫隔壁柜台。~热三明治~3667 Las Vegas Blvd S Las Vegas
Mon Ami Gabi~我的朋友加比法式餐厅~4.7~34159~500-850~R~演后想坐下吃好一点时选，需过街到巴黎酒店；建议订20:30以后。~法式主菜~3655 Las Vegas Blvd S Las Vegas
Noodles~百乐宫面馆~3.6~1352~380-650~R~馆内少走路，但评分一般；小红书推荐与地图评分有分歧。~烧味饭、汤面优先于复杂菜~3600 S Las Vegas Blvd Las Vegas
Dirt Dog - The Strip at Grand Bazaar~大道热狗店~4.6~3067~200-320~W~演后平价热狗替换，跨街走到集市；不保证安静座位。~热狗~3649 S Las Vegas Blvd Las Vegas
Snacks At The Bellagio~百乐宫快捷小食~3.3~771~280-420~W~只为累了不想再走而保留，24小时并不代表好吃。~简单热食~3600 S Las Vegas Blvd Las Vegas`, `Eggslut~鸡蛋三明治店~14点结束，不适合今晚。
Sadelle’s~萨黛尔餐厅~地图显示15点结束，晚餐不可直接套用。
The Henry~亨利餐厅~所查时段14点结束、22点恢复，中间不适合演前后。
Palio~帕里奥咖啡~白天营业，不作演出后选项。`);
  zone('fontaine','枫丹白露酒店休息与晚餐',[9,10],'10月8日入住后／10月9日晚餐','Fontainebleau Las Vegas（拉斯维加斯枫丹白露酒店）','Fontainebleau Las Vegas','酒店休息时优先内部简餐，避免为了吃饭再次打车。早午餐店只用于白天；想坐正式餐厅可选酒馆或附近美式餐厅。',`
Miami Slice~迈阿密切片披萨~4.0~256~180-300~W~酒店美食广场内，吃完直接回房；有明确小红书同店推荐。~切片披萨~2777 S Las Vegas Blvd Las Vegas
Nona’s~诺娜三明治~4.8~34~200-350~W~酒店内简餐，少走路；评分样本很少，不把4.8等同于稳定高口碑。~意式三明治~2777 S Las Vegas Blvd Las Vegas
Peppermill Restaurant and Fireside Lounge~胡椒磨美式餐厅~4.5~20474~350-550~R~传统拉斯维加斯美式风格，份量较大；离开酒店后再走一段才到。~美式早餐盘、三明治~2985 Las Vegas Blvd S Las Vegas
The Tavern~枫丹白露酒馆~3.8~158~420-600~R~酒店内桌餐，便利胜过评分；想少走路时的完整晚餐。~美式主菜~2777 S Las Vegas Blvd Las Vegas
La Fontaine~拉芳丹餐厅~4.5~373~500-900~R~只作白天早午餐升级，不是晚上18点晚餐选择。~早午餐主菜~2777 S Las Vegas Blvd Las Vegas
Mother Wolf Las Vegas~母狼意餐~4.5~882~1000-1600~R~酒店内较贵的一餐备选，不放进日常平价推荐。~意面、披萨~2777 S Las Vegas Blvd Las Vegas`, `La Côte~海岸泳池餐厅~泳池区域和营业安排有限制，不作为普通休息餐。
Komodo Las Vegas~科莫多餐厅~价位高，已有较贵晚餐备选。
KYU Las Vegas~久餐厅~高价亚洲餐饮，不符合这段省事简餐。
Don’s Prime~唐氏牛排馆~高价牛排，非本段性价比优先。`);
  zone('artsoutlets','艺术区午餐备选',[10],'10月9日 · 11:30—12:30，可替换奥莱午餐','Las Vegas Arts District（拉斯维加斯艺术区）','Arts District Las Vegas','原计划仍可在奥莱吃午餐。想选以下餐厅，就缩短艺术区闲逛、提前吃饭，12:30左右再去奥莱；只替换，不额外加一餐。逛奥莱累了用商场座位休息，不打车返回艺术区。',`
Esther’s Kitchen~埃丝特厨房~4.6~5186~350-600~R~本地特色和小红书具体探店都有，午市比晚餐更适合这天。~意面、分享酸面包~1131 S Main St Las Vegas
1228 Main~主街1228餐厅~4.7~440~300-480~R~烘焙和完整主食都有，适合提前吃午餐。~三明治、烘焙~1228 S Main St Las Vegas
Letty’s de Leticia’s Cocina~莱蒂墨西哥厨房~4.5~1480~200-320~Q~价格较低，想留预算购物时选。~玉米卷、主食~807 S Main St Las Vegas
The Great Greek Mediterranean Grill~大希腊地中海烤肉~4.6~656~200-330~W~饭碗和烤肉简餐，适合快速吃完去购物。~烤肉饭碗~801 S Main St Las Vegas
Makers & Finders~创客与寻者咖啡~4.4~2773~300-480~Q~早午餐和咖啡选择，适合坐下歇脚。~三明治、咖啡~1120 S Main St Las Vegas
Taverna Costera~海岸小酒馆~4.5~528~320-500~R~艺术区内桌餐替换，不需要离开街区。~主食~1031 S Main St Las Vegas`, `Main St. Provisions~主街食材餐厅~16:30才营业，和午餐时段不匹配。
Palate - Las Vegas~味蕾餐厅~所查时段较晚营业，不作为11:30午餐首选。
Arts District Kitchen~艺术区厨房~与已有美式餐厅重复，六家中保留更明确的风格差异。
KJ’s Social~凯杰社交餐厅~评论数量较少，优先其他候选。`);
  zone('koreatown','纽约酒店与韩国城',[11,12,13,14],'10月10日抵达晚餐／酒店附近备用','Executive Hotel Le Soleil New York（纽约勒苏蕾行政酒店）','Koreatown Manhattan New York','10月10日可能20:30后才到酒店，不为餐厅赶固定预约。之后几天返酒店也可使用；10月12日赛前必须17:45前离开餐厅，不能等长队。',`
Tosokchon NYC~土俗村纽约店~4.6~1140~300-460~R~汤饭型正餐，适合飞行后吃热食；晚到时先确认厨房。~参鸡汤、汤饭~14 E 33rd St New York
Anytime Kitchen~随时韩式厨房~4.6~2573~300-480~R~韩国城内，正常主食比较容易控制费用。~韩式主食~23 W 32nd St 3rd floor New York
Gammeeok~甘味屋~4.1~1583~300-460~R~地图显示24小时，作为航班晚点后的热汤备选。~牛骨汤饭~9 W 32nd St 2nd floor New York
O2 Hot Stone BBQ House~氧气石锅烤肉店~4.6~120~320-500~R~评论样本不多，优先选单人主食而非整套烤肉。~石锅饭~9 W 32nd St New York
New Wonjo~新元祖韩式餐厅~4.3~2732~450-750~R~晚间用餐时间较宽松；不必每人点一套烤肉。~热汤、米饭或分享菜~23 W 32nd St New York
Woorijip~我们家韩式便当~4.5~3106~150-280~W~平价便当，适合白天或提前买；地图显示21点结束，不作为落地晚点兜底。~便当、饭卷~12 W 32nd St New York`, `miss KOREA BBQ~韩国小姐烤肉~价位偏高，落地晚餐不用大餐。
Osamil~五三一韩式餐吧~更适合慢吃和酒饮，不优先。
Oncheon NYC~温泉韩餐~费用比汤饭简餐高。
SEOUL SALON NYC~首尔沙龙~餐酒体验取向，飞行后不优先。`);
  zone('soho','苏豪区下午咖啡与小食',[12],'10月11日 · 卡萨莫诺午餐后至去剧院前','Prince Street（王子街）','Prince Street SoHo New York','这段只选一处喝咖啡或分食披萨，不按完整第二顿午餐计费。Google Maps（谷歌地图）2026年9月查询评分和位置；La Cabra（拉卡布拉咖啡）的小红书笔记也记录了排队与座位少，候位超过10分钟直接换店。约16:35要去王子街地铁站。',`
Prince Street Pizza~王子街披萨~4.4~9234~70-120~W~小红书认为披萨值得尝试，也提到价格较高与排队；顺路且队短才买一两片分食。~辣香肠方形披萨~27 Prince St New York
La Cabra~拉卡布拉咖啡~4.5~1203~100-180~W~小红书多次提到咖啡与面包，但座位不稳定；只作短休，不为排队压缩剧院时间。~咖啡、豆蔻面包~284 Lafayette St New York
Blank Street~空白街咖啡~4.7~610~80-150~W~王子街上较快的咖啡替换，适合边走边喝。~咖啡、烘焙~181 Prince St New York
La Colombe Coffee Workshop~鸽子咖啡工坊~4.2~262~100-180~W~靠近王子街地铁方向的另一处坐下或外带选择，座位以现场为准。~咖啡、烘焙~154 Prince St New York
Drip Drop Café~滴落咖啡馆~4.7~859~80-150~W~在Thompson Street（汤普森街），比王子街主线偏西；适合取消部分购物后坐下。~咖啡、甜点~98 Thompson St New York
Haraz Coffee House~哈拉兹咖啡馆~4.6~801~100-180~W~在Spring Street（春街），只在向西逛苏豪区时使用，避免从王子街来回折返。~咖啡、甜点~210 Spring St New York`, `Frame Cafe Soho~相框咖啡馆~地图评分样本仅64条，不为了它往Kenmare Street绕行。
Joe’s Pizza~乔氏披萨~可作《蜘蛛侠2》关联，但现址不是电影旧店面，且与王子街披萨重复，别两家都排。
Balthazar~巴尔萨泽餐厅~完整桌餐时间与12:45已订午餐冲突。
Black Seed Bagels~黑籽贝果~本段已有午餐，贝果店不作为必吃点。`);
  zone('lowermanhattan','石街与11号码头午餐',[13],'10月12日 · 免费渡轮回程后','Stone Street（石街）','Stone Street New York','Google Maps（谷歌地图）核对了这六家位置和评价；白厅码头→石街→11号码头纯步行约14分钟。10月12日假日实际营业以当天为准。午餐候位超过10分钟就换外带，不误付费渡轮。评分与评论数是查询时快照，会变化。',`
Stone Street Tavern~石街酒馆~4.3~1426~260-400~F~主线首选；美式汉堡、三明治，周一官网11:30开。受免费渡轮影响不锁定预约，现场有位就坐。~汉堡或三明治~52 Stone St New York
Toro Loco~疯牛墨西哥餐厅~4.7~5397~300-480~F~就在石街，想把赛前披萨保留时可换墨西哥主食；桌餐同样要看候位。~玉米卷或墨西哥饭~15 Stone St New York
London & Martin Co.~伦敦与马丁餐厅~4.8~1407~320-500~F~石街另一家坐席选择；不要因高评分牺牲船班。~当日主菜或三明治~6 Stone St New York
Adrienne’s Pizzabar~阿德里安披萨吧~4.4~2596~300-450~F~石街披萨备选；若午餐选它，NBA赛前改为别的简餐，避免一天两顿披萨。~方形披萨~54 Stone St New York
Broadstone Bar & Kitchen~宽石餐吧~4.7~4319~320-500~F~在石街东侧Broad Street（宽街），去11号码头方向顺路。~美式主食~88 Broad St New York
Leo’s Bagels~利奥贝果~4.3~2811~150-280~W~免费渡轮返程晚时最实用的外带备选，3 Hanover Square（汉诺威广场3号）靠近11号码头。~贝果三明治~3 Hanover Square New York`, `Gansevoort Liberty Market~甘斯沃尔特自由市场~在世贸附近，免费渡轮后需向北折返。
Eataly~意大利美食市场世贸店~同样向北折返，不作为默认午餐。
Fraunces Tavern~弗朗西斯酒馆~有历史主题但坐席午餐较慢，若选择需删减丹波区拍照。
The Bedford Stone Street~贝德福德石街店~地图所查时段16:00才营业，不适合午餐。`);
  zone('dumbo','布鲁克林桥下轻食与休息',[13],'10月12日 · 13:35—14:45','DUMBO（曼哈顿桥下街区）','DUMBO Brooklyn New York','这里以拍照和短休息为主；想坐下用餐则替换石街午餐，不叠加。14:45左右上桥；体力不足改地铁回酒店。',`
Westville Dumbo~西村餐厅布鲁克林店~4.7~3550~320-500~R~蔬菜和主食选择多，正式座位适合走累后休息。~主食配蔬菜~81 Washington St Brooklyn
Time Out Market New York~纽约时光美食市场~4.5~8560~300-500~W~口味选择多、离河岸近；共享座位，周末不保证马上坐下。~各选一个档口~55 Water St Brooklyn
Lucky Rabbit Noodles~幸运兔面馆~4.6~1457~300-460~Q~想吃热面可换这里，不必坚持排披萨。~汤面~151 Front St Brooklyn
BEEPUBLIC~蜜蜂共和国咖啡~4.6~726~140-280~Q~下午只休息喝咖啡的选项；金额按饮品小食。~咖啡、烘焙~181 Front St Brooklyn
AlMar~阿尔玛意餐~4.3~838~450-700~R~仅在取消卡萨莫诺时替换，不预订第二顿晚餐。~意面~111 Front St Brooklyn
Cecconi’s DUMBO~切科尼布鲁克林餐厅~4.0~3373~700-1100~R~河景升级选择；小红书对景色、服务和价格评价有分歧，不因拍照排首位。~披萨或意面~55 Water St Brooklyn`, `Celestine~塞莱斯汀地中海餐厅~费用较高，距离当日主线更偏东。
Superfine~超凡餐厅~餐吧取向与备选重复。
Dumbo Oyster Bar~布鲁克林桥下生蚝吧~评价样本少，今天不以生蚝为主。
gair~盖尔餐吧~更偏酒吧体验，不作为走累后的优先主餐。`);
  zone('midtown','第五大道购物休息与咖啡',[14],'10月13日 · 09:15—10:10／11:40后','Central Park South（中央公园南侧）','Central Park South New York','主线10:30登顶洛克菲勒观景台，10:15前到入口。当天这组餐厅只作为快买咖啡或天气导致放弃登顶后的桌餐备选；不要在观景台前安排正式早午餐。',`
Sip and Co~啜饮咖啡馆~4.5~771~160-300~Q~离公园南端近，适合咖啡轻食，不需要吃大餐。~咖啡、烘焙或三明治~41 W 58th St New York
Sarabeth’s Central Park South~莎拉贝丝中央公园南店~4.1~4552~420-650~R~传统美式早午餐位置顺路；游客多，优先订12:15附近。~蛋类早餐、三明治~40 Central Park S New York
Brasserie Cognac Central Park South~干邑法式小馆中央公园南店~4.6~378~450-700~R~想吃正式桌餐时的替换，周一也需看具体可订时段。~法式简餐~922 7th Ave New York
Central Park Cafe~中央公园咖啡餐厅~4.1~740~250-420~Q~费用较容易控制，适合就近补主食。~三明治或简餐~910 7th Ave New York
Felice 56~费利切56街餐厅~4.6~960~500-800~R~南下第五大道途中意餐备选；不要吃到影响下午行程。~意面~15 W 56th St New York
Jams~杰姆斯餐厅~4.2~1421~450-700~R~酒店内桌餐，想坐得久一点可选，价格不低。~主食、沙拉~1414 6th Ave New York`, `Marea~海潮意餐~高价海鲜，不符合普通午餐预算。
Gabriel’s Bar & Restaurant~加布里埃尔餐厅~与保留的意餐重复。
Central Park Boathouse~中央公园船屋餐厅~离南端已较远，走出来后不再折返。
Quality Italian~品质意餐~大份高价正餐，比赛日无需再加一顿。`);
  zone('hudson','哈德逊广场至高线公园休息',[14],'10月13日 · 12:45—13:15','Hudson Yards（哈德逊城市广场）','Hudson Yards New York','从洛克菲勒观景台、图书馆区域乘7号线到达后短休，13:15左右上高线。只选快餐或饮品；想坐下完整吃饭，就删减高线，不能再叠加切尔西市场午餐。',`
Bluestone Lane 55 Hudson Yards Café~蓝石巷55号哈德逊咖啡~4.6~1282~180-320~Q~早上咖啡和小食最贴合时间，不用等商场餐厅开门。~咖啡、轻食~55 Hudson Yards New York
YONO Hudson Yards~优诺哈德逊餐厅~4.4~74~200-380~Q~商场内轻食替代，评价样本较少。~当日简餐~20 Hudson Yards Level 4 New York
Mercado Little Spain~小西班牙市场~4.4~10484~300-550~W~11点以后才作为午餐替换；多档口，座位需现场找。~西班牙小食、三明治~10 Hudson Yards New York
Hudson Yards Tavern~哈德逊广场酒馆~4.3~763~320-550~Q~需要坐下完整吃饭时的附近替代；11点后使用。~汉堡或三明治~360 9th Ave New York
The Bronx Brewery & Hudson Yards Kitchen~布朗克斯精酿与哈德逊厨房~4.4~450~300-500~W~商场内简餐，11点之后使用；不需要为喝酒停留。~汉堡或当日主食~20 Hudson Yards Unit 207 New York
queensyard~皇后庭院餐厅~4.2~1624~800-1300~R~景观升级备选；小红书有服务和性价比负评，不作为赶飞机日首选。~午餐主菜~20 Hudson Yards New York`, `Locanda Verde Hudson Yards~绿意客栈哈德逊店~正式高价餐饮，上午不必安排。
estiatorio Milos Hudson Yards~米洛斯海鲜餐厅~11:30后正餐，费用与时长较高。
Greywind~灰风餐厅~正餐取向且增加步行。
Electric Lemon~电光柠檬餐厅~酒店高层餐饮，价格较高，不用于短休息。`);
  zone('chelsea','切尔西市场小吃与收尾',[14],'10月13日 · 14:20—15:00','Chelsea Market（切尔西市场）','Chelsea Market New York','高线公园南端出园后逛市场、吃小吃并采购次日早餐；15:00前离开，16:00回酒店取行李。不排长队。',`
Friedman’s~弗里德曼切尔西市场店~4.6~2426~350-550~Q~在市场内坐下吃完整主餐，更符合今天歇脚需要。~三明治、蛋类或午餐主菜~75 9th Ave New York
Miznon~米兹农皮塔饼店~4.4~3034~280-420~W~快捷主食，离市场近；座位少时换桌餐。~皮塔饼~435 W 15th St New York
Los Mariscos~洛斯马里斯科斯海鲜玉米卷~4.7~3188~200-350~W~海鲜玉米卷与美式、披萨口味不同；谷歌地图评价较高，市场官网列周二营业。~鱼肉或虾玉米卷~409 W 15th St New York
Lobster Place~龙虾海鲜市场~4.5~3889~400-700~W~海鲜特色选择，价格比普通主食高，公共座位不保证。~龙虾卷、熟海鲜~75 9th Ave New York
Cull & Pistol~卡尔与皮斯托海鲜餐厅~4.6~1242~550-850~R~想要正式座位吃海鲜时选择，最好提前订午餐。~海鲜主菜~75 9th Ave New York
LOS TACOS No.1~一号玉米卷~4.7~5665~180-300~W~味道和价格有优势，但不作为主要坐下休息点；吃完另找公共座位。~牛肉或猪肉玉米卷~75 9th Ave New York`, `Very Fresh Noodles~非常鲜面馆~切尔西市场官网显示周二不营业，不能列入10月13日备选。
ZiZi~滋滋地中海餐厅~14:30才开始，午餐时段不匹配。
Cookshop~烹饪工坊餐厅~价格较高且需要另走一段。
Shukette~舒凯特中东餐厅~17点开门，届时应在去机场路上。
Westville Chelsea~西村切尔西餐厅~距离市场更远，优先市场内外紧邻选项。`);

  window.restaurantResearch={checked:'2026-09-22—23',zones};
})();
