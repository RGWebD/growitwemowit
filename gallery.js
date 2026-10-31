// Add/remove photos here. Drop files into assets/gallery/ and list them below.
const GALLERY = [
  "ueni-2.jpg","ueni-4.jpg","ueni-5.jpg","ueni-6.jpg","ueni-7.jpg","ueni-8.jpg","ueni-3.jpg"
];
(function(){const g=document.getElementById('gal');if(!g)return;let i=0;
const lb=document.getElementById('lb'),im=lb.querySelector('img');
GALLERY.forEach((f,n)=>{const e=new Image();e.src='assets/gallery/'+f;e.alt='Grow It We Mow It job photo';e.onclick=()=>show(n);g.appendChild(e)});
function show(n){i=(n+GALLERY.length)%GALLERY.length;im.src='assets/gallery/'+GALLERY[i];lb.classList.add('on')}
lb.querySelector('.x').onclick=()=>lb.classList.remove('on');lb.querySelector('.pv').onclick=()=>show(i-1);lb.querySelector('.nx').onclick=()=>show(i+1);
lb.onclick=e=>{if(e.target===lb)lb.classList.remove('on')};
document.addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key=='Escape')lb.classList.remove('on');if(e.key=='ArrowLeft')show(i-1);if(e.key=='ArrowRight')show(i+1)})})();
