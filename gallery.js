// Gallery: [file, category]. Categories: mowing, hedges, mulch, flowerbed, crew
const GALLERY = [
 ["gbp-mowing-09.jpg","mowing"],["gbp-hedges-04.jpg","hedges"],["gbp-mulch-01.jpg","mulch"],["gbp-flowerbed-01.jpg","flowerbed"],["gbp-crew-02.jpg","crew"],
 ["gbp-mowing-01.jpg","mowing"],["gbp-edging-01.jpg","mowing"],["gbp-hedges-01.jpg","hedges"],["gbp-mulch-04.jpg","mulch"],["ueni-8.jpg","flowerbed"],
 ["gbp-mowing-03.jpg","mowing"],["gbp-hedges-06.jpg","hedges"],["gbp-mulch-05.jpg","mulch"],["gbp-flowerbed-02.jpg","flowerbed"],["gbp-mowing-04.jpg","mowing"],
 ["gbp-hedges-02.jpg","hedges"],["gbp-mulch-03.jpg","mulch"],["ueni-2.jpg","flowerbed"],["gbp-mowing-06.jpg","mowing"],["gbp-hedges-03.jpg","hedges"],
 ["gbp-mulch-02.jpg","mulch"],["gbp-flowerbed-04.jpg","flowerbed"],["gbp-mowing-07.jpg","mowing"],["gbp-hedges-05.jpg","hedges"],["gbp-mowing-02.jpg","mowing"],
 ["gbp-mowing-08.jpg","mowing"],["gbp-mowing-13.jpg","mowing"],["gbp-mowing-14.jpg","mowing"],["gbp-mowing-10.jpg","mowing"],["gbp-mowing-05.jpg","mowing"],
 ["gbp-mowing-12.jpg","mowing"],["gbp-mowing-11.jpg","mowing"],["ueni-4.jpg","mowing"],["ueni-5.jpg","mowing"],["ueni-6.jpg","mowing"],["ueni-7.jpg","mowing"]
];
const LABEL={mowing:"Mowing & edging",hedges:"Hedge trimming",mulch:"Mulch & pine straw",flowerbed:"Flower bed",crew:"Our crew"};
(function(){const g=document.getElementById('gal');if(!g)return;let i=0,vis=GALLERY;
const lb=document.getElementById('lb'),im=lb.querySelector('img');
GALLERY.forEach(([f,c])=>{const e=document.createElement('img');e.src='assets/gallery/'+f;e.loading='lazy';e.decoding='async';e.dataset.c=c;e.alt='Grow It We Mow It – '+LABEL[c]+' job photo';e.onclick=()=>show(vis.findIndex(x=>x[0]===f));g.appendChild(e)});
document.querySelectorAll('#filt button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#filt button').forEach(x=>x.classList.toggle('on',x===b));const f=b.dataset.f;
 vis=GALLERY.filter(x=>f=='all'||x[1]==f);g.querySelectorAll('img').forEach(e=>e.hidden=!(f=='all'||e.dataset.c==f))});
function show(n){i=(n+vis.length)%vis.length;im.src='assets/gallery/'+vis[i][0];lb.classList.add('on')}
lb.querySelector('.x').onclick=()=>lb.classList.remove('on');lb.querySelector('.pv').onclick=()=>show(i-1);lb.querySelector('.nx').onclick=()=>show(i+1);
lb.onclick=e=>{if(e.target===lb)lb.classList.remove('on')};
document.addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key=='Escape')lb.classList.remove('on');if(e.key=='ArrowLeft')show(i-1);if(e.key=='ArrowRight')show(i+1)})})();
