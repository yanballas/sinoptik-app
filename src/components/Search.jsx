import { useRef, useState, useEffect, useCallback } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { getLocalValue } from "../hooks/useLocalStorage";
import { saveLocalStorage } from "../hooks/useLocalStorage";
import { BASE_URL } from "../helpers/APIURL";
import { KEY_SEARCHSTORAGE } from "../helpers/INITIAL_DATA";
import Container from "./Container";
import Button from "./Button";
import { Input } from "./Input";

export default function Search(props) {
  const { items = [], setItems, setLoading, setError, ...prop } = props;
  const [searchValue, setSearchValue] = useState(
    getLocalValue("", KEY_SEARCHSTORAGE)
  );
  const inputSerchRef = useRef();
  const API_KEY = import.meta.env.VITE_API_KEY;

  const debounceSearchValue = useDebounce(searchValue, 500);
  useEffect(() => {
    saveLocalStorage(debounceSearchValue, KEY_SEARCHSTORAGE);
  }, [debounceSearchValue]);

  const sortItems = useCallback((elements) => {
    return elements.sort((a, b) => {
      if (a?.location?.name.toLowerCase() < b?.location?.name.toLowerCase())
        return -1;
      if (a?.location?.name.toLowerCase() > b?.location?.name.toLowerCase())
        return 1;
      return 0;
    });
  }, []);

  const checkItem = useCallback((elements, elem) => {
    const isFind = (item) => {
      return item?.location?.name === elem?.location?.name;
    };
    return elements.find(isFind);
  }, []);

  const searchItems = async (value = "") => {
    const city = value.trim().toLowerCase();
    setLoading(true);
    try {
      await fetch(
        `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
      ).then((responose) => {
        if (responose.ok) {
          responose.json().then((data) => {
            setLoading(false);
            const findItem = checkItem(items, data);
            if (!findItem) {
              return setItems((state) => sortItems([...state, data]));
            }
            return items;
          });
        } else {
          setError(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    searchItems(searchValue);
    setSearchValue("");
  };

  const handleSearchButton = () => {
    if (searchValue.length > 0) return handleSearch();
    return inputSerchRef.current.focus();
  };

  return (
    <Container>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <Input
          ref={inputSerchRef}
          handleInput={handleSearch}
          value={searchValue}
          setValue={setSearchValue}
          name="search"
          placeholder="search city"
          className="h-full, lg:w-2/5"
        />
        <Button
          className="text-md bg-primary-200 active:text-light-100 lg:text-lg"
          text="get weather information"
          handleButton={handleSearchButton}
        />
      </div>
    </Container>
  );
}
