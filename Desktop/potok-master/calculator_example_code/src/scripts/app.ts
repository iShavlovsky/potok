import { checkbox, input, range, result, tooltip, tooltipPopUp } from './сontrols';
import type { ControlElements } from '../types/types';
import { approval, rateCalc, rateView, revenueRange } from './data';

const yearDay = 365;
const factor1 = 14;
const factor2 = 2.17;
const factor3 = 1000000;

// Default values.
function setDefault() {
  input.loanAmount.value = '10 000 000';
  input.loanTerm.value = '12';
  input.averageMonthlyRevenue.value = '10 000 000';
  input.loanAmount.dataset.value = input.loanAmount.value.replace(/\D/g, '');
  input.averageMonthlyRevenue.dataset.value = input.averageMonthlyRevenue.value.replace(/\D/g, '');

  range.loanTermRange.value = input.loanTerm.value;
  range.loanAmountRange.value = input.loanAmount.dataset.value;
  range.averageMonthlyRevenueRange.value = input.averageMonthlyRevenue.dataset.value;
}

function convertToRub(n: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(n);
}

function overPayment(interest: number) {
  const amortization = calculateAmortization();
  const resultPercent = (interest / amortization).toFixed(0);
  const resultSum = interest + amortization;
  innerResult(tooltip.tooltipTotal, convertToRub(resultSum));
  innerResult(result.resultPayment, convertToRub(resultSum));
  innerResult(result.resultOverpayment, `${resultPercent}%`);
}

function calculateAmortization() {
  const loanAmount = Number(input.loanAmount.dataset.value);
  const loanTerm = Number(input.loanTerm.value);
  const amortization = loanAmount / loanTerm / factor2;
  innerResult(tooltip.tooltipAmortization, convertToRub(amortization));
  return amortization;
}

function interestRateCalc(rateCalc: number, rateView: number[]) {
  const loanAmount = Number(input.loanAmount.dataset.value);
  const rateVPercent1 = (rateView[0] / 12).toFixed(1);
  const rateVPercent2 = (rateView[1] / 12).toFixed(1);
  const resultView =
    rateVPercent1 === rateVPercent2 ? `${rateVPercent1}%` : `${rateVPercent1}%-${rateVPercent2}%`;

  const resultCalc = ((loanAmount * rateCalc) / yearDay) * factor1;

  overPayment(resultCalc);
  innerResult(result.resultRate, resultView);
  innerResult(tooltip.tooltipInterest, convertToRub(resultCalc));
}
function innerResult(element: HTMLSpanElement, num: string) {
  element.innerText = num;
}

function getRevenue() {
  const period = checkbox.companyRegistrationPeriod.checked;
  const history = checkbox.positiveOrNeutral.checked;
  const stability = checkbox.regularlyEveryMonth.checked;
  const employees = checkbox.numberOfEmployees.checked;

  const revenue = Number(input.averageMonthlyRevenue.dataset.value);
  if (!period || !history || !stability) {
    innerResult(result.resultApproval, `${approval[0][0]}%`);
    interestRateCalc(rateCalc[0][0], rateView[0][0]);
  } else {
    for (let i = 0; i < revenueRange.length; i++) {
      const [cell1, cell2] = revenueRange[i].map((x) => x * factor3);
      const employeeIndex: number = employees ? 1 : 0;
      if (revenue >= cell1 && revenue <= cell2) {
        innerResult(result.resultApproval, `${approval[i][employeeIndex]}%`);
        interestRateCalc(rateCalc[i][employeeIndex], rateView[i][employeeIndex]);
      } else if (revenue < revenueRange[0][0] * factor3) {
        innerResult(result.resultApproval, `${approval[0][employeeIndex]}%`);
        interestRateCalc(rateCalc[0][employeeIndex], rateView[0][employeeIndex]);
      }
    }
  }
}

const syncValues = (source: HTMLInputElement, target: HTMLInputElement) => {
  const numericValue = source.value.replace(/\D/g, ''); // Удаление всех нецифровых символов
  const formattedValue = numericValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const isInvalidNumber =
    numericValue === '' ||
    Number(numericValue) < Number(source.min) ||
    Number(numericValue) > Number(source.max);

  // Обработка ошибок
  if (isInvalidNumber) {
    source.classList.add('error');
    if (target.type === 'range') {
      target.style.setProperty('--value', '0');
      target.value = '0';
    }
    return;
  }

  [source, target].forEach((el) => el.classList.remove('error'));

  if (target.type === 'range') {
    target.style.setProperty('--value', numericValue);
    target.value = numericValue;
  } else if (target.type === 'text') {
    target.value = formattedValue;
    target.dataset.value = numericValue;
  } else if (target.type === 'number') {
    target.value = numericValue;
  }
};

function getInputValue(event: Event) {
  getRevenue();

  const inputElement = event.target as HTMLInputElement;
  if (inputElement !== null) {
    if (inputElement.type === 'range') {
      syncValues(range.loanAmountRange, input.loanAmount);
      syncValues(range.loanTermRange, input.loanTerm);
      syncValues(range.averageMonthlyRevenueRange, input.averageMonthlyRevenue);
    } else if (inputElement.type === 'number' || inputElement.type === 'text') {
      syncValues(input.loanAmount, range.loanAmountRange);
      syncValues(input.loanTerm, range.loanTermRange);
      syncValues(input.averageMonthlyRevenue, range.averageMonthlyRevenueRange);
    } else if (inputElement.type === 'checkbox') {
      getRevenue();
    }
  }
}
const applyInputEventListeners = (elements: ControlElements, events: string[]) => {
  Object.values(elements).forEach((element) => {
    if (element !== null) {
      events.forEach((event) => {
        element.addEventListener(event, getInputValue, false);
      });
      element.addEventListener('keydown', function (e) {
        const allowedKeys = ['Delete', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];

        if (e.key.match(/[^0-9]/) && !allowedKeys.includes(e.key)) {
          e.preventDefault();
        }
      });
    }
  });
};

const applyTextEventListeners = (
  elements: HTMLSpanElement | HTMLParagraphElement,
  events: string[],
) => {
  if (elements !== null) {
    events.forEach((event) => {
      elements.addEventListener(
        event,
        () => {
          tooltipPopUp.tooltipPopup.classList.toggle('visible');
        },
        false,
      );
    });
  }
};

function applyRangeLineEvent(ranges: ControlElements): void {
  for (const range of Object.values(ranges)) {
    if (range) {
      range.style.setProperty('--value', range.value);
      range.style.setProperty('--min', range.min === '' ? '0' : range.min);
      range.style.setProperty('--max', range.max === '' ? '100' : range.max);
      range.style.setProperty('--value', range.value);

      const updateValue = (event: Event) => {
        range.style.setProperty('--value', range.value);
        getInputValue(event);
      };

      range.addEventListener('input', updateValue);
      range.addEventListener('change', updateValue);
    }
  }
}

(function init() {
  setDefault();
  getRevenue();

  applyRangeLineEvent(range);
  applyInputEventListeners(input, ['input', 'focus', 'paste']);
  applyInputEventListeners(checkbox, ['input', 'change']);
  applyTextEventListeners(tooltipPopUp.tooltipIcon, ['mouseenter', 'mouseleave']);
})();
