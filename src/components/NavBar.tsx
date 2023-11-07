import { NavLink } from "react-router-dom";
import navlogo from "../assets/mainIcon.svg";
import style from "../styles/navbar.module.scss";

export const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <img src={navlogo} alt="Logo" />
      <div className={style.linkwrapper}>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.inactiveLink
          }
          to="/overview"
        >
          OVERSIGT
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.inactiveLink
          }
          to="/now"
        >
          LIGE NU
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.inactiveLink
          }
          to="/history"
        >
          HISTORIK
        </NavLink>
      </div>
    </nav>
  );
};
