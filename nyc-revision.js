/* 2026-09-23: New York route after the confirmed October 11 Casa Mono lunch. */
(() => {
  const row=(time,title,body)=>`<div class="time-row"><div class="time">${time}</div><div class="time-card"><strong>${title}</strong><p>${body}</p></div></div>`;
  const link=(url,label)=>`<a class="btn light" href="${url.replaceAll('&','&amp;')}" target="_blank" rel="noopener">${label}</a>`;
  const maps=(origin,destination,mode='walking')=>`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${mode}`;
  const day=(date,title,subtitle,items,ops)=>{
    const el=document.getElementById('date-panel-'+date);
    if(!el)throw new Error('Missing New York date panel '+date);
    el.querySelector('.day-head h3').textContent=title;
    el.querySelector('.day-head p').textContent=subtitle;
    el.querySelector('.timeline').innerHTML=items.map(x=>row(...x)).join('');
    el.querySelector('.ops').innerHTML=ops;
  };

  day('2026-10-11','10月11日 · Central Park（中央公园）、The Met（大都会艺术博物馆）、Casa Mono（卡萨莫诺）与 Broadway（百老汇）','公园与博物馆 → 已订午餐 → 格林威治村 → 《阿拉丁》候选',[
    ['07:15—08:10','早餐、化妆与出门','昨晚落地较晚，前晚备早餐。08:10左右离开酒店；先到酒店附近拍 Empire State Building（帝国大厦）外观，10分钟内结束。'],
    ['08:30—09:55','Central Park（中央公园）东向步行','到72街附近入园，依次选 Bow Bridge（弓桥）、Bethesda Terrace（毕士大露台），从东侧往 The Met（大都会艺术博物馆）走。只走中央公园一段，不绕到最南端再折返。'],
    ['10:00—11:45','The Met Fifth Avenue（大都会艺术博物馆第五大道馆）','1000 Fifth Avenue（第五大道1000号）。官网周日10:00开馆，外州及海外成人普通票30美元／人。约1小时45分钟只选埃及馆、欧洲绘画或美国馆中的两处；想深逛博物馆，就删减午餐后的街区。'],
    ['11:45—12:30','打车去 Casa Mono（卡萨莫诺）','从博物馆正门叫正规网约车到 52 Irving Place（欧文广场街52号），按叫车和路况预留40–45分钟；目标12:30到达。若有充裕时间，车可在 Flatiron Building（熨斗大厦）附近下车短拍，再步行去餐厅；不要为拍照冒迟到风险。'],
    ['12:45—14:30','Casa Mono（卡萨莫诺）· 已确认午餐','两人，Standard · Casa Mono – Indoor Seating（普通室内座位）。餐厅迟到宽限10分钟；若预计超过12:55到店，立即电话联系。两人座位保留1小时45分钟。少于1天取消或未到店，每人收费50美元。'],
    ['14:30—16:35','Greenwich Village（格林威治村）→ New York University（纽约大学）→ SoHo（苏豪区）','从餐厅向南，经 Washington Square Park（华盛顿广场公园）与纽约大学街区，再选苏豪区2–3条街逛店。Joe’s Pizza（乔氏披萨）现店可作《蜘蛛侠2》关联小吃备选，电影中旧店面不是现在的地址。Little Italy（小意大利）和 Chinatown（唐人街）只在放弃部分苏豪购物时接上。'],
    ['16:35—18:00','前往 New Amsterdam Theatre（新阿姆斯特丹剧院）','乘地铁或网约车到 214 West 42nd Street（西42街214号），途中吃点小食；18:00前到剧院。Times Square（时代广场）在附近，可短拍，不在演出前安排长队购物。'],
    ['18:30—21:00','Aladdin（《阿拉丁》）· 可购场次','10月11日18:30官方场次已核实，演出约2小时30分钟，含中场。门票尚未报告购买；若不看演出，就把这段留给苏豪区、时代广场和晚餐。'],
    ['21:00后','简餐并回酒店','剧院与酒店同在中城，按体力吃热食或外带，乘车或走人流较多的主街回酒店。']
  ],`<h4>固定时间与选择</h4><p><b>已确认：</b>Casa Mono（卡萨莫诺）12:45，两人室内。午餐前博物馆必须11:45左右结束，给叫车留余量；迟到联系餐厅 +1 212-253-2773。</p><p><b>可购买：</b>《阿拉丁》10月11日18:30；购票前检查座位、最终价格和票面日期。门票未标记已付。</p><p><b>电影打卡：</b>Flatiron Building（熨斗大厦）是2002年《蜘蛛侠》号角日报外观；2026年《蜘蛛侠：崭新之日》的纽约街景主要在英国拍摄，勿把纽约地标当该片实拍机位。</p><p><b>机动段：</b>下午在格林威治村与苏豪区之间按体力取舍。逛到16:35仍在唐人街时直接坐车去剧院。</p><div class="actions">${link('https://www.opentable.com/r/casa-mono-new-york','餐厅官方资料')}${link('https://aladdinthemusical.com/event/20261011-1830-show/','《阿拉丁》官方场次')}${link(maps('The Metropolitan Museum of Art New York','Casa Mono 52 Irving Place New York','driving'),'博物馆→餐厅地图')}</div>`);

  day('2026-10-12','10月12日 · Lower Manhattan（曼哈顿下城）、Staten Island Ferry（史泰登岛渡轮）、DUMBO（丹波区）与 NBA（美职篮）','世贸与华尔街 → 免费渡轮 → 丹波区与大桥 → 酒店休息 → 比赛',[
    ['08:15—08:45','早餐并出发','从酒店前往 World Trade Center（世贸中心）一带。若想看 Tribeca（翠贝卡区）街景，只在世贸以北短停15分钟，不专门绕远。'],
    ['08:45—09:50','The Oculus（世贸中心交通枢纽）与 9/11 Memorial（九一一纪念广场）','网红“贝壳车站”的可搜索名称是 The Oculus（世贸中心交通枢纽）。拍室内对称视角，走到纪念广场；当天不进博物馆与观景台。'],
    ['09:50—10:30','Wall Street（华尔街）→ Whitehall Terminal（白厅码头）','依次短看 New York Stock Exchange（纽约证券交易所）、Federal Hall（联邦国家纪念堂）与 Charging Bull（华尔街铜牛），走到免费渡轮码头。若铜牛排队长，仅拍外观。'],
    ['10:30—12:15','Staten Island Ferry（史泰登岛渡轮）往返','免费乘船远看 Statue of Liberty（自由女神像），不上岛。单程约25分钟；到 St. George Terminal（圣乔治码头）后下船，重新排队搭回程。10月12日是假日，班次可能按周末表运行；以当天官方时刻为准。'],
    ['12:15—12:50','Stone Street（石街）简餐','从白厅码头步行到石街，选不用久候的午餐；12:50前离开，步行去 Wall Street / Pier 11（华尔街11号码头）。若渡轮回程延误，直接买外带。'],
    ['13:00—13:50','NYC Ferry（纽约渡轮）到 DUMBO（丹波区）','提前到 Pier 11（11号码头），买 East River Route（东河航线）至 DUMBO / Fulton Ferry（丹波区富尔顿码头）的单程票。此段需付费，与前面的免费渡轮不是同一运营系统；乘13:00之后合适班次，按实际船班调整下午时间。'],
    ['13:50—14:45','DUMBO（丹波区）照片与休息','走 Washington Street & Water Street（华盛顿街与水街交叉口）的曼哈顿大桥机位、Jane’s Carousel（简氏旋转木马）及河岸。拍照后坐下喝水；下午这段不再加正式博物馆。'],
    ['14:45—16:15','Brooklyn Bridge（布鲁克林大桥）→ 酒店','体力允许则从布鲁克林一侧走桥回曼哈顿，随后乘地铁或网约车回酒店。若已累，直接从丹波区乘车回酒店，把完整步行过桥删掉。目标16:15左右到酒店。'],
    ['16:15—18:00','休息、赛前简餐','酒店休息、补妆、核对两张电子票。17:15左右吃 NY Pizza Suprema（纽约至上披萨）或同档简餐，不带大包入场。'],
    ['18:15—22:15','Madison Square Garden（麦迪逊广场花园）NBA季前赛','19:30森林狼对尼克斯；18:15左右抵达安检。散场后沿主街回酒店或直接叫车。']
  ],`<h4>当天交通与缓冲</h4><p><b>上午：</b>下城步行连线，免费渡轮往返预留约1小时45分钟，候船是主要变量。10月12日为假日，出发前一天查看班次。</p><p><b>下午：</b>Pier 11（11号码头）付费渡轮接丹波区。若免费渡轮回得晚，直接删减石街坐席午餐或布鲁克林大桥步行；保持16:15回酒店的目标。</p><p><b>夜间：</b>球票已报付款，两张具体票务转入情况另核对；不要购买停车通行证。</p><p><b>电影关联：</b>史泰登岛渡轮是《蜘蛛侠：英雄归来》的故事场景；电影渡轮大战有布景与特效，不能把甲板说成完整实拍现场。</p><div class="actions">${link('https://siferry.com/schedules/','免费渡轮时刻')}${link('https://www.ferry.nyc/routes-and-schedules/east-river/','东河付费渡轮时刻')}${link(maps('World Trade Center New York','Whitehall Terminal New York'),'世贸→华尔街→码头地图')}${link(maps('DUMBO Manhattan Bridge View Brooklyn','Brooklyn Bridge pedestrian entrance Brooklyn'),'丹波区→大桥地图')}</div>`);

  day('2026-10-13','10月13日 · Fifth Avenue（第五大道）、The High Line（高线公园）与 Chelsea Market（切尔西市场）','购物与小吃 → 16:00取行李 → 17:00去机场酒店',[
    ['08:30—09:15','退房、寄存行李并出发','大箱留酒店，护照及贵重物品随身。今天不安排中央公园与博物馆，下午有机场酒店转场。'],
    ['09:15—11:45','Fifth Avenue（第五大道）向南购物','从 Louis Vuitton 57th Street（路易威登57街临时店，6 East 57th Street）外的巨型行李箱装置开始，沿路看 St. Patrick’s Cathedral（圣帕特里克大教堂）、Rockefeller Center（洛克菲勒中心）及 MoMA Design Store（纽约现代艺术博物馆设计商店）。进店挑2–3家即可。'],
    ['11:45—12:30','New York Public Library（纽约公共图书馆）与 Grand Central Terminal（中央车站）','第五大道走到42街，可短看图书馆外观与布莱恩特公园。Grand Central（中央车站）主大厅在东侧，需要额外步行；不想绕就跳过。Empire State Building（帝国大厦）外观可放在回酒店前顺路拍。'],
    ['12:30—13:15','短途交通至 Hudson Yards（哈德逊城市广场）','简单午餐或买外带，再转到 Vessel（维塞尔）外观附近；不登顶、不为商场重复购物。'],
    ['13:15—14:20','The High Line（高线公园）北向南','从哈德逊广场附近入口进入，沿旧铁轨单向步行到 Chelsea Market（切尔西市场）附近出口。按体力拍照与休息；不把公园全程当成必须完成。'],
    ['14:20—15:15','Chelsea Market（切尔西市场）小吃与采购','挑一家档口吃，逛小店，买次日凌晨可携带的固体早餐。Little Island（小岛公园）只作为取消部分购物后的替换，不额外叠加。'],
    ['15:15—17:00','打车回勒苏蕾酒店、取行李','15:15前离开切尔西市场；目标16:00到酒店，取行李、用洗手间。17:00从酒店打车去已订机场附近酒店，路况和实际车费以下单时为准。'],
    ['17:00—19:30','Manhattan（曼哈顿）→ JFK（肯尼迪机场）附近酒店','工作日晚高峰给车程和办理入住留余量；入住时确认凌晨03:00左右的接驳班次、航站楼与预约规则。']
  ],`<h4>最后一天的取舍</h4><p><b>购物：</b>第五大道优先 LV（路易威登）与1–2家感兴趣的店；MoMA（现代艺术博物馆）和 The Frick Collection（弗里克收藏馆）入馆需各增加约2小时，想进馆就替换高线公园，不叠加。</p><p><b>观景台：</b>Top of the Rock（洛克菲勒中心顶层观景台）可替换高线公园；购票后约预留1–1.5小时，日落场不适合当天17:00去机场的安排。</p><p><b>硬截止：</b>15:15离开切尔西市场，16:00酒店取行李，17:00向机场酒店出发。航班为次日06:30。</p><div class="actions">${link('https://eu.louisvuitton.com/eng-e1/magazine/articles/57th-street-nyc','LV行李箱地点')}${link(maps('Louis Vuitton 6 East 57th Street New York','New York Public Library 476 Fifth Avenue'),'第五大道向南地图')}${link(maps('Hudson Yards New York','Chelsea Market New York'),'高线公园步行方向')}</div>`);

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
    body.innerHTML=`<div class="grid"><article class="card span-4"><span class="badge orange">10月11日</span><h3>公园、博物馆与已订午餐</h3><p>08:30中央公园精选路段；10:00—11:45大都会艺术博物馆；12:45 Casa Mono（卡萨莫诺）两人室内午餐；下午格林威治村与苏豪区；18:30《阿拉丁》是可购场次。</p></article><article class="card span-4"><span class="badge blue">10月12日</span><h3>下城、布鲁克林与NBA</h3><p>世贸中心、华尔街、免费渡轮远看自由女神像；午餐后付费渡轮至丹波区，体力允许走布鲁克林大桥；16:15回酒店，19:30球赛。</p></article><article class="card span-4"><span class="badge darkbadge">10月13日</span><h3>购物与离城</h3><p>第五大道LV行李箱、圣帕特里克教堂与洛克菲勒；高线公园、切尔西市场；16:00取行李，17:00去机场酒店。</p></article><article class="card span-12"><h3>景点取舍</h3><p><b>入馆：</b>大都会艺术博物馆安排10月11日；MoMA（现代艺术博物馆）与 Frick（弗里克收藏馆）列为替换项，不与大都会叠加。<b>外观：</b>帝国大厦、洛克菲勒、中央图书馆、圣帕特里克教堂与LV行李箱。<b>选逛：</b>格林威治村、纽约大学、苏豪区。<b>顺路短看：</b>翠贝卡区。<b>可替换：</b>小意大利、唐人街、洛克菲勒观景台、小岛公园；选择一个就删去当天同等时长的项目。</p><p><b>蜘蛛侠：</b>熨斗大厦对应2002年《蜘蛛侠》号角日报外观；现址 Joe’s Pizza（乔氏披萨）与《蜘蛛侠2》旧店有关联；史泰登岛渡轮与《蜘蛛侠：英雄归来》的剧情有关。2026年《蜘蛛侠：崭新之日》主要纽约街景在英国拍摄。</p></article><article class="card span-12"><h3>地图与核对入口</h3><div class="actions">${link('https://www.metmuseum.org/plan-your-visit','大都会门票与开放时间')}${link('https://www.ticketmaster.com/aladdin-new-york-new-york-10-11-2026/event/030064AEEB4B18D7','10月11日《阿拉丁》票')}${link('https://siferry.com/schedules/','免费渡轮时刻')}${link('https://www.ferry.nyc/routes-and-schedules/east-river/','东河渡轮时刻')}</div></article></div>`;
  }
  const note=document.querySelector('#nyc .notice');
  if(note)note.innerHTML='<b>已确认与待买</b><p>Casa Mono（卡萨莫诺）10月11日12:45两人室内座位已确认；10月12日NBA两张门票已报付款；《阿拉丁》10月11日18:30有官方场次，尚未报告购票。10月13日17:00从曼哈顿去机场酒店。</p>';
})();
