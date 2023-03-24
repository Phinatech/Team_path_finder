import React from "react";
import { useRoutes } from "react-router-dom";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import Homescreen from "../Homescreen/Homescreen";
const Alloutes = () => {
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
  ]);
  return element;
};

export default Alloutes;
