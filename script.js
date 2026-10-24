'use strict';

(() => {
  const header = document.querySelector('.header-inner');
  const menuButton = header?.querySelector('.menu-toggle');
  const navigation = header?.querySelector('.main-nav');

  // Keep the CSS-only navigation if the expected markup is missing.
  if (!menuButton || !navigation) return;

  const mobileLayout = window.matchMedia('(max-width: 900px)');
  const entries = [...navigation.querySelectorAll('a[href^="#"]')]
    .map(link => ({ link, section: document.getElementById(link.hash.slice(1)) }))
    .filter(entry => entry.section);

  function setMenuOpen(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    navigation.classList.toggle('is-open', open);
  }

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  entries.forEach(({ link, section }) => {
    link.addEventListener('click', () => {
      setMenuOpen(false);
      if (mobileLayout.matches) {
        section.setAttribute('tabindex', '-1');
        section.focus({ preventScroll: true });
      }
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  document.addEventListener('click', event => {
    if (!header.contains(event.target)) setMenuOpen(false);
  });

  header.addEventListener('focusout', event => {
    if (!header.contains(event.relatedTarget)) setMenuOpen(false);
  });

  mobileLayout.addEventListener('change', () => {
    if (mobileLayout.matches && navigation.contains(document.activeElement)) {
      menuButton.focus();
    }
    setMenuOpen(false);
  });

  let activeSection;

  function updateActiveSection() {
    const marker = window.innerHeight * 0.3;
    let current = entries[0];

    for (const entry of entries) {
      if (entry.section.getBoundingClientRect().top <= marker) current = entry;
    }

    // Short sections may not reach the marker before the end of the page.
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    if (atBottom) current = entries.at(-1);
    if (!current || current.section === activeSection) return;

    activeSection = current.section;
    entries.forEach(({ link, section }) => {
      const active = section === activeSection;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  let framePending = false;

  function scheduleActiveSectionUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(() => {
      framePending = false;
      updateActiveSection();
    });
  }

  window.addEventListener('scroll', scheduleActiveSectionUpdate, { passive: true });
  window.addEventListener('resize', scheduleActiveSectionUpdate);
  window.addEventListener('load', scheduleActiveSectionUpdate);
  window.addEventListener('pageshow', scheduleActiveSectionUpdate);

  document.documentElement.classList.add('js');
  updateActiveSection();
})();
