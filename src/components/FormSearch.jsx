export default function FormSearch(props) {
  const { value, ...prop } = props;
  console.log(value)
  return (
    <input
      className="w-2/5 h-full rounded-lg text-2xl p-4 outline-none box-border"
      name="search"
      value={value}
      type="text"
    />
  );
}
