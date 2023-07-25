import Link from "next/link";

const Routes = [
  { route: "/", label: "Inicio" },
  { route: "/catalogo", label: "Catalogo" },
];

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Stock</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Rutas</summary>
              <ul className="p-2 bg-base-100">
                {Routes.map((route) => (
                  <li>
                    <Link href={route.route} key={route.route}>
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
