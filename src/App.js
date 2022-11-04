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
function App() {
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
          <Route path="/form/links" element={<Links />} />

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
