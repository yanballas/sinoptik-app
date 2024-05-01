import iconClose from "../assets/iconClose.svg";
import Button from "../components/Button";

export function ItemsList(props) {
  const { children, ...prop } = props;
  return <ul className="flex flex-col gap-4">{children}</ul>;
}

export function ItemsCard(props) {
  const {
    city = String,
    temp = Number,
    icon = String,
    handleInfoItem = Function.prototype,
    handleDeleteButton = Function.prototype,
    ...prop
  } = props;
  return (
    <li className="relative bg-primary-100 flex gap-4 flex-col items-center p-2 border-dark border-solid border-2 rounded-md lg:items-start">
      <div className="flex items-center gap-2">
        <img className="w-7 h-7 lg:w-12 lg:h-12" src={icon} alt="icon" />
        <div className="flex gap-1">
          <h3 className="text-lg lg:text-2xl">{city}</h3>
          <p className="text-sm">{temp}&#176; </p>
        </div>
      </div>
      <Button
        className="bg-primary-200 text-sm px-2 py-1 max-w-fit"
        text="more info"
        handleButton={() => handleInfoItem(city)}
      />
      <button
        className="p-4 absolute z-10 top-2/4 right-2 translate-y-[-50%]"
        onClick={() => handleDeleteButton(city)}
      >
        <img className="w-3 h-3 lg:w-4 lg:h-4" src={iconClose} alt="icon" />
      </button>
    </li>
  );
}
