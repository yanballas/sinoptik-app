export default function Wrapper(props) {

  const {children} = props

  return (
    <>
      <div className="font-main bg-primary-300 text-dark w-screen h-screen flex justify-center items-center">
        <div className="w-11/12 h-5/6 bg-primary-100 shadow-lg p-4 rounded-3xl overflow-hidden flex flex-col gap-8 lg:w-4/5 lg:h-4/5 lg:p-6">
          {children}
        </div>
      </div>
    </>
  );
}
