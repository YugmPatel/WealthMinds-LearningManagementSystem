import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import "./ListCourse.css";
import { Link, useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const ListCourse = () => {
  const [courseArr, setCourseArr] = useState([]);

    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [selectImage, setImageInput] = useState("");
    
  const getUserDetails = async () => {
    let arr = [];
    const docRef = await getDocs(collection(db, "coursecontent"));
    docRef.forEach((res) => {
      arr.push(res.data());
    });
    setCourseArr(arr);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev)=>({...prev, img:downloadURL}))
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);
  // const navigate = useNavigate();
  // const toMoreDetails = () =>{
  //     navigate('/', {state:{id:1,name:'yugm'}})
  // }

  return (
    <div>
      {courseArr.map((el) => {
        return (
          <div className="col">
            <img src={selectImage} ></img>
             <input className="form-control" type="file" id="formFile" accept="/image" onChange={(e)=> setFile(e.target.files[0])}></input>
            <div className="card bg-dark text-light ">
              <img src="" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{el.coursetitle}</h5>
                <p className="card-text">{el.coursedescription}</p>
                <div className="text-center">
                  <button className="btn btn-outline-warning">
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
        );
      })}
    </div>
  );
};

export default ListCourse;
