import React from "react";
import BottomNav from "../BottomNav";
import Sidebar from "../Sidebar";
import "../Assests/CSS/forms.css";

const Announcement = () => {
  return (
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
        <form
          className={window.innerWidth > 750 ? "w-100 notTable-form " : "w-100"}
        >
          <h3>Create Announcements</h3>
          <hr></hr>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Please fill in the form to add announcement.
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter the title of the announcement"
            />
            <br></br>
            {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Description of the announcement' /> */}
            <textarea
              name=""
              id=""
              className="form-control"
              rows="4"
              placeholder="Description of the announcement"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Date for commencement of the event
            </label>
            <input
              type="date"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Date for end of the event
            </label>
            <input
              type="date"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Upload the poster{" "}
            </label>
            <input type="file" name="" id="" class="form-control" />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Date{" "}
            </label>
            <input type="date" name="" id="" class="form-control" />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Announcement;
