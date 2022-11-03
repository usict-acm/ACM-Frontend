import React from "react";
import { BsFillMegaphoneFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
import { FaBlogger } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
// import { BiLogOut } from "react-icons/bi";
// import { FiLogout } from "react-icons/fi";
import { HiLogout } from "react-icons/hi";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./Assests/CSS/sidebar.css";
import { Link } from "react-router-dom";
import TableDesktopMain from "./TableDesktopMain";
import TableMobile from "./TableMobile";
// import Dropdown from 'react-bootstrap/Dropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

const Sidebar = () => {
  const mystyle = {
    // margin: "200px",
    // left: "0"
  };
  // <Link to="/">
  return (
    <div className="combo">
      <div className="sidebar">
        <h3 className="logoNav">
          {" "}
          <img
            src="https://usict.acm.org/assets/images/acm-logo.svg"
            alt=""
            width={60}
            height={60}
          />
          ACM ADMIN
        </h3>
        {/* <hr {width: 60%;margin-left: auto;margin-right: auto;}> */}
        <a href="#" className="navLinks">
          &nbsp;
          <BsFillMegaphoneFill className="icons" />
          &nbsp; Announcements
        </a>
        <a href="#" className="navLinks">
          &nbsp;
          <FaBlogger className="icons" />
          Blogs
        </a>
        <a href="#" className="navLinks">
          &nbsp;
          <FaWpforms className="icons" />
          Forms
        </a>
        <a href="#" className="navLinks">
          &nbsp;
          <FaLink className="icons" />
          Links
        </a>
        <a href="#" className="navLinks">
          &nbsp;
          <FaAward className="icons" />
          Certificates
        </a>
        <a href="#" className="navLinks">
          &nbsp;
          <BsFillPeopleFill className="icons" />
          Team
        </a>
        <a href="#" className="navLinks">
          &nbsp;
          <FaHandshake className="icons" />
          Join Us
        </a>
        <a href="#" className="navLinks">
          &nbsp;
          <FaPhoneSquareAlt className="icons" />
          Contact Us
        </a>
        <a href="#" className="navLinkss">
          &nbsp;
          <b>
            <HiLogout className="icons" />
          </b>
          Logout
        </a>
      </div>
      <a href="#" className="gotopbutton">
        <FaArrowAltCircleUp className="gotopbutton" />
      </a>
      <div className="mb-2 Drop">
        {['up'].map((direction) => (
          <DropdownButton
            // as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="primary"
            title="Forms"
          >
            <Dropdown.Item eventKey="1" tag={Link} href="Forms/Announcement">Announcement</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blogs</Dropdown.Item>
            <Dropdown.Item eventKey="3">Links</Dropdown.Item>
            {/* <Dropdown.Divider /> */}
            <Dropdown.Item eventKey="4">Certificates</Dropdown.Item>
            <Dropdown.Item eventKey="5">Team</Dropdown.Item>
            <Dropdown.Item eventKey="6">Joins Us</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
      
    </div>
  );
  // </Link>
};

export default Sidebar;
