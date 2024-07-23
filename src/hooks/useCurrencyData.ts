import { useEffect, useState } from "react";
import { getApiData } from "../utils/getApiData";
import { CurrencyData } from "../types/types";

export const useCurrencyData = () => {
  const initialApiData: CurrencyData = {
    status: "loading",
    rates: undefined,
  };
  const [apiData, setApiData] = useState<CurrencyData>(initialApiData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApiData();
        setApiData({
          status: "downloaded",
          rates: response ? response.data : undefined,
        });
      } catch (error) {
        setApiData({
          status: "error",
        });
      }
    };

    setTimeout(fetchData, 3500);
  }, []);

  return apiData;
};
