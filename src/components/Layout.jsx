import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useDebounce } from "../hooks/useDebounce";
import Container from "./Container";
import InfoPanel from "./InfoPanel";
import Input from "./Input";
import ItemsPanel from "./ItemsPanel";
import { KEY_INFOSTORAGE } from "../helpers/INITIAL_DATA";

export default function Layout(props) {
  const { items = [], setItems, loading = false, ...prop } = props;
  const [filterValue = "", setFilterValue] = useState("");
  const [itemInfo, setItemInfo] = useLocalStorage("", KEY_INFOSTORAGE);

  const debounceFilterValue = useDebounce(filterValue, 800);

  return (
    <Container className="flex grow flex-col gap-4 min-h-0">
      <div className="min-h-0 text-xl grow grid grid-cols-1 grid-rows-[repeat(2,1fr)] gap-4 lg:texl-xl lg:grid-cols-2 lg:grid-rows-1">
        <div className="overflow-y-auto min-h-0 flex flex-col gap-4">
          <Input
            value={filterValue}
            name="filter"
            setValue={setFilterValue}
            placeholder="filter city"
            className="w-full"
          />
          <ItemsPanel
            items={items}
            setItems={setItems}
            loading={loading}
            filterValue={debounceFilterValue}
            setFilterValue={setFilterValue}
            itemInfo={itemInfo}
            setItemInfo={setItemInfo}
          />
        </div>
        <InfoPanel items={items} itemInfo={itemInfo} />
      </div>
    </Container>
  );
}
