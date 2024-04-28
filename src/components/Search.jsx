import { useState } from "react";
import Button from "./Button";
import FormSearch from "./FormSearch";

export default function Search() {
  const [value, setValue] = useState("");

  const handleButton = () => {
    console.log("click");
  };

  return (
    <div className="flex items-center justify-between">
      <FormSearch value={value}></FormSearch>
      <Button
        className={"text-lg bg-primary-200 hover:text-light"}
        text={"weather information"}
        handleButton={handleButton}
      ></Button>
    </div>
  );
}
