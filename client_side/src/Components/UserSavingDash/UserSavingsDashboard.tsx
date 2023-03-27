import React from "react";
import styled from "styled-components";
import SideBar from "../Dashboard/SideBar";
import Savings from "./Savings";

const UserSavingsDashboard = () => {
  return (
    <Container>
      <SideBar />
      <Savings />
    </Container>
  );
};

export default UserSavingsDashboard;

const Container = styled.div`
  display: flex;
`;
