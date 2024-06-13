import React, { useState } from "react";
import "./VideoPlayer.css";
import Navbarlogin from "../../Components/navbar/Navbarlogin";
import Accordion from "@mui/material/Accordion";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

function VideoPlayer() {
  const [videoUrl, setVideoUrl] = useState("");

  const handleAccordionClick = (url) => {
    setVideoUrl(url);
  };

  return (
    <>
      <Navbarlogin />
      <br />
      <br />
      <br />
      <div className="video-player-main">
        <div className="container">
          <div className="sidebar">
            <h4 className=" m-3  text-light">Course Content</h4>
            <hr className="text-light" />
            <Accordion className="bg-secondary text-light border border-light">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                The Basics and the Market
              </AccordionSummary>
              <AccordionDetails className="bg-dark border border-light text-light">
                <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/p7HKvqRI_Bo?si=jgTyU9IUWx2fDxYn")}>
                What is Stock?
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-dark border border-light text-light">
                <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/WIrkE_8PEPc?si=DM1AYt3xt9ABuRWs")}>
                What is Market?
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-dark border border-light text-light">
                <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/GT_auP0fh90?si=wP6BG2mXG2j1-yQr")}>
                What is Stock Exchange?
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-dark border border-light text-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/sHp2ruhfxWI?si=eiHxEjHFYbWk6Hgv")}>
                What is Broker?
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion className="bg-dark text-light border border-light">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-light" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Technical Analysis
              </AccordionSummary>
              <AccordionDetails className="bg-secondary text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/XyI0nltpCH4?si=b8kbXOz4G9l2XY3U")}>
                Introduction
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-secondary text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/AOz1YPOKvEs?si=dM97iiutkeCE_Jde")}>
                Charts and Candlesticks
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-secondary text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/r2LzjTUs3lo?si=0Psy4mUpE96qQTOg")}>
                Trends,Support and Resistance
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-secondary text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/dP7Le1YdUXw?si=3CLfd3gs_v-whob8")}>
                Chart Patterns
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion className="bg-secondary text-light border border-light">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Trading Psychology
              </AccordionSummary>
              <AccordionDetails className="bg-dark text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/s8aPvdf7xjk?si=ldAk7a255LZdDm6c")}>
                The Importance of Psychology
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-dark text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/BQD33QNaMQU?si=BgliRLr8s5-NjJ6i")}>
                Loss Aversion
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-dark text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/oDpRDFUfBMk?si=jRWrJvTaSqH0Gnl5")}>
                Endowment Effect
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-dark text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/IddhVly3JOE?si=t0WDjnELLCwNcPvz")}>
                Anchoring Effect
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion className="bg-dark text-light border border-light">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-light" />}  
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Risk Management and Money Management
              </AccordionSummary>
              <AccordionDetails className="bg-secondary text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/0ZKy3_cF3Mw?si=FmQNuWBYdysQB43z")}>
                Expectancy
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-secondary text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/-NTnHEaPV5E?si=YaEz8VkGLz-ipLdX")}>
                Risk Management
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-secondary text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/Tb11V_fDWMM?si=_2ZVPXTXckphIdv8")}>
                Money Management
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-secondary text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/RfLbbBtT0vQ?si=Hbvm1P3F2PVnxGZp")}>
                Position Sizing
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion className="bg-secondary text-light border border-light">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Orders and Prices
              </AccordionSummary>
              <AccordionDetails className="bg-dark text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/WHQjIbKmyI0?si=lk0w08nAxLCPtvlY")}>
                Order and Order Types
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-dark text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/ZSUEgbT9F-0?si=XREH06uG7YeVjA4y")}>
                Orders Driving Prices
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-dark text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/I8r3HCPdC2A?si=4tX4gTn02OhvNxxp")}>
                Different Players
                </Link>
              </AccordionDetails>
              <AccordionDetails className="bg-dark text-light border border-light">
              <Link style={{textDecoration:"none", color:"white"}} onClick={() => handleAccordionClick("https://www.youtube.com/embed/rN0ObFR0ZU4?si=X6JkaDuDODVd1HHP")}>
                3 Ways of Making Money
                </Link>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="video-player">
            {/* Video player component goes here */}
            {videoUrl && (
              <iframe
                title="Video Player"
                width="100%"
                height="400"
                src={videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="course-description">
            {/* Course description */}
            <p>
              This is the course description. It provides information about the
              course content, instructor, etc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
