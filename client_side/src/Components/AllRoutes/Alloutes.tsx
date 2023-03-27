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

import UserTarget from "../UserSavingDash/UserTarget";
import UserHomeDashboard from "../UserDashBoard/UserHomeDashboard";
import UserSavingsDashboard from "../UserSavingDash/UserSavingsDashboard";
import UserPiggybank from "../UserSavingDash/UserPiggybank";
import UserFlex from "../UserSavingDash/UserFlex";
import UserSafelock from "../UserSavingDash/UserSafelock";

const Alloutes = () => {
  const user = useAppSelector((state) => state);
  const newUser = JSON.parse(JSON.stringify(user));
  console.log("Data show: ", newUser.currentUser);

  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (newUser.isAdmin) {
  //     navigate("/dashboard", { replace: true });
  //   } else {
  //     navigate("/", { replace: true });
  //   }
  // }, []);

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
    // {
    //   path: "/dashing",
    //   element: <Admindashboard />,
    // },
    // {
    //   path: "/dashing",
    //   element: (
    //     // <PrivateRoutes>
    //     <div>{newUser.isAdmin ? <Admindashboard /> : <UserDashBoard />}</div>
    //     // </PrivateRoutes>
    //   ),
    // },

    {
      path: "/dashboard",
      element: <UserHomeDashboard />,
    },
    {
      path: "/savings",
      children: [
        {
          index: true,
          element: <UserSavingsDashboard />,
        },
        {
          path: "/savings/piggybank",
          element: <UserPiggybank />,
        },
        {
          path: "/savings/flex",
          element: <UserFlex />,
        },
        {
          path: "/savings/safelock",
          element: <UserSafelock />,
        },
        {
          path: "/savings/target",
          element: <UserTarget />,
        },
      ],
    },
  ]);
  return element;
};

export default Alloutes;
