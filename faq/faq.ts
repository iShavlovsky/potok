import '../src/main.scss';
import './faq.scss';
// import './scripts/marquee';
// import './scripts/slider';

document.addEventListener('DOMContentLoaded', () => {
  const accordionTitles = document.querySelectorAll('.accordion__title-faq');

  accordionTitles.forEach((title) => {
    title.addEventListener('click', () => {
      const accordionItem = title.closest('.faq__accordion-item');
      if (accordionItem) {
        accordionItem.classList.toggle('active');
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
