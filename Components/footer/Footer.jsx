import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid bg-body-tertiary text-white pt-5 pb-4 w-auto" data-bs-theme="dark">
        <div className="container-fluid text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                WealthMinds
              </h5>
              <p>
                Our platform is designed to empower individuals from all walks
                of life with the knowledge, tools, and guidance they need to
                take control of their financial futures. Whether you're a
                seasoned investor looking to optimize your portfolio or a
                beginner eager to learn the basics of wealth accumulation,
                WealthMinds is here to support you every step of the way.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Courses
              </h5>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Stock Market
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Crypto Currency
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Digital Marketing
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Real Estate
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Useful Links
              </h5>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Your Account
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Become a Member
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Subscription Rates
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Help and Support
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i className="fas fa-home mr-3"></i>Ahmedabad-380041,India
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i>1234@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i>+91 0123456789
              </p>
              <p>
                <i className="fas fa-print mr-3"></i>+079 27412254
              </p>
            </div>
          </div>
          <hr className="mb-4"></hr>
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p>
                Copyright 2024 All rights reserved by:
                <a href="#" style={{ textDecoration: "none" }}>
                  <strong className="text-warning"> WealthMinds</strong>
                </a>
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-right">
                <ul className="list-unstyled- list-inline">
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: "23px" }}
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: "23px" }}
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: "23px" }}
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: "23px" }}
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
