import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper" style={{ background: "#6200ee" }}>
        <a href="#" className="brand-logo">
          wish list
        </a>
        <ul id="nav-mobile" className="right ">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
