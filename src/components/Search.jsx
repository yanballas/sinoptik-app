import { useState } from "react";
import Container from "./Container";
import Button from "./Button";
import FormSearch from "./FormSearch";

export default function Search() {
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleButton = () => {
    console.log(value);
  };

  return (
    <Container>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <FormSearch
          value={value}
          handleChangeValue={handleChangeValue}
        ></FormSearch>
        <Button
          className={"text-sm bg-primary-200 hover:text-light md:text-lg lg:text-lg"}
          text={"get weather information"}
          handleButton={handleButton}
        ></Button>
      </div>
    </Container>
  );
}
