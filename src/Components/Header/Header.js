import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Laura´s best recipes</h1>

      <ul>
        <NavLink className="nav" to="/" exact>
          {" "}
          Home
        </NavLink>
        <NavLink className="nav" to="/recipes">
          Recipes
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
