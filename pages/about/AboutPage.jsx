import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import Navbarlogin from "../../Components/navbar/Navbarlogin";
import Footer from "../../Components/footer/Footer";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

function AboutPage() {
  return (
    <div>
      <Navbarlogin />
      {/* <h1>About Us</h1> */}
      <div className="container-fluid bg-dark">
        <br />
        <h1 className="text-light text-center p-3">Get in Touch</h1>
        <h1 className="text-light text-center p-3">About Us</h1>
        <div
          className="line"
          style={{
            height: "3px",
            backgroundColor: "#ffc107",
            width: "140px",
            margin: "auto",
          }}
        ></div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.1s"
                      src="stock market.jpg"
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.3s"
                      src="digital.jpg"
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.5s"
                      src="bitcoin.jpg"
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.7s"
                      src="digital marketing.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h1 className="mb-4 text-light">Welcome to WealthMinds</h1>
                <p className="mb-4 text-light">
                  Welcome to WealthMinds, your premier online destination for
                  mastering the art and science of wealth creation. Through our
                  comprehensive resources, interactive courses, community
                  engagement, and expert insights, we empower individuals of all
                  backgrounds to take control of their financial futures.
                  Whether you're a novice investor or a seasoned entrepreneur,
                  WealthMinds is your trusted partner in navigating the
                  complexities of personal finance, investment strategies, and
                  wealth management. Join us on this transformative journey
                  toward financial freedom and abundance.
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                      <h1
                        className="flex-shrink-0 display-5 text-light mb-0"
                        data-toggle="counter-up"
                      >
                        15
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0 text-light">Years of</p>
                        <h6 className="text-uppercase mb-0 text-light">
                          Experience
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                      <h1
                        className="flex-shrink-0 display-5 text-light mb-0"
                        data-toggle="counter-up"
                      >
                        10000
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0 text-light">Students</p>
                        <h6 className="text-uppercase mb-0 text-light">
                          Enrolled
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team Start --> */}
      <div className="container-fluid-xxl bg-dark pt-5 pb-3">
        <div className="container">
          <div
            className="text-center wow fadeInUp text-light"
            data-wow-delay="0.1s"
          >
            <h1 className="text-light text-center p-3">Our Team</h1>
            <div
              className="line"
              style={{
                height: "3px",
                backgroundColor: "#ffc107",
                width: "140px",
                margin: "auto",
              }}
            ></div>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="m-4" style={{ borderRadius: "15px" }}>
                  <img
                    className="img-fluid"
                    style={{ borderRadius: "15px", height: "40vh" }}
                    src="boy.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-0 text-light">Yugm Patel</h5>
                <small className="text-light">Owner</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <FacebookIcon />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <XIcon />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="m-4" style={{ borderRadius: "15px" }}>
                  <img
                    className="img-fluid"
                    style={{ borderRadius: "15px", height: "40vh" }}
                    src="mountain.jpg"
                    alt=""
                  />
                </div>
                <h5 className="mb-0 text-light">Neel Patel</h5>
                <small className="text-light">Owner</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <FacebookIcon />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <XIcon />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="m-4" style={{ borderRadius: "15px" }}>
                  <img
                    className="img-fluid"
                    style={{ borderRadius: "15px", height: "40vh" }}
                    src="stock market.jpg"
                    alt=""
                  />
                </div>
                <h5 className="mb-0 text-light">Dhruvil Bhanderi</h5>
                <small className="text-light">Manager</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <FacebookIcon />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <XIcon />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="m-4" style={{ borderRadius: "15px" }}>
                  <img
                    className="img-fluid"
                    style={{ borderRadius: "15px", height: "40vh" }}
                    src="digital.jpg"
                    alt=""
                  />
                </div>
                <h5 className="mb-0 text-light">Hiren Parmar</h5>
                <small className="text-light">Manager</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <FacebookIcon />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <XIcon />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
      <Footer />
    </div>
  );
}

export default AboutPage;
