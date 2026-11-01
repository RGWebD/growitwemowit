(function(){var a=document.getElementById('heroAudio'),b=document.getElementById('sndBtn');if(!a||!b)return;
var l=b.querySelector('.lbl'),userChose=false;
function ui(){var p=!a.paused;b.setAttribute('aria-pressed',p);b.setAttribute('aria-label',p?'Pause music':'Play music');l.textContent=p?'Pause':'Play music';}
a.addEventListener('play',ui);a.addEventListener('pause',ui);
function off(){document.removeEventListener('pointerdown',first,true);document.removeEventListener('keydown',first,true);}
function first(e){if(userChose||b.contains(e.target)){off();return;}off();a.play().catch(function(){});}
b.addEventListener('click',function(){userChose=true;off();if(a.paused)a.play().catch(function(){});else a.pause();});
var p=a.play();if(p&&p.catch)p.catch(function(){if(!userChose){document.addEventListener('pointerdown',first,true);document.addEventListener('keydown',first,true);}});
ui();})();
