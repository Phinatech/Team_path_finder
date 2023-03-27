import React from "react";
import ReduxState from "./Components/Reduxfile/ReduxState";
import "./App.css";
import Alloutes from "./Components/AllRoutes/Alloutes";
import Admindashboard from "./Components/AllRoutes/AdminDashBoard";
import UserDashBoard from "./Components/AllRoutes/UserDashBoard";
import { useAppSelector } from "./Components/Reduxfile/Store";
// import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <Alloutes />
    </div>
  );
}

export default App;
