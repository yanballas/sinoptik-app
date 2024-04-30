import { forwardRef, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { saveLocalStorage } from "../hooks/useLocalStorage";
import iconSearch from "../assets/iconSearch.svg";
import classNames from "classnames";

export default forwardRef(function Input(props, ref) {
  const {
    handleInput = Function.prototype,
    value = String,
    setValue,
    name = String,
    placeholder = String,
    storageKey = String,
    className = String,
    ...prop
  } = props;

  const debounceValue = useDebounce(value);
  useEffect(() => {
    saveLocalStorage(debounceValue, storageKey);
  }, [debounceValue]);

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleInput();
    }
  };

  const inputClasses = classNames(
    "text-lg",
    "border-solid",
    "border-2",
    "border-dark",
    "rounded-md",
    "p-4",
    "outline-none",
    "box-border",
    "md:text-lg",
    "lg:text-2xl",
    className
  );
  return (
    <input
      ref={ref}
      className={inputClasses}
      name={name}
      value={value}
      placeholder={placeholder}
      type="text"
      onChange={handleChangeValue}
      onKeyUp={handleKeyUp}
      {...prop}
    />
  );
});
