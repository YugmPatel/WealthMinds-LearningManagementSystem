import React, { useEffect, useState } from "react";
// Importing uuid to generate unique identifiers for image storage references
import { v4 } from "uuid";

// Importing Firebase storage and Firestore functionalities
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

function Imageadd() {
  // Initializing state variables
  // const [txt, setTxt] = useState("");
  // const [data, setData] = useState([{}]);
  // const [file, setFile] = useState("");
  // const [courseArr, setCourseArr] = useState([]);
  const [img, setImg] = useState("");
  const [fetchdata, setFetchdata] = useState([]);

  // Function to add new image and text data to the Firestore database
  const add = async () => {
    // event.preventDefault();
    console.log(img);

    const adddata = await addDoc(collection(db, "newimage"), {
      image: img,
    }).then((val) => {
      console.log(val);
      console.log(img);
    });

    alert("success");
  };

  // Function to handle image file input change
  function handleChange(e) {
    console.log(e.target.files[0]);

    // Generating a unique identifier for the image storage reference
    const imgs = ref(storage, `images/${v4()}`);

    // Uploading the selected image file to Firebase storage
    uploadBytes(imgs, e.target.files[0]).then(async (xyz) => {
      console.log(xyz, "imgs");

      // Retrieving the download URL for the uploaded image
      await getDownloadURL(xyz.ref).then((val) => {
        console.log(val);
        setImg(val);
      });
    });
  }

  // Function to fetch data from the Firestore database
  const fetch = async () => {
    const abc = await getDocs(collection(db, "newimage"));
    console.log(abc);
    console.log(abc.docs);
    // Mapping the fetched data to a new array with additional id property
    const fetchdata = abc.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setFetchdata(fetchdata);
    console.log(fetchdata);
  };

  // Running the fetch function once when the component mounts
  useEffect(() => {
    fetch();
  }, []);

  {
    fetchdata.map((el) => {
      return (
        <div>
          <div className="col">
            <img src={el.image}></img>
            <input
              className="form-control"
              type="file"
              id="formFile"
              accept="/image"
              //   onChange={(e) => setFile(e.target.files[0])}
              onChange={(e) => handleChange(e)}
            ></input>
            <div className="card bg-dark text-light ">
              <img src={el.image} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <h5 className="card-title">{el.coursetitle}</h5> */}
                {/* <p className="card-text">{el.coursedescription}</p> */}
                <div className="text-center">
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => add()}
                  >
                    <Link
                      className="link-dark text-warning"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      More Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}
/* {fetchdata.map((el) => {
        return (
          <img
            src={el.image}
            alt="111"
            // style={{ width: "100%", height: "auto" }}
          />
        );
      })} */
//   );
// }

export default Imageadd;
