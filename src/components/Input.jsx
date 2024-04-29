export default function Input(props) {
  const { value = String, setValue, name = String, ...prop } = props;
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <input
      className="text-lg h-full border-solid border-2 border-dark rounded-md p-4 outline-none box-border md:text-lg lg:w-2/5 lg:text-2xl"
      name={name}
      value={value}
      type="text"
      onChange={handleChangeValue}
      {...prop}
    />
  );
}
