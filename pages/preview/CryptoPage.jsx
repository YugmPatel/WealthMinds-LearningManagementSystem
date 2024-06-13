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
import { useLocation } from "react-router-dom";

const CryptoPage = () => {
  const [modal, setModalState] = useState(false);

  const location = useLocation();
  console.log(location,'location')

  const {courseTitle, courseDescription, rating, users, description, whatWillYouLearn, cardTitle,cardTitle1,cardTitle2,cardDetail} = location.state;

  const toggle = () => {
    setModalState((prev) => !prev);
  };

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
          <h5 className="text-center">
            Cryptocurrency Trading: Unleash Day Trading and Technical Analysis
            Secrets For Maximum ROI in Crypto Futures Trading
          </h5>
          <p className="text-warning text-center">
            4.6 Rating <p className="text-muted text-center">(10,000 users)</p>
          </p>
          <div className="row d-flex justify-content-center gap-5">
            {[1, 2, 3].map((o) => {
              return (
                <div
                  className="card bg-dark text-light"
                  style={{ width: "18rem" }}
                >
                  <img src="slider1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Cryptocurrency Basics</h5>
                    <p className="card-text">
                      Learn beginner level of Cryptocurrency.
                    </p>
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
            <div
              dangerouslySetInnerHTML={{ __html: whatWillYouLearn}}
            >
            </div>
            <br />
            {/* <ul>
              <li className="mb-4">
                Basic through advanced cryptocurrency trading course with
                trading strategy.
              </li>
              <li className="mb-4">Perform In Depth Technical Analysis.</li>
              <li className="mb-4">
                How to Read and Analyze a Cryptocurrency's Candlestick Chart
                Effectively.
              </li>
              <li className="mb-4">
                How to Use MACD to Determine Market Trends & Reversals.
              </li>
              <li className="mb-4">
                How to Use Support & Resistance to Trade Cryptocurrencies
                Profitably.
              </li>
              <li className="mb-4">
                Learn my own cryptocurrency trading strategy that has
                surprisingly high risk to reward and success rate.
              </li>
              <li className="mb-4">
                How to Do Research and Find Related Information Regarding a Coin
                You're Interested In.
              </li>
              <li className="mb-4">
                How to Use Exponential Moving Averages (EMA) to Determine Market
                Trends & Reversals.
              </li>
              <li className="mb-4">
                How to Protect Your Money When The Market Crashes.
              </li>
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
            Cryptocurrency Basics
          </ModalHeader>
          <ModalBody className="bg-dark text-light">
            <div className="text-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1YyAzVmP9xQ?si=S3loEZc2-pi_EDPV"
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
                  <li className="mx-3">Introduction to Cryptocurrency</li>
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
                  <li className="mx-3">
                    Understanding Different Candlestick Patterns
                  </li>
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
                  <li className="mx-3">Understanding of Chart Patterns</li>
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
                  <li className="mx-3">
                    Understanding of Important Indicators
                  </li>
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
                  <li className="mx-3">
                    Risk Management and Trading Psychology
                  </li>
                </AccordionSummary>
                <AccordionDetails className="bg-secondary">
                  Of course not.
                </AccordionDetails>
              </Accordion>
            </ol>
          </ModalBody>
          <ModalFooter className="bg-dark text-light justify-content-center">
            <Button color="warning" onClick={toggle}>
              Add to Cart
            </Button>{" "}
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
             <div
              dangerouslySetInnerHTML={{ __html: description}}
            >
            </div>
            <br />
            {/* <ul>
              <li className="mb-4">
                Embark on a transformative journey into the world of
                cryptocurrency trading with our Comprehensive Cryptocurrency
                Trading course. Designed for both novice traders seeking to
                enter the market and experienced investors looking to refine
                their strategies, this course provides a comprehensive overview
                of cryptocurrency trading principles, techniques, and
                strategies.
              </li>
              <li className="mb-4">
                Throughout the course, you'll delve deep into the fundamentals
                of cryptocurrencies, understanding their underlying technology,
                market dynamics, and unique characteristics. From Bitcoin to
                altcoins, you'll explore a diverse range of digital assets,
                gaining insights into their use cases, adoption trends, and
                potential for investment.
              </li>
              <li className="mb-4">
                Guided by seasoned experts in the field, you'll learn the
                essential tools and techniques for successful crypto trading.
                Dive into technical analysis, mastering chart patterns,
                indicators, and candlesticks patterns to identify profitable
                trading opportunities.
              </li>
              <li className="mb-4">
                Through practical exercises and real-world case studies, you'll
                develop the skills to execute strategic trades with confidence.
                Learn risk management strategies to protect your investments and
                optimize your returns in volatile market conditions. Discover
                advanced trading strategies, including day trading, swing
                trading, and long-term investing approaches tailored to the
                cryptocurrency market.
              </li>
              <li className="mb-4">
                By the end of the course, you'll emerge as a proficient
                cryptocurrency trader, equipped with the knowledge, skills, and
                confidence to navigate the complexities of the crypto markets.
                Whether you're aiming to generate supplemental income, diversify
                your investment portfolio, or pursue a full-time trading career,
                this course provides the foundation for success in the dynamic
                world of crypto trading.
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      {/* footer start */}
      <footer className="bg-body-tertiary text-white pt-5 pb-4" data-bs-theme="dark">
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

export default CryptoPage;
