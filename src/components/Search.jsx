import { useRef, useState } from "react";
import { getLocalValue } from "../hooks/useLocalStorage";
import { API_Key, BASE_URL } from "../helpers/APIKEY";
import { KEY_SEARCHSTORAGE } from "../helpers/INITIAL_DATA";
import Container from "./Container";
import Button from "./Button";
import Input from "./Input";

export default function Search(props) {
  const { items = [], setItems, ...prop } = props;
  const [searchValue, setSearchValue] = useState(
    getLocalValue("", KEY_SEARCHSTORAGE)
  );
  const inputSerchRef = useRef();

  const sortItems = (elements) => {
    return elements.sort((a, b) => {
      if (a?.location?.name.toLowerCase() < b?.location?.name.toLowerCase())
        return -1;
      if (a?.location?.name.toLowerCase() > b?.location?.name.toLowerCase())
        return 1;
      return 0;
    });
  };

  const searchItems = async (value = "") => {
    const city = value.trim().toLowerCase();
    try {
      await fetch(
        `${BASE_URL}/current.json?key=${API_Key}&q=${city}&aqi=no`
      ).then((responose) => {
        if (responose.ok) {
          responose
            .json()
            .then((data) => setItems((state) => sortItems([...state, data])));
        }
      });
      return;
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = () => {
    searchItems(searchValue);
    setSearchValue("");
    inputSerchRef.current.focus();
  };

  const handleSearchButton = () => {
    handleSearch();
  };

  return (
    <Container>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <Input
          ref={inputSerchRef}
          handleInput={handleSearch}
          value={searchValue}
          setValue={setSearchValue}
          name={"search"}
          placeholder={'search city'}
          storageKey={KEY_SEARCHSTORAGE}
          className={"h-full, lg:w-2/5"}
        ></Input>
        <Button
          className={"text-md bg-primary-200 hover:text-light lg:text-lg"}
          text={"get weather information"}
          handleButton={handleSearchButton}
        ></Button>
      </div>
    </Container>
  );
}
