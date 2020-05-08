import * as React from "react";
import { NavLink } from "react-router-dom";

export const NavBar: React.FC<INavBarProps> = () => {
  return (
    <main className="row p-3 bg-info d-flex justify-content-between align-items-center">
      <h1 className="text-light">Bradley</h1>
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            className="text-light nav-link"
            activeClassName="border-bottom border-light"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="text-light nav-link"
            activeClassName="border-bottom border-light"
            exact
            to="/shop"
          >
            Shop
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="text-light nav-link"
            activeClassName="border-bottom border-light"
            exact
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </main>
  );
};

export interface INavBarProps {}

export default NavBar;
