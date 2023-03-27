import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Flex from "../SavingsDashboard/Flex";
import Safelock from "../SavingsDashboard/Safelock";
import Target from "../SavingsDashboard/Target";
import UserFlex from "../UserSavingDash/UserFlex";
import UserPiggybank from "../UserSavingDash/UserPiggybank";
import UserSafelock from "../UserSavingDash/UserSafelock";
import UserSavingsDashboard from "../UserSavingDash/UserSavingsDashboard";
import UserTarget from "../UserSavingDash/UserTarget";

const UserDashBoard = () => {
  let element = useRoutes([
    {
      path: "/userdashboard",
      element: <Dashboard />,
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

export default UserDashBoard;
