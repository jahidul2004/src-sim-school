import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";

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
            {/* Footer end */}
        </>
    );
};

export default MainLayout;
