import './partners.scss';
import '../src/main.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from '../src/scripts/utils/Marguee';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
  /* two Screen - marquee*/
  new Marquee('.marquee-1');
  new Marquee('.marquee-2');
});
