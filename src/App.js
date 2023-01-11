import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Blogs from "./Components/Forms/Blogs";
import BlogsTable from "./Components/BlogsTable";
// import Navb from "./Components/FormNav";
import Certificate from "./Components/Forms/Certificate";
// import Navb from "./Components/FormNav";
// import Teams from "./Components/Forms/Teams";
import Announcement from "./Components/Forms/Announcement";
import Links from "./Components/Forms/Links";
import Team from "./Components/Forms/Teams";
import Sidebar from "./Components/Sidebar";
import BottomNav from "./Components/BottomNav";
import CertificateTable from "./Components/CertificateTable";
import LinksTable from "./Components/LinksTable";
import TeamTable from "./Components/TeamTable";
import AnnouncementTable from "./Components/AnnouncementTable";
import CertificateMobileTable from "./Components/CertificateMobileTable";
import TeamMobileTable from "./Components/TeamMobileTable";
import AnnouncementMobileTable from "./Components/AnnouncementMobileTable";
import LinksMobileTable from "./Components/LinksMobileTable";
import FormSection from "./Components/FormSection";
import ContactUsTable from "./Components/ContactUsTable";
import ContactUsMobileTable from "./Components/ContactUsMobileTable";
// Gforms files

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

//Importing pages
import Create from "./pages/Create";
import Signup from "./Components/Signup";
import Forms from "./pages/Forms";
import Fill from "./Components/Fill";
import Submissions from "./Components/Submissions";
// import CreateForms from "./Components/Gforms";
import JoinUsTable from "./Components/JoinUsTable";
import JoinUsMobileTable from "./Components/JoinUsTableMobile";
function App() {
  return (
    <div className="App">
      <div>{window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}</div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<TableDesktopMain />} /> */}
          <Route path="/login" element={<Login />} />

          <Route path="/form/Announcements" element={<Announcement />} />
          {/* <Route path="/form/Announcements" element={<Blogs />} /> */}

          <Route path="/form/Teams" element={<Team />} />
          <Route path="/form/Links" element={<Links />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* change 1 */}
          <Route path="/form-table" element={<FormSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/form/Blog" element={<Blogs />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/form/Certificate" element={<Certificate />} />
          {/* *********************************************************** */}
          <Route path="/fill/:id" element={<Fill />} />
          <Route path="/submissions/:id" element={<Submissions />} />
          {/* *********************************************************** */}

          <Route
            path="/Certificate-Table"
            element={
              <>
                {window.innerWidth > 750 ? (
                  <CertificateTable />
                ) : (
                  <CertificateMobileTable />
                )}
              </>
            }
          />
          <Route
            path="/Links-Table"
            element={
              <>
                {window.innerWidth > 750 ? (
                  <LinksTable />
                ) : (
                  <LinksMobileTable />
                )}
              </>
            }
          />
          <Route
            path="/Blogs-table"
            element={
              <>
                {window.innerWidth > 750 ? (
                  <BlogsTable />
                ) : (
                  <LinksMobileTable />
                )}
              </>
            }
          />
          <Route
            path="/Teams-Table"
            element={
              <>
                {window.innerWidth > 750 ? <TeamTable /> : <TeamMobileTable />}
              </>
            }
          />
          <Route
            path="/Announcement-Table"
            element={
              <>
                {window.innerWidth > 750 ? (
                  <AnnouncementTable />
                ) : (
                  <AnnouncementMobileTable />
                )}
              </>
            }
          />
          <Route
            path="/ContactUs-Table"
            element={
              <>
                {window.innerWidth > 750 ? (
                  <ContactUsTable />
                ) : (
                  <ContactUsMobileTable />
                )}
              </>
            }
          />
          <Route
            path="/JoinUs-Table"
            element={
              <>
                {window.innerWidth > 750 ? (
                  <JoinUsTable />
                ) : (
                  <JoinUsMobileTable />
                )}
              </>
            }
          />
        </Routes>
      </Router>
      <Footer />
      {/* {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />} */}
      {/* console.log(window.innerWidth)
      <Sidebar />
      <BottomNav /> */}
      {/* <Header /> */}
      {/* {isMobileView > 768 ? <TableDesktopMain /> : <TableMobile />} */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
