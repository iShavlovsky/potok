import '../src/main.scss';
import './faq.scss';
// import './scripts/marquee';
// import './scripts/slider';
console.log(2);

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
  const menuButton = document.querySelector('.header__navigation-menu');
  const navbar = document.querySelector('.header__navbar');
  const closeNavbarButton = navbar.querySelector('.close-navbar');

  menuButton.addEventListener('click', () => {
    // Проверяем разрешение экрана
    if (window.innerWidth <= 1024) {
      // Добавляем классы и анимацию
      navbar.classList.add('active', 'fade-in');
      document.body.style.overflow = 'hidden'; // Задаем overflow: hidden для body
    }
  });

  closeNavbarButton.addEventListener('click', () => {
    // Убираем класс active и анимацию
    navbar.classList.remove('active', 'fade-in');
    document.body.style.overflow = 'visible'; // Восстанавливаем исходный overflow: visible для body
  });

  /* hide and show navbar */
  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      document.querySelector('.header').style.transform = 'translateY(0)';
    } else {
      document.querySelector('.header').style.transform = 'translateY(-150px)';
    }

    prevScrollPos = currentScrollPos;
  };
});
