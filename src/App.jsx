import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { AnnouncementTable, AnnouncementForm } from "./Components/announcement";
import Login from "./Components/Login";
import { BlogTable, BlogForm } from "./Components/blog";
// import Navb from "./Components/FormNav";
// import Navb from "./Components/FormNav";
// import Teams from "./Components/Forms/Teams";
import { LinkTable, LinkForm } from "./Components/link";
import { ContactUsTable } from "./Components/contactUs";
import { JoinUsTable } from "./Components/joinUs";
import { CertificateTable, CertificateForm } from "./Components/certificate";
import { TeamTable, TeamForm } from "./Components/team";
import FormSection from "./Components/FormSection";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
// Gforms files

//Importing pages
import Signup from "./Components/Signup";
import Forms from "./pages/Forms";
import Fill from "./Components/Fill";
import Submissions from "./Components/Submissions";
// import CreateForms from "./Components/Gforms";
import NavBar from "./Components/navbar";
import UserPage from "./Components/UserPage";
import Members from "./Components/Members";
import { getSession } from "./api/fetchData";
import { useEffect, useState, useSyncExternalStore } from "react";
function RenderRoutes() {
  return (
    <>
      <Route path="/" element={<AnnouncementTable />} />
      <Route path="/login" element={<Login />} />

      <Route path="/form/Announcement" element={<AnnouncementForm />} />

      <Route path="/form/Link" element={<LinkForm />} />
      {/* <Route path="/" element={<Home />} /> */}
      {/* change 1 */}
      <Route path="/form-table" element={<FormSection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/form/Blog" element={<BlogForm />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/form/Certificate" element={<CertificateForm />} />
      <Route path="/form/Team" element={<TeamForm />} />
      {/* *********************************************************** */}
      <Route path="/fill/:id" element={<Fill />} />
      <Route path="/submissions/:id" element={<Submissions />} />
      {/* *********************************************************** */}

      <Route
        path="/Certificate-Table"
        element={
          <>
            <CertificateTable />
          </>
        }
      />
      <Route path="/Links-Table" element={<LinkTable />} />
      <Route path="/Blogs-table" element={<BlogTable />} />
      <Route path="/Teams-Table" element={<TeamTable />} />
      <Route path="/Announcement-Table" element={<AnnouncementTable />} />
      <Route path="/ContactUs-Table" element={<ContactUsTable />} />
      <Route path="/JoinUs-Table" element={<JoinUsTable />} />
      <Route path="/Members" element={<Members />} />
      <Route path="/User/:id" element={<UserPage />} />
    </>
  );
}

function CheckLogin() {
  const session = getSession();
  const location = useLocation();
  if (location.pathname == "/login") {
    return;
  }
  return (
    (!session || session.expires < +new Date()) && <Navigate to="/login" />
  );
}

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <ReactNotifications />
        <NavBar />
        <main>
          <Routes>{RenderRoutes()}</Routes>
          <CheckLogin
            onLogin={() => {
              setLoggedIn(true);
              console.log(LoggedIn);
            }}
          />
        </main>
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
