import { useLocalStorage } from "../hooks/useLocalStorage";
import { INITIAL_STATE, KEY_LOCALSTORAGE } from "../helpers/INITIAL_DATA";
import Layout from "./Layout";
import Search from "./Search";

export default function Main() {
  const [items, setItems] = useLocalStorage(INITIAL_STATE, KEY_LOCALSTORAGE);

  return (
    <main className="grow flex flex-col gap-8 min-h-0">
      <Search items={items} setItems={setItems} />
      <Layout items={items} setItems={setItems} />
    </main>
  );
}
