import { BiMenu } from "react-icons/bi";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="h-screen flex overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`bg-white shadow-xl fixed md:static top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out
                ${
                    isSidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                }`}
            >
                <div className="p-6 border-b flex items-center justify-between">
                    <h2 className="text-2xl font-extrabold text-[#249742]">
                        অ্যাডমিন প্যানেল
                    </h2>
                    <button onClick={toggleSidebar} className="md:hidden">
                        <IoClose size={22} />
                    </button>
                </div>
                <nav className="p-4 space-y-2 text-gray-700 font-medium">
                    <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        ড্যাশবোর্ড
                    </Link>
                    <Link
                        to="/admin/users"
                        className="block px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        ইউজার তালিকা
                    </Link>
                    <Link
                        to="/admin/notices"
                        className="block px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        নোটিশ
                    </Link>
                    <Link
                        to="/admin/settings"
                        className="block px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        সেটিংস
                    </Link>
                    <Link
                        to="/admin/profile"
                        className="block px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        প্রোফাইল
                    </Link>
                    <Link
                        to="/admin/support"
                        className="block px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        সাপোর্ট
                    </Link>
                </nav>

                <div>
                    <div className="mx-3 px-2 py-4 border-t">
                        <div className="flex items-center gap-2">
                            <img
                                className="w-12 h-12 p-1 rounded-full border-2 border-[#249742]"
                                src="https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif"
                                alt="admin avatar"
                            />
                            <div>
                                <h1 className="text-[#249742] font-bold">
                                    জাকির হোসাইন
                                </h1>
                                <p>#১০২১</p>
                            </div>
                        </div>
                        <button className="mt-3 btn btn-sm rounded-3xl border-none bg-[#249742] text-white w-full">
                            লগআউট
                        </button>
                    </div>

                    <div className="mx-3 px-2 py-4 border-t">
                        <div className="shadow-md p-2 rounded-lg">
                            <h1 className="text-[#249742] font-bold">
                                ডেভেলপার এর সাথে যোগাযোগ
                            </h1>
                            <h1>জাহিদুল ইসলাম জিহাদ</h1>
                            <p>+৮৮০১৭৮৭২৭৫১৮৮</p>
                            <p>islamjahiduljihad@gmail.com</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Area */}
            <div className="flex-1 flex flex-col h-full">
                {/* Topbar */}
                <header className="bg-white border-b shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-30 md:hidden">
                    <div className="p-2 flex items-center space-x-3">
                        <button
                            className="md:hidden text-gray-600"
                            onClick={toggleSidebar}
                        >
                            <BiMenu size={26} />
                        </button>
                        <h1 className="text-2xl md:text-2xl font-semibold text-[#249742]">
                            স্বাগতম, অ্যাডমিন
                        </h1>
                    </div>
                    <div>
                        <img
                            className="w-10 h-10 rounded-full border-2 border-[#249742]"
                            src="https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif"
                            alt="admin avatar"
                        />
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
