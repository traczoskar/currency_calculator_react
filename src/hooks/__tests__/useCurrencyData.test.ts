import { act, renderHook, waitFor } from "@testing-library/react";
import { useCurrencyData } from "hooks/useCurrencyData";
import { getApiData } from "utils/getApiData";

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
    expect(result.current).toEqual({ status: "loading", rates: undefined });
  });

  test("should return status downloaded after fetching the data", async () => {
    const mockData = {
      meta: { last_updated_at: "2023-07-23T23:59:59Z" },
      data: {
        USD: { code: "USD", value: 1 },
        EUR: { code: "EUR", value: 0.89 },
      },
    };
    (getApiData as jest.Mock).mockResolvedValue(mockData);
    const { result } = renderHook(useCurrencyData);

    act(() => {
      jest.advanceTimersByTime(3500);
    });
    await waitFor(() => {
      expect(result.current.status).toBe("downloaded");
    });
    expect(result.current).toEqual({
      status: "downloaded",
      rates: mockData.data,
    });
  });
});
