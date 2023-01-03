import React, { useState } from "react";
// import "./Certificate.css";
import "../Assests/CSS/forms.css";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Title from "../Title";
const Team = function () {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [designation, setDesignation] = useState("");
  const [usernameLin, setUsernameLin] = useState("");
  const [usernameIns, setUsernameIns] = useState("");
  const [usernameGit, setUsernameGit] = useState("");
  const [year, setYear] = useState("");

  const changeHandlerFName = (e) => {
    e.preventDefault();
    setFname(e.target.value);
  };
  const changeHandlerLName = (e) => {
    e.preventDefault();
    setLname(e.target.value);
  };
  const changeHandlerDes = (e) => {
    e.preventDefault();
    setDesignation(e.target.value);
  };
  const changeHandlerUsernameLin = (e) => {
    e.preventDefault();
    setUsernameLin(e.target.value);
  };
  const changeHandlerIns = (e) => {
    e.preventDefault();
    setUsernameIns(e.target.value);
  };
  const changeHandlerGit = (e) => {
    e.preventDefault();
    setUsernameGit(e.target.value);
  };
  const changeHandlerYear = (e) => {
    e.preventDefault();
    setYear(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setFname("");
    setLname("");
    setDesignation("");
    setUsernameGit("");
    setUsernameIns("");
    setUsernameLin("");
    setYear("");
  };
  return (
    <>
      <div
        className={
          window.innerWidth > 750 ? "d-flex flex-row" : "d-flex flex-column"
        }
      >
        <div
          className={
            window.innerWidth > 750
              ? "container formContainer p-5 d-flex justify-content-center"
              : "container formContainer py-4 w-100 px-0 d-flex justify-content-center"
          }
        >
          <form className={window.innerWidth > 750 ? "w-100 card " : "w-75"}>
            {/* <form> */}
            <h1>
              {" "}
              <PeopleAltIcon /> Add a new Member
            </h1>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                First Name
              </label>
              <input
                placeholder="Enter the first name .."
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={fName}
                onChange={changeHandlerFName}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Last Name
              </label>
              <input
                placeholder="Enter the last name .."
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={lName}
                onChange={changeHandlerLName}
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputGroup1" class="form-label">
                Designation
              </label>
              <input
                placeholder="Enter the designation.."
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={designation}
                onChange={changeHandlerDes}
              />
            </div>
            <label class="sr-only" for="inlineFormInputGroup">
              LinkedIn
            </label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <LinkedInIcon />
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="Username"
                value={usernameLin}
                onChange={changeHandlerUsernameLin}
              />
            </div>
            <label class="sr-only" for="inlineFormInputGroup">
              Github
            </label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <GitHubIcon />
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="Username"
                value={usernameGit}
                onChange={changeHandlerGit}
              />
            </div>
            <label class="sr-only" for="inlineFormInputGroup">
              Instagram
            </label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="Username"
                value={usernameIns}
                onChange={changeHandlerIns}
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Year
              </label>
              <input
                placeholder="Enter current year.."
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={year}
                onChange={changeHandlerYear}
              />
            </div>
            <div class="col-auto mb-3">
              <label
                class="my-1 mr-2 form-label "
                for="inlineFormCustomSelectPref"
              >
                Category
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Faculty</option>
                <option value="1">Office Bearer</option>
                <option value="2">Executive Member</option>
                <option value="3">Operations Team</option>
                <option value="4">Web Team</option>
              </select>
            </div>
            <div class="form-group ">
              <label className="imageDisplay" for="exampleFormControlFile1">
                Select Image
              </label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
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
      <Title title="Teams" />
    </>
  );
};

export default Team;
