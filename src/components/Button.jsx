import classNames from "classnames";

export default function Button(props) {
  const { text, handleButton, className, ...prop } = props;
  const buttonClasses = classNames(
    "shadow-md",
    "p-4",
    "rounded-lg",
    "transition-colors",
    "duration-300",
    className
  );

  return (
    <button className={buttonClasses} onClick={handleButton} {...prop}>
      {text}
    </button>
  );
}
