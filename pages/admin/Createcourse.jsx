import React, { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection, doc, setDoc, getDoc } from "firebase/firestore";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, Stepper, Step, StepLabel } from "@mui/material";

const formObj = {
  title: "",
  body: "",
  coursedescription: "",
  image: "",
  totalratings: "",
  obtainedratings: "",
  users: "",
  cardtitle: "",
  carddetail: "", 
  cardimage: "",
  learnings: "",
  previewtitle: "",
  previewcontent: "",
  courseTypes: [
    {
      title: "",
      description: "",
      image: "",
      youtube: "",
      content: [
        {
          key: "",
          value: "",
        },
      ],
    },
  ],
};

function Createcourse() {
  const [numForms, setNumForms] = useState(0);
  const [coursedata, setCoursedata] = useState(formObj);
  const [formData, setFormData] = useState(formObj);
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

  const addForm = () => {
    let obj = {
      title: "",
      description: "",
      image: "",
      youtube: "",
      content: [
        {
          key: "",
          value: "",
        },
        {
          key: "",
          value: "",
        }
      ],
    };

    setFormData((prevState) => {
      return {
        ...prevState,
        courseTypes: [...prevState.courseTypes, obj],
      };
    });

    // setNumForms((prevNumForms) => prevNumForms + 1);
  };

  const addContentForm = (i) => {
    let obj = {
      key: "",
      value: "",
    }
    let contentArr = [...formData.courseTypes[i].content, obj];
    let objData = {
      ...formData
    };

    objData.courseTypes[i].content = contentArr;

    setFormData({...objData})

  }

  const removeForm = () => {
    if (numForms > 0) {
      setNumForms((prevNumForms) => prevNumForms - 1);
    }
  };
  // const renderForms = () => {
    // let forms = [];
    // for (let i = 0; i < numForms; i++) {
    //   forms.push(
    //     <div key={i}>
    //       <form>
    //         <input
    //           type="text"
    //           name="cardtitle"
    //           className="form-control mb-2"
    //           placeholder="Enter Title"
    //           id="exampleFormControlInput1"
    //           // onChange={handlechange}
    //         />
    //         <br />
    //         <textarea
    //           className="form-control mb-3"
    //           name="carddetail"
    //           placeholder="Enter Detail"
    //           id="exampleFormControlTextarea1"
    //           rows="3"
    //           // onChange={handlechange}
    //         ></textarea>
    //         <input
    //           className="form-control mb-3"
    //           type="file"
    //           id="formFile"
    //           multiple
    //         />
    //       </form>
    //     </div>
    //   );
    // }
    // return forms;
  // };
  // const renderPreviewForms = () => {
  //   let Previewforms = [];
  //   for (let i = 0; i < numForms; i++) {
  //     Previewforms.push(
  //       <div key={i}>
  //         <form>
  //           <input
  //             type="text"
  //             name="cardtitle"
  //             className="form-control mb-2"
  //             placeholder="Enter Title"
  //             id="exampleFormControlInput1"
  //             onChange={handlechange}
  //           />
  //           <br />
  //           <textarea
  //             className="form-control mb-3"
  //             name="carddetail"
  //             placeholder="Enter Detail"
  //             id="exampleFormControlTextarea1"
  //             rows="3"
  //             onChange={handlechange}
  //           ></textarea>
  //         </form>
  //       </div>
  //     );
  //   }
  //   return Previewforms;
  // };
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCoursedata({ ...coursedata, [name]: value });
    setFormData({ ...formData, [name]: value });
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, "coursecontent"), coursedata);
      alert("data added successfully");
    } catch (err) {
      console.log(err);
    }
  };

  // const handleCourseTypeChange = (e, type, i) => {
  //   const {name, value} = e.target;
  //   let arr = [...formData[type]];
  //   arr[i][name] = value;
    
  //   setFormData((prev) => {
  //     return {...prev, [type] : arr}
  //   });
  // }

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
              <Button className="text-light" disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button className="bg-warning text-dark" variant="contained" color="warning" onClick={handleNext}>
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
  const [coursedata, setCoursedata] = useState(formObj);
  const [formData, setFormData] = useState(formObj);
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCoursedata({ ...coursedata, [name]: value });
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <input
        type="text"
        name="title"
        className="form-control"
        placeholder="Enter Course Title"
        id="exampleFormControlInput1"
          onChange={handlechange}
      />
      <br />
      <textarea
        className="form-control mb-3"
        name="body"
        placeholder="Enter Course Body"
        id="exampleFormControlTextarea1"
        rows="3"
          onChange={handlechange}
      ></textarea>
      <textarea
        className="form-control mb-3"
        name="description"
        placeholder="Enter Course Description"
        id="exampleFormControlTextarea1"
        rows="3"
        onChange={handlechange}
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
        onChange={handlechange}
        id="exampleFormControlInput1"
        />
      <input
        type="text"
        name="obtainedRatings"
        className="form-control mb-2"
        placeholder="Obtained Rating"
        onChange={handlechange}
        id="exampleFormControlInput1"
        />
      <input
        type="text"
        name="users"
        className="form-control mb-2"
        placeholder="Users"
        onChange={handlechange}
        id="exampleFormControlInput1"
        />
      <br />
    </div>
  );
}

