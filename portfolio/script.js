/* ============================================================
   Portfolio Script – Lakshmigayathri S
   Handles: dark mode, typing, animations, scroll, form
   ============================================================ */

(function () {
  'use strict';

  /* ---- Theme ---- */
  const themeBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    themeBtn.textContent = mode === 'dark' ? '☀️' : '🌙';
  }

  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme || (prefersDark.matches ? 'dark' : 'light'));

  themeBtn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    setTheme(cur === 'dark' ? 'light' : 'dark');
  });

  /* ---- Mobile nav ---- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close mobile nav on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  /* ---- Active nav link on scroll ---- */
  const navLinks = document.querySelectorAll('.nav-links a, #mobile-nav a');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  /* ---- Typing effect ---- */
  const roles = [
    'Full Stack Developer',
    'AI & ML Enthusiast',
    'GIS & Remote Sensing Explorer',
    'B.E Computer Science Student'
  ];
  let rIdx = 0, cIdx = 0, deleting = false;
  const typedEl = document.getElementById('typed-role');

  function type() {
    const word = roles[rIdx];
    if (deleting) {
      typedEl.textContent = word.slice(0, --cIdx);
      if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; setTimeout(type, 400); return; }
    } else {
      typedEl.textContent = word.slice(0, ++cIdx);
      if (cIdx === word.length) { deleting = true; setTimeout(type, 1800); return; }
    }
    setTimeout(type, deleting ? 60 : 90);
  }
  setTimeout(type, 600);

  /* ---- Scroll reveal ---- */
  const revealObs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* ---- Skill bars ---- */
  const barObs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-bar-fill[data-width]').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
          });
          barObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.skill-bar-list').forEach(list => barObs.observe(list));

  /* ---- Animated counters ---- */
  function animateCount(el, target, duration) {
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(ease * target);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  const countObs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.stat-number[data-target]').forEach(el => {
            animateCount(el, parseInt(el.dataset.target), 1400);
          });
          countObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  const statsSection = document.getElementById('stats');
  if (statsSection) countObs.observe(statsSection);

  /* ---- Scroll-to-top ---- */
  const scrollBtn = document.getElementById('scroll-top');

  function handleScroll() {
    scrollBtn.classList.toggle('show', window.scrollY > 400);
    updateActiveNav();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---- Contact form ---- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const msg = document.getElementById('form-msg');

      // Basic validation
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();

      if (!name || !email || !message) {
        showMsg('Please fill in all required fields.', 'error');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMsg('Please enter a valid email address.', 'error');
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Sending…';

      try {
        // Using Web3Forms – replace access_key with your key
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // ← Replace this
            name, email,
            subject: form.querySelector('[name="subject"]').value,
            message
          })
        });
        const data = await res.json();
        if (data.success) {
          showMsg('✅ Message sent! I\'ll get back to you soon.', 'success');
          form.reset();
        } else {
          throw new Error('Send failed');
        }
      } catch {
        showMsg('⚠️ Something went wrong. Email me directly at your email.', 'error');
      } finally {
        btn.disabled = false;
        btn.textContent = 'Send Message';
      }

      function showMsg(text, type) {
        msg.className = 'form-msg ' + type;
        msg.textContent = text;
        setTimeout(() => { msg.className = 'form-msg'; msg.textContent = ''; }, 5000);
      }
    });
  }

  /* ---- Smooth click for all anchor nav ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
      }
    });
  });

})();
