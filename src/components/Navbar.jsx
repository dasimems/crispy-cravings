import React from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/constant";

import logo from "../asset/logo.png";

function Navbar(props) {
  return (
    <header>
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <img src={logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <Link key={id} to={url} className="nav-item nav-link">
                    {text}
                  </Link>
                );
              })}
            </div>
            <Link to="/" className="btn btn-primary py-2 px-4">
              Book A Table
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
