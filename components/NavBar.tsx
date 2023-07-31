import Link from "next/link";
import Menu from "./Menu";

const NavBar = ({ toggleTheme }) => {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        <img src="icon.png" alt="" />
      </Link>
      <Link href="/tiendas" className="btn btn-ghost normal-case text-xl">
        Tiendas
      </Link>
      <Menu />
    </div>
  );
};

export default NavBar;
