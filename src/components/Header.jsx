import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./../styles/Components.scss";
import logo from "./../assets/images/brand/logo-light.svg";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="header">
      <div className="container">
        <div className="content">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="Kampus(Logo)" />
            </Link>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link
                  to="/services"
                  className={currentPath === "/services" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className={currentPath === "/portfolio" ? "active" : ""}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={currentPath === "/about" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={currentPath === "/blog" ? "active" : ""}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className={currentPath === "/resources" ? "active" : ""}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={currentPath === "/contact" ? "active" : ""}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="action">
            <ul>
              <li>
                <Link to="/signin" className="auth">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/book-a-call" className="book">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
