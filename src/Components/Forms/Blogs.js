import React, { useState, useRef } from "react";
import "../Assests/CSS/forms.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import MDEBlog from "./MDEBlog";
import Editor from "./EditorBlogs";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
const Blogs = function () {
  const editorRef = useRef(null);
  return (
    <>
      <div
        className={
          window.innerWidth > 750 ? "d-flex flex-row  " : "d-flex flex-column"
        }
      >
        <div
          className={
            window.innerWidth > 750
              ? "container formContainer p-5 d-flex justify-content-center "
              : " container formContainer py-4 w-100 px-0 d-flex justify-content-center"
          }
        >
          <form className={window.innerWidth > 750 ? "w-100 card" : "w-75"}>
            <h1>
              {" "}
              <CardMembershipIcon /> Create New Blog
            </h1>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Enter title of blog
              </label>
              <z> *</z>
              <br></br>
              <input
                placeholder="Enter the title.."
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Who wrote the blog?
              </label>
              <z> *</z>
              <br></br>
              <input
                placeholder="Enter the name of writer.."
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <MDEBlog />

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Enter category of blog
              </label>
              <z> *</z>
              <br></br>
              <input
                placeholder="Enter the category.."
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Enter event name, if there's any
              </label>
              <z> *</z>
              <br></br>
              <input
                placeholder="Enter event's name.."
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="form-group">
              {/* <label for="exampleFormControlFile1">Example file input</label> */}
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blogs;
