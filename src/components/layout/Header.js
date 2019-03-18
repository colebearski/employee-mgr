import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// CSS
import "./../css/header.css";

function Header(props) {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>

          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"> Home</i>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/employee/add" className="nav-link">
                  <i className="fas fa-plus"> Add Employee</i>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question"> About</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Default Props
Header.defaultProps = {
  branding: "My App"
};

// Prop Types
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
