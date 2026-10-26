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
    'Give me "%s", 3 espressos, and zero supervision. Come back when you receive the Stripe invoice.',
    '"%s"? Pitch it to a VC first. When they say no, tell them it uses blockchain and AI agents. Boom, $4M seed round.',
    'I just copy-pasted "%s" into Claude. It sighed, generated 600 lines of spaghetti code, and told me to get a real job.',
    '"%s" is the kind of idea that ruins friendships, mortgages, and credit scores. I love it. When do we deploy?',
    'Building "%s"? Sure. Will it scale? Absolutely not. Will it work on mobile? Only in landscape mode if you hold your breath.',
    'Wait, "%s"? I already built that at 3:42 AM last month. Forgot GitHub password. It belongs to the void now.',
    '"%s": I can build the frontend in 20 minutes. The backend? We will just hardcode 3 mock JSON objects and pray nobody registers.',
    'Adding "%s" to my backlog (the digital trash can where all ambitious dreams go to decompose peacefully).',
    '"%s" sounds like a lawsuit waiting to happen. Luckily, my legal defense is "I am just a vibe-coder".',
    'I will ship "%s" directly to prod with zero unit tests. Testing in production builds strong immune systems.',
    '"%s"? Let us slap a subscription on it: $29/month to solve a problem that never existed.',
    '"%s" is technically impossible. Let me threaten GPT-4 with a 50% tip and watch it prove physics wrong.',
    'I can deliver "%s" by Friday if we agree to define "delivered" as having a registered domain name and a cool logo.',
    'Sounds like "%s" needs a React frontend, Next.js backend, 4 Docker containers, and a Redis queue to display two lines of static text.',
    '"%s"? My hourly rate just doubled out of sheer sympathy for your sanity.',
    'I will build "%s", write zero documentation, and become completely irreplaceable when it randomly stops working in June.',
    'Great news: "%s" works flawlessly on my machine. Bad news: I am never letting you touch my machine.',
    'Let us build "%s" with Kubernetes! We only have 3 active users, but our infrastructure will survive a nuclear blast.',
    '"%s" gives off strong "I had an epiphany in the shower and now everyone must suffer" energy. Count me in.',
    'I can vibe-code "%s" right now, but warning: 90% of the codebase will just be console.log("please work bro").',
    'Before we build "%s", let me spend 4 days configuring Tailwind and choosing between two identical shades of dark purple.',
    '"%s"? I will make it an Electron app so it consumes 6 GB of RAM while doing literally nothing.',
    'I told ChatGPT your idea for "%s". It generated a generic apology letter to the human race.',
    '"%s" is a masterpiece of delusion. We are launching on Product Hunt at midnight.',
    'We can build "%s", but any customer support emails will go directly to an unmonitored spam inbox named /dev/null.',
    '"%s" solves a problem nobody has, creates five problems nobody wanted, and charges $99/year. Peak SaaS innovation.',
    'If we build "%s", I demand that every button has a 400ms spring animation to distract users from the 12-second page load.',
    'I can build "%s" in pure Vanilla JavaScript just to feel morally superior to people who use frameworks.',
    '"%s"? Sure thing. I will just download an open-source repo from GitHub, change the primary color to pink, and call it proprietary IP.',
    'I have already drafted the apology tweet for when "%s" inevitably leaks everyone’s passwords on day 3.',
    '"%s" is why alien civilizations refuse to make contact with Earth. Wire the advance deposit and let us start.',
    'Can we build "%s"? Yes. Should we build "%s"? My lawyer has advised me not to answer that question on the record.',
    'I will build "%s", but if a single user turns off dark mode, the entire server will automatically self-destruct.',
    '"%s" will take 2 weeks of intense procrastinating followed by 4 hours of panic-induced hallucinated coding.',
    'If "%s" breaks in production on a weekend, remember: my SLA is based on Indian Standard Vibes, not real time.',
    '"%s"? Let us pivot to an AI wrapper before we even write the first line of HTML.',
    'I just ran "%s" by my rubber duck on my desk. The duck looked visibly disappointed in both of us.',
    'Building "%s" will be my magnum opus. Or the reason I finally move to an off-grid cabin in the mountains.',
    '"%s"? That will require 42 NPM packages with 8 critical security vulnerabilities each. Peak modern web dev.',
    'I promise to give "%s" 100% of my attention until I get distracted by another shiny domain name on Namecheap.',
    'If "%s" was a movie, it would be a low-budget psychological thriller about a developer arguing with CSS Flexbox.',
    '"%s" is 10% coding, 20% renaming variables to look professional, and 70% staring at a blinking cursor in disbelief.',
    'I will build "%s" so fast your browser cache won’t even know what hit it. It won’t work, but it will be fast.',
    '"%s"? Sounds like a feature, not a bug. Even if it crashes, we will tell users it is an "exclusive rate-limiting experience".',
    'Let us build "%s" today. If anyone asks why it broke tomorrow, we will blame Cloudflare and log off.'
  ];

  const emptyTpl = [
    'Empty idea. Bold. I would still bill 40 hours for it.',
    'Blank prompt? The highest form of modern minimalist architecture. Shipped to prod.',
    'Typing nothing and expecting magic. You truly understand the essence of AI programming.',
    'Zero input detected. Just like my client specifications. Perfect match.'
  ];

  // Non-repeating randomized deck
  let pool = [];
  let emptyPool = [];

  function getNext(arr, activePool) {
    if (activePool.length === 0) {
      activePool.push(...[...arr].sort(() => Math.random() - 0.5));
    }
    return activePool.pop();
  }

  function go() {
    const v = input.value.trim();
    if (!v) {
      out.textContent = getNext(emptyTpl, emptyPool);
      return;
    }
    out.textContent = 'Vibing with hallucinated microservices...';
    btn.disabled = true;
    setTimeout(() => {
      const template = getNext(tpl, pool);
      out.textContent = template.replace(/%s/g, v);
      btn.disabled = false;
    }, 450);
  }

  btn.addEventListener('click', go);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') go();
  });
}
