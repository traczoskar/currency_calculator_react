import { CurrencyData } from "types/types";
import { calculateResult } from "utils/calculateResult";

describe("calculateResult", () => {
  const mockApiData: CurrencyData = {
    status: "downloaded",
    rates: {
      USD: { code: "USD", value: 1 },
      PLN: { code: "PLN", value: 3.9277606978 },
      EUR: { code: "EUR", value: 0.9181001514 },
    },
  };

  beforeEach(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should calculate proper result for USD", () => {
    const result = calculateResult("USD", "100", mockApiData);
    expect(result).toEqual({
      sourceAmount: 100,
      targetAmount: "25.46",
      currency: "USD",
    });
  });

  test("should calculate proper result for PLN", () => {
    const result = calculateResult("PLN", "100", mockApiData);
    expect(result).toEqual({
      sourceAmount: 100,
      targetAmount: "100.00",
      currency: "PLN",
    });
  });

  test("should calculate proper result for EUR", () => {
    const result = calculateResult("EUR", "100", mockApiData);
    expect(result).toEqual({
      sourceAmount: 100,
      targetAmount: "23.37",
      currency: "EUR",
    });
  });

  test("should prompt an alert that input value can't be less than 0.01", () => {
    calculateResult("USD", "0.009", mockApiData);
    expect(window.alert).toHaveBeenCalledWith("Amount can't be less than 0.01");
  });

  test("should calculate proper result for amount equal to 0.01", () => {
    const result = calculateResult("USD", "0.01", mockApiData);
    expect(result).toEqual({
      sourceAmount: 0.01,
      targetAmount: "0.00",
      currency: "USD",
    });
  });
});
