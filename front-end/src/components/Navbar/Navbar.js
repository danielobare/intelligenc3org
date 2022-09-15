import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Terrorism ops</NavLink>
        </li>

        <li>
          <NavLink to="/book">Drug ops</NavLink>
        </li>

        <li>
          <NavLink to="/read">Human Trafficking</NavLink>
        </li>

        <li>
          <NavLink to="/review">Air/Ship Security</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
