(() => {
  'use strict';

  // Shadow the navbar once the user scrolls past the hero fold
  const nav = document.querySelector('.zyrtec-navbar');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 12) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Update the active nav underline based on which section is in view
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.zyrtec-navbar .nav-link[href^="#"]'));

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const byHash = new Map(navLinks.map(l => [l.getAttribute('href'), l]));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const hash = '#' + entry.target.id;
        const link = byHash.get(hash);
        if (!link) return;
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    sections.forEach(s => io.observe(s));
  }

  // Collapse the mobile menu after clicking a link
  const collapseEl = document.getElementById('mainNav');
  if (collapseEl && window.bootstrap) {
    collapseEl.querySelectorAll('.nav-link, .dropdown-item').forEach((link) => {
      link.addEventListener('click', () => {
        if (collapseEl.classList.contains('show')) {
          bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
        }
      });
    });
  }

  // Video thumbnail placeholder — inform the user no video is wired up
  const videoBtn = document.querySelector('.video-thumb');
  if (videoBtn) {
    videoBtn.addEventListener('click', () => {
      console.info('Video placeholder clicked — wire up a real <video> or embed here.');
    });
  }
})();
