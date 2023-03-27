import React from "react";
import { useRoutes } from "react-router-dom";
import { convertToObject } from "typescript";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import Homescreen from "../Homescreen/Homescreen";
import { useAppSelector } from "../Reduxfile/Store";
import Admindashboard from "./AdminDashBoard";
import UserDashBoard from "./UserDashBoard";
import { useNavigate } from "react-router-dom";
import { User } from "../Reduxfile/ReduxState";
import PrivateRoutes from "../PrivateRouting/PrivateRouting";

const Alloutes = () => {
  const user = useAppSelector((state) => state);
  const newUser = JSON.parse(JSON.stringify(user));
  console.log("Data show: ", newUser.currentUser);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (newUser.isAdmin) {
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/userdashboard", { replace: true });
    }
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/start",
      element: (
        <PrivateRoutes>
          <div>{newUser.isAdmin ? <Admindashboard /> : <UserDashBoard />}</div>
        </PrivateRoutes>
      ),
    },
  ]);
  return element;
};

export default Alloutes;
