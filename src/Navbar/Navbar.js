import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__div1">
        <div className="navbar__div2">
          <img
            src="https://xmas.mill3.studio/xmas.69d3f00d.png"
            className="navbar__img1"
            alt="logo"
          />
        </div>
        <div className="navbar__div3">
          <h1>
            <Link className="navbar__link">REWINT</Link>
          </h1>
        </div>
        <div className="navbar__div4">
          <h1>
            <Link className="navbar__link">CONTACT</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
