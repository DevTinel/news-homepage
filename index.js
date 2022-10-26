const mobileOpen = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.menu-links-mobile');

console.log(mobileOpen, mobileClose);
mobileOpen.addEventListener('click', () => {
  mobileClose.classList.remove('hidden');
  mobileOpen.classList.add('hidden');
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('menu-links-mobile-open');
});

mobileClose.addEventListener('click', () => {
  mobileClose.classList.add('hidden');
  mobileOpen.classList.remove('hidden');
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('menu-links-mobile-open');
});
