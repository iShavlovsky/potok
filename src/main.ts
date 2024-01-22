import './main.scss';
import './scripts/indexPage';
// import './scripts/marquee';
// import './scripts/slider';

/* Open navBar */
const menuButton = document.querySelector('.header__navigation-menu');
const navbar = document.querySelector('.header__navbar');
const closeNavbarButton = navbar.querySelector('.close-navbar');

menuButton.addEventListener('click', () => {
  if (window.innerWidth <= 1024) {
    navbar.classList.add('active', 'fade-in');
    document.body.style.overflow = 'hidden';
  }
});

closeNavbarButton.addEventListener('click', () => {
  navbar.classList.remove('active', 'fade-in');
  document.body.style.overflow = 'visible';
});
