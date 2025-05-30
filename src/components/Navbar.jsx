import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Übungen", path: "/exercises" },
  { name: "Training erstellen", path: "/create" },
  { name: "Login", path: "/login" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-yellow-500 text-white shadow-md">
      <div className="max-w mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="font-extrabold text-xl tracking-wide text-white">
          Bolzer<span className="text-white">+</span>
        </h1>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`hover:underline ${
                  location.pathname === item.path
                    ? "font-semibold underline"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
