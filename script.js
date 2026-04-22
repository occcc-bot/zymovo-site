const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const page = document.body.dataset.page;

document.querySelectorAll('.nav a').forEach((link) => {
  const href = link.getAttribute('href') || '';
  if ((page === 'home' && href === 'index.html') || href.includes(page)) {
    link.classList.add('active');
  }
});

if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}
