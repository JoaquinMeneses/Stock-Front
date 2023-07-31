import Link from "next/link";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between">
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
