import Container from "./Container";
import Button from "./Button";
import FormSearch from "./FormSearch";

export default function Search(props) {

  const {value, setValue, handleButton} = props

  return (
    <Container>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <FormSearch
          value={value}
          setValue={setValue}
        ></FormSearch>
        <Button
          className={"text-md bg-primary-200 hover:text-light lg:text-lg"}
          text={"get weather information"}
          handleButton={handleButton}
        ></Button>
      </div>
    </Container>
  );
}
