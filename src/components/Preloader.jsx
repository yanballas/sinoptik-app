import "../keyframes.css";

export default function Preloader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative overflow-hidden w-16 h-16 animate">
        <div className="absolute z-[7] top-0 left-0 w-full h-full rounded-full bg-primary-100" />
        <div className="absolute z-[8] top-0 right-0 w-8 h-8 rounded-tr-[100%] bg-primary-300" />
        <div className="absolute z-[9] top-2/4 left-2/4 w-12 h-12 rounded-full bg-light translate-x-[-50%] translate-y-[-50%]" />
      </div>
    </div>
  );
}
