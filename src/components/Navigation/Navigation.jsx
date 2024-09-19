import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <div className={css.list}>
        <NavLink
          to="/"
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
          >
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
}
