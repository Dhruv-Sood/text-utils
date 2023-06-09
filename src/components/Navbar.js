import PropTypes from "prop-types";
import "./Navbar.css";
import { useState } from "react";
const Navbar = (props) => {


  return (
    <nav
      className={`navbar navbar-expand-lg nav mb-2 bg-${props.mode}`}
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() => {
              props.toggleMode();
              props.textColorHandle();
            }}
          />
          <label
            className={`form-check-label text-${props.textColor}`}
            htmlFor="flexSwitchCheckDefault"
          >
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  name: PropTypes.string,
};

Navbar.defaultProps = {
  name: "Nav",
};
