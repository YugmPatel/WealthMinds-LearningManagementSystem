import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  
  const [err, setErr] = useState(null);
  const [error, setError] = useState([]);
  const [loader, setLoader] = useState(false);
  const [formdata, setFormdata] = useState({
    email: "",
    pass: "",
  });
  const homenavi = useNavigate();
  const Validation = (e) => {
    e.preventDefault();
    let errors = [];
    const { email, pass } = formdata;
    if (email === "") {
      errors.push("emptyemail");
    }
    if (pass === "") {
      errors.push("emptypassword");
    }
    if (errors.length > 0) {
      setError(errors);
    } else {
      signInWithEmailAndPassword(auth, email, pass)
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
      <div className="box">
        <div className="form" onSubmit={Validation}>
          <h2>Welcome Back</h2>
          <form action={"/home"}>

          <div className="inputBox">
            <input
              name="email"
              type="email"
              value={formdata.email}
              onChange={handlechange}
              required="required"
              ></input>
            <span>Email ID</span>
            <i></i>
          </div>
            {error.includes("emptyemail") && (
              <p style={{ color: "red" }}>Email is Required</p>
              )}
          <div className="inputBox">
            <input
              name="pass"
              type="password"
              value={formdata.pass}
              onChange={handlechange}
              required="required"
              ></input>
            <span>Password</span>
            <i></i>
          </div>
          {error.includes("emptypassword") && (
            <p style={{ color: "red" }}>Password is Required</p>
            )}
          <div className="links">
            <a href="#">Forgot Password?</a>
            <a>
              <Link to="/Signup">SignUp</Link>
            </a>
          </div>
          <h6 style={{ color: "red" }}>{err}</h6>
          <div className="submit text-center ">
            <button
              className="buttonlogin"
              onClick={Validation}
              disabled={loader}
              >
              {loader && (
                <div
                className="spinner-border spinner-border-sm"
                role="status"
                ></div>
                )}
              Login
            </button>
          </div>
                </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
