import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navb from "./Components/FormNav";
import Announcement from "./Components/Forms/Announcement";
import Team from "./Components/Forms/Team";
import Certificate from "./Components/Forms/Certificate";

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
          <Route path="/Nav" element={<Navb />} />
          <Route path="/form/team" element={<Team />} />
          <Route path="/form/certificate" element={<Certificate />} />
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
