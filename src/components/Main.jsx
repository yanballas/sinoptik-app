import { useEffect, useState } from "react";
import { INITIAL_STATE } from "../helpers/INITIAL_STATE";
import Layout from "./Layout";
import Search from "./Search";

export default function Main() {
  const [searchValue, setSearchValue] = useState(
    JSON.parse(localStorage.getItem("city")) || ""
  );
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("cities")) || INITIAL_STATE
  );

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <main className="grow flex flex-col gap-8 min-h-0">
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        items={items}
        setItems={setItems}
      ></Search>
      <Layout items={items} setItems={setItems}></Layout>
    </main>
  );
}
