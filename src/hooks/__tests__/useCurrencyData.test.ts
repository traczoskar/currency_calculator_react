import { renderHook } from "@testing-library/react";
import { useCurrencyData } from "hooks/useCurrencyData";

jest.mock("utils/getApiData");

describe("useCurrencyData hook tests", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.resetAllMocks();
  });

  test("should return status loading firstly", () => {
    const { result } = renderHook(() => useCurrencyData());
    expect(result.current.status).toBe("loading");
    expect(result.current.rates).toBeUndefined();
  });
});
