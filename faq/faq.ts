import '../src/main.scss';
import './faq.scss';
// import './scripts/marquee';
// import './scripts/slider';
console.log(2);

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
});
