import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllRoute from './components/AllRoutes/allRoutes';
import Holder from './components/User/Holder/Holder';
import UserRoute from './components/AllRoutes/userRoutes';
import AdminHolder from './components/Admin/AdminHolder/adminHolder';
function App() {
  const user = true;
  return (
    <div className="App">
     <AllRoute/>
     {
     user === true ?  <Holder/> :  <AdminHolder/>
     }
    </div>
  );
}

export default App;
