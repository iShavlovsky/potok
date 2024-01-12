import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
