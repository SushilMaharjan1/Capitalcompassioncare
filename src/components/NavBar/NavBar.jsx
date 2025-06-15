import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./NavBar.css";
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    const nav = document.getElementById("navbarNav");
    const bsCollapse = window.bootstrap?.Collapse.getInstance(nav);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm transition-nav"
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold d-flex align-items-center"
          to="/"
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="me-2"
            style={{ objectFit: "contain" }}
          />
          CAPITAL COMPASSION CARE
        </Link>

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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resource"
                className={`nav-link ${isActive("/resource") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/careers"
                className={`nav-link ${isActive("/careers") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contacts"
                className={`nav-link ${isActive("/contacts") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
