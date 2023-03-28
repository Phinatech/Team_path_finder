import react from "react"
import { useRoutes } from "react-router-dom"
import Homescreen from "../Homescreen/Homescreen"
import Holder from "../User/Holder/Holder"
import SavingsDashboard from "../User/SavingsDashboard/SavingsDashboard"
import Piggybank from "../User/SavingsDashboard/Piggybank"
import Home from "../User/Main/Homes"
import Safelock from "../User/SavingsDashboard/Safelock"
import Target from "../User/SavingsDashboard/Target"
import Flex from "../User/SavingsDashboard/Flex"
const UserRoute=()=>{
    const element = useRoutes([
        {
            path:"/holder",
            element:<Home/>
        },
        {
            path:"/save",
            element:<SavingsDashboard/>
        },
        {
            path:"/usersavings",
            element:<Piggybank/>
        },
        {
            path:"/backtoschool",
            element:<Safelock/>
        },
        {
            path:"/withdraw",
            element:<Target/>
        },
        {
            path:"/deposit",
            element:<Flex/>
        },
    ])
    return(
        element
    )
}
export default UserRoute