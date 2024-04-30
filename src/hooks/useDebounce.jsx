import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 1000) => {
  const [valueDebounce, setValueDebounce] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValueDebounce(value);
    }, delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return valueDebounce;
};
