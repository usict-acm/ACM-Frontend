import "./App.css";
import BottomNav from "./Components/BottomNav";
import Sidebar from "./Components/Sidebar";
import TableMobile from "./Components/TableMobile";
import TableDesktopMain from "./Components/TableDesktopMain";
import Header from "./Components/Header";

function App() {
  let isMobileView = window.innerWidth;

  return (
    <div className="App">
      {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}
      {/* console.log(window.innerWidth)
      <Sidebar />
      <BottomNav /> */}
      {/* <Header /> */}
      {isMobileView > 768 ? <TableDesktopMain /> : <TableMobile />}
    </div>
  );
}

export default App;
