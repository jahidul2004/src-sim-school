import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoTransparent from "../assets/logo/logoTransparent.png";

const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const links = (
        <>
            <li>
                <NavLink to={"/"} onClick={() => setDrawerOpen(false)}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={"/about"} onClick={() => setDrawerOpen(false)}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/department"}
                    onClick={() => setDrawerOpen(false)}
                >
                    Department
                </NavLink>
            </li>
            <li>
                <NavLink to={"/campus"} onClick={() => setDrawerOpen(false)}>
                    Campus
                </NavLink>
            </li>
            <li>
                <NavLink to={"/notice"} onClick={() => setDrawerOpen(false)}>
                    Notices
                </NavLink>
            </li>
            <li>
                <NavLink to={"/result"} onClick={() => setDrawerOpen(false)}>
                    Results
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={
                        "btn bg-[#249742] text-white rounded-none border-none outline-none"
                    }
                    onClick={() => setDrawerOpen(false)}
                >
                    Student Portal
                </NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div
                id="top-message"
                onClick={() => {
                    document.getElementById("top-message").remove();
                }}
                className="relative text-center bg-[#8E1C20] text-white p-[2px]"
            >
                <div className="hidden md:block">
                    Important Notice: Sreerayerchar S.I.M High School Off
                    Tomorrow.
                    <span className="absolute right-2 top-0 cursor-pointer">
                        Close
                    </span>
                </div>
                <div className="md:hidden flex items-center justify-center">
                    <marquee behavior="" direction="">
                        Important Notice: Sreerayerchar S.I.M High School Off
                        Tomorrow.
                    </marquee>
                </div>
            </div>

            <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 sticky top-0 z-40">
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <div>
                            <img
                                className="w-[64px] h-[64px]"
                                src={logoTransparent}
                                alt=""
                            />
                        </div>
                        <div className="text-left w-max px-2">
                            <h1 className="text-3xl md:text-4xl font-bold">
                                S S I M
                            </h1>
                            <p className="tracking-[0.8rem] text-[10px] md:text-xs font-semibold">
                                SCHOOL
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-none">
                    <ul className="menu menu-horizontal px-1 text-[16px]">
                        {links}
                    </ul>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden flex-none">
                    <button
                        onClick={() => setDrawerOpen(true)}
                        aria-label="Open menu"
                        className="btn btn-square btn-ghost text-3xl"
                    >
                        &#9776;
                    </button>
                </div>
            </div>

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                    drawerOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                    <h2 className="text-xl font-bold font-robotoSlab">Menu</h2>
                    <button
                        onClick={() => setDrawerOpen(false)}
                        aria-label="Close menu"
                        className="text-3xl font-bold btn btn-ghost"
                    >
                        &times;
                    </button>
                </div>
                <ul className="menu flex flex-col px-4 py-2 gap-3 text-lg text-gray-800">
                    {links}
                </ul>
            </div>

            {/* Overlay behind drawer */}
            {drawerOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-40"
                    onClick={() => setDrawerOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default NavBar;
