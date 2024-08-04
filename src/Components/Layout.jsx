import Header from "./Header"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <div>
            <Header />
            <div className="">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout