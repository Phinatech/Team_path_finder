import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Alloutes from "./Components/AllRoutes/Alloutes";
import Admindashboard from "./Components/AllRoutes/AdminDashBoard";
import UserDashBoard from "./Components/AllRoutes/UserDashBoard";

function App() {
  return (
    <div className="App">
      <Alloutes />
      <Admindashboard />
      <UserDashBoard />
    </div>
  );
}

export default App;
