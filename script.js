(function(){
  // year
  document.getElementById('yr').textContent = new Date().getFullYear();

  // skill bars fill when visible
  var bars = document.querySelectorAll('.bar');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('on'); io.unobserve(e.target);} });
    },{threshold:.4});
    bars.forEach(function(b){ io.observe(b); });
  } else { bars.forEach(function(b){ b.classList.add('on'); }); }

  // the shy "Don't hire me" button
  var btn = document.getElementById('runaway'), msg = document.getElementById('runmsg');
  var lines = [
    "(the second button is shy)",
    "Nope. Can't catch it.",
    "It has trust issues.",
    "You're persistent. Hire me instead?",
    "Fine. The button has left the building.",
    "Okay stop. Just click Hire me."
  ], hits = 0;
  function flee(){
    var r = btn.getBoundingClientRect();
    btn.classList.add('fly');
    var x = Math.random()*(innerWidth - r.width - 20) + 10;
    var y = Math.random()*(innerHeight - r.height - 20) + 10;
    btn.style.left = x+'px'; btn.style.top = y+'px';
    hits++; msg.textContent = lines[Math.min(hits, lines.length-1)];
  }
  btn.addEventListener('mouseenter', flee);
  btn.addEventListener('touchstart', function(e){ e.preventDefault(); flee(); }, {passive:false});
  btn.addEventListener('click', flee);
  btn.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); flee(); } });

  // logo spin
  var logo = document.getElementById('logo');
  logo.addEventListener('click', function(){
    logo.classList.remove('spin'); void logo.offsetWidth; logo.classList.add('spin');
  });

  // estimator
  var ans = document.getElementById('answer');
  document.querySelectorAll('.pick button').forEach(function(b){
    b.addEventListener('click', function(){
      document.querySelectorAll('.pick button').forEach(function(x){ x.classList.remove('sel'); });
      b.classList.add('sel');
      ans.textContent = 'Calculating...';
      setTimeout(function(){ ans.textContent = b.dataset.t; }, 700);
    });
  });

  // scared "back to top" emergency panic escape
  var top = document.getElementById('top');
  var topText = document.getElementById('top-text');
  var topSub = document.getElementById('top-sub');
  var escapeLines = [
    "EMERGENCY ESCAPE: Quick, Alt+Tab to Excel!",
    "EJECT! Act like you're reviewing a spreadsheet!",
    "Too late. IT Department already logged this visit.",
    "Ascending to safety (your unread Slack messages await)...",
    "Fleeing back to the hero section to squash more bugs..."
  ];
  var subLines = [
    "(Clicking this will not refund the 4 minutes of your life you just wasted here)",
    "(Pro tip: look very stressed so coworkers think you're working)",
    "(HR would like to know your current location)",
    "(Don't worry, your secret vibe-coding addiction is safe with me)"
  ];
  var eIndex = 0;
  if (top) {
    top.addEventListener('mouseenter', function(){
      eIndex++;
      topText.textContent = escapeLines[eIndex % escapeLines.length];
      topSub.textContent = subLines[eIndex % subLines.length];
    });
    top.addEventListener('click', function(e){
      e.preventDefault();
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  // guilt-trip when you leave the tab
  var title = document.title;
  var favIcon = document.querySelector('link[rel="icon"]');
  document.addEventListener('visibilitychange', function(){
    if (document.hidden) {
      document.title = 'Come back. I wasn\'t done judging you.';
      if (favIcon) favIcon.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><text y='26' font-size='26'>👀</text></svg>";
    } else {
      document.title = title;
      if (favIcon) favIcon.href = 'favicon.svg';
    }
  });
})();

/* ---- extra fun ---- */
(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function burst(x, y, icons, n){
    if(reduce) return;
    for(var i=0;i<n;i++){
      var e=document.createElement('span');
      e.className='pop'; e.textContent=icons[i%icons.length];
      e.style.left=x+'px'; e.style.top=y+'px';
      e.style.setProperty('--dx',(Math.random()*400-200)+'px');
      e.style.setProperty('--dy',(Math.random()*-300-40)+'px');
      e.style.setProperty('--r',(Math.random()*720-360)+'deg');
      document.body.appendChild(e);
      setTimeout(function(el){el.remove();}.bind(null,e),1200);
    }
  }

  // hire me = confetti
  document.querySelector('.btn.yes').addEventListener('click',function(e){
    burst(e.clientX,e.clientY,['🎉','💸','🤝','☕','🔥'],24);
  });

  // squashable bug
  var bug=document.createElement('div'); bug.className='bug'; bug.textContent='🐛';
  bug.setAttribute('role','button'); bug.setAttribute('aria-label','Squash the bug');
  document.body.appendChild(bug);
  var count=0, cnt=document.getElementById('bugs'), bm=document.getElementById('bugmsg');
  var said=['(a bug is crawling around. Go get it.)','One down. They multiply, you know.','Is it a feature? Nope, squashed.','Production bugs never die this easily.','You are better at debugging than me.','Please. Stop. I have a deadline.'];
  function place(){
    bug.style.left=Math.random()*(innerWidth-60)+'px';
    bug.style.top=Math.random()*(innerHeight-60)+'px';
  }
  place();
  if(!reduce) setInterval(place,2300);
  bug.addEventListener('click',function(e){
    bug.classList.add('dead');
    burst(e.clientX,e.clientY,['💥','✨'],8);
    count++; cnt.textContent=count; bm.textContent=said[Math.min(count,said.length-1)];
    setTimeout(function(){bug.classList.remove('dead');place();},600);
  });

  // cookie notice (dismisses on single click & remembers per session)
  var cookie = document.getElementById('cookie');
  if (cookie) {
    if (sessionStorage.getItem('cookie_eaten')) {
      cookie.style.display = 'none';
    } else {
      function dismissCookie(e) {
        burst(e.clientX, e.clientY, ['🍪', '😋', '✨', '💨'], 12);
        cookie.style.opacity = '0';
        cookie.style.pointerEvents = 'none';
        sessionStorage.setItem('cookie_eaten', 'true');
        setTimeout(function(){
          cookie.classList.add('gone');
          cookie.style.display = 'none';
        }, 200);
      }
      var eat1 = document.getElementById('eat');
      var eat2 = document.getElementById('eat2');
      if (eat1) eat1.addEventListener('click', dismissCookie);
      if (eat2) eat2.addEventListener('click', dismissCookie);
    }
  }

  // konami
  var seq=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'], pos=0;
  addEventListener('keydown',function(e){
    var k=e.key.length===1?e.key.toLowerCase():e.key;
    pos = (k===seq[pos]) ? pos+1 : (k===seq[0]?1:0);
    if(pos===seq.length){
      pos=0;
      burst(innerWidth/2, innerHeight/2, ['🤡','🤡','🤡','📉','💤','💥'], 35);
      document.body.classList.add('shake-screen');
      document.title='🤡 CONGRATULATIONS ON UNLOCKING ABSOLUTELY NOTHING.';
      var hintEl = document.querySelector('.hint');
      if (hintEl) hintEl.innerHTML = '<span class="hint-tag" style="background:#000">UNEMPLOYED BEHAVIOR</span> <b>You really typed all 10 keys expecting a prize? Go touch grass.</b>';
      setTimeout(function(){
        document.body.classList.remove('shake-screen');
        if (hintEl) hintEl.innerHTML = '<span class="hint-tag">LOOK AT YOU</span> Actually sitting here typing <code>↑ ↑ ↓ ↓ ← → ← → B A</code> on a random portfolio. What are you doing with your life?';
      }, 4000);
    }
  });
})();

