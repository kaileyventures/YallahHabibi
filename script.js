/**
 * Yallah Habibi - Main Application Entrypoint
 * Orchestrates all modular components
 */

import { initCore } from './js/core.js';
import { initPlayground } from './js/playground.js';
import { initVibes } from './js/vibes.js';
import { initStats } from './js/stats.js';
import { initLieDetector } from './js/quotes.js';

document.addEventListener('DOMContentLoaded', () => {
  initCore();
  initPlayground();
  initVibes();
  initStats();
  initLieDetector();
});
