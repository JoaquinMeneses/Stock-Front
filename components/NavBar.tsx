import Link from "next/link";

const Routes = [
  { route: "/", label: "Inicio" },
  { route: "/catalogo", label: "Catalogo" },
];

const NavBar = () => {
  return (
    <div>
      {Routes.map((route) => (
        <Link href={route.route} key={route.route}>
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
