const disciplines = [
  {
    eyebrow: '01 / iOS Development',
    title: 'SwiftUI products with production-grade data flow.',
    description:
      'Native app experiences shaped around clear architecture, Firebase-backed persistence, App Intents automation, and database logic that feels invisible to the user.',
    stats: ['SwiftUI', 'Firebase Auth + Firestore', 'App Intents', 'Cloud sync'],
    visual: 'phone',
  },
  {
    eyebrow: '02 / Web & AI Interfaces',
    title: 'React frontends that feel like operational dashboards.',
    description:
      'Glassmorphism interfaces, fast component systems, prompt-generation tools, and HUD-style interaction patterns designed for clarity and momentum.',
    stats: ['React', 'AI workflows', 'Motion systems', 'API integrations'],
    visual: 'hud',
  },
  {
    eyebrow: '03 / Hardware & Network Engineering',
    title: 'Fiber and coax infrastructure built with field precision.',
    description:
      'Professional splicing, cable management, signal troubleshooting, and plant-ready network thinking that connects the digital layer to the physical world.',
    stats: ['Fiber splicing', 'Coax plant', 'OTDR testing', 'Cable mapping'],
    visual: 'fiber',
  },
];

const timeline = [
  {
    side: 'left',
    year: 'Now',
    title: 'Full-stack portfolio builder',
    copy: 'Creating polished web presences, interactive product demos, and mobile-ready interfaces that turn technical ideas into visible outcomes.',
  },
  {
    side: 'right',
    year: 'Mobile',
    title: 'iOS deployment workflow',
    copy: 'Designing SwiftUI app flows with Firebase integrations, custom intents, and database logic that supports real user behavior.',
  },
  {
    side: 'left',
    year: 'Web',
    title: 'React interface systems',
    copy: 'Building reusable glass components, animated sections, AI prompt widgets, responsive landing pages, and conversion-focused layouts.',
  },
  {
    side: 'right',
    year: 'Field',
    title: 'Professional splicing and signal work',
    copy: 'Handling fiber optic and coax infrastructure with practical field judgment: clean routes, reliable terminations, and documented network paths.',
  },
];

const toolkit = [
  ['Swift', '📱'],
  ['SwiftUI', '▣'],
  ['Firebase', '🔥'],
  ['React', '⚛'],
  ['TypeScript', 'TS'],
  ['AI UX', '✦'],
  ['Fiber Splicing', '⟡'],
  ['Coax', '◉'],
  ['OTDR', '⌁'],
  ['Field Tools', '🛠'],
  ['Network Maps', '🗺'],
  ['Build Systems', '⚡'],
];

function icon(name, size = 20) {
  const icons = {
    zap: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2 3 14h8l-1 8 11-13h-8l0-7Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    mail: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="1.8"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    phone: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3h10v18H7z" stroke="currentColor" stroke-width="1.8"/><path d="M10 18h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  };
  return icons[name] || '';
}

function projectVisual(type) {
  if (type === 'phone') {
    return `
      <div class="phone-shell" aria-label="3D glass iPhone mockup">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="app-topbar"></div>
          <div class="app-card wide"></div>
          <div class="app-grid"><span></span><span></span><span></span><span></span></div>
          <div class="app-wave"></div>
        </div>
      </div>`;
  }

  if (type === 'hud') {
    return `
      <div class="hud-widget">
        <div class="hud-ring">✦</div>
        <div class="prompt-box">Generate a deployment-ready product interface...</div>
        <div class="hud-bars"><span></span><span></span><span></span></div>
      </div>`;
  }

  return `
    <div class="fiber-visual" aria-label="Fiber optic splice tray illustration">
      <div class="splice-tray">
        ${Array.from({ length: 7 }, (_, index) => `<span style="--i:${index}"></span>`).join('')}
      </div>
      <div class="fiber-glow"></div>
    </div>`;
}

