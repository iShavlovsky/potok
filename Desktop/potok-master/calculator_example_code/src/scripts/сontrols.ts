import type { TypedElements, TextElement } from '../types/types';

const inputId = ['loan-amount', 'loan-term', 'average-monthly-revenue'] as const;

const rangeId = ['loan-amount-range', 'loan-term-range', 'average-monthly-revenue-range'] as const;

const checkboxId = [
  'company-registration-period',
  'positive-or-neutral',
  'regularly-every-month',
  'number-of-employees',
] as const;

const resultSpanId = [
  'result-approval',
  'result-rate',
  'result-payment',
  'result-overpayment',
] as const;

const tooltipId = ['tooltip-total', 'tooltip-amortization', 'tooltip-interest'] as const;

const tooltipPopUpId = ['tooltip-icon', 'tooltip-popup'] as const;

export const input = {} as TypedElements<typeof inputId, HTMLInputElement>;
export const range = {} as TypedElements<typeof rangeId, HTMLInputElement>;
export const checkbox = {} as TypedElements<typeof checkboxId, HTMLInputElement>;
export const result = {} as TypedElements<typeof resultSpanId, TextElement>;
export const tooltip = {} as TypedElements<typeof tooltipId, HTMLParagraphElement>;
export const tooltipPopUp = {} as TypedElements<typeof tooltipPopUpId, HTMLSpanElement>;
const convertToCamelCase = (str: string): string => {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};

const gatherElements = <T extends readonly string[], E>(
  arr: T,
  storageObj: TypedElements<T, E>,
) => {
  for (const id of arr) {
    const camelCaseId = convertToCamelCase(id);
    storageObj[camelCaseId as keyof typeof storageObj] = document.getElementById('loan-term') as E;
  }
};

gatherElements(inputId, input);
gatherElements(rangeId, range);
gatherElements(checkboxId, checkbox);
gatherElements(resultSpanId, result);
gatherElements(tooltipId, tooltip);
gatherElements(tooltipPopUpId, tooltipPopUp);
