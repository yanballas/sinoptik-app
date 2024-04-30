import classNames from "classnames";

export default function Button(props) {
  const {
    text = String,
    handleButton = Function.prototype,
    className = String,
    ...prop
  } = props;

  return (
    <button
      className={classNames(
        "shadow-md",
        "p-4",
        "rounded-lg",
        "transition-colors",
        "duration-300",
        className
      )}
      onClick={handleButton}
      {...prop}
    >
      {text}
    </button>
  );
}
