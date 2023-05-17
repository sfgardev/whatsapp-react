import { useEffect } from "react";

export const useInterval = (fn: () => void, delay = 2000) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      fn();
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [fn, delay]);
};
