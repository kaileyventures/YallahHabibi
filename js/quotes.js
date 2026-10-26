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
    '🚨 POLYGRAPH TRIGGERED: 100% UNADULTERATED CAP',
    '🚨 LIE DETECTED: HEART RATE EXCEEDED 180 BPM',
    '🚨 GUILTY AS CHARGED: JURY SENTENCED YOU TO 40 HOURS BUG FIXING',
    '🚨 MAXIMUM DEFLECTION: BLAMED ON DNS & INTERNS',
    '🚨 CONFESSION EXTRACTED: CLIENT DEMANDED REFUND'
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
        statusPill.innerHTML = `<i class="radar" style="background:#ffd23f"></i> CONFESSION #${confessedCount}: CAUGHT RED-HANDED!`;
        statusPill.style.background = '#ff4d2e';
        statusPill.style.color = '#fff';

        setTimeout(() => {
          statusPill.innerHTML = `<i class="radar"></i> ${reactions[confessedCount % reactions.length]}`;
        }, 800);
      }
    });
  });
}
