/* Official payment rules checked 2026-09-22; not a second expense ledger. */
(() => {
  const items=[];
  const add=(dates,title,status,price,steps,url)=>items.push({dates,title,status,price,steps,url});
  add([0],'California Street Cable Car（加州街缆车）','当天买即可','单程9美元/人；两人18美元，约人民币120.60元。不能凭单程票再次上车或换另一条缆车。',[
    '路线：California St & Drumm St（加州街与德拉姆街交叉口）上车，向西上坡，到 California St & Powell St（加州街与鲍威尔街交叉口）下车。不是普通公交，也不是F线历史电车。',
    '手机购票：抵达美国后打开 MuniMobile（旧金山公交购票应用），选 Cable Car Single Ride（缆车单程票），买两张。上车时激活并向乘务员展示；一部手机可管理两人的票，两人同行。',
    '可用信用卡、借记卡、PayPal（贝宝）或苹果/谷歌支付。官网提示部分外国银行卡可能失败，中国境内注册也可能受限；不要把能提前在国内注册当作前提。',
    '现金备用：备好两人共18美元零钱，不找零；这条线路不在官网列出的三个08:00—17:00必须预购票的鲍威尔线总站内，上车向乘务员付。保留车票，不给小费。普通公交日票不含缆车。'
  ],'https://www.sfmta.com/fares/cable-car-single-ride');
  add([0],'SFO AirTrain（旧金山机场轻轨）与市内交通','免费接驳／按次付','机场轻轨到租车中心免费；市内网约车按应用报价。',[
    '机场按 Blue Line（蓝线）和 Rental Car Center（租车中心）标识乘车，不买市区铁路票。',
    'Uber / Lyft（优步／来福车）：先绑定可境外支付的卡，确认车型、上车点与总价后叫车；应用内扣款，不再向司机重复支付现金车费。取消前看是否有取消费。'
  ],'https://www.flysfo.com/passengers/ground-transportation/getting-around-sfo');
  add([0],'旧金山酒店与金门大桥停车','现场支付','酒店停车以入住确认为准，原预留约30美元/晚；Crissy Field West Bluff（克里西草坪西侧停车场）3美元/小时、大桥南侧游客停车场5美元/小时，两处单独付费。',[
    '先到安妮女王酒店问清停车入口、是否有空位、可否反复进出、税是否另计；不要把酒店房费当已含停车。',
    'West Bluff（西侧停车场）按NPS公开价08:00—18:00每小时3美元、每日上限10美元；大桥游客中心旁南侧停车场按桥方公开价每小时5美元。用现场缴费机或 ParkMobile（停车缴费应用）核对区域、车牌和时长，保存凭证；两处停车费不共享。',
    '本路线只在桥南侧游览，不必开车过桥。桥边拍照和步行不收景点门票；不要为“过桥看景”新增往返及电子过路费。'
  ],'https://www.goldengate.org/bridge/visiting-the-bridge/directions-parking/');
  add([0,2],'Avis（安飞士）电动车合同与还车费用','取车前必须确认','已报租金人民币1,977元；停车、充电、预授权不等于包含在租金内。',[
    '重点核对：官网通用电动车条款写不允许异地还车，与你的SFO（旧金山机场）→Z9U（好莱坞店）计划冲突。让门店对这张订单的实际车型、异地还车许可及费用书面确认；不能只凭订单城市推断特斯拉也适用。',
    '官网通用要求还车电量至少70%；低于70%而高于10%收费35美元，低于10%合计70美元。你的合同若另有书面约定，以门店解释并确认后的合同执行。不要卡着10%的边界还车。',
    '超充通常由Avis代付后向租车支付卡追收：官网目前列充电及占位等实际费用加2.3%管理费，可能延后入账。拍下取还车电量，保留充电与还车凭证。柜台加购保险、道路救援、升级车先看总价，不需要的明确拒绝。'
  ],'https://www.avis.com/en/cars/electric-car-rentals');
  add([1],'Stanford University（斯坦福大学）访客停车','到场后缴','4.46美元/小时＋每笔0.40美元；一次买2小时为9.32美元，约人民币62.44元。',[
    '停 Galvez Lot L-96（加尔韦斯L-96停车场）的访客位；不要停仅限教职工或居民的车位。',
    '在 ParkMobile（停车缴费应用或官网）输入现场绿牌的区域编号、租车车牌及州，选时长并付款。不要使用攻略中猜测的区域编号；到达后再买，付款不退。',
    '工作日通常08:00—16:00收费，以该车位牌示为准。付费成功后看结束时间；延长也需遵守最长停放时间。Apple Park Visitor Center（苹果园区游客中心）与月光石海滩不在这个停车系统内。'
  ],'https://transportation.stanford.edu/parking-stanford/purchase-parking/visitor-parking');
  add([1,2],'途中充电与停车','按实际使用','充电费按站点、时段和用量；海边公共停车是否收费看现场牌示，不提前买景点停车套餐。',[
    '特斯拉超充：车机确认站点和费率，插枪后必须看到正在充电；失败先联系Avis，不用个人账号替租车补缴历史欠款。',
    '第三方充电：先核对车辆接口与枪口；没有转接头就不能默认所有站都能用。使用运营商官方应用或桩上明确支持的银行卡方式付款，保存启动成功与结算记录。',
    'Stanford（斯坦福）校园公共区域、Apple Park Visitor Center（苹果园区游客中心）和 Moonstone Beach Boardwalk（月光石海滩木栈道）的常规散步不需要观光套票。餐厅消费与酒店费用另计。'
  ],'https://www.avis.com/en/cars/electric-car-rentals');
  add([2,4,6,7,9,10,11,14,15],'网约车、出租车与餐厅结账','现场／应用付款','车费看叫车应用或计价器；餐厅卡片为两人含税、不含小费的估算。',[
    '网约车下单前看车型与总价；酒店礼宾叫的专车可能与Uber（优步）价格不同，要先问价。机场上车点按应用分配，不跟随主动揽客者。',
    '餐厅先核对消费与税，再看是否已经包含 Gratuity（小费）。没有包含才按“小费”页参考支付；普通柜台点单可选 No Tip（不付小费）。',
    '实体卡结账保留收据；如账单留有 Tip（小费）与 Total（总额）栏，填完后留一份照片核对。付款终端如提供美元与人民币选择，通常选USD（美元）由发卡行换汇；人民币金额仅作预算参考。'
  ],'https://help.uber.com/riders');
  add([3],'Metro B Line（洛杉矶地铁B线）','当天刷卡','1.75美元/人/单程，两人往返7美元，约人民币46.90元；免费园区接驳不另收费。',[
    'Hollywood / Highland（好莱坞／高地站）→ Universal / Studio City（环球／影城城站），一站。',
    '官方现支持非接触信用卡、借记卡和苹果／谷歌支付。建议两人各固定使用一张卡或一台设备，在闸机感应；沿途进出闸按标识用同一介质，不混用实体卡和手机。',
    '刷卡失败的备用：站内机器买 TAP（洛杉矶交通卡），实体卡2美元/张，另充车费；两人各一张。地铁不能直接把现金投进闸机。往返不属于两小时免费换乘。'
  ],'https://www.metro.net/fares/how-to-pay/');
  add([3],'Universal Studios Hollywood（好莱坞环球影城）门票','尚未收到已付款确认','原核价普通票129.95美元/人、快速票249.95美元/人；这是之前核价，不是锁价。',[
    '官网选2026年10月2日、两名成人、普通单日票；付款前看美元最终总额、日期、退款条件并保存确认邮件和入场条码。不要选择奥兰多园区。',
    'Universal Express（环球快速通行票）若购买的是含入园完整票，不要再叠买普通票。现场升级有无库存及差价须当场问，不能按历史价保证。',
    '普通票不含 Early Access（提前入园）与 Halloween Horror Nights（万圣节惊魂夜）。互动手环、纪念照和部分寄存柜是额外消费，不买不影响正常游览。具体支付方式以官网结账页提供的选项为准。'
  ],'https://store.universalstudioshollywood.com/en/us/store/c/uh_ice_default_pb_tickets');
  add([4],'Griffith Observatory（格里菲斯天文台）','常规参观免费；球幕可选','常规展厅、建筑观景无需门票；Samuel Oschin Planetarium（塞缪尔·奥欣天象厅）成人12美元，两人约人民币160.80元。',[
    '普通游客的球幕票只能当天在馆内售票处或机器购买，不支持提前网上锁场。可用现金或Visa（维萨）、Mastercard（万事达）、Discover（发现卡）。',
    '球幕不是今天必选，不要为排队买票错过日落和卡利晚餐；出售至开场前10分钟或售罄。买错场次通常不可退。'
  ],'https://griffithobservatory.lacity.gov/exhibits/samuel-oschin-planetarium/');
  add([4],'Academy Museum of Motion Pictures（学院电影博物馆）普通门票','已购票；10月3日两张成人票','订单总额50美元，按6.7折合人民币335元；Oscars Experience（奥斯卡体验）不在本订单内。',[
    '确认邮件由 museumtickets@oscars.org 发出，主题为 Your museum tickets are confirmed!（博物馆门票已确认）；已归入 Gmail（谷歌邮箱）的“美国旅行2026/门票”标签并加星标。邮件含两张独立电子票，入场时出示邮件或手机票券；不要只出示付款记录。',
    '票面日期为2026年10月3日，入场时间范围10:00—18:00。计划11:30左右入馆、13:30离馆。普通门票不包含电影放映或奥斯卡体验。'
  ],'https://www.academymuseum.org/tickets');
  add([4],'Oscars Experience（奥斯卡体验）加购票','可选；尚未收到购票确认','官网列成人10美元/人；两人20美元，按6.7约人民币134元，须另持同日普通馆票。',[
    '在电影学院博物馆官网购买10月3日普通馆票时，另为两人各选一张 Oscars Experience（奥斯卡体验）票；若结账页面要求选体验时段，优先12:00—12:30，避开13:30离馆时间。',
    '官网称购票后电子票发至邮箱，也可在博物馆账户查看；手机出示或打印PDF均可。10月3日余票和最终费用以结账页为准。'
  ],'https://www.academymuseum.org/exhibitions/oscars-experience');
  add([5],'Disneyland Park（迪士尼乐园主园）购票与预约','尚未收到已付款确认','原核价10月4日单园184美元/人；加34美元/人的多项目通票，两人参考436美元，约人民币2,921.20元。最终看结账页。',[
    '官网选2026年10月4日、1 Day（一天）、1 Park Per Day（单日单园）、Disneyland Park（主园）、两名成人。不买双园票，也不把DCA（加州冒险乐园）当成主园。',
    '购买后在 Disneyland App（加州迪士尼应用）关联两张门票，检查同一天同一园区的 Park Reservation（入园预约）已完成；只有支付成功邮件不足以确认预约状态。',
    'Lightning Lane Multi Pass（闪电通道多项目通票）可随门票加购，或入园后在应用内购买，价格34美元起、可能售罄。两人各需一份，不是一份给两人。',
    'Single Pass（单项目闪电通道）是另付费产品，入园后在应用中查看具体项目、时段和当日价格；不要求先买多项目通票。先确认两人的票都在选择名单，再结账。'
  ],'https://disneyland.disney.go.com/lightning-lane-passes/');
  add([5],'迪士尼应用内点餐与购物','按需消费','餐饮、商品另计；不预买礼品卡作为必须准备项。',[
    '先登录 MyDisney（迪士尼账户）并关联支付方式；点餐选餐厅、取餐窗口和数量，核对金额后付款。到店按应用提示确认到达，再到指定窗口取餐，别把预约时间当作自动送餐。',
    '支持的商店可用 Merchandise Checkout（商品手机结账）：扫码商品、付款后向出口工作人员出示确认码，不是扫完商品就可直接离店。该功能官方列出银行卡和Apple Pay（苹果支付）等方式。'
  ],'https://disneyland.disney.go.com/en_CA/guest-services/merchandise-mobile-checkout/');
  add([6],'Santa Monica Pier / Pacific Park（圣塔莫尼卡码头／太平洋游乐园）','码头散步不需买游乐套票','摩天轮等游乐设施按单项或腕带另付，现场选项价格为准。',[
    '只看海、码头拍照和逛街，不买 Unlimited Ride Wristband（无限次游乐腕带）。只想坐一次摩天轮，先在售票处比较单次价格。',
    '官方接受现金、主流信用卡及苹果／三星支付。网上买腕带仍要在售票处领取，售票处比游乐园提前一小时关闭。'
  ],'https://pacpark.com/visit/faq/');
  add([7],'Southwest Airlines（西南航空）托运行李','机票已购；行李待核对','一般美国本土普通票第一件45美元、第二件55美元/人/单程；特殊票种和权益可能减免。',[
    '不要再按“两件托运免费”的旧攻略准备。打开官方订单的行李权益；如果你们各托运第一件且均无免费额度，共90美元，约人民币603元。',
    '通过航空公司官方订单／值机或机场柜台办理并付款，保留行李条。不能把国际段免费行李额自动套给这张单独购买的美国国内票。票种、出票日期和是否已付行李费尚未提供，不能认定一定再收90美元。'
  ],'https://www.southwest.com/html/customer-service/travel-fees.html');
  add([7],'Las Vegas Helicopter Tour（拉斯维加斯直升机夜游）','班次及付款待确认','19:00为计划时间，不是已确认预约；指定日期最终价格待所选运营商报价。',[
    '从所选运营商官网选日期、夜间时段、两名乘客，确认含不含酒店接送、税费、燃油附加费，再付款。不能把“起价”直接乘二当全部费用。',
    '预订信息按证件填写，并如实填运营商要求的信息。Maverick（独行侠直升机）座位按载重平衡分配，不保证情侣相邻或靠窗；座位要求与附加费在付款前问清。',
    '若换运营商，报到地址也会变。凭确认信到指定地点，礼品照属于可选加购，不是登机必付。'
  ],'https://www.maverickhelicopter.com/tour-faqs');
  add([8],'Lower Antelope Canyon（下羚羊谷）一日团','团单及付款待确认','原预算约249美元/人起；以10月7日两人最终报价为准，小费另列。',[
    '在 MaxTour（麦克斯小团）官方行程页选择日期、人数，逐项确认下羚羊谷、马蹄湾、午餐和接送范围是否包含；本次所查产品说明含羚羊谷门票与热午餐。',
    '已经买全包团就不要另买散客峡谷门票；若改选别家团，重新核对纳瓦霍许可费、当地导游费和小费是否另付。',
    '付款前看取消截止时间与当地时间。保存电子凭证、集合点和接送确认；准备小额美元给未包含的小费，不向现场人员重复支付已含门票。'
  ],'https://www.maxtour.co/tours/antelope-canyon-tour-from-las-vegas/');
  add([9],'Sphere（巨型球）与《O》入场','均已报付款','巨型球人民币2,720.20元；《O》人民币1,805元。不再买第二份入场票。',[
    '巨型球：提前在Ticketmaster（票务大师）或对应交付账户打开两张有效票，核对日期、11:00场次、区域、排与座位；实际以票面为准。场馆不收现金，餐饮商品准备银行卡或手机钱包。',
    '《O》：票务商购买、票未完整交付，仍有无法交票风险。确认两张最终入场票而非付款聊天截图；如为Will Call（现场取票），按取票证件要求和提前时间执行。',
    '百乐宫花园、喷泉与威尼斯人公共购物区不需要搭售的观光套票。贡多拉船、蜡像馆等是独立付费项目，未列为当天必做。'
  ],'https://www.thesphere.com/faqs');
  add([10],'Battlefield Vegas（战场拉斯维加斯射击场）','可选；未订不计已付','按所选套餐、人数和额外弹药结算，不将网页起价当两人总价。',[
    '只有用射击替换艺术区时才预约；从官网套餐页确认是每人还是多人套餐、税费和接送是否包含。',
    '先确认护照／年龄验证、预约时间、取消条款与包含的体验内容；现场追加项目须先看金额。不要通过非官方私信付款。'
  ],'https://www.battlefieldvegas.com/packages/');
  add([11],'Delta Air Lines（达美航空）托运行李','机票已购；行李待核对','普通美国国内票第一件托运现为45美元/人起；两人各一件且无豁免时共90美元，约人民币603元。',[
    '在达美官方订单或Fly Delta（达美航空应用）输入订单查看实际行李额度，值机时按实际件数付款。票种、会员权益和出票日期会影响费用，已付的不重复加购。',
    '通常标准托运行李上限23公斤；超重、超尺寸、超件可能叠加收费，打包后先称重。不同航空公司的订单分别看，不用国际返程额度推断这一段。'
  ],'https://www.delta.com/us/en/baggage/overview');
  add([11],'JFK AirTrain（肯尼迪机场捷运）','到Jamaica出闸付款','8.75美元/人，两人17.50美元，约人民币117.25元。',[
    '先从航站楼搭到 Jamaica Station（牙买加站），在机场捷运出闸机刷非接触银行卡、Apple Pay（苹果支付）、Google Pay（谷歌支付）或OMNY（纽约交通卡）。不是在航站楼先买LIRR票就全部包含。',
    '每人各固定使用一种卡／设备较清楚。机场航站楼之间以及到Federal Circle（联邦环线站）接酒店车的机场内段不收这笔8.75美元。'
  ],'https://www.jfkairport.com/transportation/airtrain');
  add([11],'LIRR（长岛铁路）到Penn Station（宾夕法尼亚车站）','登车前购买并激活','10月10日周六非高峰 CityTicket（城市票）5.25美元/人，两人10.50美元，约人民币70.35元。',[
    '当天用 TrainTime（纽约铁路购票应用）选 Jamaica（牙买加站）→ Penn Station（宾夕法尼亚车站），买两名成人非高峰单程；不要误选Grand Central（中央车站）。手机付款失败就在车站机器买纸票。',
    '上车前激活手机票，查票时向列车员展示；纸票留好供查验。单程票只到购买后次日04:00有效，所以不用现在提前买10月10日的票。',
    '不要等列车员来了才买票／激活，车上补票可能加收费用。AirTrain（机场捷运）＋铁路两人合计28美元，约人民币187.60元；最后出租车另付。'
  ],'https://www.mta.info/fares-tolls/lirr-metro-north');
  add([12,13,14],'New York Subway（纽约地铁）','进站感应付款','3美元/人/次；两人一次6美元，约人民币40.20元。',[
    'OMNY（纽约非接触支付）可直接刷非接触银行卡或手机钱包，不要求下载应用。每人固定一张卡／一台设备，看到绿色通行提示后过闸；出站不用再刷。',
    '同一张银行卡的实体卡、手机和手表会被当作不同支付介质，别混用。无需为这几天专门买周票，符合条件的同介质7日封顶会自动计算。',
    'LIRR（长岛铁路）和NYC Ferry（纽约渡轮）不包含在地铁票里。刷卡失败可在站内机器买或充值OMNY（纽约交通卡）；不能再按旧攻略买新MetroCard（旧式磁条交通卡）。'
  ],'https://www.mta.info/fares-tolls/subway-bus');
  add([13],'两种渡轮：免费观景与去丹波区','一段免费，一段付费','Staten Island Ferry（史泰登岛渡轮）免费；NYC Ferry（纽约渡轮）单程4.50美元/人，两人约人民币60.30元。',[
    '免费船：到Whitehall Terminal（白厅码头）乘史泰登岛渡轮，不向街头揽客者买票；到岛上下船，再排返程。它不在自由女神像岛停靠，登岛游属于另一个付费产品。',
    '去DUMBO（丹波区）：在NYC Ferry（纽约渡轮）应用或码头机器买票，按实时航线选Wall Street / Pier 11（华尔街／11号码头）→DUMBO / Fulton Ferry（丹波／富尔顿渡口）。不能用地铁银行卡感应代替船票。',
    '确认能上该班船再点Use Ticket（使用车票）激活，向工作人员出示；一个手机可选两张同时激活。有效120分钟用于同向系统内转乘，不代表可往返；不在船上补买。官网旧帮助页仍有4美元旧文，价格采用当前票价页4.50美元。'
  ],'https://www.ferry.nyc/ticketing-info/');
  add([13],'下城与丹波区的可选门票','默认只外观／公共区域','帝国大厦外观、九一一纪念广场、布鲁克林大桥步行不等于购买观景台或博物馆门票。',[
    '当前路线不安排帝国大厦登顶、九一一博物馆内部或自由女神像登岛，勿因路边售票员推销重复购买城市通票。',
    'Jane’s Carousel（简氏旋转木马）外观拍照与乘坐收费不同；若想坐，在现场售票处查看当日价格和支付标识。本轮未确认当前票价，不沿用旧笔记的数字。'
  ],'https://janescarousel.com/');
  add([12],'The Met Fifth Avenue（大都会艺术博物馆第五大道馆）','计划参观；尚未买票','海外成人普通票30美元/人，两人60美元，按6.7约人民币402元。',[
    '官网可提前在线购票，也可现场购买；本行程10月11日10:00入馆、11:30左右离馆，前往12:45已订餐厅。先确定是否接受约90分钟的精华参观。',
    '若在线购买，核对日期为10月11日，保存手机二维码；餐厅订位与博物馆票是两项独立预订。'
  ],'https://engage.metmuseum.org/admission');
  add([12],'Aladdin（《阿拉丁》）百老汇演出','10月11日18:30有官方场次；尚未报告购票','两人票价随座位变化，预算页为估算，最终以官方结账页为准。',[
    '演出地点 New Amsterdam Theatre（新阿姆斯特丹剧院），214 West 42nd Street（西42街214号）；官方演出约2小时30分钟含中场，建议18:00前到剧院。',
    '在官方场次页或 Ticketmaster（票务平台）核对10月11日18:30、两张相邻座位、区域排号和总费用。尚未购买就保持“候选”，不能凭行程入场。'
  ],'https://aladdinthemusical.com/event/20261011-1830-show/');
  add([13],'NBA（美国职业篮球联赛）入场','已报付款','两张票按391.33美元×6.7计人民币2,621.91元；不需要另买停车通行证。',[
    '付款订单不等于有效入场票。先接受卖家转票，并在官方票务账户／支持的手机钱包中打开两张票；动态码不要只存截图。',
    '普通座席按Section（区域）、Row（排）、Seat（座位号）就座。提前检查两张是否相邻，场馆餐饮和周边另付，准备银行卡。'
  ],'https://www.msg.com/madison-square-garden/faqs');
  add([14],'Top of the Rock（洛克菲勒观景台）','10月13日10:30建议；尚未购票','官网9月23日查询普通定时票两人票面98美元，含税约106.70美元，按6.7约人民币715元；价格和余票可变。',[
    '官网选择2026年10月13日10:30、两名成人、Timed Admission（普通定时入场票）。入口50 West 50th Street（西50街50号），建议10:15前抵达；保存两张二维码。',
    '普通票含观景台，不用为登顶另买Beam（钢梁体验）、Skylift（升降观景台）或快速通道。最后以付款页完整总价和退改条款为准。',
    '建议10月7—9日查看短期天气后预订；要优先锁定时段也可现在买。官网改期申请至少提前24小时，仍受余票和规则限制。10月13日是离城日，天气不佳没有稳妥的次日改期空间。'
  ],'https://www.rockefellercenter.com/tickets/top-of-the-rock-observation-deck/');
  add([14,15],'曼哈顿→机场酒店→航站楼','交通费用另付；机场酒店待订','JFK机场与曼哈顿的黄色出租车基本固定价70美元，附加费、过路费、小费另计；机场附近酒店不自动适用此固定价。',[
    '10月13日机场酒店尚未预订。预订后17:00从曼哈顿出发时，目的地填酒店完整地址，不是直接填JFK；网约车按该地址报价。',
    '黄色出租车可刷卡，不能因刷卡或两位乘客、多件正常行李另加费用；保留收据。机场酒店不在航站楼内，不能拿70美元当酒店车程包干价。',
    '10月14日06:30 AA475（美国航空）从JFK Terminal 8（肯尼迪机场8号航站楼）起飞，以03:15—03:30到T8为目标。入住时确认凌晨接驳是否收费、是否必须预约、是否直达T8；如只到Federal Circle（联邦环路站），还要转机场捷运，须更早出发。没有可用班次就前晚约车，不在凌晨临时碰运气。'
  ],'https://www.nyc.gov/site/tlc/passengers/taxi-fare.page');
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  document.querySelectorAll('.city-days article.day').forEach(day=>{
    const date=day.dataset.date,index=Math.round((Date.parse(date+'T00:00:00Z')-Date.UTC(2026,8,29))/86400000),rows=items.filter(x=>x.dates.includes(index));
    const section=document.createElement('section');section.className='payment-guide';section.id='pay-'+date;
    section.innerHTML='<h4>怎么买票与付款</h4><p>最近核对：2026年9月23日 · 人民币按1美元＝6.7元参考。这里解释付款步骤，不重复加入预算；未收到订单不标记已付。</p>'+rows.map((x,i)=>`<details class="payment-item"${i===0?' open':''}><summary>${esc(x.title)}<span class="payment-status">${esc(x.status)}</span></summary><div><p><b>${esc(x.price)}</b></p>${x.steps.map(s=>`<p>${esc(s)}</p>`).join('')}<a href="${esc(x.url)}" target="_blank" rel="noopener">官方规则／购买入口 ↗</a></div></details>`).join('');
    if(!rows.length)section.innerHTML+='<p>当天无新增预订门票。餐饮消费看餐厅卡，已订住宿的结算与预授权向前台核对。</p>';
    const common=document.createElement('details');common.className='payment-item';common.innerHTML='<summary>酒店、订位与小费<span class="payment-status">每天适用</span></summary><div><p>酒店费用以本页住宿卡与原订单为准。预授权是暂时占用额度，不应当作第二次房费；退房索取明细账，核对是否重复收已含的度假村费。预授权释放时间取决于酒店及银行。</p><p>餐厅预约若需银行卡担保，先看取消截止时间、未到店收费及是否预付。不会因为本页“建议预约”就自动收费；本次没有替你订位或付款。</p><p>小费按当天“费用参考”及“小费”页执行；准备小额美元。景点检票、公共交通和自助停车不需要小费。</p></div>';section.append(common);
    const cost=day.querySelector('.day-related-budget');cost.before(section);const a=document.createElement('a');a.href='#'+day.dataset.city+'/'+date+'/pay';a.textContent='购票付款';day.querySelector('.day-section-nav a[href$="/cost"]').before(a);
  });
  if(location.hash.endsWith('/pay'))requestAnimationFrame(()=>document.getElementById('pay-'+location.hash.split('/')[1])?.scrollIntoView({block:'start'}));
})();
