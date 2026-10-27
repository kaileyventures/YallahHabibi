/**
 * Lie Detector / Confession Interactive Mode:
 * Turns the quotes block into an interactive lie detector.
 * Clicking a developer excuse triggers polygraph sounds/reaction,
 * displays confession status, and bursts truth stamps.
 */

import { burst } from './burst.js';

export function initLieDetector() {
  const items = document.querySelectorAll('.lie-item');
  const statusPill = document.getElementById('lieStatus');
  if (!items.length) return;

  const reactions = [
    '🚨 CORPORATE LIES DECODED: 100% UNADULTERATED CAP',
    '🚨 MEETING REALITY EXPOSED: CLIENT IN SHAMBLES',
    '🚨 TRANSLATION COMPLETE: JURY SENTENCED YOU TO 40 HOURS BUG FIXING',
    '🚨 MAXIMUM DEFLECTION: BLAMED ON DNS & CLAUDE OUTAGE',
    '🚨 CONFESSION EXTRACTED: CLIENT DEMANDED FULL REFUND'
  ];

  let confessedCount = 0;

  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      // Toggle confessed state
      item.classList.add('confessed');

      // Burst playful emojis
      const rect = item.getBoundingClientRect();
      const x = e.clientX || rect.left + rect.width / 2;
      const y = e.clientY || rect.top + rect.height / 2;
      burst(x, y, ['🚨', '🤥', '💣', '⚡', '☕'], 6);

      // Audio-visual feedback
      confessedCount++;
      if (statusPill) {
        statusPill.innerHTML = `<i class="radar" style="background:#ffd23f"></i> TRANSLATION #${confessedCount}: CAUGHT IN 4K!`;
        statusPill.style.background = '#ff4d2e';
        statusPill.style.color = '#fff';

        setTimeout(() => {
          statusPill.innerHTML = `<i class="radar"></i> ${reactions[confessedCount % reactions.length]}`;
        }, 800);
      }
    });
  });
}
