import { useEffect, useState } from "react";

export const useLocalStorage = (initivalValue, key) => {
  const getLocalValue = () => {
    const localValue = localStorage.getItem(key);
    if (localValue) return JSON.parse(localValue);
    return initivalValue;
  };

  const saveLocalStorage = (elements) => {
    const jsonElements = JSON.stringify(elements);
    localStorage.setItem(key, jsonElements);
  };

  const [value, setValue] = useState(getLocalValue);

  useEffect(() => {
    saveLocalStorage(value);
  }, [value]);

  return [value, setValue];
};
