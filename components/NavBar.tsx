import Link from "next/link";
import Menu from "./Menu";

import useStore from "../store/store";

const NavBar = () => {
  const { setTheme } = useStore();

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <button onClick={setTheme}>Toggle Theme</button>
      <Link href="/" className="btn btn-ghost normal-case text-2xl">
        Stock
      </Link>
      <Link href="/tiendas" className="btn btn-ghost normal-case text-xl">
        Tiendas
      </Link>
      <Menu />
    </div>
  );
};

export default NavBar;
