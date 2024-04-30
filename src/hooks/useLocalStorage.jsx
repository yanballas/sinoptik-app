import { useEffect, useState } from "react";

export const getLocalValue = (initivalValue, key) => {
  const localValue = localStorage.getItem(key);
  if (localValue) return JSON.parse(localValue);
  return initivalValue;
};
export const saveLocalStorage = (element, key) => {
  const jsonElements = JSON.stringify(element);
  localStorage.setItem(key, jsonElements);
};
export const useLocalStorage = (initivalValue, key = String) => {
  const [value, setValue] = useState(getLocalValue(initivalValue, key));

  useEffect(() => {
    saveLocalStorage(value, key);
  }, [value]);

  return [value, setValue];
};
