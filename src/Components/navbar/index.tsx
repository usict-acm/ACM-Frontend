import "./index.css";
import { Link } from "react-router-dom";
import { BsFillMegaphoneFill, BsFillPeopleFill } from "react-icons/bs";
import { FaBlogger, FaPhoneSquareAlt, FaLink, FaAward, FaSignOutAlt } from "react-icons/fa";

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <Link to="/" className="nav-link">
                        <img src = "https://usict.acm.org/assets/images/acm-logo.svg" width = { 100 } height = { 100 }/>
                        <span className="link-text logo-text">USS ACM</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Announcement-table" className="nav-link">
                        <BsFillMegaphoneFill className="icons" />
                        <span className="link-text">Announcements</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Blogs-table" className="nav-link">
                        <FaBlogger className="icons" />
                        <span className="link-text">Blogs</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Links-Table" className="nav-link">
                        <FaLink className="icons" />
                        <span className="link-text">Links</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Certificate-Table" className="nav-link">
                        <FaAward className="icons" />
                        <span className="link-text">Certificates</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Teams-Table" className="nav-link">
                        <BsFillPeopleFill className="icons" />
                        <span className="link-text">Team</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Teams-Table" className="nav-link">
                        <FaPhoneSquareAlt className="icons" />
                        <span className="link-text">Contact Us</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link">
                        <FaSignOutAlt className="icons" />
                        <span className="link-text">Logout</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
