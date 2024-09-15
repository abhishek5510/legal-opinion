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
                <a
                  href="/services"
                  className={currentPath === "/services" ? "active" : ""}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className={currentPath === "/projects" ? "active" : ""}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={currentPath === "/about" ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className={currentPath === "/blog" ? "active" : ""}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className={currentPath === "/resources" ? "active" : ""}
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={currentPath === "/contact" ? "active" : ""}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="action">
            <ul>
              <li>
                <a href="/signin" className="auth">
                  Sign In
                </a>
              </li>
              <li>
                <a href="/book-a-call" className="book">
                  Book a Call
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
