import { useEffect, useState } from "react";
import { Currencies } from "../types";

const URL = "https://api.moonpay.com/v3/currencies";

export const getCurrencies = async () =>
  await fetch(URL).then((res) => res.json());

export const useCurrencies = () => {
  const [data, setData] = useState<Currencies>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getCurrencies()
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, isError };
};
