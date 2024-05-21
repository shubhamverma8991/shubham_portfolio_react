import logo from "./logo.svg";
import "./App.css";
import SidebarCom from "./components/sidebar/SidebarCom";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main>
        <SidebarCom />
        <div className="main-content">
          <Navbar />
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
