import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";

function Navbar() {
  return (
    <div className="main">
      <nav
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary p-4"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="wealthminds.png"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top mx-2"
            />
            WealthMinds 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><Link
                  to="/"
                  className="link-light"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                Home
                </Link>
                </a>  
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" href="#"><Link
                  to="/stock"
                  className="link-light"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Stock Market
                </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><Link
                  to="/crypto"
                  className="link-light"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Cryptocurrency
                </Link>
                    </a>
                  </li>
                  <li>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><Link
                  to="/digital"
                  className="link-light"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Digital Marketing
                </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Real Estate
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><Link
                  to="/contact"
                  className="link-light"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Contact
                </Link>
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><Link
                  to="/about"
                  className="link-light"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  About
                </Link>
                </a>
              </li>
            </ul>
            <form className="d-flex mx-5" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
            <div>
              <button type="button" className="btn btn-outline mx-2">
                <Link
                  to="/Login"
                  className="link-light"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Login
                </Link>
              </button>
            </div>
            <button
              type="submit"
              className="btn btn-outline-warning"
              style={{ textDecoration: "none" }}
            >
              <Link
                to="/Signup"
                className="link-dark text-warning"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Sign Up
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
