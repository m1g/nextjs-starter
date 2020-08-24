import Menu from './icons/Menu';

const Header = ({ ...props }) => (
  <header className="bg-white border-b h-10 flex items-center justify-center">
    {!props.isStatic && props.isClosed && (
      <button
        tabIndex="1"
        aria-hidden={!props.isClosed}
        aria-label="Open Menu"
        className="w-7 p-1"
        onClick={() => props.setClosed(false)}
      >
        <Menu />
      </button>
    )}
    <div className="flex flex-grow items-center justify-between px-3">
      <h1>Home</h1>
      <button className="text-blue-700 underline">Login</button>
    </div>
  </header>
);

export default Header;
