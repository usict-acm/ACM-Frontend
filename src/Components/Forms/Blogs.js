import React, { useState, useRef, useEffect } from "react";
import "../Assests/CSS/forms.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import MDEBlog from "./MDEBlog";
import Editor from "./EditorBlogs";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
const Blogs = function () {
  const editorRef = useRef(null);
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 760px)").matches)
  useEffect(() => {
       window
        .matchMedia("(min-width: 760px)")
        .addEventListener('change' , e => setMatches(e.matches));
    }, []);
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
              ? "container formContainer p-5 d-flex justify-content-center "
              : " container formContainer py-4 w-100 px-0 d-flex justify-content-center"
          }
        >
          <form className={matches ? "w-100 notTable-form" : "w-100"}>
            <h1>
              {" "}
              <CardMembershipIcon /> Create New Blog
            </h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter title of blog
              </label>
              <br></br>
              <input
                placeholder="Enter the title.."
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Who wrote the blog?
              </label>
              <br></br>
              <input
                placeholder="Enter the name of writer.."
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <MDEBlog />

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter category of blog
              </label>
              <br></br>
              <input
                placeholder="Enter the category.."
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter event name, if there's any
              </label>
              <br></br>
              <input
                placeholder="Enter event's name.."
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="exampleFormControlFile1">Example file input</label> */}
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blogs;
