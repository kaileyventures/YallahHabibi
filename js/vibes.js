/**
 * Vibe Generator / Pitch-o-meter:
 * Handles startup idea generator and humorous developer responses.
 */

export function initVibes() {
  const input = document.getElementById('ask');
  const out = document.getElementById('vibeans');
  const btn = document.getElementById('askbtn');

  if (!input || !out || !btn) return;

  const tpl = [
    'Build "%s"? Already 80% finished in my head. The remaining 20% is prayers and ChatGPT.',
    '"%s" will launch tonight. It will crash tomorrow. Both will be your fault.',
    'Ah, "%s". A billion-dollar idea that I will build in 3 hours and abandon by next Tuesday.',
    '"%s": I will vibe it, break your staging environment, and blame your DNS records.',
    'Nobody has built "%s" yet because it makes zero business sense. Which means I am the perfect man for the job.',
    'Give me "%s", 3 espressos, and zero supervision. Come back when you receive the Stripe invoice.'
  ];
  let n = 0;

  function go() {
    const v = input.value.trim();
    if (!v) {
      out.textContent = 'Empty idea. Bold. I would still build it.';
      return;
    }
    out.textContent = 'Vibing...';
    setTimeout(() => {
      out.textContent = tpl[n % tpl.length].replace('%s', v);
      n++;
    }, 600);
  }

  btn.addEventListener('click', go);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') go();
  });
}
