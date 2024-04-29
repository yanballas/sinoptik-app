import Container from "./Container";
import Button from "./Button";
import Input from "./Input";

export default function Search(props) {
  const {
    value = String,
    setValue,
    handleSearchButton = Function.prototype,
  } = props;

  return (
    <Container>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <Input value={value} setValue={setValue} name={'search'}></Input>
        <Button
          className={"text-md bg-primary-200 hover:text-light lg:text-lg"}
          text={"get weather information"}
          handleButton={handleSearchButton}
        ></Button>
      </div>
    </Container>
  );
}
