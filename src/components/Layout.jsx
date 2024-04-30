import { useState } from "react";
import Container from "./Container";
import InfoPanel from "./InfoPanel";
import Input from "./Input";
import ItemsPanel from "./ItemsPanel";

export default function Layout(props) {
  const { items = [], setItems, ...prop } = props;
  const [filterValue = "", setFilterValue] = useState("");
  return (
    <Container className={"flex grow flex-col gap-4 min-h-0"}>
      <Input
        value={filterValue}
        name={"filter"}
        setValue={setFilterValue}
        placeholder={"filter city"}
        className={"w-full lg:w-[calc(50%-8px)]"}
      ></Input>
      <div className="min-h-0 text-xl grow grid grid-cols-1 grid-rows-[repeat(2, 1fr)] gap-4 lg:texl-xl lg:grid-cols-2 lg:grid-rows-1">
        <ItemsPanel items={items}></ItemsPanel>
        <InfoPanel></InfoPanel>
      </div>
    </Container>
  );
}
