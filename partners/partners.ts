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

  const benefitsSection = document.querySelector('.benefits-partners-sticy-rail-section');
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
