import React from 'react'

function Card() {
  return (
    <div>
      <h2 className="text-center">Card1 Details</h2>
            <input className="form-control mb-3" type="file" id="formFile"/>
            <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter Course Title"
            id="exampleFormControlInput1"
            />
      <br />
      <textarea
            className="form-control mb-3"
            placeholder="Enter Course Description"
            id="exampleFormControlTextarea1"
            rows="3"
            ></textarea>
    </div>
  )
}

export default Card
