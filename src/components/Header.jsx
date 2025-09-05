import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./../styles/Components.scss";
import logo from "./../assets/images/brand/logo.svg";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="header">
      <div className="container">
        <div className="content">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="The Opinion Bench (Logo)" />
            </Link>
          </div>
          <div className="links">
            <ul>
              <li>
                <a
                  href="/#services"
                  className={currentPath === "/services" ? "active" : ""}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials "
                  className={currentPath === "/projects" ? "active" : ""}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className={currentPath === "/about" ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className={currentPath === "/contact" ? "active" : ""}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
