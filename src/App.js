import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// import { Redirect } from 'react-router';
import BottomNav from "./Components/BottomNav";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Login from './Components/Login';
import Navb from "./Components/FormNav";
function App() {
  let isMobileView = window.innerWidth;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/" element={<TableDesktopMain />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/Nav" element={<Navb />} />
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
