import axios from "axios";

export const getApiData = async () => {
  try {
    const response = await axios.get(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_dJIiMBbmAZ9HJeKBX41En6P3lzSmOo04hm1Bg2m9"
    );
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error.message);
  }
};
