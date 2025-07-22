import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoTransparent from "../assets/logo/logoTransparent.png";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiStudent } from "react-icons/pi";

const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const links = (
        <>
            <li>
                <NavLink to={"/"} onClick={() => setDrawerOpen(false)}>
                    হোম
                </NavLink>
            </li>
            <li>
                <NavLink to={"/about"} onClick={() => setDrawerOpen(false)}>
                    প্রতিষ্ঠান সম্পর্কে
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/academic"}
                    onClick={() => setDrawerOpen(false)}
                >
                    একাডেমিক
                </NavLink>
            </li>
            <li>
                <NavLink to={"/faculty"} onClick={() => setDrawerOpen(false)}>
                    ফ্যাকাল্টি
                </NavLink>
            </li>
            <li>
                <NavLink to={"/notice"} onClick={() => setDrawerOpen(false)}>
                    নোটিশ
                </NavLink>
            </li>
            <li>
                <NavLink to={"/result"} onClick={() => setDrawerOpen(false)}>
                    ফলাফল
                </NavLink>
            </li>
            <li>
                <NavLink to={"/result"} onClick={() => setDrawerOpen(false)}>
                    ফটো গ্যালারী
                </NavLink>
            </li>
            <li>
                <NavLink to={"/result"} onClick={() => setDrawerOpen(false)}>
                    যোগাযোগ
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={
                        "btn bg-[#249742] text-white rounded-3xl border-none outline-none flex items-center gap-2"
                    }
                    onClick={() => setDrawerOpen(false)}
                >
                    স্টুডেন্ট পোর্টাল <PiStudent />
                </NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div
                id="top-message"
                className="relative text-center bg-[#8E1C20] text-white p-[2px]"
            >
                <div className="hidden md:block">
                    গুরুত্বপূর্ণ নোটিশঃ মাইলস্টোন কলেজ এর এই প্যাথেটিক অবস্থার
                    কারনে আগামি কাল সকাল ১০ টায় স্কুল প্রাঙ্গনে মিলাদ মাহফিল
                    অনুষ্ঠিত হবে।
                    <span className="absolute right-2 top-0 cursor-pointer">
                        <IoIosCloseCircleOutline
                            onClick={() => {
                                document.getElementById("top-message").remove();
                            }}
                            size={24}
                        />
                    </span>
                </div>
                <div className="md:hidden flex items-center justify-center">
                    <marquee behavior="" direction="">
                        গুরুত্বপূর্ণ নোটিশঃ মাইলস্টোন কলেজ এর এই প্যাথেটিক
                        অবস্থার কারনে আগামি কাল সকাল ১০ টায় স্কুল প্রাঙ্গনে
                        মিলাদ মাহফিল অনুষ্ঠিত হবে। সবাইকে উপস্থিত থাকতে বলা হলো।
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
                            <h1 className="text-2xl md:text-4xl font-bold">
                                এস এস আই এম
                            </h1>
                            <p className="tracking-[0.6rem] md:tracking-[1rem] text-[#249742] text-xs text-center md:text-xs font-semibold">
                                উচ্চ বিদ্যালয়
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-none">
                    <ul className="menu menu-horizontal px-1 text-[18px]">
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
