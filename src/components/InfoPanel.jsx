import { useCallback, useMemo } from "react";
import Preloader from "./Preloader";

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
    <div className="overflow-y-auto lg:flex lg:flex-col lg:items-center lg:justify-center">
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
            <div className="relative">
              <img
                className="w-12 h-12 lg:w-16 lg:h-16"
                src={item?.current?.condition?.icon}
                alt="icon"
              />
              <p className="absolute bottom-[-15%] right-[-15%] text-lg font-bold">
                {item?.current?.temp_c}&#176;
              </p>
            </div>
            <h3 className="text:lg lg:text-2xl">
              {item?.current?.condition?.text}
            </h3>
          </div>
          <h2 className="text-2xl uppercase font-bold lg:text-4xl">
            {item?.location?.name}
          </h2>
        </div>
        <div className="grid grid-cols-1 items-center justify-between text-center lg:grid-cols-2 lg:gap-4">
          <h4 className="text-xl lg:text-2xl">{item?.location?.country}</h4>
          <h4 className="text-xl lg:text-2xl">{item?.location?.region}</h4>
        </div>
      </div>
    </div>
  );
}
