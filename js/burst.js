/**
 * Spawns flying emoji burst particles at (x, y) coordinates.
 * Respects prefers-reduced-motion preferences.
 * 
 * @param {number} x Screen coordinate X
 * @param {number} y Screen coordinate Y
 * @param {string[]} icons Array of emojis/icons to burst
 * @param {number} n Count of particles to spawn
 */
export function burst(x, y, icons, n) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (let i = 0; i < n; i++) {
    const e = document.createElement('span');
    e.className = 'pop';
    e.textContent = icons[i % icons.length];
    e.style.left = `${x}px`;
    e.style.top = `${y}px`;
    e.style.setProperty('--dx', `${Math.random() * 400 - 200}px`);
    e.style.setProperty('--dy', `${Math.random() * -300 - 40}px`);
    e.style.setProperty('--r', `${Math.random() * 720 - 360}deg`);
    document.body.appendChild(e);
    setTimeout(() => e.remove(), 1200);
  }
}