function renderApp() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <canvas aria-hidden="true" class="liquid-canvas"></canvas>
    <div class="noise"></div>
    <header class="nav glass-panel">
      <a href="#hero" class="brand">${icon('zap')} Qtech</a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#timeline">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section class="hero section reveal" id="hero">
        <div class="hero-card glass-panel">
          <span class="eyebrow">iOS • Web • Fiber Optic Infrastructure</span>
          <h1>Bridging the Physical and Digital.</h1>
          <p>Crafting seamless iOS experiences, dynamic web interfaces, and the fiber optic infrastructure that powers them.</p>
          <a class="liquid-button" href="#work"><span>Explore My Work</span></a>
        </div>
      </section>

      <section class="section work" id="work">
        <div class="section-heading reveal">
          <span class="eyebrow">Engineering Portfolio</span>
          <h2>Three disciplines. One connected systems mindset.</h2>
        </div>
        <div class="project-stack">
          ${disciplines.map((project, index) => `
            <article class="project-panel glass-panel reveal ${index % 2 === 0 ? 'from-left' : 'from-right'}">
              <div class="project-copy">
                <span class="eyebrow">${project.eyebrow}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="chip-row">${project.stats.map((stat) => `<span>${stat}</span>`).join('')}</div>
              </div>
              ${projectVisual(project.visual)}
            </article>`).join('')}
        </div>
      </section>

      <section class="section timeline-section" id="timeline">
        <div class="section-heading reveal">
          <span class="eyebrow">Interactive Resume Timeline</span>
          <h2>A glowing fiber path through software and field work.</h2>
        </div>
        <div class="timeline">
          <div class="timeline-line"></div>
          <div class="timeline-pulse"></div>
          ${timeline.map((item) => `
            <article class="timeline-card glass-panel ${item.side} reveal">
              <span>${item.year}</span>
              <h3>${item.title}</h3>
              <p>${item.copy}</p>
            </article>`).join('')}
        </div>
      </section>

      <section class="section toolkit-contact" id="contact">
        <div class="toolkit glass-panel reveal">
          <div class="section-heading compact">
            <span class="eyebrow">Toolkit</span>
            <h2>Software stack meets field hardware.</h2>
          </div>
          <div class="tool-grid">
            ${toolkit.map(([name, glyph]) => `<div class="tool"><b>${glyph}</b><span>${name}</span></div>`).join('')}
          </div>
        </div>

        <div class="contact-card glass-panel reveal">
          <span class="eyebrow">Contact</span>
          <h2>Let’s build something connected.</h2>
          <p>Use this form as a polished front door for project inquiries, app ideas, or network engineering opportunities.</p>
          <form>
            <label>Name<input type="text" placeholder="Your name" /></label>
            <label>Message<textarea placeholder="Tell me about the work..." rows="5"></textarea></label>
            <button class="liquid-submit" type="button">${icon('mail', 18)} Send Message</button>
          </form>
        </div>
      </section>
    </main>

    <footer>${icon('phone', 16)} Available for websites, iOS apps, AI interfaces, and fiber optic field projects.</footer>
  `;
}

function startLiquidCanvas() {
  const canvas = document.querySelector('.liquid-canvas');
  const ctx = canvas.getContext('2d');
  const pointer = { x: 0.5, y: 0.5 };
  let animationFrame = 0;
  let time = 0;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const drawOrb = (x, y, radius, inner, outer) => {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, inner);
    gradient.addColorStop(1, outer);
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  };

  const render = () => {
    time += 0.006;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const base = ctx.createLinearGradient(0, 0, width, height);

    base.addColorStop(0, '#050816');
    base.addColorStop(0.45, '#0B1021');
    base.addColorStop(1, '#07113A');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = 'screen';
    for (let i = 0; i < 7; i += 1) {
      const driftX = Math.sin(time * (0.9 + i * 0.08) + i) * 120;
      const driftY = Math.cos(time * (0.7 + i * 0.05) + i * 1.8) * 100;
      const x = width * (0.12 + i * 0.14) + driftX + (pointer.x - 0.5) * (80 + i * 10);
      const y = height * (0.25 + ((i * 0.17) % 0.7)) + driftY + (pointer.y - 0.5) * (70 + i * 7);
      drawOrb(x, y, 260 + i * 34, 'rgba(0,240,255,0.13)', 'rgba(10,36,99,0)');
    }

    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 4; i += 1) {
      const x = width * (0.2 + i * 0.22) + Math.cos(time + i) * 90;
      const y = height * (0.18 + i * 0.2) + Math.sin(time * 1.2 + i) * 80;
      drawOrb(x, y, 170, 'rgba(10,36,99,0.32)', 'rgba(10,36,99,0)');
    }

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(3, 7, 18, 0.28)';
    ctx.fillRect(0, 0, width, height);
    animationFrame = requestAnimationFrame(render);
  };

  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (event) => {
    pointer.x = event.clientX / window.innerWidth;
    pointer.y = event.clientY / window.innerHeight;
  });

  resize();
  render();
  return () => cancelAnimationFrame(animationFrame);
}

function startRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    },
    { threshold: 0.2 },
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function startTimelinePulse() {
  const pulse = document.querySelector('.timeline-pulse');
  const timelineElement = document.querySelector('.timeline');

  const update = () => {
    const rect = timelineElement.getBoundingClientRect();
    const viewportTrigger = window.innerHeight * 0.72;
    const progress = Math.min(1, Math.max(0, (viewportTrigger - rect.top) / rect.height));
    pulse.style.height = `${progress * 100}%`;
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

renderApp();
startLiquidCanvas();
startRevealAnimations();
startTimelinePulse();
