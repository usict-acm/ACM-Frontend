import React, { useState } from "react";
import "../Assests/CSS/certificate.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
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
          <form className={window.innerWidth > 750 ? "w-100  " : "w-75"}>
            {/* <form> */}
            <h1>
              {" "}
              <PeopleAltIcon /> Add a new Member
            </h1>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                First Name
              </label>
              <br />
              <input
                placeholder="Enter the first name .."
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={fName}
                onChange={changeHandlerFName}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Last Name
              </label>
              <br />
              <input
                placeholder="Enter the last name .."
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={lName}
                onChange={changeHandlerLName}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputGroup1" className="form-label">
                Designation
              </label>
              <br />
              <input
                placeholder="Enter the designation.."
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={designation}
                onChange={changeHandlerDes}
                required
              />
            </div>
            <label className="sr-only" htmlFor="inlineFormInputGroup">
              LinkedIn
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <LinkedInIcon />
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder=" Linkedin Username"
                value={usernameLin}
                onChange={changeHandlerUsernameLin}
                required
              />
            </div>
            <label className="sr-only" htmlFor="inlineFormInputGroup">
              Github
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <GitHubIcon />
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Github Username"
                value={usernameGit}
                onChange={changeHandlerGit}
                required
              />
            </div>
            <label className="sr-only" htmlFor="inlineFormInputGroup">
              Instagram
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Instagram Username"
                value={usernameIns}
                onChange={changeHandlerIns}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Year
              </label>
              <br />
              <input
                placeholder="Enter current year.."
                type="month"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={year}
                onChange={changeHandlerYear}
                required
              />
            </div>
            <div className="col-auto mb-3">
              <label
                className="my-1 mr-2 form-label "
                htmlFor="inlineFormCustomSelectPref"
              >
                Category
              </label>
              <br />
              <select
                className="form-select"
                aria-label="Default select example"
                required
                d
              >
                <option selected>Faculty</option>
                <option value="1">Office Bearer</option>
                <option value="2">Executive Member</option>
                <option value="3">Operations Team</option>
                <option value="4">Web Team</option>
              </select>
            </div>
            <div className="form-group ">
              <label className="imageDisplay" htmlFor="exampleFormControlFile1">
                Select Image
              </label>

              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
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
    </>
  );
};

export default Team;
