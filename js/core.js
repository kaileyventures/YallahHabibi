/**
 * Core UI interactions:
 * - Dynamic copyright year
 * - Animated skill bars on viewport intersection
 * - Fleeing / shy "Don't hire me" runaway button
 * - Logo 360-spin click interaction
 * - Project duration estimator
 * - Smooth scroll & shake effect for escape-to-top button
 * - Tab visibility change guilt-trip message & favicon swap
 */

export function initCore() {
  // Current year in footer
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Skill bars fill when visible
  const bars = document.querySelectorAll('.bar');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach((b) => io.observe(b));
  } else {
    bars.forEach((b) => b.classList.add('on'));
  }

  // The shy "Don't hire me" button
  const runawayBtn = document.getElementById('runaway');
  const runMsg = document.getElementById('runmsg');
  if (runawayBtn && runMsg) {
    const lines = [
      "(the second button is shy)",
      "Nope. Can't catch it.",
      "It has trust issues.",
      "You're persistent. Hire me instead?",
      "Fine. The button has left the building.",
      "Okay stop. Just click Hire me."
    ];
    let hits = 0;

    function flee() {
      const r = runawayBtn.getBoundingClientRect();
      runawayBtn.classList.add('fly');
      const x = Math.random() * (window.innerWidth - r.width - 20) + 10;
      const y = Math.random() * (window.innerHeight - r.height - 20) + 10;
      runawayBtn.style.left = `${x}px`;
      runawayBtn.style.top = `${y}px`;
      hits++;
      runMsg.textContent = lines[Math.min(hits, lines.length - 1)];
    }

    runawayBtn.addEventListener('mouseenter', flee);
    runawayBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      flee();
    }, { passive: false });
    runawayBtn.addEventListener('click', flee);
    runawayBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flee();
      }
    });
  }

  // Logo spin on click
  const logo = document.getElementById('logo');
  if (logo) {
    logo.addEventListener('click', () => {
      logo.classList.remove('spin');
      void logo.offsetWidth; // Force DOM reflow to restart CSS keyframe animation
      logo.classList.add('spin');
    });
  }

  // Project completion time estimator
  const ans = document.getElementById('answer');
  const pickBtns = document.querySelectorAll('.pick button');
  if (ans && pickBtns.length > 0) {
    pickBtns.forEach((b) => {
      b.addEventListener('click', () => {
        pickBtns.forEach((x) => x.classList.remove('sel'));
        b.classList.add('sel');
        ans.textContent = 'Calculating...';
        setTimeout(() => {
          ans.textContent = b.dataset.t;
        }, 700);
      });
    });
  }

  // Back to top button
  const topBtn = document.getElementById('top');
  if (topBtn) {
    topBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Tab visibility change guilt trip
  const originalTitle = document.title;
  const favIcon = document.querySelector('link[rel="icon"]');
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.title = "Come back. I wasn't done judging you.";
      if (favIcon) {
        favIcon.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><text y='26' font-size='26'>👀</text></svg>";
      }
    } else {
      document.title = originalTitle;
      if (favIcon) favIcon.href = 'favicon.svg';
    }
  });
}
