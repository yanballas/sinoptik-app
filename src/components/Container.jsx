import classNames from "classnames";

export default function Container(props) {
  const { children, className = String, ...prop } = props;
  const containerClasses = classNames(
    "p-4",
    "bg-light",
    "rounded-lg",
    className
  );
  return (
    <div className={containerClasses} {...prop}>
      {children}
    </div>
  );
}