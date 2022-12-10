import React, { useState } from "react";
import "../Assests/CSS/forms.css";
import Sidebar from "../Sidebar";
import BottomNav from "../BottomNav";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
const Certificate = function () {
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
          window.innerWidth > 750 ? "d-flex flex-row" : "d-flex flex-column"
        }
      >
        <div>{window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}</div>

        <div
          className={
            window.innerWidth > 750
              ? "container formContainer p-5 d-flex justify-content-center"
              : "container formContainer py-4 w-100 px-0 d-flex justify-content-center"
          }
        >
          <form className={window.innerWidth > 750 ? "w-75 card" : "w-75"}>
            <h1>
              {" "}
              <CardMembershipIcon /> Create Certificate
            </h1>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name of certificate Holder
              </label>
              <z> *</z>
              <br></br>
              <input
                placeholder="Enter the name of certificate holder.."
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={hName}
                onChange={changeHandlerHName}
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name of Institution
              </label>
              <z> *</z>
              <br></br>
              <input
                placeholder="Enter the name of institution.."
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={iName}
                onChange={changeHandlerIName}
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Starting Date for Program
              </label>
              <z> *</z>
              <br></br>
              <input type="date" name="" id="" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Ending Date for Program
              </label>
              <input type="date" name="" id="" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Event
              </label>
              <z> *</z>
              <br></br>
              <input
                placeholder="Enter the event's name.."
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={eName}
                onChange={changeHandlerEName}
                required
              />
            </div>
            <div class="mb-3">
              <input
                placeholder="Enter the email address of certificate holder.."
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={mailName}
                onChange={changeHandlerMailName}
                required
              />
            </div>
            <div class="mb-3">
              <input
                placeholder="Enter the rank of certificate holder.."
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={rName}
                onChange={changeHandlerRName}
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Student Details
              </label>
              <z> *</z>
              <br></br>
              <input
                placeholder="Enter the enrollment number of certificate holder.."
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={enrollmentNum}
                onChange={changeHandlerEnrNum}
                required
              />
            </div>
            <div class="mb-3">
              <input
                placeholder="Enter the course of certificate holder.."
                type="text"
                class="form-control"
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
              class="btn btn-primary"
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
