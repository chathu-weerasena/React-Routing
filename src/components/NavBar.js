import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink className="navBar" to="/">
        Home
      </NavLink>
      <NavLink className="navBar" to="/discover">
        Discover
      </NavLink>
      <NavLink className="navBar" to="/about">
        About
      </NavLink>
    </div>
  );
};
export default NavBar;
