import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
        <div className="nav-wrapper white">
        <div className="container">
          <Link to="/" className="brand-logo left">
            Flash
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
