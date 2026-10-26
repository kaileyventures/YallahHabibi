/**
 * Numbers counter animation:
 * Animates counters smoothly when elements with [data-n] enter viewport.
 */

export function initStats() {
  const els = document.querySelectorAll('[data-n]');
  if (els.length === 0) return;

  function run(el) {
    const t = +el.dataset.n;
    const duration = 1400;
    let startTime = null;

    if (!t) {
      el.textContent = '0';
      return;
    }

    function step(timestamp) {
      startTime = startTime || timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      el.textContent = Math.floor(t * progress).toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach(run);
  }
}
