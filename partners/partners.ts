import './partners.scss';
import '../src/main.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from '../src/scripts/utils/Marguee';
gsap.registerPlugin(ScrollTrigger);

const button = document.getElementById(
  'Landing_Partner_Page_MoreInfo_Button_Click',
) as HTMLButtonElement;
const form = document.getElementById('wf-form-Partners-Phone-or-Email') as HTMLFormElement;

button.addEventListener('click', () => {
  // Используем CSS-класс с анимацией для плавного появления
  form.classList.add('fade-in');

  // Через 0.3 секунды после начала анимации, меняем стили
  setTimeout(() => {
    button.style.display = 'none';
    form.style.display = 'block';
  }, 300);
});

document.addEventListener('DOMContentLoaded', function () {
  /* two Screen - marquee*/
  new Marquee('.marquee-1');
  new Marquee('.marquee-2');
});

document.addEventListener('DOMContentLoaded', () => {
  const accordionTitles = document.querySelectorAll('.accordion__title-faq');

  accordionTitles.forEach((title) => {
    title.addEventListener('click', () => {
      const accordionItem = title.closest('.faq__accordion-item');
      if (accordionItem) {
        accordionItem.classList.toggle('active');
      }
    });
  });

  /* Scroll section */

  const benefitsSection = document.querySelector(
    '.benefits-partners-sticy-rail-section',
  ) as HTMLElement;
  const benefitsBlocks = document.querySelectorAll('.benefits__benefit') as NodeListOf<HTMLElement>;

  const sectionHeight = benefitsSection.clientHeight;
  const blockHeight = sectionHeight / benefitsBlocks.length;

  benefitsBlocks.forEach((block, index) => {
    ScrollTrigger.create({
      trigger: benefitsSection,
      start: `${((index * blockHeight) / sectionHeight) * 100}% top`,
      end: `${(((index + 1) * blockHeight) / sectionHeight) * 50}% 50%`,
      onEnter: () => {
        benefitsBlocks.forEach((b) => b.classList.remove('active'));

        block.classList.add('active');
      },
      onLeaveBack: () => {
        benefitsBlocks.forEach((b) => b.classList.remove('active'));

        if (index > 0) {
          benefitsBlocks[index - 1].classList.add('active');
        }
      },
    });

    /* Open navBar */
    const menuButton = document.querySelector('.header__navigation-menu') as HTMLElement;
    const navbar = document.querySelector('.header__navbar') as HTMLElement;
    const closeNavbarButton = navbar.querySelector('.close-navbar') as HTMLElement;

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
    let prevScrollPos: number = window.pageYOffset;

    window.onscroll = function () {
      const currentScrollPos: number = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        const header = document.querySelector('.header') as HTMLElement;
        if (header) {
          header.style.transform = 'translateY(0)';
        }
      } else {
        const header = document.querySelector('.header') as HTMLElement;
        if (header) {
          header.style.transform = 'translateY(-150px)';
        }
      }

      prevScrollPos = currentScrollPos;
    };
  });
});
