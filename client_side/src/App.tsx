import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Alloutes from "./Components/AllRoutes/Alloutes";
import Admindashboard from "./Components/AllRoutes/AdminDashBoard";

function App() {
  return (
    <div className="App">
      <Alloutes />
      <Admindashboard />
    </div>
  );
}

export default App;
