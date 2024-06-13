import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {data} from './data';
import { Accordion, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


function Course() {
    
  const [modal, setModalState] = useState(false);

  const toggle = () => {
    setModalState((prev) => !prev);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {data.map((item) => {
          return (
            <div class="col">
              <div class="card bg-dark text-light ">
                <img src={item.cardImage} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.courseTitle}</h5>
                  <p class="card-text">{item.courseDescription}</p>
                  <div className="text-center">
                    {/* <button className="btn btn-outline-warning" ><Link
                    to={"/stock"}

                    className="link-dark text-warning"
                    style={{ textDecoration: "none", color: "#fff" }}
                   >More Details
                    </Link>
                    </button> */}
                    <button className="btn btn-outline-warning" 
                      onClick={() => navigate("/stock", {
                        state: {...item}
                      })}
                    >More Details</button>
                    </div>
                </div>
              </div>
            </div>
            
          )
        })}
      </div>
    </div>
  );
}

export default Course;
