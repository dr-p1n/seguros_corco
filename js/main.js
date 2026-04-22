/* ============================================================
   CORCO SEGUROS — main.js  v3
   No frameworks. No dependencies.
   Hamburger nav · Form placeholder · Smooth scroll
   Scroll progress bar · Intersection Observer reveals
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

  // ── Nav: transparent → glass on scroll + logo cross-fade ──
  var mainNav    = document.getElementById('main-nav');
  var logoLight  = document.querySelector('.nav__logo-light');
  var logoDark   = document.querySelector('.nav__logo-dark');

  if (mainNav) {
    function updateNav() {
      var scrolled = window.scrollY > 24;
      mainNav.classList.toggle('nav--scrolled', scrolled);
      // Drive logo opacity via JS (bypasses CSS cache issues)
      if (logoLight) logoLight.style.opacity = scrolled ? '0' : '1';
      if (logoDark)  logoDark.style.opacity  = scrolled ? '1' : '0';
      if (logoDark)  logoDark.style.pointerEvents = scrolled ? 'auto' : 'none';
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav(); // Init on load
  }

  // ── Scroll progress bar ────────────────────────────────────
  var progressBar = document.querySelector('.scroll-progress');

  if (progressBar) {
    function updateProgress() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct.toFixed(2) + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress(); // Init on load
  }

  // ── Scroll reveal — Intersection Observer ─────────────────
  var revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately (no IntersectionObserver support)
    revealEls.forEach(function (el) {
      el.classList.add('in-view');
    });
  }

})();
