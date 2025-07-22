import { NavLink } from "react-router-dom";
import logoTransparent from "../assets/logo/logoTransparent.png";

const NavBar = () => {
    const links = (
        <>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink to={"/department"}>Department</NavLink>
            </li>
            <li>
                <NavLink to={"/campus"}>Campus</NavLink>
            </li>
            <li>
                <NavLink to={"/notice"}>Notices</NavLink>
            </li>
            <li>
                <NavLink to={"/result"}>Results</NavLink>
            </li>
            <li>
                <NavLink
                    className={
                        "btn bg-[#249742] text-white rounded-none border-none outline-none"
                    }
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
                Important Notice: Sreerayerchar S.I.M High School Off Tomorrow.
                <span className="absolute right-2 top-0 cursor-pointer">
                    Close
                </span>
            </div>
            <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <div>
                            <img
                                className="w-[64px] h-[64px]"
                                src={logoTransparent}
                                alt=""
                            />
                        </div>
                        <div className="text-center w-max px-2">
                            <h1 className="text-4xl font-bold font-robotoSlab">
                                S S I M
                            </h1>
                            <p className="tracking-[0.8rem] text-xs font-semibold">
                                SCHOOL
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-[16px]">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
