import { useState, useEffect } from "react";

const cache: { [k: string]: [] } = {};

export const useFetch = (url: string) => {
  const [status, setStatus] = useState<string>("idle");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus("fetching");
      if (cache[url]) {
        const data = cache[url];
        setData(data);
        setStatus("fetched");
      } else {
        const response = await fetch(url);
        const data = await response.json();
        cache[url] = data; // set response in cache;
        setData(data);
        setStatus("fetched");
      }
    };

    fetchData();
  }, [url]);

  return { status, data };
};
