import './App.css';
import BottomNav from './Components/BottomNav';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}
      {/* console.log(window.innerWidth)
      <Sidebar />
      <BottomNav /> */}
      <Login />
    </div>
  );
}

export default App;