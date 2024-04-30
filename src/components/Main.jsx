import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { INITIAL_STATE } from "../helpers/INITIAL_STATE";
import Layout from "./Layout";
import Search from "./Search";

export default function Main() {
  const [items, setItems] = useLocalStorage(INITIAL_STATE, "cities");

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <main className="grow flex flex-col gap-8 min-h-0">
      <Search
        items={items}
        setItems={setItems}
      ></Search>
      <Layout items={items} setItems={setItems}></Layout>
    </main>
  );
}
