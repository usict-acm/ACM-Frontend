import React, { useState, useRef } from "react";
import "../Assests/CSS/forms.css";
import { Editor } from "@tinymce/tinymce-react";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import BottomNav from "../BottomNav";
import Sidebar from "../Sidebar";
const Blogs = function () {
  const editorRef = useRef(null);
  return (
    <>
      <div
        className={
          window.innerWidth > 750 ? "d-flex flex-row  " : "d-flex flex-column"
        }
      >
        <div>{window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}</div>
        <div
          className={
            window.innerWidth > 750
              ? "container formContainer p-5 d-flex justify-content-center "
              : " container formContainer py-4 w-100 px-0 d-flex justify-content-center"
          }
        >
          <form className={window.innerWidth > 750 ? "w-75 card" : "w-75"}>
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
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p></p>"
              init={{
                height: "48rem",
                // swidth: "50vw",

                menubar: true,
                plugins: [
                  "a11ychecker",
                  "advlist",
                  "advcode",
                  "advtable",
                  "autolink",
                  "checklist",
                  "export",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "powerpaste",
                  "fullscreen",
                  "formatpainter",
                  "insertdatetime",
                  "media",
                  "table",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | casechange blocks | bold italic backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help" +
                  "table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol ",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />

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
