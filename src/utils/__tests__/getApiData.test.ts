import { cleanup } from "@testing-library/react";
import { getApiData } from "../getApiData";

const originalFetch = global.fetch;

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  global.fetch = originalFetch;
});

describe("get API data", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  test("should return data when fetch is successful", async () => {
    const mockData = {
      meta: { last_updated_at: "2023-07-23T23:59:59Z" },
      data: {
        USD: { code: "USD", value: 1 },
        EUR: { code: "EUR", value: 0.89 },
      },
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });

    expect(await getApiData()).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_dJIiMBbmAZ9HJeKBX41En6P3lzSmOo04hm1Bg2m9"
    );
  });

  test("should throw an Error when fetch failed", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue({}),
    });

    await expect(getApiData()).rejects.toThrow("Failed to fetch data!");
  });
});
