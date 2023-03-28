import styled from "styled-components";
import UserRoute from "../../AllRoutes/userRoutes";
import Home from "../Main/Homes";
import SideBar from "../Side/SideBar";

const Holder = () => {
  return (
    <div>
      <SideBar />
      <Cont>
        <UserRoute />
      </Cont>
    </div>
  );
};
export default Holder;
const Cont = styled.div`
  display: flex;
  justify-content: flex-end;
`;
