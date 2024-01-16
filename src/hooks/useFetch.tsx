import { useState, useEffect } from "react";
import { PriceDataInner } from "../types/types";

export const useFetch = (_url: string) => {
  const [data, setData] = useState<Array<PriceDataInner>>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getFetch = async () => {
    setError(undefined);
    try {
      const res = await fetch(_url);
      const json = await res.json();
      setData(json);
      setIsLoading(false);
    } catch (err) {
      if(err instanceof Error) {
        setError(err.message)
        setIsLoading(false)
      }
    }
  };

  useEffect(() => {
    getFetch();
  }, [_url]);

  return { data, error, isLoading };
};
