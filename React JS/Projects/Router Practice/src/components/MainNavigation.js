import { Link, NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className="m-auto p-8 max-w-5xl flex justify-center">
      <nav>
        <ul className="m-0 p-0 flex gap-16  text-orange-300 ">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "hover:text-white active:text-white text-white" : "hover:text-white active:text-white"
              }
              end
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
             className={({ isActive }) =>
              isActive ? "hover:text-white active:text-white text-white" : "hover:text-white active:text-white"
            }
            end
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
