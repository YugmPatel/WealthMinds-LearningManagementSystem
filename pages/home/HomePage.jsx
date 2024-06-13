import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  UncontrolledCarousel,
} from "reactstrap";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { light } from "@mui/material/styles/createPalette";
import { Link } from "react-router-dom";
import Course from "../../Components/Courses/Course";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar"
import Navbarlogin from "../../Components/navbar/Navbarlogin"

const HomePage = () => {
  const App = ({ isLoggedIn}) => {
    // Conditional rendering of navbar based on authentication status
    if (isLoggedIn) {
      return <Navbar/>;
    } else {
      return <Navbarlogin/>;
    }
  };
  return (
    <>
      <div className="container-fluid bg-dark">
        <Navbarlogin/>
        {/* Carousel or Slider Start*/}
        <section>
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="1000">
                <img
                  src="slider1.jpg"
                  className="d-block w-100"
                  style={{ height: "100vh" }}
                  alt="..."
                />
                {/* <div className="carousel-caption top-0 mt-4 d-none d-md-block"></div> */}
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src="slider2.jpg"
                  className="d-block w-100"
                  style={{ height: "100vh" }}
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src="digital.jpg"
                  className="d-block w-100"
                  style={{ height: "100vh" }}
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src="digital marketing.jpg"
                  className="d-block w-100"
                  style={{ height: "100vh" }}
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src="real estate.jpg"
                  className="d-block w-100"
                  style={{ height: "100vh" }}
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <br />
        {/* Carousel End */}
        {/* Card Start*/}
        <section>
          <h2 className="bg-dark text-light text-center p-3">
            Courses We Offer
          </h2>
          <div
            className="line"
            style={{
              height: "3px",
              backgroundColor: "#ffc107",
              width: "140px",
              margin: "auto",
            }}
          ></div>
          <br />
          <br />
          <Course />
        </section>
        <br />
        {/* Card End*/}
        {/* Pricing */}
        {/* <section>
          <div className="container-fluid bg-dark text-light">
            <div className="text-center">
              <h2 className="p-3">Pricing</h2>
              <div
                className="line"
                style={{
                  height: "2px",
                  backgroundColor: "#ffc107",
                  width: "140px",
                  margin: "auto",
                }}
              ></div>
              <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                <div className="col">
                  <div className="card bg-dark text-light border border-muted">
                    <h3 className="mt-4">Free</h3>
                    <h3 className="dollar">$0/month</h3>
                    <div className="card-body">
                      <p className="card-text">
                        {" "}
                        <i class="bi bi-arrow-right-circle"> </i>50 courses
                      </p>
                      <p className="card-text">
                        {" "}
                        <i class="bi bi-arrow-right-circle"> </i>Technical
                        support
                      </p>
                      <p className="card-text">
                        {" "}
                        <i class="bi bi-arrow-right-circle"> </i>1 authoring
                        tool
                      </p>
                      <p className="card-text">
                        {" "}
                        <i class="bi bi-arrow-right-circle"> </i>
                      </p>
                      <button className="btn btn-warning mt-3">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card active bg-dark text-light border border-muted">
                    <h3 className="mt-4">Business</h3>
                    <h3 className="dollar">$10/month</h3>
                    <div className="card-body">
                      <p className="card-text">
                        {" "}
                        <i class="bi bi-arrow-right-circle"> </i>Unlimited
                        courses
                      </p>
                      <p className="card-text">
                        {" "}
                        <i class="bi bi-arrow-right-circle"> </i>Technical
                        Support
                      </p>
                      <p className="card-text">
                        {" "}
                        <i class="bi bi-arrow-right-circle"> </i>1 authoring
                        tool
                      </p>
                      <p className="card-text">
                        {" "}
                        <i class="bi bi-arrow-right-circle"> </i>
                      </p>
                      <button className="btn btn-warning mt-3">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card bg-dark text-light border border-muted">
                    <h3 className="mt-4">Developer</h3>
                    <h3 className="dollar">$20/month</h3>
                    <div className="card-body">
                      <p className="card-text">
                        {" "}
                        <i class="bi bi-arrow-right-circle"> </i>Unlimited
                        courses
                      </p>
                      <p className="card-text">
                        {" "}
                        <i class="bi bi-arrow-right-circle"> </i>Technical
                        Support
                      </p>
                      <p className="card-text">
                        {" "}
                        <i class="bi bi-arrow-right-circle"> </i>2 authoring
                        tool
                      </p>
                      <p className="card-text">
                        {" "}
                        <i class="bi bi-arrow-right-circle"> </i>
                      </p>
                      <button className="btn btn-warning mt-3">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Pricing End */}
        {/* FAQ Start */}
        <h2 className="bg-dark text-light text-center p-3">FAQ</h2>
        <div
          className="line"
          style={{
            height: "3px",
            backgroundColor: "#ffc107",
            width: "140px",
            margin: "auto",
          }}
        ></div>
        <div className="bg-dark">
          <div className="container bg-dark align-items-center w-75 py-5">
            <Accordion className="bg-dark text-light border border-light">
              <AccordionSummary
                className=""
                expandIcon={<ExpandMoreIcon className="text-light"/>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Is this program suitable for women?
              </AccordionSummary>
              <AccordionDetails className="bg-secondary">
                WealthMinds is suitable for any person, regardless of gender,
                who aspire to learn.
              </AccordionDetails>
            </Accordion>
            <Accordion className=" border border-light bg-dark text-light">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-light"/>}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                How quickly will I make my money back?
              </AccordionSummary>
              <AccordionDetails className="bg-secondary">
                It depends on how seriously you take The Real World.
              </AccordionDetails>
            </Accordion>
            <Accordion className=" border border-light bg-dark text-light">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-light" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Do I need money once I'm inside WealthMinds?
              </AccordionSummary>
              <AccordionDetails className="bg-secondary">
                Not necessarily.
              </AccordionDetails>
            </Accordion>
            <Accordion className=" border border-light bg-dark text-light">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-light" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Does my age really not matter?
              </AccordionSummary>
              <AccordionDetails className="bg-secondary">
                No, but we encourage anyone under the age of 18 to consult a
                parent or guardian before signing up for WealthMinds.
              </AccordionDetails>
            </Accordion>
            <Accordion className=" border border-light bg-dark text-light">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-light" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                I know nothing about the skills you teach. Is it a problem?
              </AccordionSummary>
              <AccordionDetails className="bg-secondary">
                Of course not.
              </AccordionDetails>
            </Accordion>
            <Accordion className=" border border-light bg-dark text-light">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-light" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                I don't have a lot of time available, can I still apply?
              </AccordionSummary>
              <AccordionDetails className="bg-secondary">
                The methods we teach are designed for rapid execution.So you can
                still apply.
              </AccordionDetails>
            </Accordion>
            <Accordion className=" border border-light bg-dark text-light">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-light" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                I live in X country. Is it a problem?
              </AccordionSummary>
              <AccordionDetails className="bg-secondary">
                Not at all.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        {/* FAQ End */}
        {/* Get in Touch Start */}
        <h2 className="text-light text-center p-3">Get in Touch</h2>
        <div
          className="line"
          style={{
            height: "3px",
            backgroundColor: "#ffc107",
            width: "140px",
            margin: "auto",
          }}
        ></div>
        <div className="container bg-dark align-items-center text-light w-75 py-5">
          <label for="exampleFormControlInput1" className="form-label">
            Your Name
          </label>
          <input
            type="email"
            className="form-control bg-dark text-light"
            id="exampleFormControlInput1"
          />
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control bg-dark text-light"
            id="exampleFormControlInput1"
          />
          <label for="exampleFormControlTextarea1" className="form-label">
            Your Message
          </label>
          <textarea
            className="form-control bg-dark text-light"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <br />
          <div className="text-center d-grid col-2 mx-auto">
            <button type="button" className="btn btn-warning">
              Submit
            </button>
          </div>
        </div>
        {/* Get in Touch End */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
