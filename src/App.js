import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
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
function App() {
  let mainTable = false;
  let isMobileView = window.innerWidth;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<TableDesktopMain />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/form/announcement" element={<Announcement />} />
          {/* <Route path="/Nav" element={<Navb />} /> */}
          <Route path="/form/Announcements" element={<Announcement />} />
          <Route path="/form/Teams" element={<Team />} />
          <Route path="/form/Links" element={<Links />} />
          <Route
            path="/Certificate-Table"
            element={
              <>
                {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}
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
                {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}
                {window.innerWidth > 750 ? (
                  <LinksTable />
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
                {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}
                {window.innerWidth > 750 ? <TeamTable /> : <TeamMobileTable />}
              </>
            }
          />
          <Route
            path="/Announcement-Table"
            element={
              <>
                {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}
                {window.innerWidth > 750 ? (
                  <AnnouncementTable />
                ) : (
                  <AnnouncementMobileTable />
                )}
              </>
            }
          />
          <Route path="/form/Certificate" element={<Certificate />} />
        </Routes>
      </Router>
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
