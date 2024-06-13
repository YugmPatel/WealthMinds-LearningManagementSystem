import React from 'react'
import Navbarlogin from '../../Components/navbar/Navbarlogin'
import Footer from '../../Components/footer/Footer'
import { colors } from '@mui/material'

function ContactPage() {
  return (
    <>
      <Navbarlogin /><br/>
      <div className="container-fluid bg-dark">
     <h1 className="text-light text-center p-3">Get in Touch</h1><h2 className='text-light text-center p-3'>Get in Touch</h2>
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
            type="text"
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
            </div>
        <Footer/>
    </>
  )
}

export default ContactPage
