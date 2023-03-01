import React from "react";
import { useLocation } from "react-router";
import "./Assests/CSS/UserPage.css";
import Members from "./Members";
import { useState } from "react";
import dataMember from "./dataMember";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useParams } from "react-router";

const UserPage = function (props) {
  const params = useParams();
  const [person, setPerson] = useState(dataMember);

  console.log(location.state);
  return (
    <div className="parent">
      <div className="profile">
        <div className="content">
          <div className="image">
            <div>
              {dataMember.map((data) => {
                const res = data.name.replace(/ /g, "");
                console.log(params);
                if (res == params.name) {
                  return <img src={data.image} alt="gg" />;
                }
              })}
            </div>
          </div>
          <div className="mem-details">
            <div>
              {dataMember.map((data) => {
                const res = data.name.replace(/ /g, "");
                console.log(params);
                if (res == params.name) {
                  return (
                    <div className="sub-member-details">
                      {" "}
                      <p>Name</p>
                      <p>{data.name}</p>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              {dataMember.map((data) => {
                const res = data.name.replace(/ /g, "");
                console.log(params);
                if (res == params.name) {
                  return (
                    <div className="sub-member-details">
                      {" "}
                      <p>DOB</p>
                      <p>{data.DOB}</p>
                    </div>
                  );
                }
              })}
            </div>

            <div>
              {dataMember.map((data) => {
                const res = data.name.replace(/ /g, "");
                console.log(params);
                if (res == params.name) {
                  return (
                    <div className="sub-member-details">
                      {" "}
                      <p>Membership No.</p>
                      <p>{data.id}</p>
                    </div>
                  );
                }
              })}
            </div>

            <div>
              {dataMember.map((data) => {
                const res = data.name.replace(/ /g, "");
                console.log(params);
                if (res == params.name) {
                  return (
                    <div className="sub-member-details">
                      {" "}
                      <p>Part of ACM Since:</p>
                      <p>{data.age}</p>
                    </div>
                  );
                }
              })}
            </div>

            <div>
              {dataMember.map((data) => {
                const res = data.name.replace(/ /g, "");
                console.log(params);
                if (res == params.name) {
                  return (
                    <div className="sub-member-details">
                      {" "}
                      <p>Tech Stacks</p>
                      <p>{data.TechStacks}</p>
                    </div>
                  );
                }
              })}
            </div>

            <div>
              {dataMember.map((data) => {
                const res = data.name.replace(/ /g, "");
                console.log(params);
                if (res == params.name) {
                  return (
                    <div className="sub-member-details">
                      {" "}
                      <p>Batch</p>
                      <p>{data.batch}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="social-handles">
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="acm-projects">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quasi eius quo harum fugiat molestias dolores deleniti voluptatum odio
          amet sequi vel cum aspernatur, porro, velit aperiam accusamus est
          aliquam magni, deserunt tempora adipisci? Similique a officia rem
          facere, vero, magni quos quam delectus explicabo, nobis quod! Totam,
          nostrum aliquam.
        </div>
      </div>
    </div>
  );
};

export default UserPage;
