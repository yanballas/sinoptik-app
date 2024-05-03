import { useMemo } from "react";
import { ItemsCard, ItemsList } from "./ItemsLayout";
import ActionHeadling from "./ActionHeadling";
import Preloader from "./Preloader";

export default function ItemsPanel(props) {
  const {
    items = [],
    setItems,
    loading = false,
    filterValue = String,
    setFilterValue,
    itemInfo = String,
    setItemInfo,
    ...prop
  } = props;
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item?.location?.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [items, filterValue]);

  const handleDeleteButton = (city) => {
    setItems((state) => {
      return state.filter((item) => {
        return item?.location?.name.toLowerCase() !== city.toLowerCase();
      });
    });
    if (city.toLowerCase() === itemInfo.toLowerCase()) setItemInfo("");
    setFilterValue("");
  };

  const handleInfoItem = (city) => {
    setItemInfo(city);
  };

  if (items.length > 0 && !loading) {
    return (
      <ItemsList>
        {filteredItems.map((item) => {
          return (
            <ItemsCard
              key={item?.location?.name}
              city={item?.location?.name}
              temp={item?.current?.temp_c}
              icon={item?.current?.condition?.icon}
              handleDeleteButton={handleDeleteButton}
              handleInfoItem={handleInfoItem}
            />
          );
        })}
      </ItemsList>
    );
  }
  if (loading) {
    return <Preloader />;
  }

  return (
    <ActionHeadling headling="Use the search to get information about the weather" />
  );
}
