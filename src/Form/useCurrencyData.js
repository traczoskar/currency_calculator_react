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
        console.log("API Response:", response);
        setApiData({
          status: "downloaded",
          rates: response.data,
          date: response.meta.last_updated_at,
        });
        console.log(getApiData());
      } catch (error) {
        setApiData({
          status: "error",
        });
      }
    };
    fetchData();

    // setTimeout(fetchData, 4500);
  }, []);

  return apiData;
};
