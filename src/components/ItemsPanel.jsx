import { ItemsCard, ItemsList } from "./ItemsLayout";

export default function ItemsPanel(props) {
  const { items = [], ...prop } = props;
  return (
    <div className="box-border overflow-y-auto">
      <ItemsList>
        {items.map((item) => {
          return (
            <ItemsCard
              key={item?.location?.name}
              city={item?.location?.name}
              temp={item?.current?.temp_c}
              icon={item?.current?.condition?.icon}
            ></ItemsCard>
          );
        })}
      </ItemsList>
    </div>
  );
}
