// set current year
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
const headerEl = document.querySelector('header');
const toggleBtn = document.querySelector('.menu-toggle');
const linksEl = document.querySelector('.links');

if (toggleBtn && headerEl && linksEl) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = headerEl.classList.toggle('nav-open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // close menu on link click
  linksEl.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      headerEl.classList.remove('nav-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    })
  );
}