/* ---- vibe-o-meter ---- */
(function(){
  var input=document.getElementById('ask'), out=document.getElementById('vibeans'), btn=document.getElementById('askbtn');
  var tpl=[
    'Build "%s"? Already 80% finished in my head. The remaining 20% is prayers and ChatGPT.',
    '"%s" will launch tonight. It will crash tomorrow. Both will be your fault.',
    'Ah, "%s". A billion-dollar idea that I will build in 3 hours and abandon by next Tuesday.',
    '"%s": I will vibe it, break your staging environment, and blame your DNS records.',
    'Nobody has built "%s" yet because it makes zero business sense. Which means I am the perfect man for the job.',
    'Give me "%s", 3 espressos, and zero supervision. Come back when you receive the Stripe invoice.'
  ], n=0;
  function go(){
    var v=input.value.trim();
    if(!v){ out.textContent='Empty idea. Bold. I would still build it.'; return; }
    out.textContent='Vibing...';
    setTimeout(function(){ out.textContent=tpl[n%tpl.length].replace('%s',v); n++; },600);
  }
  btn.addEventListener('click',go);
  input.addEventListener('keydown',function(e){ if(e.key==='Enter') go(); });
})();

/* ---- count-up numbers ---- */
(function(){
  var els=document.querySelectorAll('[data-n]');
  function run(el){
    var t=+el.dataset.n, d=1400, st=null;
    if(!t){ el.textContent='0'; return; }
    function f(ts){ st=st||ts; var p=Math.min((ts-st)/d,1); el.textContent=Math.floor(t*p).toLocaleString(); if(p<1) requestAnimationFrame(f); }
    requestAnimationFrame(f);
  }
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);io.unobserve(e.target);}});},{threshold:.6});
    els.forEach(function(e){io.observe(e);});
  } else els.forEach(run);
})();