function Step2() {
  const [coursedata, setCoursedata] = useState(formObj);
  const [formData, setFormData] = useState(formObj);
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCoursedata({ ...coursedata, [name]: value });
    setFormData({ ...formData, [name]: value });
  };
  
  const handleCourseTypeChange = (e, type, i) => {
    const { name, value} = e.target;
    let arr = [...formData[type]];
    arr[i][name] = value;
    
    setFormData((prev) => {
      return {...prev, [type] : arr}
    });
  }
  return (
    <div>
      <input
        type="text"
        name="cardtitle"
        className="form-control mb-2"
        placeholder="Enter Title"
        id="exampleFormControlInput1"
          onChange={handlechange}
      />
      <br />
      <textarea
        className="form-control mb-3"
        name="carddetail"
        placeholder="Enter Detail"
        id="exampleFormControlTextarea1"
        rows="3"
          onChange={handlechange}
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
        onChange={(e) => handleCourseTypeChange(e,"courseTypes")}
        />
      <h2 className="text-center">What will You Learn</h2>
      <textarea
        className="form-control mb-3"
        name="learnings"
        placeholder="Learnings"
        onChange={handlechange}
        id="exampleFormControlTextarea1"
        rows="5"
        ></textarea>
    </div>
  );
}

function Step3() {
  const [coursedata, setCoursedata] = useState(formObj);
  const [formData, setFormData] = useState(formObj);
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCoursedata({ ...coursedata, [name]: value });
    setFormData({ ...formData, [name]: value });
  };
  return(
        <div>
            <input
          type="text"
          name="previewtitle"
          className="form-control mb-2"
          placeholder="Enter Title"
          id="exampleFormControlInput1"
          onChange={handlechange}
          />
        <br />
        <textarea
          className="form-control mb-3"
          name="previewcontent"
          placeholder="Enter Content"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={handlechange}
          ></textarea>
  </div>
  ); 
  }
  
export default Createcourse;

