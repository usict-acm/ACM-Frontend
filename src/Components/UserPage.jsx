import React from "react";
import { useLocation } from "react-router";
import "./Assests/CSS/UserPage.css";
import Members from "./Members";
import { useState } from "react";
import dataMember from "./dataMember";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const UserPage = function (props) {
  const [person, setPerson] = useState(dataMember);

  console.log(location.state);
  return (
    <div className="parent">
      <div className="profile">
        <div className="content">
          <div className="image">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="gg"
            />
          </div>
          <div className="mem-details">
            <div className="sub-member-details">
              <p>Name</p>
              <p>Sincwe 2002</p>
            </div>
            <div className="sub-member-details">
              <p>DOB</p>
              <p>Kdsdsdr</p>
            </div>
            <div className="sub-member-details">
              <p>Mmebership Number</p>
              <p>Kaasdsdmber</p>
            </div>
            <div className="sub-member-details">
              <p>Part of ACM Since: </p>
              <p>Kaae sd</p>
            </div>
            <div className="sub-member-details">
              <p>Tech Stacks</p>
              <p>Kaae sd</p>
            </div>
            <div className="sub-member-details">
              <p>Batcj </p>
              <p>Kaae sd</p>
            </div>
          </div>
          <div className="social-handles">
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="acm-projects">current projects in ACM with sliders</div>
      </div>
    </div>
    // <div>Hello</div>
  );
};

export default UserPage;
