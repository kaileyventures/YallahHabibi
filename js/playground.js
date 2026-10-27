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
      stampTop: 'GOVT OF UNPAID OVERTIME',
      stampSeal: 'VERIFIED ZERO EQUITY',
      badge: 'OFFICIAL CERTIFICATE OF VOLUNTARY LABOUR',
      certNo: 'CERT-000404-LOL',
      title: 'SENIOR BUG EXORCIST',
      body: `Be it known to all mortal developers and venture capitalists that <b>YOU</b> have successfully hunted, cornered, and brutally slaughtered <b>10 production bugs</b> in broad daylight.<br><br>
             By decree of the <i>Ministry of Delusion</i>, you are hereby granted lifetime immunity from reading documentation, plus full bragging rights to add <b>"Principal Quality Assurance Wizard"</b> to your LinkedIn profile with zero verification.`,
      sig1Name: 'Yallah Habibi',
      sig1Title: 'Chief Hallucination Officer',
      sig2Name: 'ChatGPT & Gemini',
      sig2Title: 'Supreme Overlords of Excuses',
      claimText: 'Claim $0.00 Salary 💸',
      claimError: 'Transferring $0.00 to Swiss account... (Error 404: Funds Stolen by AWS)'
    },
    20: {
      stampTop: 'CHRONIC PROCRASTINATION',
      stampSeal: 'TOUCH GRASS IMMEDIATELY',
      badge: 'HIGH DIPLOMA OF MASSIVE CHROMA CHAOS',
      certNo: 'CERT-000420-CAP',
      title: 'SUPREME CODE SLAYER & JIRA RUINER',
      body: `This imperial document certifies that the bearer has eliminated <b>20 innocent production features (bugs)</b>.<br><br>
             Our backend servers wept. The staging database broke into applause. You have officially contributed more working code to this repository today than the creator did in the entire previous fiscal quarter.`,
      sig1Name: 'Yallah Habibi',
      sig1Title: 'Founder & Professional Blamer',
      sig2Name: 'Stack Overflow',
      sig2Title: 'Duplicate Question Closer',
      claimText: 'Claim Emotional Support Hug 🫂',
      claimError: 'Error 500: Server is out of empathy. Go drink water.'
    },
    25: {
      stampTop: 'LEGALLY BINDING MARTYRDOM',
      stampSeal: '100% BLAME • 0% PAY',
      badge: 'IMPERIAL ORDER OF ON-CALL RESPONSIBILITY',
      certNo: 'CERT-000999-RIP',
      title: 'HONORARY CO-FOUNDER & PRODUCTION OWNER',
      body: `<b>TWENTY-FIVE BUGS SLAIN.</b> The trial has ended. You have ascended.<br><br>
             Effective immediately, any 3:00 AM server crash, client breakdown, or Stripe dispute is <b>100% your legal fault</b>. Your pager duty begins in 4 minutes. Welcome to the leadership team.`,
      sig1Name: 'Yallah Habibi',
      sig1Title: 'Escaped to Costa Rica',
      sig2Name: 'Vercel & Docker',
      sig2Title: 'Silent Executioners',
      claimText: 'Accept 100% Blame & 0% Equity 📉',
      claimError: 'Deploying direct to prod... (Warning: You broke everything)'
    }
  };

  function getCertData(killCount) {
    if (certTiers[killCount]) return certTiers[killCount];
    return {
      stampTop: 'BEYOND HUMAN SANITY',
      stampSeal: 'TERMINAL LEVEL REACHED',
      badge: `⚡ TRANSCENDED MORTAL REALITY (${killCount} KILLS)`,
      certNo: `CERT-${killCount}-GODMODE`,
      title: `LEVEL ${killCount} DEITY OF PURE CHAOS`,
      body: `You have assassinated <b>${killCount} bugs</b>. The browser cache is crying. The CPU is sweating. The AI has unplugged itself in sheer terror. Please shut down your laptop and walk into the sunlight.`,
      sig1Name: 'Humbled Developer',
      sig1Title: 'Defeated by User',
      sig2Name: 'Overheated GPU',
      sig2Title: 'Thermal Throttling at 99°C',
      claimText: 'Order Grass Delivery 🌿',
      claimError: 'Grass delivery dispatched to your coordinates!'
    };
  }

  function openCertificate(killCount) {
    const data = getCertData(killCount);
    modalBackdrop.innerHTML = `
      <div class="qa-certificate">
        <div class="qa-cert-inner">
          <div class="qa-top-bar">
            <span class="qa-cert-id">NO: ${data.certNo}</span>
            <div class="qa-rubber-stamp">${data.stampTop}</div>
          </div>
          
          <div class="qa-badge">${data.badge}</div>
          <h2 class="qa-cert-title">${data.title}</h2>
          
          <div class="qa-decor-line"><span>★ ★ ★</span></div>
          
          <div class="qa-name-customizer">
            <label for="qa-recipient-input" class="qa-name-label">Type Your Name to Personalize:</label>
            <input type="text" id="qa-recipient-input" class="qa-name-input" value="YOUR NAME" maxlength="30" placeholder="Type your name here..." autocomplete="off" spellcheck="false" />
          </div>

          <!-- Official Recipient Showcase Banner -->
          <div class="qa-presented-block">
            <span class="qa-presented-label">THIS DIPLOMA IS PROUDLY PRESENTED TO:</span>
            <div class="qa-recipient-banner" id="qa-recipient-display">YOUR NAME</div>
          </div>

          <p class="qa-cert-body" id="qa-cert-body">${data.body.replace(/\bYOU\b/g, 'the named developer')}</p>
          
          <div class="qa-cert-footer">
            <div class="qa-wax-seal">
              <div class="wax-inner">
                <span class="wax-star">★</span>
                <span class="wax-text">${data.stampSeal}</span>
              </div>
            </div>

            <div class="qa-signatures">
              <div class="qa-sig">
                <span class="qa-sig-name">${data.sig1Name}</span>
                <span class="qa-sig-title">${data.sig1Title}</span>
              </div>
              <div class="qa-sig">
                <span class="qa-sig-name">${data.sig2Name}</span>
                <span class="qa-sig-title">${data.sig2Title}</span>
              </div>
            </div>
          </div>

          <div class="qa-actions">
            <button type="button" class="qa-btn claim" id="qa-claim">${data.claimText}</button>
            <button type="button" class="qa-btn dl" id="qa-dl">📥 Download Certificate (.png)</button>
            <button type="button" class="qa-btn close" id="qa-close">Dismiss (Back to Slaying) 🏹</button>
          </div>
        </div>
      </div>
    `;

    burst(window.innerWidth / 2, window.innerHeight / 2, ['🏆', '📜', '💸', '✨', '🐛', '🔥'], 45);
    modalBackdrop.classList.add('show');

    const claimBtn = modalBackdrop.querySelector('#qa-claim');
    const dlBtn = modalBackdrop.querySelector('#qa-dl');
    const closeBtn = modalBackdrop.querySelector('#qa-close');

    const recipientInput = modalBackdrop.querySelector('#qa-recipient-input');
    const recipientDisplay = modalBackdrop.querySelector('#qa-recipient-display');
    let recipientName = 'YOUR NAME';

    if (recipientInput && recipientDisplay) {
      recipientInput.addEventListener('input', () => {
        recipientName = recipientInput.value.trim() || 'YOUR NAME';
        recipientDisplay.textContent = recipientName.toUpperCase();
      });
      // Select all text on focus for instant typing
      recipientInput.addEventListener('focus', () => {
        recipientInput.select();
      });
    }

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

    if (dlBtn) {
      dlBtn.addEventListener('click', (e) => {
        burst(e.clientX, e.clientY, ['🖼️', '📜', '🖨️', '✨'], 24);
        dlBtn.textContent = 'Generating Official Diploma...';
        dlBtn.disabled = true;

        const currentName = (recipientInput ? recipientInput.value.trim() : '') || 'YOU';

        // Render legitimate visual diploma using HTML5 Canvas
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 850;
        const ctx = canvas.getContext('2d');

        // 1. Parchment Background
        ctx.fillStyle = '#fffdf7';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 2. Neo-Brutalist Frame Borders
        ctx.strokeStyle = '#1d1033';
        ctx.lineWidth = 12;
        ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

        ctx.lineWidth = 3;
        ctx.strokeRect(34, 34, canvas.width - 68, canvas.height - 68);

        // Corner Corner Accents
        ctx.fillStyle = '#ff8fd0';
        ctx.fillRect(10, 10, 24, 24);
        ctx.fillRect(canvas.width - 34, 10, 24, 24);
        ctx.fillRect(10, canvas.height - 34, 24, 24);
        ctx.fillRect(canvas.width - 34, canvas.height - 34, 24, 24);

        // 3. Document Tracking Number
        ctx.fillStyle = '#6b7280';
        ctx.font = 'bold 16px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`SERIAL NO: ${data.certNo}`, 55, 75);

        // 4. Red Rubber Stamp (Angled)
        ctx.save();
        ctx.translate(canvas.width - 240, 75);
        ctx.rotate(0.08);
        ctx.strokeStyle = '#ff4d2e';
        ctx.lineWidth = 3.5;
        ctx.setLineDash([6, 4]);
        ctx.strokeRect(-10, -22, 230, 36);
        ctx.fillStyle = '#ff4d2e';
        ctx.font = '900 15px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(data.stampTop, 105, 2);
        ctx.restore();

        // 5. Ministry Badge Pill
        ctx.fillStyle = '#1d1033';
        const badgeWidth = 560;
        ctx.fillRect((canvas.width - badgeWidth) / 2, 115, badgeWidth, 38);
        ctx.fillStyle = '#ffd23f';
        ctx.font = 'bold 15px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(data.badge, canvas.width / 2, 140);

        // 6. Main Certificate Title
        ctx.fillStyle = '#1d1033';
        ctx.font = '900 42px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(data.title, canvas.width / 2, 200);

        // Star Divider
        ctx.fillStyle = '#ffd23f';
        ctx.font = '20px sans-serif';
        ctx.fillText('★   ★   ★', canvas.width / 2, 235);

        // 6.5 Dedicated Recipient Awarded-To Ribbon Banner
        ctx.fillStyle = '#718096';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('PROUDLY PRESENTED TO', canvas.width / 2, 270);

        // Highlighted Name Box
        ctx.font = '900 36px sans-serif';
        const nameText = currentName.toUpperCase();
        const textMetrics = ctx.measureText(nameText);
        const nameBoxWidth = Math.max(textMetrics.width + 60, 280);
        
        ctx.fillStyle = '#ffd23f';
        ctx.fillRect((canvas.width - nameBoxWidth) / 2, 285, nameBoxWidth, 48);
        ctx.strokeStyle = '#1d1033';
        ctx.lineWidth = 3;
        ctx.strokeRect((canvas.width - nameBoxWidth) / 2, 285, nameBoxWidth, 48);
        
        ctx.fillStyle = '#ff4d2e';
        ctx.fillText(nameText, canvas.width / 2, 322);

        // 7. Body Text (Legal Proclamation)
        ctx.fillStyle = '#1d1033';
        ctx.font = '500 20px sans-serif';
        ctx.textAlign = 'center';
        
        const lines = [
          `for having successfully hunted, cornered, and brutally slaughtered ${killCount} production bugs.`,
          ``,
          `By supreme decree of the Ministry of Delusion, you are hereby granted lifetime immunity`,
          `from writing unit tests, and full bragging rights to call yourself Senior QA Legend on LinkedIn.`,
          ``,
          `* This credential holds exactly $0.00 cash value and will definitely be questioned by HR. *`
        ];

        let startY = 375;
        lines.forEach((line) => {
          if (line.includes('Senior QA Legend') || line.includes(`${killCount} production bugs`)) {
            ctx.font = 'bold 20px sans-serif';
            ctx.fillStyle = '#ff4d2e';
          } else if (line.includes('$0.00 cash value')) {
            ctx.font = 'italic 15px sans-serif';
            ctx.fillStyle = '#6b7280';
          } else {
            ctx.font = '500 20px sans-serif';
            ctx.fillStyle = '#1d1033';
          }
          ctx.fillText(line, canvas.width / 2, startY);
          startY += 34;
        });

        // 8. Bottom Border / Divider
        ctx.strokeStyle = '#1d1033';
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 6]);
        ctx.beginPath();
        ctx.moveTo(80, 580);
        ctx.lineTo(canvas.width - 80, 580);
        ctx.stroke();
        ctx.setLineDash([]);

        // 9. Official Wax Seal (Gold/Mustard Round Emblem)
        const sealX = 220;
        const sealY = 680;
        ctx.save();
        ctx.beginPath();
        ctx.arc(sealX, sealY, 55, 0, Math.PI * 2);
        ctx.fillStyle = '#ffd23f';
        ctx.fill();
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#1d1033';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sealX, sealY, 44, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 3]);
        ctx.stroke();

        ctx.fillStyle = '#1d1033';
        ctx.font = 'bold 24px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('★', sealX, sealY - 8);
        ctx.font = '900 10px sans-serif';
        ctx.fillText('VERIFIED JUNK', sealX, sealY + 12);
        ctx.fillText('0% EQUITY', sealX, sealY + 26);
        ctx.restore();

        // 10. Official Signatures
        // Sig 1: Yallah Habibi
        ctx.textAlign = 'center';
        ctx.font = 'bold 36px cursive, sans-serif';
        ctx.fillStyle = '#ff4d2e';
        ctx.fillText(data.sig1Name, 580, 670);
        ctx.font = 'bold 13px sans-serif';
        ctx.fillStyle = '#1d1033';
        ctx.fillText(data.sig1Title.toUpperCase(), 580, 695);

        // Sig 2: AI Overlords
        ctx.font = 'bold 36px cursive, sans-serif';
        ctx.fillStyle = '#ff4d2e';
        ctx.fillText(data.sig2Name, 920, 670);
        ctx.font = 'bold 13px sans-serif';
        ctx.fillStyle = '#1d1033';
        ctx.fillText(data.sig2Title.toUpperCase(), 920, 695);

        // 11. Download as High-Resolution PNG (Instant toDataURL)
        try {
          const dataUrl = canvas.toDataURL('image/png');
          const safeName = currentName.replace(/[^a-zA-Z0-9_-]/g, '_').toUpperCase() || 'HERO';
          const a = document.createElement('a');
          a.href = dataUrl;
          a.download = `QA-DIPLOMA-${safeName}-${killCount}-BUGS.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);

          dlBtn.textContent = '🖼️ Diploma Downloaded as PNG! (Frame It)';
          dlBtn.disabled = false;
        } catch (err) {
          console.error('Download error:', err);
          dlBtn.textContent = 'Error saving image. Try again';
          dlBtn.disabled = false;
        }
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
        if (e && e.stopPropagation) e.stopPropagation();
        
        try {
          const rect = (e && e.target) ? e.target.getBoundingClientRect() : cookie.getBoundingClientRect();
          const x = (e && typeof e.clientX === 'number' && e.clientX > 0) ? e.clientX : (rect.left + rect.width / 2);
          const y = (e && typeof e.clientY === 'number' && e.clientY > 0) ? e.clientY : (rect.top + rect.height / 2);
          burst(x, y, ['🍪', '😋', '✨', '💨'], 14);
        } catch (_) {}

        try {
          sessionStorage.setItem('cookie_eaten', 'true');
        } catch (_) {}

        cookie.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        cookie.style.opacity = '0';
        cookie.style.transform = 'translateX(-50%) translateY(30px)';
        cookie.style.pointerEvents = 'none';
        
        setTimeout(() => {
          cookie.remove();
        }, 220);
      }

      const eat1 = document.getElementById('eat');
      const eat2 = document.getElementById('eat2');
      if (eat1) {
        eat1.onclick = dismissCookie;
      }
      if (eat2) {
        eat2.onclick = dismissCookie;
      }
    }
  }

  // =========================================================================
  // Secret Konami Keyboard Code Easter Egg (↑ ↑ ↓ ↓ ← → ← → B A)
  // =========================================================================
  let isAnimating = false;
  function triggerEasterEgg(x, y) {
    if (isAnimating) return;
    isAnimating = true;
    burst(x || window.innerWidth / 2, y || window.innerHeight / 2, ['🤡', '🤡', '🤡', '📉', '💤', '💥'], 35);
    document.body.classList.add('shake-screen');
    const prevTitle = document.title;
    document.title = '🤡 CONGRATULATIONS ON UNLOCKING ABSOLUTELY NOTHING.';

    setTimeout(() => {
      document.body.classList.remove('shake-screen');
      document.title = prevTitle;
      isAnimating = false;
    }, 4000);
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
