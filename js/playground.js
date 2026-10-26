import { burst } from './burst.js';

/**
 * Interactive playground features:
 * - Hire Me confetti launch
 * - Squashable crawling bug (Only 🐛, with sniper crosshair cursor on hover)
 * - Dynamic Sarcastic Certificates:
 *     • 10 Bugs: Unpaid Senior QA Engineer
 *     • 20 Bugs: Chief Hallucination Debugger & Unpaid Intern of the Year
 *     • 25 Bugs: Principal Bug Exorcist & Production Martyr (Supreme)
 *     • Every +10 Bugs beyond: Infinite Escalating QA Godhood
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

  // =========================================================================
  // Tiered Sarcastic Certificate Modal System (10, 20, 25, 30+ Bugs)
  // =========================================================================
  const modalBackdrop = document.createElement('div');
  modalBackdrop.className = 'qa-modal-backdrop';
  modalBackdrop.setAttribute('role', 'dialog');
  modalBackdrop.setAttribute('aria-modal', 'true');
  document.body.appendChild(modalBackdrop);

  const certTiers = {
    10: {
      stamp: 'ZERO SALARY APPROVED',
      badge: '🏆 OFFICIAL CERTIFICATE OF VOLUNTARY LABOR',
      title: 'UNPAID SENIOR QA ENGINEER',
      body: `This document solemnly certifies that <b>YOU</b> just spent valuable minutes of your mortal life squashing <b>10 production bugs</b> for free.<br><br>
             Thanks to your unpaid vigilance, our staging environment did not spontaneously ignite. Add this triumph to your LinkedIn immediately.`,
      sig1Title: 'CEO / Prompt Whisperer',
      sig2Title: 'Chief Brain',
      claimText: 'Claim $0.00 Salary 💸',
      claimError: 'Transferring $0.00 to bank... (Error 404: Funds Not Found)'
    },
    20: {
      stamp: 'UNEMPLOYED BEHAVIOR DETECTED',
      badge: '🎖️ EXECUTIVE ORDER OF CHRONIC PROCRASTINATION',
      title: 'CHIEF BUG EXORCIST & PRODUCTION MARTYR',
      body: `Astonishing. You actually sat here and murdered <b>20 innocent bugs</b> on a random developer portfolio.<br><br>
             Don't you have unread Slack messages? Jira tickets dying in backlog? A warm dinner waiting? You have successfully debugged more code today than the author did all week.`,
      sig1Title: 'Founder & Professional Blamer',
      sig2Title: 'Vice President of Apologies',
      claimText: 'Claim Free Emotional Support 🫂',
      claimError: 'Dispensing sympathy... (Error 500: Server Out of Empathy)'
    },
    25: {
      stamp: 'LEGENDARY DEBT ACCUMULATED',
      badge: '👑 SUPREME GOD OF UNPAID OVERTIME',
      title: 'HONORARY CO-FOUNDER (0% EQUITY, 100% BLAME)',
      body: `<b>TWENTY-FIVE BUGS SQUASHED.</b> You are no longer a visitor; you practically own this codebase.<br><br>
             Effective immediately, any server crash, client complaint, or Stripe billing error is <b>officially your fault</b>. Please log into on-call duty tonight at 3:14 AM.`,
      sig1Title: 'Chairman of The Board',
      sig2Title: 'Senior Hallucination Officer',
      claimText: 'Claim 100% Blame & 0% Equity 📉',
      claimError: 'Deploying direct to prod... (Warning: You broke everything)'
    }
  };

  function getCertData(killCount) {
    if (certTiers[killCount]) return certTiers[killCount];
    return {
      stamp: 'INFINITY QA GOD',
      badge: `⚡ TRANSCENDED MORTAL CODING (${killCount} KILLS)`,
      title: `LEVEL ${killCount} BREADCRUMB SLAYER`,
      body: `You have crushed <b>${killCount} bugs</b>. The browser is sweating. The AI is intimidated. Please, touch grass before your mouse catches fire.`,
      sig1Title: 'Humbled Developer',
      sig2Title: 'Overheated GPU',
      claimText: 'Order Grass Delivery 🌿',
      claimError: 'Grass delivery dispatched to your coordinates!'
    };
  }

  function openCertificate(killCount) {
    const data = getCertData(killCount);
    modalBackdrop.innerHTML = `
      <div class="qa-certificate">
        <div class="qa-stamp">${data.stamp}</div>
        <div class="qa-badge">${data.badge}</div>
        <h2>${data.title}</h2>
        <p class="qa-cert-body">${data.body}</p>
        <div class="qa-signature-row">
          <div class="qa-sig">
            <span class="qa-sig-name">Yallah Habibi</span>
            <span class="qa-sig-title">${data.sig1Title}</span>
          </div>
          <div class="qa-sig">
            <span class="qa-sig-name">Claude & Gemini</span>
            <span class="qa-sig-title">${data.sig2Title}</span>
          </div>
        </div>
        <div class="qa-actions">
          <button type="button" class="qa-btn claim" id="qa-claim">${data.claimText}</button>
          <button type="button" class="qa-btn close" id="qa-close">Dismiss (Back to Slaying) 🏹</button>
        </div>
      </div>
    `;

    burst(window.innerWidth / 2, window.innerHeight / 2, ['🏆', '📜', '💸', '✨', '🐛', '🔥'], 45);
    modalBackdrop.classList.add('show');

    const claimBtn = modalBackdrop.querySelector('#qa-claim');
    const closeBtn = modalBackdrop.querySelector('#qa-close');

    if (claimBtn) {
      claimBtn.addEventListener('click', (e) => {
        burst(e.clientX, e.clientY, ['💸', '📉', '💨', '🤡', '☕'], 24);
        claimBtn.textContent = data.claimError;
        claimBtn.disabled = true;
        setTimeout(() => {
          closeCertificate();
        }, 1900);
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeCertificate);
    }
  }

  function closeCertificate() {
    modalBackdrop.classList.remove('show');
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeCertificate();
  });

  // =========================================================================
  // Squashable Bug (Only 🐛, with sniper crosshair & milestone certificates)
  // =========================================================================
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
    'One down. They multiply in production, you know.',
    'Is it a feature? Nope, squashed.',
    'Production bugs never die this easily.',
    'You are better at debugging than my AI prompts.',
    'Careful. You touch it, you own the repo.',
    '6 down. The Jira backlog is weeping.',
    '7 squashed. Are you billing me for QA consulting?',
    '8 bugs crushed. Senior QA energy detected.',
    'Almost 10! The official Bug Bounty certificate awaits...'
  ];

  function placeBug() {
    const maxX = window.innerWidth - 60;
    const maxY = window.innerHeight - 60;
    bug.style.left = `${Math.max(10, Math.random() * maxX)}px`;
    bug.style.top = `${Math.max(10, Math.random() * maxY)}px`;
  }
  placeBug();
  if (!reduce) setInterval(placeBug, 2300);

  bug.addEventListener('click', (e) => {
    bug.classList.add('dead');
    burst(e.clientX, e.clientY, ['💥', '✨', '⚡', '🎯'], 12);
    count++;

    if (cnt) cnt.textContent = count;
    if (bm) {
      if (count === 10) {
        bm.textContent = '🎉 10 BUGS SQUASHED! PROMOTED TO SENIOR UNPAID QA!';
      } else if (count > 10 && count < 20) {
        bm.textContent = `${count} bugs down! Road to 20: Chief Bug Exorcist Certificate incoming...`;
      } else if (count === 20) {
        bm.textContent = '💀 20 BUGS SQUASHED! YOU HAVE ZERO CHILL!';
      } else if (count > 20 && count < 25) {
        bm.textContent = `${count} bugs down! Road to 25: Honorary Co-Founder Rank approaching!`;
      } else if (count >= 25) {
        bm.textContent = `👑 ${count} BUGS SQUASHED! ALL HAIL THE QA GOD!`;
      } else {
        bm.textContent = said[Math.min(count, said.length - 1)];
      }
    }

    // Trigger Tiered Certificates at 10, 20, 25, and every 10 afterwards (35, 45...)
    if (count === 10 || count === 20 || count === 25 || (count > 25 && count % 10 === 5)) {
      setTimeout(() => {
        openCertificate(count);
      }, 500);
    }

    setTimeout(() => {
      bug.classList.remove('dead');
      bug.textContent = '🐛';
      placeBug();
    }, 600);
  });

  // =========================================================================
  // Cookie notice
  // =========================================================================
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

  // =========================================================================
  // Konami keyboard code & mobile tap easter egg
  // =========================================================================
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
