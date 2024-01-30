import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h4>Pixit</h4>
      <div className="navbar__links">
        <NavLink>Login</NavLink>
        <div className="vr" />
        <NavLink>Join</NavLink>
      </div>
    </nav>
  );
};
