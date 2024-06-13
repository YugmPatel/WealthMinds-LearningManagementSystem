import React, { useState } from "react";
import "./SignUpPage.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Password } from "@mui/icons-material";

const SignUpPage = () => {
  const [err,setErr]=useState(null)
  const [error, setError] = useState([]);
  const [loader, setLoader] = useState(false);
  const [formdata, setFormdata] = useState({
    name:"",
    email: "",
    pass: "",
  });
  const homenavi = useNavigate();
  const Validation = (e) => {
    e.preventDefault();
    let errs=[]
    let pattern_email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    let pattern_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,}$/;
    let errors = [];
    const {name, email, pass } = formdata;
    if (name === ""){
      errors.push("emptyname")
    }
    if (email === "") {
      errors.push("emptyemail");
    }
    else if(!pattern_email.test(formdata.email)){
      errors.push("invalidemail")
      console.log(formdata.email, email)
    }
    if (pass === "") {
      errors.push("emptypassword");
    }
    else if(!pattern_pass.test(pass)){
      errors.push("invalidpassword")
    }
    if (errors.length > 0) {
      setError(errors);
    } else {
      setError([])
      createUserWithEmailAndPassword(auth, formdata.email, formdata.pass)
        .then(() => {
          homenavi("/");
          setLoader(false);
        })
        .catch(() => {
          setErr("Invalid Email or Password");
          setLoader(false);
        });
    }
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  return (
    <>
      <div className="boxsignup">
        <div className="formsignup" onSubmit={Validation}>
          <h2>Sign Up</h2>
          <div className="inputBoxsignup">
            <input type="text" name="name" value={formdata.name} onChange={handlechange} required></input>
            <span>Full Name</span>
            <i></i>
          </div>
          {error.includes("emptyname") && (
              <p style={{ color: "red", fontSize:"13px" }}>Name is Required</p>
            )}
          <div className="inputBoxsignup">
            <input type="email" name="email" value={formdata.email} onChange={handlechange} required></input>
            <span>Email ID</span>
            <i></i>
          </div>
          {error.includes("emptyemail") && (
              <p style={{ color: "red", fontSize:"13px"  }}>Email is Required</p>
            )}
            {error.includes("invalidemail") && (
              <p style={{ color: "red", fontSize:"13px"}}>Please enter correct Email ID</p>
            )}
          <div className="inputBoxsignup">
            <input type="password" name="pass" value={formdata.pass} onChange={handlechange} required></input>
            <span>Password</span>
            <i></i>
          </div>
          {error.includes("emptypassword") && (
              <p style={{ color: "red", fontSize:"13px"}}>Password is Required</p>
            )}
          {error.includes("invalidpassword") && (
              <p style={{ color: "red", fontSize:"13px"}}>Your password must be 8 characters long, contain letters and numbers</p>
            )}
          <div className="linkssignup">
            <a href="#"></a>
            <a><Link to="/login">Login</Link></a>
          </div>
          <h6 style={{color:"red"}}>{err}</h6>
          <div className="submitsignup">
            <button className="buttonsignup" onClick={Validation}>{loader && (
                <div className="spinner-border spinner-border-sm" role="status">
                </div>
              )}
             Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
