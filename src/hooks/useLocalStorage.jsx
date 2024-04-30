import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useLocalStorage = (initivalValue, key = String) => {
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
  const db = useDebounce(value);

  useEffect(() => {
    saveLocalStorage(db);
  }, [db]);

  return [value, setValue];
};
