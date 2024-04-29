import { useState } from "react";
import Layout from "./Layout";
import Search from "./Search";

export default function Main() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState("");

  const handleSearchButton = () => {
    console.log(value);
  };

  return (
    <main className="grow flex flex-col gap-8 min-h-0">
      <Search
        value={value}
        setValue={setValue}
        handleSearchButton={handleSearchButton}
      ></Search>
      <Layout></Layout>
    </main>
  );
}
