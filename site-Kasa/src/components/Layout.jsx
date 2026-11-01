import {Outlet} from "react-router"
import Header from "./Header"
import Footer from "./Footer"
import "../scss/Index.scss"

function Layout() {
    return(
    <>
        <div className="main">
            <Header />
            <Outlet />
        </div>
        <Footer />
    </>
    )
}

export default Layout