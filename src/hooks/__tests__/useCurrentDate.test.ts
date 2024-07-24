import { act, cleanup, renderHook } from "@testing-library/react";
import { useCurrentDate } from "hooks/useCurrentDate";

describe("useCurrentDate hook tests", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.resetAllMocks();
    cleanup();
  });

  test("should return current date", () => {
    const { result } = renderHook(useCurrentDate);
    expect(result.current).toBeInstanceOf(Date);
  });

  test("should update the date every second", () => {
    const { result } = renderHook(useCurrentDate);
    const initialDate = result.current;

    act(() => jest.advanceTimersByTime(1000));
    expect(result.current.getTime()).not.toEqual(initialDate.getTime());
    expect(result.current.getTime()).toBeGreaterThan(initialDate.getTime());
  });

  test("should clear the interval on unmount", () => {
    const { unmount } = renderHook(useCurrentDate);
    const clearIntervalSpy = jest.spyOn(global, "clearInterval");

    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled;
  });
});
