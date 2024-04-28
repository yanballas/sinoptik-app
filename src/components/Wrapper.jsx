export default function Wrapper(props) {

  const {children} = props

  return (
    <>
      <div className="font-main bg-primary-300 text-dark w-screen h-screen flex justify-center items-center">
        <div className="bg-primary-100 shadow-lg w-4/5 h-4/5 rounded-3xl overflow-hidden flex flex-col">
          {children}
        </div>
      </div>
    </>
  );
}
