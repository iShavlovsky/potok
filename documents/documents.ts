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
