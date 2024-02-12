import { useEffect, useState } from "react";
import { getApiData } from "./getApiData";

export const useCurrencyData = () => {
  const [apiData, setApiData] = useState({
    status: "loading",
    rates: null,
    date: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApiData(); //sprawdź po zmianie ściezki czy to co się pobiera z API to JSON;
        setApiData({
          status: "downloaded",
          rates: response.data,
          date: response.meta.last_updated_at,
        });
        console.log("getApiData content:", apiData);
      } catch (error) {
        setApiData({
          status: "error",
        });
      }
    };

    setTimeout(fetchData, 4500);
  }, []);

  return apiData;
};
