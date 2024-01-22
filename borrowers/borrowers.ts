import '../src/main.scss';
import './borrowers.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
  /* first Screen */
  gsap.to('#firstScreenContainer3', {
    scrollTrigger: {
      trigger: '#firstScreenSection3',
      start: 'top top',
      end: 'bottom',
      scrub: true,
      pin: '#firstScreenContainer3',
      // markers: true,
    },
    opacity: 0,
  });

  const benefitsSection = document.querySelector('.minus-100vh');
  const benefitsBlocks = document.querySelectorAll('.benefits__benefit');

  const sectionHeight = benefitsSection.clientHeight;
  const blockHeight = sectionHeight / benefitsBlocks.length;

  benefitsBlocks.forEach((block, index) => {
    ScrollTrigger.create({
      trigger: benefitsSection,
      start: `${((index * blockHeight) / sectionHeight) * 100}% top`,
      end: `${(((index + 1) * blockHeight) / sectionHeight) * 50}% 50%`,
      onEnter: () => {
        // Снимаем класс "active" со всех блоков
        benefitsBlocks.forEach((b) => b.classList.remove('active'));

        // Добавляем класс "active" к текущему блоку
        block.classList.add('active');
      },
      onLeaveBack: () => {
        // Снимаем класс "active" со всех блоков при возврате скролла назад
        benefitsBlocks.forEach((b) => b.classList.remove('active'));

        // Добавляем класс "active" к предыдущему блоку при возврате скролла назад
        if (index > 0) {
          benefitsBlocks[index - 1].classList.add('active');
        }
      },
    });
  });
});

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

/* change navbar collors */
const navbarChangeTrigger = document.querySelector('.navbar-change-trigger');
const header = document.querySelector('.header');

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
};

const handleScroll = () => {
  if (!isElementInViewport(navbarChangeTrigger)) {
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
  }
};

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', () => {
  handleScroll();
});

window.addEventListener('resize', handleScroll);
