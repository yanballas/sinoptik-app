export default function FormSearch(props) {
  const { value, handleChangeValue, ...prop } = props;
  return (
    <input
      className="text-md h-full border-solid border-2 border-dark rounded-md p-4 outline-none box-border md:text-lg lg:w-2/5 lg:text-2xl"
      name="search"
      value={value}
      type="text"
      onChange={handleChangeValue}
      {...prop}
    />
  );
}
