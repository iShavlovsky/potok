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
      gsap.killTweensOf('#scrollBlockTriggerLeft');
    };
  });

  /* seven Screen-left scrolls */
  const mm2 = gsap.matchMedia();

  mm2.add('(min-width: 768px)', () => {
    gsap.to('#scrollBlockTriggerLeft2', {
      scrollTrigger: {
        trigger: '#scrollBlockTrigger2',
        start: 'top top',
        end: '80%',
        scrub: 1.5,
      },
      duration: 1,
      xPercent: -80,
    });

    return () => {
      gsap.killTweensOf('#scrollBlockTriggerLeft2');
    };
  });

  /* tabs */
  const tabs: NodeListOf<Element> = document.querySelectorAll('.tabs__tab');
  const tabContents: NodeListOf<Element> = document.querySelectorAll('.tabs-content-w');
  const images: NodeListOf<Element> = document.querySelectorAll('.tabs__img');

  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      const tabNumber: string = this.getAttribute('data-tab') || '1';

      tabs.forEach((tab) => tab.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));
      images.forEach((image) => image.classList.remove('active'));

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

  /* popup "staff__man" */
  const staffManElements = document.querySelectorAll<HTMLElement>('.staff__man');

  staffManElements.forEach(function (element) {
    element.addEventListener('click', function () {
      staffManElements.forEach(function (el) {
        el.classList.remove('active');
      });

      element.classList.add('active');
    });

    const closePopupElement = element.querySelector<HTMLElement>('.close-staff-pop-up');

    closePopupElement.addEventListener('click', function (event) {
      event.stopPropagation();
      element.classList.remove('active');
    });
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
