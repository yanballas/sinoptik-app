export default function Container(props) {
  const { children } = props;
  return (
    <div className="p-4 bg-light rounded-lg">
      {children}
    </div>
  );
}
