/**
 * PLAYMATE — Official Client Interactions
 * Brand: PlayMate (Your offline gaming companion)
 * Developer: Sundram Gupta / Sundramdotdev
 * Lightweight vanilla JavaScript — No frameworks or external dependencies.
 */

(function () {
  'use strict';

  /**
   * APP STORE CONFIGURATION PLACEHOLDER
   * When PlayMate is officially released on the Google Play Store or Apple App Store,
   * paste the official public store URL below.
   * If left empty, CTA buttons safely scroll to the features section or open privacy policy.
   */
  const STORE_URL = ""; // e.g. "https://play.google.com/store/apps/details?id=com.sundramdotdev.playmate"

  // Expose store url configuration to window if needed
  window.PLAYMATE_CONFIG = {
    storeUrl: STORE_URL,
    version: "1.0.0"
  };

  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initSmoothScroll();
    initTocObserver();
  });

  /**
   * Accessible Mobile Navigation
   */
  function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (!toggleBtn || !navLinks) return;

    function toggleMenu(open) {
      const isOpen = typeof open === 'boolean' ? open : !navLinks.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
      navLinks.classList.toggle('open', isOpen);

      const iconPath = toggleBtn.querySelector('svg path');
      if (iconPath) {
        if (isOpen) {
          // X icon
          iconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        } else {
          // Hamburger icon
          iconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
      }
    }

    toggleBtn.addEventListener('click', function () {
      toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (navLinks.classList.contains('open') &&
          !navLinks.contains(event.target) &&
          !toggleBtn.contains(event.target)) {
        toggleMenu(false);
      }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navLinks.classList.contains('open')) {
        toggleMenu(false);
        toggleBtn.focus();
      }
    });

    // Close menu when navigating via an in-page anchor link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navLinks.classList.contains('open')) {
          toggleMenu(false);
        }
      });
    });
  }

  /**
   * Smooth Anchor Navigation with Offset
   */
  function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const href = anchor.getAttribute('href');
        if (href === '#' || href === '') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL hash without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  /**
   * Privacy Policy Table of Contents active link observer
   */
  function initTocObserver() {
    const tocLinks = document.querySelectorAll('.toc-list a');
    const sections = document.querySelectorAll('.policy-section');

    if (!tocLinks.length || !sections.length || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            tocLinks.forEach(function (link) {
              const href = link.getAttribute('href');
              if (href === '#' + id) {
                link.style.color = 'var(--accent)';
                link.style.fontWeight = '650';
              } else {
                link.style.color = '';
                link.style.fontWeight = '';
              }
            });
          }
        });
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0
      }
    );

    sections.forEach(function (sec) {
      observer.observe(sec);
    });
  }
})();
