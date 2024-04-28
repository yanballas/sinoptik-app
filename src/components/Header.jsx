import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex">
      <h1 className="text-lg inline-block uppercase font-bold content-end lg:text-2xl">
        sinoptik app
      </h1>
      <img className="w-12 lg:w-16" src={Logo} alt="logo" />
    </header>
  );
}
