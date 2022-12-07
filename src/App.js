// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// // import { Redirect } from 'react-router';
// import BottomNav from "./Components/BottomNav";
// import Sidebar from "./Components/Sidebar";
// import Home from "./Components/Home";
// import Login from "./Components/Login";
// import Navb from "./Components/FormNav";
// import Announcement from "./Components/Forms/Announcement";
// // Gforms imports
// import Home from "./Home";
// import Create from "./Create";
// import Login from "./Login";
// import Signup from "./Signup";
// import Forms from "./Forms";
// import Fill from "./Fill";
// import Submissions from "./Submissions";
// // *******************

// function App() {
//   let isMobileView = window.innerWidth;

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/" element={<TableDesktopMain />} /> */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/form/announcement" element={<Announcement />} />
//           <Route path="/Nav" element={<Navb />} />
//           {/* gforms route paths */}
//           <Route exact path="/" component={Home} />
//               <Route path="/create" component={Create} />
//               <Route path="/login" component={Login} />
//               <Route path="/signup" component={Signup} />
//               <Route path="/forms" component={Forms} />
//               <Route path="/fill/:id" component={Fill} />
//               <Route path="/submissions/:id" component={Submissions} />
//         </Routes>
//       </Router>
//       {/* {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />} */}
//       {/* console.log(window.innerWidth)
//       <Sidebar />
//       <BottomNav /> */}
//       {/* <Header /> */}
//       {/* {isMobileView > 768 ? <TableDesktopMain /> : <TableMobile />} */}
//       {/* <Login /> */}
//     </div>
//   );
// }

// export default App;

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

// Gforms files

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Importing pages
import Create from "./components/Create";
import Signup from "./components/Signup";
import Forms from "./components/Forms";
import Fill from "./components/Fill";
import Submissions from "./components/Submissions";
import GformsTable from "./Components/Gforms";

function App() {
  let mainTable = false;
  let isMobileView = window.innerWidth;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<TableDesktopMain />} /> */}

          <Route path="/login" element={<Login />} />

          {/* <Route path="/form/announcement" element={<Announcement />} /> */}
          {/* <Route path="/Nav" element={<Navb />} /> */}

          <Route path="/form/Announcements" element={<Announcement />} />
          <Route path="/form/Teams" element={<Team />} />
          <Route path="/form/Links" element={<Links />} />

          {/* <Route path="/" element={<Home />} /> */}

          {/* change 1 */}
          <Route path="/form-table" element={<GformsTable />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forms" element={<Forms />} />
          {/* *********************************************************** */}
          <Route path="/fill/:id" element={<Fill />} />
          <Route path="/submissions/:id" element={<Submissions />} />
          {/* *********************************************************** */}
          {/* change 2 */}
          <Route path="/Create" element={<Create />} />

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
