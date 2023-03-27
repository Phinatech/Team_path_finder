import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../Reduxfile/Store";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }: any) => {
  const navigate = useNavigate();

  const user = useAppSelector((state) => state);
  const newUser = JSON.parse(JSON.stringify(user));
  console.log("this is a new user", newUser);

  if (newUser) {
    return children;
  } else {
    navigate("/", { replace: false });
  }
};

export default PrivateRoutes;
