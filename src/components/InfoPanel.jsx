import { useCallback, useMemo } from "react";

export default function InfoPanel(props) {
  const { items = [], itemInfo = String, ...prop } = props;

  const findItem = useCallback((elements, currentInfo) => {
    const elem = elements.find(
      (element) => element?.location?.name === currentInfo
    );
    return elem;
  }, []);

  const curentItem = useMemo(() => {
    return findItem(items, itemInfo);
  }, [items, itemInfo, findItem]);

  return (
    <div className="overflow-y-auto">
      <InfoCard item={curentItem} />
    </div>
  );
}

export function InfoCard(props) {
  const { item = "", ...prop } = props;
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-2 items-center">
            <img
              className="w-16 h-16"
              src={item?.current?.condition?.icon}
              alt="icon"
            />
            <h3 className="text:lg lg:text-2xl">
              {item?.current?.condition?.text}
            </h3>
          </div>
          <h2 className="text-4xl font-bold">{item?.location?.name}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center justify-between text-center">
          <h4 className="text-2xl">{item?.location?.country}</h4>
          <h4 className="text-2xl">{item?.location?.region}</h4>
        </div>
      </div>
    </div>
  );
}
