import { burst } from './burst.js';

/**
 * Interactive playground features:
 * - Hire Me confetti launch
 * - Squashable emotional support crawling bug
 * - Satirical cookie notice dismissal with session storage
 * - Konami code & tap cheat trigger with screen rumble
 */

export function initPlayground() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hire me confetti
  const hireBtn = document.querySelector('.btn.yes');
  if (hireBtn) {
    hireBtn.addEventListener('click', (e) => {
      burst(e.clientX, e.clientY, ['🎉', '💸', '🤝', '☕', '🔥'], 24);
    });
  }

  // Squashable bug
  const bug = document.createElement('div');
  bug.className = 'bug';
  bug.textContent = '🐛';
  bug.setAttribute('role', 'button');
  bug.setAttribute('aria-label', 'Squash the bug');
  document.body.appendChild(bug);

  let count = 0;
  const cnt = document.getElementById('bugs');
  const bm = document.getElementById('bugmsg');
  const said = [
    '(a bug is crawling around. Go get it.)',
    'One down. They multiply, you know.',
    'Is it a feature? Nope, squashed.',
    'Production bugs never die this easily.',
    'You are better at debugging than me.',
    'Please. Stop. I have a deadline.'
  ];

  function placeBug() {
    bug.style.left = `${Math.random() * (window.innerWidth - 60)}px`;
    bug.style.top = `${Math.random() * (window.innerHeight - 60)}px`;
  }
  placeBug();
  if (!reduce) setInterval(placeBug, 2300);

  bug.addEventListener('click', (e) => {
    bug.classList.add('dead');
    burst(e.clientX, e.clientY, ['💥', '✨'], 8);
    count++;
    if (cnt) cnt.textContent = count;
    if (bm) bm.textContent = said[Math.min(count, said.length - 1)];
    setTimeout(() => {
      bug.classList.remove('dead');
      placeBug();
    }, 600);
  });

  // Cookie notice
  const cookie = document.getElementById('cookie');
  if (cookie) {
    if (sessionStorage.getItem('cookie_eaten')) {
      cookie.style.display = 'none';
    } else {
      function dismissCookie(e) {
        burst(e.clientX, e.clientY, ['🍪', '😋', '✨', '💨'], 12);
        cookie.style.opacity = '0';
        cookie.style.pointerEvents = 'none';
        sessionStorage.setItem('cookie_eaten', 'true');
        setTimeout(() => {
          cookie.classList.add('gone');
          cookie.style.display = 'none';
        }, 200);
      }
      const eat1 = document.getElementById('eat');
      const eat2 = document.getElementById('eat2');
      if (eat1) eat1.addEventListener('click', dismissCookie);
      if (eat2) eat2.addEventListener('click', dismissCookie);
    }
  }

  // Konami keyboard code & mobile tap easter egg
  let isAnimating = false;
  function triggerEasterEgg(x, y) {
    if (isAnimating) return;
    isAnimating = true;
    burst(x || window.innerWidth / 2, y || window.innerHeight / 2, ['🤡', '🤡', '🤡', '📉', '💤', '💥'], 35);
    document.body.classList.add('shake-screen');
    document.title = '🤡 CONGRATULATIONS ON UNLOCKING ABSOLUTELY NOTHING.';
    
    const hintEl = document.querySelector('.hint');
    const isTouch = window.matchMedia('(hover:none) and (pointer:coarse)').matches;
    if (hintEl) {
      hintEl.innerHTML = isTouch
        ? '<span class="hint-tag" style="background:#000">TAPPER SUPREME</span> <b>You really tapped it expecting a prize? Incredible optimism.</b>'
        : '<span class="hint-tag" style="background:#000">UNEMPLOYED BEHAVIOR</span> <b>You really typed all 10 keys expecting a prize? Go touch grass.</b>';
    }

    setTimeout(() => {
      document.body.classList.remove('shake-screen');
      if (hintEl) {
        hintEl.innerHTML = '<span class="hint-tag">LOOK AT YOU</span> Actually typing / tapping <code class="code-btn">↑ ↑ ↓ ↓ ← → ← → B A</code> on a random portfolio. What are you doing with your life?';
      }
      isAnimating = false;
    }, 4000);
  }

  const hintTrigger = document.getElementById('hint-trigger');
  if (hintTrigger) {
    hintTrigger.addEventListener('click', (e) => {
      triggerEasterEgg(e.clientX, e.clientY);
    });
    hintTrigger.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        const t = e.changedTouches[0];
        triggerEasterEgg(t.clientX, t.clientY);
      } else {
        triggerEasterEgg();
      }
    });
  }

  const seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let pos = 0;
  window.addEventListener('keydown', (e) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = (k === seq[pos]) ? pos + 1 : (k === seq[0] ? 1 : 0);
    if (pos === seq.length) {
      pos = 0;
      triggerEasterEgg();
    }
  });
}
