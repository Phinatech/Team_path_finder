import styled from "styled-components";
// import Home from "../Main/Homes";
// import SideBar from "../Side/SideBar";
import Home from "../AdminMain/AdminHome";
import SideBar from "../AdminSide/AdminSide";

const AdminHolder=()=>{
    return(
        <div>
            <SideBar/>
            <Cont>
            <Home/>
            </Cont>
        </div>
    )
}
export default AdminHolder;
const Cont = styled.div`
    display: flex;
    justify-content: flex-end;
`