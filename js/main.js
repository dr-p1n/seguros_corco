/* ============================================================
   CORCO SEGUROS — main.js
   No frameworks. No dependencies.
   ============================================================ */

(function () {
  'use strict';

  // ── Hamburger nav ──────────────────────────────────────────
  var hamburger = document.getElementById('nav-hamburger');
  var mobileMenu = document.getElementById('nav-mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on mobile link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Form — v1 placeholder (no submit handler) ─────────────
  var form = document.getElementById('corco-intake-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // TODO Phase 2: POST to Apps Script webhook
      // fetch('WEBHOOK_URL', { method: 'POST', body: new FormData(form) })
      console.log('[Corco Seguros] Form submission intercepted — v1 placeholder. Wire Apps Script POST webhook here.');
    });
  }

  // ── Smooth scroll for anchor links (Safari fallback) ──────
  // html { scroll-behavior: smooth } handles modern browsers.
  // This provides a fallback for older Safari.
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      var target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

})();
