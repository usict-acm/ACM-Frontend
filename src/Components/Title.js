import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import "./Assests/CSS/title.css";
import Button from "react-bootstrap/Button";
import { Typography } from "@mui/material";
export default function Title({ title }) {
  const [currentForm, setForm] = useState(() => {
    return title;
  });
  const add = "ADD NEW " + `${title.toUpperCase()}`;
  const addBulk = "CREATE IN BULK";
  if (title == "JoinUS") {
    title = "Benefit Page Form";
    // add = "Download Response";
  }
  return (
    <>
      <div className="container">
        <div className="head">
          <h1 className="head-2">
            <Badge bg="light" text="dark">
              {title == "Member" ? "Teams" : title}

              {/* {title == "Blog" ? "Blogs" : title} */}
            </Badge>{" "}
          </h1>
        </div>
        {
          <>
            {title == "Certificate" ? (
              <div className="button">
                <Button
                  className="float-end innerbutton"
                  variant="info"
                  href={"/form/" + `${currentForm}`}
                >
                  {add}
                </Button>
                <Button
                  className="float-end innerbutton"
                  variant="info"
                  href={"/form/CertificateBulk"}
                >
                  {addBulk}
                </Button>
              </div>
            ) : title == "Benefit Page Form" ? (
              <div className="button">
                <Button
                  className="float-end innerbutton"
                  variant="info"
                  href={"/form/" + `${currentForm}`}
                >
                  Download Response Sheet
                </Button>
              </div>
            ) : (
              <div className="button">
                <Button
                  className="float-end innerbutton"
                  variant="info"
                  href={"/form/" + `${currentForm}`}
                >
                  {add}
                </Button>
              </div>
            )}
          </>
        }
      </div>
    </>
  );
}
