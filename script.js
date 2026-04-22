
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const navLinks = document.querySelectorAll('.nav-links a');

const a = document.createElement('a');
a.href = window.location.href;
const currentPath = a.pathname;

navLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;

    if (a.pathname === currentPath) {
        link.classList.add('active');
    }
});
