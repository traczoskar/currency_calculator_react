import { renderHook } from "@testing-library/react";
import { useCurrentDate } from "hooks/useCurrentDate";

describe("useCurrentDate hook tests", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.resetAllMocks();
  });

  test("should return current date", () => {
    const { result } = renderHook(useCurrentDate);
    expect(result.current).toBeInstanceOf(Date);
  });
});
