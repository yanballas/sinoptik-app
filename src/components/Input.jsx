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

  return (
    <div className={classNames('flex', 'items-center', 'relative', className)}>
      <input
        ref={ref}
        className="w-full h-full text-lg border-solid border-2 border-dark rounded-md py-4 pl-4 pr-16 outline-none box-border md:text-lg lg:text-2xl"
        name={name}
        value={value}
        placeholder={placeholder}
        type="text"
        onChange={handleChangeValue}
        onKeyUp={handleKeyUp}
        {...prop}
      />
      <img className="opacity-70 w-8 absolute top-2/4 right-4 translate-y-[-50%] lg:w-12" src={iconSearch} alt="icon" />
    </div>
  );
});
