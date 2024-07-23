import { ApiResponse } from "types/types";

const apiURL =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_dJIiMBbmAZ9HJeKBX41En6P3lzSmOo04hm1Bg2m9";

export const getApiData = async (): Promise<ApiResponse> => {
  const response = await fetch(apiURL);
  const data: ApiResponse = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }
  return data;
};
