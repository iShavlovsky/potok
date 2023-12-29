import './main.scss';
// import './scripts/cookies';
// import './scripts/marquee';
// import './scripts/slider';

window.addEventListener('load', function () {
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
  const numbers: Element = document.querySelector('.numbers')!;
  const numbersScroll: Element = document.querySelector('.numbers__scroll')!;

  const { top: numbersY } = numbers.getBoundingClientRect();
  const numbersTop = numbersY + this.window.scrollY;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (numbersTop < scrollTop) {
      console.log('it works');
    }
  });
});
