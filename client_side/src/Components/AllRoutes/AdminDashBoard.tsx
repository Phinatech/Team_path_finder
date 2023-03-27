import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Flex from "../SavingsDashboard/Flex";
import Piggybank from "../SavingsDashboard/Piggybank";
import Safelock from "../SavingsDashboard/Safelock";
import SavingsDashboard from "../SavingsDashboard/SavingsDashboard";
import Target from "../SavingsDashboard/Target";

const Admindashboard = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/savings",
      children: [
        {
          index: true,
          element: <SavingsDashboard />,
        },
        {
          path: "/savings/piggybank",
          element: <Piggybank />,
        },
        {
          path: "/savings/flex",
          element: <Flex />,
        },
        {
          path: "/savings/safelock",
          element: <Safelock />,
        },
        {
          path: "/savings/target",
          element: <Target />,
        },
      ],
    },
  ]);
  return element;
};

export default Admindashboard;
