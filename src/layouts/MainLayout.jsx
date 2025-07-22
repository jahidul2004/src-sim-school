import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <>
            {/* Navbar start */}
            <NavBar></NavBar>
            {/* Navbar end */}

            {/* Outlet start */}
            <Outlet></Outlet>
            {/* Outlet end */}

            {/* Footer start */}
            <Footer></Footer>
            {/* Footer end */}
        </>
    );
};

export default MainLayout;
