export default function ActionHeadling(props) {
  const { headling, ...prop } = props;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h2 className="text-4xl">{headling}</h2>
    </div>
  );
}
