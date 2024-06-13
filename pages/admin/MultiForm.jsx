// MultiStepForm.js

import React, { useState } from "react";
import { Button, Stepper, Step, StepLabel } from "@mui/material";

function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = ["Create Course", "Card Details", "After Preview Details"]; // Define your steps here

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        return "Unknown step";
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <p>All steps completed</p>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        )}






        
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div>
      <input
        type="text"
        name="title"
        className="form-control"
        placeholder="Enter Course Title"
        id="exampleFormControlInput1"
        //   onChange={handlechange}
      />
      <br />
      <textarea
        className="form-control mb-3"
        name="body"
        placeholder="Enter Course Body"
        id="exampleFormControlTextarea1"
        rows="3"
        //   onChange={handlechange}
      ></textarea>
      <textarea
        className="form-control mb-3"
        name="description"
        placeholder="Enter Course Description"
        id="exampleFormControlTextarea1"
        rows="3"
        //   onChange={handlechange}
      ></textarea>
      {/*File Upload*/}
      <input
        name="image"
        className="form-control mb-3"
        type="file"
        id="formFile"
        multiple
      />
      <input
        type="text"
        name="totalRatings"
        className="form-control mb-2"
        placeholder=" Total Rating"
        //   onChange={handlechange}
        id="exampleFormControlInput1"
      />
      <input
        type="text"
        name="obtainedRatings"
        className="form-control mb-2"
        placeholder="Obtained Rating"
        //   onChange={handlechange}
        id="exampleFormControlInput1"
      />
      <input
        type="text"
        name="users"
        className="form-control mb-2"
        placeholder="Users"
        //   onChange={handlechange}
        id="exampleFormControlInput1"
      />
      <br />
    </div>
  );
}

function Step2() {
  return (
    <div>
      <input
        type="text"
        name="cardtitle"
        className="form-control mb-2"
        placeholder="Enter Title"
        id="exampleFormControlInput1"
        //   onChange={handlechange}
      />
      <br />
      <textarea
        className="form-control mb-3"
        name="carddetail"
        placeholder="Enter Detail"
        id="exampleFormControlTextarea1"
        rows="3"
        //   onChange={handlechange}
      ></textarea>
      <input
        name="cardimage"
        className="form-control mb-3"
        type="file"
        id="formFile"
        multiple
      />
      <input
        type="text"
        name="youtube"
        className="form-control mb-2"
        placeholder="Youtube"
        id="exampleFormControlInput1"
        // onChange={(e) => handleCourseTypeChange(e,"courseTypes",i)}
      />
      <h2 className="text-center">What will You Learn</h2>
      <textarea
        className="form-control mb-3"
        name="learnings"
        placeholder="Learnings"
        // onChange={handlechange}
        id="exampleFormControlTextarea1"
        rows="5"
      ></textarea>
    </div>
  );
}

function Step3() {
  return <div>
            <input
          type="text"
          name="previewtitle"
          className="form-control mb-2"
          placeholder="Enter Title"
          id="exampleFormControlInput1"
          // onChange={handlechange}
        />
        <br />
        <textarea
          className="form-control mb-3"
          name="previewcontent"
          placeholder="Enter Content"
          id="exampleFormControlTextarea1"
          rows="3"
          // onChange={handlechange}
        ></textarea>
  </div>;
}

export default MultiStepForm;
