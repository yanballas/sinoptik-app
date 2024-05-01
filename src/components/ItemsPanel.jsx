import { useMemo } from "react";
import { ItemsCard, ItemsList } from "./ItemsLayout";

export default function ItemsPanel(props) {
  const {
    items = [],
    setItems,
    filterValue = String,
    setFilterValue,
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
    setFilterValue("");
  };

  const handleInfoItem = (city) => {
    setItemInfo(city);
  };

  return (
    <div className="box-border overflow-y-auto">
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
    </div>
  );
}
