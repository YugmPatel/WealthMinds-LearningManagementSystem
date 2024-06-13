import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { data } from "../Courses/data";
import Navigation from "../../pages/videoplayer/Search";

function Navbarlogin() {
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
                <a className="nav-link active" aria-current="page" href="#">
                  <Link
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
                  {data.map((el) => {
                    return (
                      <li className="dropdown-item">
                          <Link
                            state={{ ...el }}
                            to="/stock"
                            className="link-light"
                            style={{ textDecoration: "none", color: "#fff" }}
                          >
                            {el.courseTitle}
                          </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Link
                    to="/contact"
                    className="link-light"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Contact
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <Link
                    to="/about"
                    className="link-light"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    About
                  </Link>
                </a>
              </li>
            </ul>
            <Navigation/>
            {/* <form className="d-flex mx-5" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form> */}
            <Stack direction="row" spacing={2}>
              <a
                className="dropdown"
                style={{ textDecoration: "none", color: "#fff" }}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <Avatar alt="Travis Howard" src="yugm.jpeg" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#">
                    <Link
                      to="/login"
                      className="link-light"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      Login/SignUp
                    </Link>
                  </a>
                </li>
                {/* <li>
                    <a className="dropdown-item" href="#">
                      Help and Support
                    </a>
                  </li>
                  <li>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Log Out
                    </a> */}
                {/* </li> */}
              </ul>
            </Stack>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbarlogin;
