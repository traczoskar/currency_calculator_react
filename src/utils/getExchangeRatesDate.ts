import { CurrencyData } from "types/types";

export const getExchangeRatesDate = (
  apiData: CurrencyData
): string | undefined => {
  if (apiData.status === "downloaded") {
    const dateOfData = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return dateOfData;
  }
};
