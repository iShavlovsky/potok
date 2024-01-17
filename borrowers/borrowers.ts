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
});
