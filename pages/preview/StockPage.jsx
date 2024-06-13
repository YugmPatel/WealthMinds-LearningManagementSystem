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
import {
  Button,
  CardTitle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { data } from "../../Components/Courses/data";

const StockPage = () => {
  const [modal, setModalState] = useState(false);
  const [selectedPreviewIndex, setSelectedPreviewIndex] = useState(-1);
  const [Youtubelink, setYoutubelink] = useState();

  const location = useLocation();
  console.log(location, "location");

  const toggle = (yt, index) => {
    setSelectedPreviewIndex(index);
    setModalState((prev) => !prev);
  };

  const {
    courseTitle,
    courseDescription,
    rating,
    users,
    description,
    whatWillYouLearn,
    cardImage,
    cardTitle,
    cardTitle1,
    cardTitle2,
    cardDetail,
    cardDetail1,
    cardDetail2,
    youtube,
    youtube1,
    youtube2,
    content,
    key,
    value,
    previewArr,
  } = location.state;

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
            {`${rating} rating`}{" "}
            <p className="text-muted text-center">{`(${users} users)`}</p>
          </p>
          <div className="row d-flex justify-content-center gap-5">
            {previewArr.map((item, index) => {
              return (
                <div
                  className="card bg-dark text-light"
                  style={{ width: "18rem" }}
                >
                  <img src={cardImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="row">
                      <div className="text-center">
                        <button
                          className="btn btn-warning"
                          onClick={() => toggle(item.ytlink, index)}
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                  <Modal
                    className="bg-dark"
                    isOpen={modal}
                    toggle={toggle}
                    scrollable={true}
                    size="xl"
                  >
                    <ModalHeader
                      className="bg-dark text-light"
                      toggle={toggle}
                    ></ModalHeader>
                    <ModalBody className="bg-dark text-light">
                      <div className="text-center">
                        <iframe
                          width="560"
                          height="315"
                          src={previewArr[selectedPreviewIndex]?.youtube}
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
                        {previewArr[selectedPreviewIndex]?.contentArr.map(
                          (el) => {
                            return (
                              <Accordion className="bg-dark text-light border border-light">
                                <AccordionSummary
                                  className=""
                                  expandIcon={<ExpandMoreIcon className="text-light" />}
                                  aria-controls="panel1-content"
                                  id="panel1-header"
                                >
                                  <li className="mx-3">{el.key}</li>
                                </AccordionSummary>
                                <AccordionDetails className="bg-secondary border border-light">
                                  {el.value}
                                </AccordionDetails>
                                <AccordionDetails className="bg-secondary border border-light">
                                  {el.value1}
                                </AccordionDetails>
                                <AccordionDetails className="bg-secondary border border-light">
                                  {el.value2}
                                </AccordionDetails>
                                <AccordionDetails className="bg-secondary border border-light">
                                  {el.value3}
                                </AccordionDetails>
                              </Accordion>
                            );
                          }
                        )}
                      </ol>
                    </ModalBody>
                    <ModalFooter className="bg-dark text-light justify-content-center">
                      <Link
                        to="/video"
                        className="btn btn-warning"
                        onClick={toggle}
                      >
                        Add to Cart
                      </Link>

                      <Button color="secondary" onClick={toggle}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
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
            <br />
            <div dangerouslySetInnerHTML={{ __html: whatWillYouLearn }}></div>
          </div>
        </div>
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
          </div>
        </div>
      </div>
      {/* footer start */}
      <br />
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

export default StockPage;
