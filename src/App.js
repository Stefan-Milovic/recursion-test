import { Outlet } from "react-router-dom";
import "./App.css";
import AddPersonForm from "./components/AddPersonForm/AddPersonForm";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <AddPersonForm />
    </div>
  );
}

export default App;
