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
  gsap.to('#scrollBlockTriggerLeft', {
    scrollTrigger: {
      trigger: '#scrollBlockTrigger',
      start: 'top top',
      end: '50%',
      scrub: 1.5,
      // markers: true,
    },
    duration: 1,
    xPercent: -90,
  });

  /* seven Screen-left scrolls */
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
});
