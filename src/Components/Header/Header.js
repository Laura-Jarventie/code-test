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
          Reseptit
        </NavLink>
      </ul>
    </header>
  );
};

/* <Navigate /> */

/* const Navigate = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink className="nav" to="/" exact>
            {" "}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/products" exact>
            {" "}
            Products{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}; */

export default Header;
