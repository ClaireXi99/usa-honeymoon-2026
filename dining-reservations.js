/* Reservation reminders; these are not booking confirmations. */
(() => {
  const rows=[
    ['2026-09-30','Robin’s Restaurant（罗宾餐厅）','选定后再订','19:00—19:15 · 两人','海边晚餐备选；决定去就现在查看余位，不与月光石海滩餐吧重复订。','https://www.robinsrestaurant.com/reservations'],
    ['2026-09-30','Moonstone Beach Bar & Grill（月光石海滩餐吧）','现场候位','19:15前到店','不接受预约；日落后直接过去，长队则换备选。','https://www.moonstonebeach.com/'],
    ['2026-10-01','Boathouse at Hendry’s Beach（亨德里海滩船屋餐厅）','现场候位','10:30左右登记','不按提前订桌安排；候位超过20分钟就改简餐，12:00离开圣塔芭芭拉。','https://boathousesb.com/'],
    ['2026-10-02','Toadstool Cafe（奇诺比奥咖啡屋）','选定后再订','午餐 · 两人','想吃就现在从环球官方页查看预约；没有合适时段用其他园内餐厅。','https://www.universalstudioshollywood.com/web/en/us/things-to-do/dining/toadstool-cafe'],
    ['2026-10-03','Kali Restaurant（卡利餐厅）','优先预订','19:45 · 两人','现在查看余位。优先19:45；若订19:30，需要18:35离开天文台。以订位确认邮件为准。','https://resy.com/cities/los-angeles-ca/venues/kali?date=2026-10-03&seats=2'],
    ['2026-10-04','Blue Bayou Restaurant（蓝湾餐厅）','选定后再订','园内桌餐三选一','现在查看迪士尼应用余位；需要有效主园门票和同日入园预约。吃柜台快餐则不用订桌。','https://disneyland.disney.go.com/dining/disneyland/blue-bayou-restaurant/'],
    ['2026-10-04','Cafe Orleans（新奥尔良餐厅）','选定后再订','园内桌餐三选一','与蓝湾、康乃馨选一家，不同时预订多顿桌餐；无合适时段就保留快餐。','https://disneyland.disney.go.com/dining/disneyland/cafe-orleans/'],
    ['2026-10-04','Carnation Cafe（康乃馨咖啡馆）','选定后再订','园内桌餐三选一','现在查看应用余位；官方部分餐厅最早提前60天放位，目前已进入预约窗口。','https://disneyland.disney.go.com/dining/disneyland/carnation-cafe/'],
    ['2026-10-08','Noodles（百乐宫面馆）','优先预订','20:15—20:30 · 两人','建议提前3—7天查看余位；从酒店官方页面进入订位，选择10月8日。给18:30《O》秀散场留时间；不是必须预约才可吃。','https://bellagio.mgmresorts.com/en/restaurants/noodles.html'],
    ['2026-10-09','Esther’s Kitchen（埃丝特厨房）','选定后再订','11:30—12:00 · 两人','建议提前3—7天订；用艺术区午餐替换奥莱午餐，不额外增加一餐。','https://www.estherslv.com/'],
    ['2026-10-09','Peppermill（胡椒磨餐厅）','选定后再订','晚餐 · 两人','可10月8日当地时间16:00后致电 +1 702-735-4177 预约次日晚餐，也接受现场候位。16:00是接预约电话时间，不是放位时间。','https://www.peppermilllasvegas.com/']
  ];
  const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const render=r=>`<div class="reservation-row"><div><span class="reservation-label${r[2]==='优先预订'?' priority':''}">${r[2]}</span><b>${esc(r[1])}</b><small>${esc(r[3])}</small><p>${esc(r[4])}</p></div><a class="btn light" target="_blank" rel="noopener" href="${esc(r[5])}">${r[2]==='现场候位'?'餐厅官网':'打开订位页面'} ↗</a></div>`;
  document.querySelectorAll('.city-days article.day').forEach(day=>{
    const selected=rows.filter(r=>r[0]===day.dataset.date);if(!selected.length)return;
    const node=document.createElement('section');node.className='reservation-reminders';node.innerHTML='<h4>餐厅订位</h4><p class="reservation-caption">尚未代订。优先预订不等于强制预约；其他备选选定后再订。</p>'+selected.map(render).join('');
    day.querySelector('.daily-dining .dining-inner')?.prepend(node);
  });
  const overview=document.createElement('details');overview.className='city-reference';overview.id='restaurant-reservations';overview.innerHTML='<summary>餐厅订位清单与入口</summary><div class="reference-body"><p>先订卡利和百乐宫面馆。其他餐厅选定后再订，不同时占多个备选位置；提前天数是行程建议，不是官方放位承诺。付款前查看取消、未到店及银行卡担保规则。</p>'+rows.map(r=>'<h4>'+r[0].slice(5).replace('-','月')+'日</h4>'+render(r)).join('')+'</div>';document.getElementById('book').append(overview);
})();
