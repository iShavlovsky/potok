import '../src/main.scss';
import './investors.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from '../src/scripts/utils/Marguee';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
  /* first Screen */
  gsap.to('#firstScreenContainer2', {
    scrollTrigger: {
      trigger: '#firstScreenSection2',
      start: 'top top',
      end: 'bottom',
      scrub: true,
      pin: '#firstScreenContainer2',
      // markers: true,
    },
    opacity: 0,
  });

  /* Our partners Screen - marquee*/
  new Marquee('.marquee-1');
});

const tabs: NodeListOf<Element> = document.querySelectorAll('.advantages__advantage');

tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    const tabNumber: string = this.getAttribute('data-adv') || '1';

    // Переключаем класс "active" для всех элементов
    tabs.forEach((tab) => tab.classList.remove('active'));

    // Добавляем класс "active" только к элементам с выбранным data-adv
    tabs.forEach((tab) => {
      if (tab.getAttribute('data-adv') === tabNumber) {
        tab.classList.add('active');
      }
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
});
