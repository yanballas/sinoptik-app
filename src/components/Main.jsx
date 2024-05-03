import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { INITIAL_STATE, KEY_LOCALSTORAGE } from "../helpers/INITIAL_DATA";
import Layout from "./Layout";
import Search from "./Search";
import Error from "./Error";

export default function Main() {
  const [items, setItems] = useLocalStorage(INITIAL_STATE, KEY_LOCALSTORAGE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <main className="grow flex flex-col gap-8 min-h-0">
      <Search
        items={items}
        setItems={setItems}
        setLoading={setLoading}
        setError={setError}
      />
      <Layout items={items} setItems={setItems} loading={loading} />
      {error && <Error setError={setError} setLoading={setLoading} />}
    </main>
  );
}
