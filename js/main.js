// Main client interactions: smooth scroll, booking modal, form handling, simple accessibility helpers
document.addEventListener('DOMContentLoaded', function () {

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      // Toggle visibility by manipulating the nav's display (CSS handles visibility)
      primaryNav.style.display = expanded ? 'none' : 'flex';
    });
  }

  // Modal creation and simple focus management
  const modalTemplate = document.getElementById('modal-template');
  function openModal() {
    if (!modalTemplate) return;
    const clone = modalTemplate.content.cloneNode(true);
    const modal = clone.querySelector('.modal');
    document.body.appendChild(modal);
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.focus();
    function close() {
      modal.remove();
      document.getElementById('cta-enquire').focus();
    }
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) close();
    });
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') {
        close();
        document.removeEventListener('keydown', esc);
      }
    });
  }

  // Hook up CTA buttons to open modal or scroll
  const enquireBtn = document.getElementById('cta-enquire');
  const ctaBook = document.getElementById('cta-book');
  if (enquireBtn) enquireBtn.addEventListener('click', openModal);
  if (ctaBook) ctaBook.addEventListener('click', function () {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('name').focus();
  });

  // Prefill package when clicking Book Now
  document.querySelectorAll('.book-now').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const pkg = btn.dataset.package;
      const select = document.getElementById('package-select');
      if (select) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text === pkg) {
            select.selectedIndex = i;
            break;
          }
        }
      }
      document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
      document.getElementById('name').focus();
    });
  });

  // Booking form handling (client-side)
  const form = document.getElementById('booking-form');
  const msg = document.getElementById('form-message');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      msg.textContent = '';
      const data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        package: form['package'].value,
        dates: form.dates.value.trim(),
        guests: form.guests.value,
        notes: form.notes.value.trim()
      };

      // simple validation
      if (!data.name || !data.email || !data.phone || !data.dates) {
        msg.textContent = 'Please complete all required fields (name, email, phone, dates).';
        msg.style.color = '#b23a3a';
        return;
      }

      // Here you would POST to your server / API. For now we store locally and show success message.
      try {
        const saved = JSON.parse(localStorage.getItem('andaman_bookings') || '[]');
        saved.unshift({ ...data, created_at: new Date().toISOString() });
        localStorage.setItem('andaman_bookings', JSON.stringify(saved.slice(0, 20)));
      } catch (err) {
        // ignore localStorage errors
      }

      msg.textContent = 'Thank you — your request has been received. We will email a tailored quote within 24 hours.';
      msg.style.color = '#0b6b5a';
      form.reset();
      // gentle scroll to top of booking section
      document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Accessible focus outline for keyboard users
  (function () {
    function handleFirstTab(e) {
      if (e.key === 'Tab') {
        document.documentElement.classList.add('show-focus');
        window.removeEventListener('keydown', handleFirstTab);
      }
    }
    window.addEventListener('keydown', handleFirstTab);
  })();

});
