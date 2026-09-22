/* Official policy overrides and matched Xiaohongshu notes; no implied endorsement. */
(() => {
  const zones=window.restaurantResearch.zones;
  const find=(z,n)=>zones.find(x=>x.id===z).candidates.find(c=>c.name.includes(n));
  const policy=(z,n,mode,official,text,advance,release='官网未明确统一放位周期。')=>{
    const c=find(z,n);c.official=official;c.booking={mode,text,advance,release,source:official};
  };
  policy('ferry','Gott','walkin','https://www.gotts.com/faq/','官网：小团体先到先坐；两人无需订桌。','无需提前预约；到店点单。');
  policy('ferry','Hog','walkin','https://hogislandoysters.com/restaurants/san-francisco/','官网明确不接受预约。','无需提前几天；当天长队就换同楼简餐。');
  policy('cambria','Sea Chest','walkin','https://www.seachestoysterbar.com/','不接受预约；需本人到店登记候位，不接电话排队。只收现金或支票。','无需提前几天；到店查看队伍，排太久就放弃。');
  policy('cambria','Robin','recommended','https://www.robinsrestaurant.com/reservations','官网支持预约；开餐后可能停止接受该餐段新预约，可现场询位。周日至周四晚餐约20点结束。','建议现在订9月30日19:00—19:15；迟到仅保留15分钟。');
  find('cambria','Moonstone').official='https://www.moonstonebeach.com/';
  find('cambria','Moonstone').booking.text='官网确认晚餐17:00—20:30，但本次未查到明确两人订位政策；可电话805-927-3859询问。';
  find('cambria','Moonstone').booking.advance='建议前一天电话确认；19:15到店，不拖到关门前。';
  policy('cambria','Moonstone','walkin','https://www.facebook.com/MoonstoneBeachDining/','餐厅官方社交页面说明不接受预约，现场候位。官网晚餐17:00—20:30。','19:15前到店询位；候位很长时换镇中心餐厅。');
  policy('japantown','Kui Shin Bo','recommended','https://kuishinborestaurant.com/','官网提供在线预约并建议提前订位。周二查询约20:30结束，别把晚餐拖晚。','建议提前1—3天查看19:30—19:45余位；这是行程建议。');
  find('japantown','Udon').official='https://www.mugizo-us.com/sanfrancisco';
  policy('santabarbara','Shoreline','walkin','https://shorelinebeachcafe.com/','官网明确不接受预约，先到先服务。','无需提前几天；到店候位，排队太久就换下一家。');
  policy('santabarbara','Brophy','walkin','https://www.brophybros.com/hours-location','官网提供线上候位入口，也可以向迎宾登记；候位不是锁定时间的订桌。','当天查看候位名单；不开车绕过去后再开始查。');
  policy('griffith','Figaro','recommended','https://figarobistrotla.com/','官网提供预约入口；两人也可现场询位。','建议提前1—3天查看余位，不为了订位改变天文台和卡利晚餐时间。');
  policy('santamonica','UOVO','walkin','https://uovo.la/locations/santa-monica/','该分店官网明确不接受预约，按到店顺序安排。','无需提前几天；晚餐早到，排队超过20分钟改备选。');
  policy('artsoutlets','Makers','walkin','https://www.makerslv.com/','官网欢迎现场客，预约针对6人及以上；你们两人按现场入座安排。','无需提前订桌；午餐繁忙时留候位时间。');
  policy('chelsea','Friedman','walkin','https://www.friedmansrestaurant.com/reservations/','官网说明各店营业期间接受现场客；不代表保证有座，也不等于所有分店都拒绝预约。','两人可现场询位；切尔西分店周二约16点结束，适合午餐，不安排晚餐。');
  for(const [n,url] of [['Jaburritos','https://www.jaburritos.com/menu/'],['In-N-Out','https://locations.in-n-out.com/320'],['Haute','https://www.hautedoggerylv.com/menu']])find('flamingo',n).official=url;
  policy('santabarbara','Boathouse','walkin','https://boathousesb.com/','官网页面与实地笔记指向现场候位；页面早餐7:30—12:30，午餐11:00起。','不按提前订桌安排；10:30左右先问候位，超过20分钟改简餐。');
  find('paloalto','The Melt').official='https://www.themelt.com/locations/palo-alto/stanford-shopping-center';
  find('paloalto','World Wrapps').official='https://order.spoton.com/-/-/6001f06e24b4c408d78758fd';
  find('japantown','HINODEYA').official='https://hinodeyaramen.com/japantown';
  find('japantown','Marufuku').official='https://www.marufukuramen.com/sanfrancisco';
  find('hollywood','The Win').official='https://www.toasttab.com/local/order/the-window-hollywood';
  find('griffith','Alcove').official='https://www.alcovecafe.com/';
  policy('universal','Toadstool','recommended','https://www.universalstudioshollywood.com/web/en/us/things-to-do/dining/toadstool-cafe','官网现已提供应用及网页预约入口，不再按“只能当天扫码”写。预订不等于跳过点单或用餐队列。','如果想吃，现在查看10月2日可订时段；没有合适时段就用其他园内餐厅。','官网本次可见页面未明确统一提前天数。');
  for(const [n,path] of [['Plaza Inn','plaza-inn'],['Hungry Bear','hungry-bear-barbecue'],['The Tropical','tropical-hideaway']]) {
    find('disney',n).official=`https://disneyland.disney.go.com/dining/disneyland/${path}/`;
  }
  find('disney','Plaza').booking.text='这里推荐午餐／晚餐柜台餐，不是需要预约的人物互动早餐，也不是额外表演套餐。';
  find('disney','Hungry').comfort='有遮棚座位；共享快餐座位以现场空位为准';
  for(const [n,path] of [['Carnation','carnation-cafe'],['Cafe Orleans','cafe-orleans'],['Blue Bayou','blue-bayou-restaurant']]) {
    policy('disney',n,'recommended',`https://disneyland.disney.go.com/dining/disneyland/${path}/`,'官方建议预约；应用内可能有当天现场候位，不能保证。园内餐厅仍需有效主园门票和预约。','现在查看10月4日余位；如无合适时间，不为餐厅压缩项目。','迪士尼官方：最早可提前60天预订部分餐厅；已进入本次旅行的预约窗口。');
  }
  policy('fontaine','Peppermill','recommended','https://www.peppermilllasvegas.com/','官网欢迎现场客，也接受电话预约；每日16点后可致电预约当天或之后日期，并可询问提前候位。','建议10月8日16点后致电702-735-4177，询问10月9日晚餐。','官网未注明统一提前天数；16点是接预约电话的时间，不是每天统一放位时刻。');
  policy('artsoutlets','Esther','recommended','https://www.estherslv.com/','官网支持预约，周一至周五有午餐；官网午餐意面约21—25美元，另计税和小费。','建议提前3—7天订10月9日11:30—12:00；现在可以查看余位。');
  policy('bellagio','Noodles','recommended','https://bellagio.mgmresorts.com/en/restaurants/noodles.html','酒店官方鼓励提前预约；不是必须预约才可吃。','建议提前3—7天订10月8日20:15—20:30，给出场留余量。');
  find('venetian','Grand Lux').official='https://www.venetianlasvegas.com/dining/restaurants/grand-lux-cafe-venetian.html';
  find('venetian','Grand Lux').booking.text='酒店官网确认威尼斯人店24小时营业；品牌官网要求按分店确认是否收预约。本次未核实两人订位政策，不标为必须预约。';
  find('venetian','Grand Lux').booking.advance='建议前一天从官网联系门店确认；当天长队则改美食广场。';
  find('dumbo','Westville').official='https://westville.com/locations/westville-dumbo/';
  for(const n of ['Miami Slice','Nona','The Tavern','La Fontaine','Mother Wolf'])find('fontaine',n).official='https://www.fontainebleaulasvegas.com/dining/restaurants/';
  find('bellagio','Earl').comfort='快餐堂食；空位以现场为准';
  find('bellagio','Dirt Dog').comfort='休息座位未核实，不作长时间歇脚首选';
  find('chelsea','LOS TACOS').comfort='以站食为主，不保证有座位';
  find('soho','Prince Street Pizza').comfort='外带为主；不作为坐下休息点';
  find('soho','La Cabra').comfort='有少量座位，但小红书反馈常满座；不保证坐下';
  find('soho','Blank Street').comfort='可外带；有无座位以现场为准';
  find('soho','La Colombe').comfort='可坐下喝咖啡；空位以现场为准';
  find('soho','Drip Drop').comfort='可坐下喝咖啡；空位以现场为准';
  find('soho','Haraz').comfort='可坐下喝咖啡；空位以现场为准';
  for(const z of zones) for(const c of z.candidates.filter(c=>c.selected)) {
    if(c.comfort==='地图显示堂食；座位是否空闲以到店为准')c.comfort='可坐下用餐；空位、室内外位置以现场为准';
  }
  // Exact note matches only. Historical notes are taste references, not current prices/hours.
  const notes=[
    ['ferry','Hog','67bddb1e000000002a001bd9','轮渡大楼生蚝探店','推荐生蚝与海鲜汤；旧笔记价格不作为2026年报价。'],
    ['japantown','Udon','67382508000000001a01f3b7','日本城乌冬面探店','肯定奶油乌冬，也记录了超过一小时候位，因此不安排硬等。'],
    ['japantown','Udon','6a8bb1af000000001801951f','日本城 Udon Mugizo（麦藏乌冬面）','明确是日本城分店；喜欢口味和份量，也提到排队一小时。'],
    ['japantown','Marufuku','6532ceb5000000001e03df9d','日本城餐厅清单','清单提及丸福；这类汇总推荐权重低于具体单店体验。'],
    ['cambria','Moonstone','681c5259000000002202d567','月光石海滩餐厅体验','同区域海景用餐参考；不据旧价格承诺当前消费。'],
    ['cambria','Linn','647806610000000012032074','坎布里亚途中用餐参考','笔记提到琳恩与月光石海滩，可看实际食物和环境。'],
    ['santabarbara','Boathouse','671ea0b50000000016022312','亨德里海滩船屋探店','有周末中午人多的记录；本次安排周四较早时段，但仍留候位余量。'],
    ['santabarbara','Boathouse','649e6059000000001303f82a','船屋海边用餐','实地笔记提到先到先等，不能靠预约锁定海景桌。'],
    ['hollywood','Hard Rock','657334b4000000003c010225','星光大道餐厅体验','地址匹配6801 Hollywood Blvd Suite 105；价格属于历史体验。'],
    ['universal','Three Broomsticks','665b6c27000000000c019ab9','洛杉矶环球影城三把扫帚','明确是洛杉矶园区；笔记下午错峰较顺利，不能保证当天无需排队。'],
    ['grove','Noodle Art','678f12ea00000000180121af','农夫市场一面之缘探店','明确给出农夫市场地址，推荐牛肉面。'],
    ['grove','Noodle Art','6793b4b2000000001701cf98','格罗夫炒拉条体验','喜欢炒拉条和肉夹馍，对牛肉烩面评价一般。'],
    ['griffith','Alcove','682a8978000000002102f5c1','洛斯费利斯早午餐与咖啡','具体点了班尼迪克蛋、蟹肉吐司和蛋糕，有菜品细节。'],
    ['griffith','Alcove','5d454de70000000026007701','Alcove（壁龛咖啡）庭院体验','地址匹配，适合参考环境；旧笔记不用于判断现时服务。'],
    ['disney','Plaza','6716c504000000001b0115a1','迪士尼主园广场餐厅炸鸡','区分人物早餐与午晚餐，提到室内外座位和分享炸鸡。'],
    ['disney','Plaza','67ee1852000000001c0179de','加州迪士尼餐厅体验','喜欢三文鱼及炸鸡套餐，明确提到可以坐下休息。'],
    ['disney','Cafe Orleans','690ef2c0000000000303b7fb','加州迪士尼主园用餐','提到新奥尔良餐厅和应用预约；餐单可能变化。'],
    ['disney','Blue Bayou','658516510000000006021a85','蓝湾餐厅体验','评价食物一般，保留为场景体验而非口味首选。'],
    ['beverly','Il Pastaio','690031450000000003022b6c','比弗利意面坊探店','喜欢意面；11点多到时不排队，之后变满，不能外推到每一天。'],
    ['flamingo','Yard House','596bf863d1d3b97947c50066','林克步行街庭院餐厅','地点与摩天轮步行街匹配；笔记较旧，只作风格参考。'],
    ['venetian','Grand Lux','659109b0000000001102dd91','威尼斯人实惠早午餐体验','明确威尼斯人店；提到室内坐着放松，也提醒早午餐会排队。'],
    ['bellagio','Noodles','65853e3c000000003a00df59','百乐宫面馆体验','推荐烧味与面食，也提到长队；结合当前3.6分仅作便利备选。'],
    ['bellagio','Noodles','66826da7000000001c025fe1','百乐宫面馆菜品对比','更认可粤式菜，对川菜评价不佳。'],
    ['fontaine','Miami Slice','676d2c7e00000000140215ee','枫丹白露美食广场披萨','明确同一家酒店地址，喜欢披萨饼底与口感。'],
    ['fontaine','Peppermill','668827e2000000001c02776e','拉斯维加斯经典美式餐厅','霓虹装修和大份餐；笔记中的24小时说法不用于当前营业判断。'],
    ['fontaine','La Fontaine','66fe3ab0000000002a033cdb','枫丹白露早午餐体验','周末早午餐笔记，不等于本次周五供应同一套菜。'],
    ['artsoutlets','Esther','6705c553000000002c02d91c','艺术区意大利餐厅探店','推荐手工意面和蔬菜，餐单随季节变化。'],
    ['artsoutlets','Esther','67faf2f9000000001c03646e','埃丝特厨房候位体验','未订位候位约一小时，支持本次提前订午餐。'],
    ['soho','La Cabra','683058aa000000002100823b','苏豪区 La Cabra（拉卡布拉咖啡）','笔记明确284 Lafayette St，喜欢手冲和面包，也写到门外排队。'],
    ['soho','La Cabra','677dc07c000000001703de9a','苏豪区咖啡座位体验','笔记提醒苏豪区店常满座，更适合短暂停留。'],
    ['soho','Prince Street Pizza','694fe492000000001e0318b9','王子街披萨试吃','喜欢辣香肠口味，但认为价格偏高；排队超过30分钟不值得。'],
    ['lowermanhattan','Stone Street Tavern','693e2f99000000001f00d5bb','石街餐厅与街景','笔记明确列出石街酒馆、阿德里安披萨等，适合确认街道氛围。'],
    ['lowermanhattan','Toro Loco','69bde66e000000001d01ee0d','石街墨西哥餐厅','笔记明确15 Stone Street，认为路过时值得吃，不必专程跨区。'],
    ['lowermanhattan','Adrienne','66f63e12000000002a033f26','石街披萨与贝果','提到阿德里安方形披萨和利奥贝果，可作口味参考。'],
    ['lowermanhattan','Leo','66f63e12000000002a033f26','石街贝果与餐厅','笔记提到利奥贝果；是否假日开门仍看门店公告。'],
    ['dumbo','Cecconi','62f2be53000000001200d56e','布鲁克林河景披萨','喜欢黑松露披萨和河景；景观桌只能请求，不能保证。'],
    ['dumbo','Cecconi','6322088d000000000802b62b','切科尼餐厅不同体验','认为沙拉和价格不划算，所以不把网红景观当作首选理由。'],
    ['dumbo','Time Out','62f9f2180000000016035364','布鲁克林美食市场体验','提到多种档口选择；实际商户以当前市场为准。'],
    ['hudson','queensyard','65f38d5b0000000012035016','哈德逊广场景观餐厅','肯定景色与环境，对食物记忆点较少。'],
    ['hudson','queensyard','6586510500000000380291ba','皇后庭院性价比体验','反映上菜慢和性价比低，最后一天不优先。'],
    ['chelsea','LOS TACOS','64cb042b00000000170194f5','切尔西市场玉米卷参考','笔记对比市场内档口，只参考口味和环境，不采用旧价格。']
  ];
  for(const [z,n,id,title,summary] of notes) {
    const c=find(z,n);if(c)c.xhs.push({title,url:`https://www.xiaohongshu.com/explore/${id}`,summary});
  }
})();
