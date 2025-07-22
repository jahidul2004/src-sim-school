import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            {/* Navbar start */}
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
