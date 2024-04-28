import Logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="p-6 flex">
      <h1 className="inline-block text-2xl uppercase font-bold content-end">
        weather app
      </h1>
      <img className='w-16' src={Logo} alt="logo" />
    </header>
  );
}
