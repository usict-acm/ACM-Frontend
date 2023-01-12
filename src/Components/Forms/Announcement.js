import React from "react";
import "../Assests/CSS/forms.css";

async function onSubmit() {

}

const Announcement = () => {
  return (
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
        <form
          className={window.innerWidth > 750 ? "w-100 notTable-form " : "w-100"}
          onSubmit = { async (e) => { e.preventDefault(); console.log(e);}}
        >
          <h3>
            <em>Create Announcement</em>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-megaphone"
              viewBox="0 0 16 16"
            >
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z" />
            </svg>
          </h3>
          <hr></hr>
          <div className="mb-3">
            <label for="title" className="form-label">
              Please fill in the form to add announcement.
            </label>
            <br></br>
            <input
              type = "text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              placeholder="Enter the title of the announcement"
              required
            />
            <br></br>
            <label for="description" className="form-label">Describe the event</label>
            <br></br>
            <textarea
              name=""
              id="description"
              className="form-control"
              rows="4"
              placeholder="Description of the announcement"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Date for commencement of the event
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Date for end of the event
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Button1 Name
            </label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Button1 Link
            </label>
            <input type="Link" className="form-control" required />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Button2 Name
            </label>
            
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Button2 Link
            </label>
            
            <input type="link" className="form-control" required />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Partner
            </label>
            
            <input type="number" className="form-control" required />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Speakers
            </label>
            
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Year
            </label>
            
            <input type="year" className="form-control" required />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Start-time - End time
            </label>
            
            <input type="year" className="form-control" required />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Upload the poster{" "}
            </label>
            
            <input type="file" name="" id="" className="form-control" required />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Announcement;
