import React, { useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import Navbarlogin from "../../Components/navbar/Navbarlogin";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { data } from "../../Components/Courses/data";

const DigitalPage = () => {
  const [modal, setModalState] = useState(false);

  const location = useLocation();
  console.log(location, "location");

  const toggle = () => {
    setModalState((prev) => !prev);
  };

  const {
    courseTitle,
    courseDescription,
    rating,
    users,
    description,
    whatWillYouLearn,
    cardTitle,
    cardTitle1,
    cardTitle2,
    cardDetail,
  } = location.state;

  let digitalTitle = [
    {
      one: "Digital Marketing Basics",
      two: "Learn Beginner level of Digital Marketing.",
    },
    {
      one: "Digital Marketing Moderate",
      two: "Learn Moderate level of Digital Marketing.",
    },
    {
      one: "Digital Marketing Advanced",
      two: "Learn Advanced level of Digital Marketing.",
    },
  ];
  return (
    <>
      <Navbarlogin />
      <br />
      <br />
      <br />

      <div className="bg-dark">
        <div className="container-fluid bg-dark text-light">
          <br />
          <h1 className="text-center">{courseTitle}</h1>
          <h5 className="text-center">{courseDescription}</h5>
          <p className="text-warning text-center">
            {rating}{" "}
            <p className="text-muted text-center">{`(${users} users)`}</p>
          </p>
          <div className="row d-flex justify-content-center gap-5">
            {digitalTitle.map((item) => {
              return (
                <div
                  className="card bg-dark text-light"
                  style={{ width: "18rem" }}
                >
                  <img src="slider1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.one}</h5>
                    <p className="card-text">{item.two}</p>
                    <div className="row">
                      <div className="text-center">
                        {/* <a href="#" className="btn btn-warning">Preview</a> */}
                        {/* <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"> */}
                        {/* <a href="#" className="btn btn-warning">Preview</a> */}
                        <button
                          href="#"
                          className="btn btn-warning"
                          onClick={() => toggle()}
                        >
                          Preview
                        </button>
                        {/* </div>   */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
          <div className="container text-light border border-light">
            <h2 className="text-center p-3">What will you learn</h2>
            <div
              className="line"
              style={{
                height: "3px",
                backgroundColor: "#ffc107",
                width: "140px",
                margin: "auto",
              }}
            ></div>
            <div dangerouslySetInnerHTML={{ __html: whatWillYouLearn }}></div>
            <br />
            {/* <ul>
              <li className="mb-4">Fundamentals of Digital Marketing.</li>
              <li className="mb-4">Digital Marketing Ad formats and sizes.</li>
              <li className="mb-4">Digital Marketing research and audits.</li>
              <li className="mb-4">
                Important digital marketing channels like Google Ads.
              </li>
              <li className="mb-4">Reporting in Digital Marketing.</li>
              <li className="mb-4">Media Planning and Strategy.</li>
              <li className="mb-4">
                Digital Marketing terminology and explanations.
              </li>
              <li className="mb-4">Types of Digital Marketing audience.</li>
              <li className="mb-4">
                Overview of Digital Marketing channels and modules.
              </li>
              <li className="mb-4">Automation tools in Digital Marketing.</li>
            </ul> */}
          </div>
        </div>
        <Modal
          className="bg-dark"
          isOpen={modal}
          toggle={toggle}
          scrollable={true}
          size="xl"
          // className={className}
          // backdrop={backdrop}
          // keyboard={keyboard}
        >
          <ModalHeader className="bg-dark text-light" toggle={toggle}>
            Digital Marketing Basics
          </ModalHeader>
          <ModalBody className="bg-dark text-light">
            <div className="text-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bixR-KIJKYM?si=NZ0wB5z1nECv8OOl"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <h2 className="text-center p-3">Course Content</h2>
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
            <ol>
              <Accordion className="bg-dark text-light border border-light">
                <AccordionSummary
                  className=""
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <li className="mx-3">Introduction to Digital Marketing</li>
                </AccordionSummary>
                <AccordionDetails className="bg-secondary">
                  WealthMinds is suitable for any person, regardless of gender,
                  who aspire to learn.
                </AccordionDetails>
              </Accordion>
              <Accordion className=" border border-light bg-dark text-light">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <li className="mx-3">Digital Marketing Terminology</li>
                </AccordionSummary>
                <AccordionDetails className="bg-secondary">
                  It depends on how seriously you take The Real World.
                </AccordionDetails>
              </Accordion>
              <Accordion className=" border border-light bg-dark text-light">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <li className="mx-3">
                    Digital Marketing channels and Formats
                  </li>
                </AccordionSummary>
                <AccordionDetails className="bg-secondary">
                  Not necessarily.
                </AccordionDetails>
              </Accordion>
              <Accordion className=" border border-light bg-dark text-light">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <li className="mx-3">Digital Marketing Research</li>
                </AccordionSummary>
                <AccordionDetails className="bg-secondary">
                  No, but we encourage anyone under the age of 18 to consult a
                  parent or guardian before signing up for WealthMinds.
                </AccordionDetails>
              </Accordion>
              <Accordion className=" border border-light bg-dark text-light">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <li className="mx-3">Digital Marketing toolkit</li>
                </AccordionSummary>
                <AccordionDetails className="bg-secondary">
                  Of course not.
                </AccordionDetails>
              </Accordion>
            </ol>
          </ModalBody>
          <ModalFooter className="bg-dark text-light justify-content-center">
            <Link to="/video" className="btn btn-warning" onClick={toggle}>
              Add to Cart
            </Link>

            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <br />
        <div className="bg-dark">
          <div className="container bg-dark text-light border border-light">
            <h2 className="text-center p-3">Description</h2>
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
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
            {/* <ul><b>What is this course?</b>
              <li className="my-4">
              Fundamentals of Digital Marketing.
              </li>
              <li className="my-4">
              Google Ads from scratch to advanced level.
              </li>
              <li className="my-4">
              Foundational course to make a strong base.
              </li>
            </ul>
            <ul><b>Who is it for?</b>
              <li className="my-4">
              Absolute beginner in the field of Digital Marketing.
              </li>
              <li className="my-4">
              Anyone who wants to learn Digital Marketing to make a career or grow their own business.
              </li>
              <li className="my-4">
              Preparation for an interview for Digital Marketing roles.
              </li>
            </ul>
            <ul><b>What should I expect from this course?</b>
              <li className="my-4">
              Know how of all aspects of Digital marketing in the current world.
              </li>
              <li className="my-4">
              Get familiar with Digital Marketing industry.
              </li>
              <li className="my-4">
              Be ready to to dive into a specific Digital Marketing module.
              </li>
            </ul>
            <ul><b>What can I do after this course?</b>
              <li className="my-4">
              Become an expert in one of the modules of DM.
              </li>
            </ul>
            <ul><b>What does this course contain?</b>
              <li className="my-4">
              10 modules or sections to make this fun and easy (Including Google Ads complete course).
              </li>
              <li className="my-4">
              Equivalent to a diploma if not better.
              </li>
              <li className="my-4">
              Some modules contain quizzes with links in description.
              </li>
              <li className="my-4">
              Important resources that you’ll need forever.
              </li>
              <li className="my-4">
              Course Structure.
              </li>
            </ul>
            <ul><b>How do I use this course effectively?</b>
              <li className="my-4">
              Attempt the quizzes.
              </li>
              <li className="my-4">
              Make notes.
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      {/* footer start */}
      <footer
        className="bg-body-tertiary text-white pt-5 pb-4"
        data-bs-theme="dark"
      >
        <div className="container text-center text-md-left">
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

export default DigitalPage;
