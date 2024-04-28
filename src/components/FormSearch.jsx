export default function FormSearch(props) {
  const { value, setValue, ...prop } = props;
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <input
      className="text-lg h-full border-solid border-2 border-dark rounded-md p-4 outline-none box-border md:text-lg lg:w-2/5 lg:text-2xl"
      name="search"
      value={value}
      type="text"
      onChange={handleChangeValue}
      {...prop}
    />
  );
}
