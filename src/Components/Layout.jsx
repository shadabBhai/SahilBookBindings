import Header from "./Header"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout