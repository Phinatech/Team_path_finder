import React from "react";
import styled from "styled-components";
import Allroutes from "../AllRoutes/AdminDashBoard";
import Homes from "./Homes";
import SideBar from "./UserSideBar";

const UserHomeDashboard = () => {
  return (
    <Container>
      <SideBar />
      <Homes />
    </Container>
  );
};

export default UserHomeDashboard;
const Container = styled.div`
  display: flex;
`;
