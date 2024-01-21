import './main.scss';
import './scripts/indexPage';
// import './scripts/marquee';
// import './scripts/slider';

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
