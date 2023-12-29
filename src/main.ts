import './main.scss';
// import './scripts/cookies';
// import './scripts/marquee';
// import './scripts/slider';
import Swiper from 'swiper';
import 'swiper/css';

window.addEventListener('load', function () {
  let numbersTranslatePersantages: number = 0;
  let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (viewportWidth > 1250) {
    numbersTranslatePersantages = 100;
  } else if (viewportWidth <= 1024 && viewportWidth >= 768) {
    numbersTranslatePersantages = 150;
  } else if (viewportWidth <= 1250 && viewportWidth > 1024) {
    numbersTranslatePersantages = 120;
  }

  const breakpoints = () => {
    viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (viewportWidth > 1250) {
      numbersTranslatePersantages = 100;
    } else if (viewportWidth <= 1024 && viewportWidth >= 768) {
      numbersTranslatePersantages = 150;
    } else if (viewportWidth <= 1250 && viewportWidth > 1024) {
      numbersTranslatePersantages = 120;
    }
  };

  window.addEventListener('resize', breakpoints);

  const html: HTMLHtmlElement = document.querySelector('html')!;

  // Cabinet
  const tabsImg: NodeListOf<Element> = document.querySelectorAll('.tabs__img');
  const tabsTitles: NodeListOf<Element> = document.querySelectorAll('.tabs__tab');
  const tabsContent: NodeListOf<Element> = document.querySelectorAll('.tabs__list');
  const tabsButtons: NodeListOf<Element> = document.querySelectorAll('.tabs__button');

  const tabsElements: Element[] = [...tabsImg, ...tabsTitles, ...tabsContent, ...tabsButtons];

  tabsTitles.forEach((tabsTitle) => {
    tabsTitle.addEventListener('click', () => {
      const currentTab: string | null = tabsTitle.getAttribute('data-tab');

      tabsElements.forEach((tabsElement) => {
        if (tabsElement.getAttribute('data-tab') === currentTab) {
          tabsElement.classList.add('active');
        } else {
          tabsElement.classList.remove('active');
        }
      });
    });
  });

  // Staff Popup
  const staffMen: NodeListOf<Element> = document.querySelectorAll('.staff__man');
  const staffPopups: NodeListOf<Element> = document.querySelectorAll('.staff__popup');

  staffMen.forEach((staffMan) => {
    staffMan.addEventListener('click', () => {
      const currentPopupIndex: string | null = staffMan.getAttribute('data-popup-index');

      staffPopups.forEach((staffPopup) => {
        if (staffPopup.getAttribute('data-popup-index') === currentPopupIndex) {
          staffPopup.classList.add('active');
          html.classList.add('no-scroll');
        }

        const activeStaffPopup: Element | null = document.querySelector('.staff__popup.active');

        if (activeStaffPopup) {
          const staffPopupContent: Element = activeStaffPopup.children[1];
          activeStaffPopup.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(staffPopupContent);
            if (!withinBoundaries) {
              activeStaffPopup.classList.remove('active');
              html.classList.remove('no-scroll');
            }
          });
        }
      });
    });
  });

  // Numbers
  const numbers: HTMLHtmlElement = document.querySelector('.numbers')!;
  const numbersScroll: HTMLHtmlElement = document.querySelector('.numbers__line')!;

  const { top: numbersY } = numbers.getBoundingClientRect();
  const numbersTop: number = numbersY + this.window.scrollY;
  const numbersHeight: number = numbers.offsetHeight;
  const numbersBottom: number = numbersTop + numbersHeight;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (numbersTop < scrollTop && numbersBottom > scrollTop) {
      numbersScroll.style.transform = `translateX(${
        ((scrollTop - numbersTop) / numbersHeight) * numbersTranslatePersantages * -1
      }%)`;
    }
  });

  const swiper = new Swiper('.mm__swiper', {
    slidesPerView: 2,
    spaceBetween: 10,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2.7,
        spaceBetween: 52,
      },

      1024: {
        slidesPerView: 3,
      },
    },
  });
});
