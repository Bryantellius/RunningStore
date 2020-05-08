import * as React from "react";
import { NavLink } from "react-router-dom";

export const Footer: React.FC<IFooterProps> = () => {
  return (
    <main
      id="footerMain"
      className="row p-3 bg-dark d-flex justify-content-center align-items-center"
    >
      <ul className="nav">
        <li className="nav-item mx-2">
          <NavLink
            className="text-light nav-link"
            activeClassName="border-bottom border-light"
            exact
            to="/admin"
          >
            Admin
          </NavLink>
        </li>
        <li className="nav-item mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-instagram"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </li>
        <li className="nav-item mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-twitter"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </li>
      </ul>
    </main>
  );
};

export interface IFooterProps {}

export default Footer;
