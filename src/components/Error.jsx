import Button from "./Button";

export default function Error(props) {
  const { setError, setLoading } = props;

  const handleError = () => {
    setError(false);
    setLoading(false);
  };

  return (
    <div className="w-screen h-screen fixed z-50 top-0 left-0 flex items-center justify-center">
      <div className="z-10 bg-dark w-screen h-screen fixed top-0 left-0 opacity-50" />
      <div className="relative z-20 t-2/4 l-2/4 w-[80%] h-[80%] p-4 text-center bg-light rounded-xl flex flex-col items-center justify-center gap-6 lg:w-2/4 lg:h-2/4">
        <h2 className="text-4xl">Oops!</h2>
        <h3 className="text-2xl">Something is wrong!</h3>
        <Button
          text="try again!"
          handleButton={handleError}
          className="bg-primary-200 text-2xl uppercase active:text-light"
        />
      </div>
    </div>
  );
}
