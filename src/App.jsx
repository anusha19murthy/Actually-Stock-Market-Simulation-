import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Navbar />
        <div className="content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}