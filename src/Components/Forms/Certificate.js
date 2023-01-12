import React, { useState, useEffect } from "react";
import "../Assests/CSS/forms.css";
import "../Assests/CSS/certificate.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
const Certificate = function () {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 760px)").matches)
  useEffect(() => {
       window
        .matchMedia("(min-width: 760px)")
        .addEventListener('change' , e => setMatches(e.matches));
    }, []);
  const [hName, setHname] = useState("");
  const [iName, setIname] = useState("");
  const [eName, setEname] = useState("");
  const [mailName, setMailname] = useState("");
  const [rName, setRname] = useState("");
  const [enrollmentNum, setEnrollNum] = useState("");
  const [courseName, setCourse] = useState("");
  const changeHandlerHName = (e) => {
    e.preventDefault();
    setHname(e.target.value);
  };
  const changeHandlerIName = (e) => {
    e.preventDefault();
    setIname(e.target.value);
  };
  const changeHandlerEName = (e) => {
    e.preventDefault();
    setEname(e.target.value);
  };
  const changeHandlerMailName = (e) => {
    e.preventDefault();
    setMailname(e.target.value);
  };
  const changeHandlerRName = (e) => {
    e.preventDefault();
    setRname(e.target.value);
  };
  const changeHandlerEnrNum = (e) => {
    e.preventDefault();
    setEnrollNum(e.target.value);
  };
  const changeHandlerCourse = (e) => {
    e.preventDefault();
    setCourse(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setHname("");
    setIname("");
    setEname("");
    setMailname("");
    setRname("");
    setEnrollNum("");
    setCourse("");
  };
  return (
    <>
      <div
        className={
          matches ? "d-flex flex-row" : "d-flex flex-column"
        }
      >

        <div
          className={
            matches
              ? "container formContainer p-5 d-flex justify-content-center"
              : "container formContainer py-4 w-100 px-0 d-flex justify-content-center"
          }
        >
          <form className={matches ? "w-100 notTable-form" : "w-100"}>
            <h1>
              {" "}
              <CardMembershipIcon /> Create Certificate
            </h1>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name of certificate Holder
              </label>
              <br></br>
              <input
                placeholder="Enter the name of certificate holder.."
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={hName}
                onChange={changeHandlerHName}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name of Institution
              </label>
              <br></br>
              <input
                placeholder="Enter the name of institution.."
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={iName}
                onChange={changeHandlerIName}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Starting Date for Program
              </label>
              <br></br>
              <input type="date" name="" id="" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Ending Date for Program
              </label>
              <input type="date" name="" id="" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Event
              </label>
              <br></br>
              <input
                placeholder="Enter the event's name.."
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={eName}
                onChange={changeHandlerEName}
                required
              />
            </div>
            <div className="mb-3">
              <input
                placeholder="Enter the email address of certificate holder.."
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={mailName}
                onChange={changeHandlerMailName}
                required
              />
            </div>
            <div className="mb-3">
              <input
                placeholder="Enter the rank of certificate holder.."
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={rName}
                onChange={changeHandlerRName}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Student Details
              </label>
              <br></br>
              <input
                placeholder="Enter the enrollment number of certificate holder.."
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={enrollmentNum}
                onChange={changeHandlerEnrNum}
                required
              />
            </div>
            <div className="mb-3">
              <input
                placeholder="Enter the course of certificate holder.."
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={courseName}
                onChange={changeHandlerCourse}
                required
              />
            </div>

            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* <Title title="Certificate" /> */}
    </>
  );
};

export default Certificate;
