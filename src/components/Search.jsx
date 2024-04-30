import { useLocalStorage } from "../hooks/useLocalStorage";
import Container from "./Container";
import Button from "./Button";
import Input from "./Input";
import { API_Key, BASE_URL } from "../helpers/APIKEY";

export default function Search(props) {
  const { items = [], setItems, ...prop } = props;
  const [searchValue, setSearchValue] = useLocalStorage("", "city");

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
      await fetch(`${BASE_URL}/current.json?key=${API_Key}&q=${city}&aqi=no`)
        .then((response) => response.json())
        .then((data) => setItems((state) => sortItems([...state, data])));
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearchButton = () => {
    searchItems(searchValue);
  };

  return (
    <Container>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <Input
          value={searchValue}
          setValue={setSearchValue}
          name={"search"}
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
