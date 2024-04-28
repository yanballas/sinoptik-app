import { useState } from "react";
import Layout from "./Layout";
import Search from "./Search";

export default function Main() {
  const [value, setValue] = useState("");

  const handleButton = () => {
    console.log(value);
  };

  return (
    <main className="grow flex flex-col gap-8">
      <Search
        value={value}
        setValue={setValue}
        handleButton={handleButton}
      ></Search>
      <Layout></Layout>
    </main>
  );
}
