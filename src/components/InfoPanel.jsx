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
    <div className="box-border overflow-y-auto">
      <InfoCard item={curentItem} />
    </div>
  );
}

export function InfoCard(props) {
  const { item, ...prop } = props;
  console.log(item);
  return (
    <div>
      <p />
    </div>
  );
}