/* <div className="container-fluid bg-white" style={{ width: "100vw" }}>
<form action="/" onSubmit={handleAdd}>
  <h2 className="text-center">Create Course</h2>
  <input
    type="text"
    name="title"
    className="form-control"
    placeholder="Enter Course Title"
    id="exampleFormControlInput1"
    onChange={handlechange}
  />
  <br />
  <textarea
    className="form-control mb-3"
    name="body"
    placeholder="Enter Course Body"
    id="exampleFormControlTextarea1"
    rows="3"
    onChange={handlechange}
  ></textarea>
  <textarea
    className="form-control mb-3"
    name="description"
    placeholder="Enter Course Description"
    id="exampleFormControlTextarea1"
    rows="3"
    onChange={handlechange}
  ></textarea>
  {/*File Upload*/
  /* <input
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
    onChange={handlechange}
    id="exampleFormControlInput1"
  />
  <input
    type="text"
    name="obtainedRatings"
    className="form-control mb-2"
    placeholder="Obtained Rating"
    onChange={handlechange}
    id="exampleFormControlInput1"
  />
  <input
    type="text"
    name="users"
    className="form-control mb-2"
    placeholder="Users"
    onChange={handlechange}
    id="exampleFormControlInput1"
  />
  <h2 className="text-center">Card Details</h2>
  <input
    type="text"
    name="cardtitle"
    className="form-control mb-2"
    placeholder="Enter Title"
    id="exampleFormControlInput1"
    onChange={handlechange}
  />
  <br />
  <textarea
    className="form-control mb-3"
    name="carddetail"
    placeholder="Enter Detail"
    id="exampleFormControlTextarea1"
    rows="3"
    onChange={handlechange}
  ></textarea>
  <input
    name="cardimage"
    className="form-control mb-3"
    type="file"
    id="formFile"
    multiple
  />
  <div className="text-center">
    {formData.courseTypes.map((el, i) => {
      return <div key={i}>
          <span>{i +1}</span>
          <input
            type="text"
            name="title"
            className="form-control mb-2"
            placeholder="Enter Title"
            id="exampleFormControlInput1"
            onChange={(e) => handleCourseTypeChange(e,"courseTypes",i)}
          />
          <br />
          <textarea
            className="form-control mb-3"
            name="description"
            placeholder="Enter Detail"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => handleCourseTypeChange(e,"courseTypes",i)}
            // onChange={handlechange}
          ></textarea>
          <input
            name="image"
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
            onChange={(e) => handleCourseTypeChange(e,"courseTypes",i)}
          />
          <div className="row b-2 bg-danger">
            <div className="col-12">
              <button type="button" onClick={() => addContentForm(i)}>
                +
              </button>
            </div>
            {
              el.content.map((o) => {
                return  <input
                  type="text"
                  name="content"
                  className="form-control mb-2"
                  placeholder="Content"
                  id="exampleFormControlInput1"
                  onChange={(e) => handleCourseTypeChange(e,"courseTypes",i)}
                />
              })
            }
          </div>
      </div>
    })}
    <Fab
      color="primary"
      aria-label="add"
      onClick={() => addForm()}
      className="mx-3"
    >
      <AddIcon />
    </Fab>
  </div>
  <br />
  <h2 className="text-center">What will You Learn</h2>
  <textarea
    className="form-control mb-3"
    name="learnings"
    placeholder="Learnings"
    onChange={handlechange}
    id="exampleFormControlTextarea1"
    rows="5"
  ></textarea>
  <h2 className="text-center">After Preview Details</h2>
  <input
    type="text"
    name="previewtitle"
    className="form-control mb-2"
    placeholder="Enter Title"
    id="exampleFormControlInput1"
    onChange={handlechange}
  />
  <br />
  <textarea
    className="form-control mb-3"
    name="previewcontent"
    placeholder="Enter Content"
    id="exampleFormControlTextarea1"
    rows="3"
    onChange={handlechange}
  ></textarea>
  <div className="text-center">
    {renderPreviewForms()}
    <Fab
      color="primary"
      aria-label="add"
      onClick={addForm}
      className="mx-3"
    >
      <AddIcon />
    </Fab>
    <Fab color="primary" aria-label="remove" onClick={removeForm}>
      <RemoveIcon />
    </Fab>
  </div>
  <br />
  <div className="text-center d-grid col-2 mx-auto">
    <button type="submit" className="btn btn-dark">
      Submit
    </button>
  </div>
</form>
</div>
</div> */