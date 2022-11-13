import React from "react";
import BottomNav from "../BottomNav";
import Sidebar from "../Sidebar";
import "../Assests/CSS/forms.css";
import Title from "../Title";

const Links = () => {
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
          <form className={window.innerWidth > 750 ? "w-75" : "w-75"}>
            <h1>
              <em>Create Link</em>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-link-45deg"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
              </svg>
            </h1>
            <div class="mb-3">
              <label for="subject" class="form-label">
                Link Subject
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Subject"
                id="exampleSub"
                required
              />
            </div>
            <div class="mb-3">
              <label for="OGlink" class="form-label">
                Original Link
              </label>
              <input
                class="form-control"
                placeholder="Enter the original link"
              />
            </div>
            <div class="mb-3">
              <label for="StartDate" class="form-label">
                Add Link
              </label>
              <div className="custom d-flex flex-row align-items-center border">
                <p className=" para fw-bold m-0">https://usict.acm.org/</p>
                <input
                  type="link"
                  class="form-control change"
                  placeholder="Custom Link"
                  id="exampleDate"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <button type="submit" class="btn btn-primary">
                  Get Preview
                </button>
              </div>
              <div class="col-4">
                <button type="submit" class="btn btn-primary">
                  Generate Link
                </button>
              </div>
              <div class="col-4">
                <button type="submit" class="btn btn-primary">
                  Check & Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Title title="links" />
    </>
  );
};

export default Links;
