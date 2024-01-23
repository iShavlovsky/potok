import '../src/main.scss';
import './document.scss';
// import './scripts/cookies';
// import './scripts/marquee';
// import './scripts/slider';

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach((item, index) => {
    const title = item.querySelector('.accordion__title');

    title.addEventListener('click', function () {
      // Если аккордион уже открыт, закрываем его
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        // Открываем текущий аккордион
        item.classList.add('active');
      }
    });
  });

/* Open navBar */
const menuButton = document.querySelector('.header__navigation-menu') as HTMLElement;
const navbar = document.querySelector('.header__navbar') as HTMLElement;
const closeNavbarButton = navbar.querySelector('.close-navbar') as HTMLElement;

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

    /* hide and show navbar */
    let prevScrollPos: number = window.pageYOffset;

    window.onscroll = function () {
      const currentScrollPos: number = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        const header = document.querySelector('.header') as HTMLElement;
        if (header) {
          header.style.transform = 'translateY(0)';
        }
      } else {
        const header = document.querySelector('.header') as HTMLElement;
        if (header) {
          header.style.transform = 'translateY(-150px)';
        }
      }

      prevScrollPos = currentScrollPos;
    };
});
