/* =============================================
   NEXUSX CLUB — script.js
   Shared across all pages
   ============================================= */

/* ---- Theme Toggle ---- */
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const btn = document.getElementById('themeToggle');
  if (document.body.classList.contains('light-mode')) {
    btn.textContent = '[ DARK ]';
    localStorage.setItem('theme', 'light');
  } else {
    btn.textContent = '[ LIGHT ]';
    localStorage.setItem('theme', 'dark');
  }
}

/* ---- Load saved theme on every page ---- */
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = '[ DARK ]';
  }
});

/* ---- Mobile Hamburger Menu ---- */
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}