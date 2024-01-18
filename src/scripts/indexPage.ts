import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from './utils/Marguee';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
  /* first Screen */
  gsap.to('#firstScreenContainer', {
    scrollTrigger: {
      trigger: '#firstScreenSection',
      start: 'top top',
      end: 'bottom',
      scrub: true,
      pin: '#firstScreenContainer',
      // markers: true,
    },
    opacity: 0,
  });

  /* two Screen - marquee*/
  new Marquee('.marquee-1');
  new Marquee('.marquee-2');

  /* four Screen-left scrolls */
  const mm = gsap.matchMedia();

  mm.add('(min-width: 768px)', () => {
    // Код анимации, который будет выполнен только при разрешении экрана не ниже 768px
    gsap.to('#scrollBlockTriggerLeft', {
      scrollTrigger: {
        trigger: '#scrollBlockTrigger',
        start: 'top top',
        end: '50%',
        scrub: 1.5,
      },
      duration: 1,
      xPercent: -90,
    });

    return () => {
      // Опциональный пользовательский код очистки (выполняется, когда условие больше не соответствует)
      gsap.killTweensOf('#scrollBlockTriggerLeft');
    };
  });

  /* seven Screen-left scrolls */

  const mm2 = gsap.matchMedia();

  mm2.add('(min-width: 768px)', () => {
    // Код анимации, который будет выполнен только при разрешении экрана не ниже 768px
    gsap.to('#scrollBlockTriggerLeft2', {
      scrollTrigger: {
        trigger: '#scrollBlockTrigger2',
        start: 'top top',
        end: '80%',
        scrub: 1.5,
        // markers: true,
      },
      duration: 1,
      xPercent: -80,
    });

    return () => {
      // Опциональный пользовательский код очистки (выполняется, когда условие больше не соответствует)
      gsap.killTweensOf('#scrollBlockTriggerLeft2');
    };
  });

  const tabs: NodeListOf<Element> = document.querySelectorAll('.tabs__tab');
  const tabContents: NodeListOf<Element> = document.querySelectorAll('.tabs-content-w');
  const images: NodeListOf<Element> = document.querySelectorAll('.tabs__img');

  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      const tabNumber: string = this.getAttribute('data-tab') || '1';

      // Переключаем класс "active" для всех элементов
      tabs.forEach((tab) => tab.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));
      images.forEach((image) => image.classList.remove('active'));

      // Добавляем класс "active" только к элементам с выбранным data-tab
      tabs.forEach((tab) => {
        if (tab.getAttribute('data-tab') === tabNumber) {
          tab.classList.add('active');
        }
      });

      tabContents.forEach((content) => {
        if (content.getAttribute('data-tab') === tabNumber) {
          content.classList.add('active');
        }
      });

      images.forEach((image) => {
        if (image.getAttribute('data-tab') === tabNumber) {
          image.classList.add('active');
        }
      });
    });
  });
});
