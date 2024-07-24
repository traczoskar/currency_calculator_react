import { CurrencyData, ResultData } from "types/types";

export const calculateResult = (
  selectedCurrency: string,
  amount: string,
  apiData: CurrencyData
): ResultData => {
  const getCurrencyRate = (key: string) => {
    if (apiData.rates) {
      const currency = Object.values(apiData.rates).find(
        (currency) => currency.code === key
      );
      if (currency) {
        return currency.value;
      }
    }
  };

  const targetCurrencyRate = getCurrencyRate(selectedCurrency);
  const plnCurrencyRate = getCurrencyRate("PLN");
  const calculate = (): number =>
    +amount *
    ((targetCurrencyRate ? targetCurrencyRate : 1) /
      (plnCurrencyRate ? plnCurrencyRate : 1));

  if (+amount <= 0.01) {
    alert("Amount can't be less than 0.01");
  }

  return {
    sourceAmount: +amount,
    targetAmount: calculate().toFixed(2),
    currency: selectedCurrency,
  };
};
