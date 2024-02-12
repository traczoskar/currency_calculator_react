import { useEffect, useState } from "react";
import { getApiData } from "./getApiData";

export const useCurrencyData = () => {
  const [apiData, setApiData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApiData();
        setApiData({
          status: "downloaded",
          rates: response.data,
          date: response.meta.last_updated_at,
        });
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
