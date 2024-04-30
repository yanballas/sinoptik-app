import { useState } from "react";
import Container from "./Container";
import InfoPanel from "./InfoPanel";
import Input from "./Input";
import ItemsPanel from "./ItemsPanel";

export default function Layout(props) {
  const { items, setItems, ...prop } = props;
  const [filterValue, setFilterValue] = useState("");
  return (
    <Container className={"flex grow flex-col gap-4 min-h-0"}>
      <Input
        value={filterValue}
        name={"filter"}
        setValue={setFilterValue}
        placeholder={"filter city"}
        className={"w-full lg:w-1/2"}
      ></Input>
      <div className="min-h-0 grid-rows-[repeat(2,50%)] text-xl grow grid grid-cols-1 lg:texl-xl lg:grid-cols-2 lg:grid-rows-1">
        <ItemsPanel></ItemsPanel>
        <InfoPanel></InfoPanel>
      </div>
    </Container>
  );
}
