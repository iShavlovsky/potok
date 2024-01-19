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
