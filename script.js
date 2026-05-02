/* ============================================================
   AquaAndaman — script.js
   Navbar scroll, mobile menu, testimonial slider,
   scroll reveal, form handling, scroll progress bar
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SCROLL PROGRESS BAR ─────────────────────────────── */
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    document.documentElement.style.setProperty('--scroll', progress + '%');
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });


  /* ── NAVBAR: scroll state ────────────────────────────── */
  const navbar = document.getElementById('navbar');
  function handleNavScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();


  /* ── HAMBURGER / MOBILE MENU ─────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('navLinks');
  let menuOpen = false;

  function toggleMenu(forceClose = false) {
    menuOpen = forceClose ? false : !menuOpen;
    hamburger.classList.toggle('open', menuOpen);
    navLinks.classList.toggle('open', menuOpen);
    hamburger.setAttribute('aria-expanded', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleMenu());

  // Close menu on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (menuOpen && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      toggleMenu(true);
    }
  });


  /* ── TESTIMONIAL SLIDER ──────────────────────────────── */
  const track    = document.getElementById('testiTrack');
  const cards    = track ? track.querySelectorAll('.testi-card') : [];
  const dotsWrap = document.getElementById('testiDots');
  const prevBtn  = document.getElementById('testiPrev');
  const nextBtn  = document.getElementById('testiNext');

  if (track && cards.length) {
    let current = 0;
    let autoTimer;

    // Create dots
    const dots = Array.from(cards).map((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Review ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
      return dot;
    });

    function goTo(index) {
      current = (index + cards.length) % cards.length;
      track.style.transform = `translateX(calc(-${current * 100}% - ${current * 28}px))`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function startAuto() {
      autoTimer = setInterval(() => goTo(current + 1), 5000);
    }
    function stopAuto() {
      clearInterval(autoTimer);
    }

    prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
    nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

    // Touch / swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        stopAuto();
        goTo(diff > 0 ? current + 1 : current - 1);
        startAuto();
      }
    }, { passive: true });

    startAuto();
  }


  /* ── SCROLL REVEAL ───────────────────────────────────── */
  const revealTargets = document.querySelectorAll(
    '.pkg-card, .dest-card, .why-card, .exp-item, .testi-card, .info-item, .contact-left'
  );

  revealTargets.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger children in same parent
    const siblings = el.parentElement.querySelectorAll('.reveal');
    const sibIndex = Array.from(siblings).indexOf(el);
    if (sibIndex === 1) el.classList.add('reveal-delay-1');
    if (sibIndex === 2) el.classList.add('reveal-delay-2');
    if (sibIndex === 3) el.classList.add('reveal-delay-3');
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => revealObserver.observe(el));


  /* ── BOOKING FORM ────────────────────────────────────── */
  const form    = document.getElementById('bookingForm');
  const success = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation
      const name    = form.querySelector('#name');
      const email   = form.querySelector('#email');
      let valid = true;

      [name, email].forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#e85d42';
          valid = false;
          field.addEventListener('input', () => {
            field.style.borderColor = '';
          }, { once: true });
        }
      });

      if (!valid) return;

      // Email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        email.style.borderColor = '#e85d42';
        email.focus();
        return;
      }

      // Simulate submission (replace with actual fetch/API)
      const submitBtn = form.querySelector('.btn-submit');
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-text').textContent = 'Sending…';

      setTimeout(() => {
        form.hidden = true;
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 1200);
    });
  }


  /* ── SMOOTH ANCHOR SCROLL with offset ───────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });


  /* ── ACTIVE NAV LINK HIGHLIGHT ───────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}`
            ? 'var(--aqua-light)'
            : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));


  /* ── PACKAGE CARDS: ripple click effect ─────────────── */
  document.querySelectorAll('.btn-card, .btn-primary, .btn-ghost').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;
        border-radius:50%;
        background:rgba(255,255,255,0.3);
        width:120px; height:120px;
        left:${e.clientX - rect.left - 60}px;
        top:${e.clientY - rect.top - 60}px;
        transform:scale(0);
        animation:rippleAnim 0.55s linear;
        pointer-events:none;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Inject ripple keyframes
  if (!document.getElementById('rippleStyles')) {
    const style = document.createElement('style');
    style.id = 'rippleStyles';
    style.textContent = `
      @keyframes rippleAnim {
        to { transform: scale(4); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }


  /* ── LAZY IMAGE BACKGROUNDS ──────────────────────────── */
  // Trigger repaints for any background images that start below the fold
  const bgCards = document.querySelectorAll('[style*="background-image"]');
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.willChange = 'auto';
        imgObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '200px' });
  bgCards.forEach(el => imgObserver.observe(el));


  /* ── MARQUEE: pause on hover ─────────────────────────── */
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    const band = marqueeTrack.closest('.marquee-band');
    band.addEventListener('mouseenter', () => {
      marqueeTrack.style.animationPlayState = 'paused';
    });
    band.addEventListener('mouseleave', () => {
      marqueeTrack.style.animationPlayState = 'running';
    });
  }

});
