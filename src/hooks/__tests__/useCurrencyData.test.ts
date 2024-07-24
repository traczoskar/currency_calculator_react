import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
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
    cleanup();
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
        PLN: { code: "PLN", value: 3.9277606978 },
        EUR: { code: "EUR", value: 0.9181001514 },
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

  test("should return status error when fetching data failed", async () => {
    (getApiData as jest.Mock).mockRejectedValue(
      new Error("Failed to fetch data!")
    );
    const { result } = renderHook(useCurrencyData);

    act(() => {
      jest.advanceTimersByTime(3500);
    });

    await waitFor(() => {
      expect(result.current.status).toBe("error");
    });

    expect(result.current).toEqual({
      status: "error",
    });
  });
});
