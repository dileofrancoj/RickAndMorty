import { useState, useEffect } from "react";
import { BASE_URL } from "./../constants/index";
export const useFetch = (url, initialState = null) => {
  const [data, setData] = useState(initialState);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      const result = await fetch(`${BASE_URL}/${url}`);
      const data = await result.json();
      setData(data);
      setFetching(false);
    } catch (error) {
      setError(true);
      setFetching(false);
      setData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, fetching, error];
};
