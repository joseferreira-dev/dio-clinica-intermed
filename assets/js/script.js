let menuMobile = document.querySelector('.header__menu--mobile');
let menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
  menuMobile.classList.toggle('hidden');
});