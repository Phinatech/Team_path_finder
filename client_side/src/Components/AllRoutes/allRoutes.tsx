import react from "react"
import { useRoutes } from "react-router-dom"
import Homescreen from "../Homescreen/Homescreen"
import SignIn from "../Form/SignIn"
import SignUp from "../Form/SignUp"


const AllRoute=()=>{
    const element = useRoutes([
        {
            path:"/",
            element:<Homescreen/>
        },
        {
            path:"/signup",
            element:<SignUp/>
        },
        {
            path:"/signin",
            element:<SignIn/>
        },
    ])
    return(
        element
    )
}
export default AllRoute