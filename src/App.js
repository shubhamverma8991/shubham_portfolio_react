import logo from "./logo.svg";
import "./App.css";
import SidebarCom from "./components/sidebar/SidebarCom";

function App() {
  return (
    <>
      <main>
        <SidebarCom />
        <div className="main-content"></div>
      </main>
    </>
  );
}

export default App;
