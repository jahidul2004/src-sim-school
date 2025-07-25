import { Link, Outlet } from "react-router-dom";

const AdminStudentList = () => {
    return (
        <div>
            <div className="border-2 border-[#249742] rounded-lg p-2 shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-6 ">
                    <Link
                        to={"/admin/studentList/6"}
                        className="bg-info text-center p-2 md:p-4 text-white rounded-lg"
                    >
                        <h1 className="text-xl font-bold">৬ষ্ট শ্রেনী</h1>
                    </Link>
                    <Link to={"/admin/studentList/7"} className="bg-warning text-center p-2 md:p-4 text-white rounded-lg">
                        <h1 className="text-xl font-bold">৭ম শ্রেনী</h1>
                    </Link>
                    <Link to={"/admin/studentList/8"} className="bg-success text-center p-2 md:p-4 text-white rounded-lg">
                        <h1 className="text-xl font-bold">৮ম শ্রেনী</h1>
                    </Link>
                    <Link to={"/admin/studentList/9"} className="bg-error text-center p-2 md:p-4 text-white rounded-lg">
                        <h1 className="text-xl font-bold">৯ম শ্রেনী</h1>
                    </Link>
                    <Link to={"/admin/studentList/10"} className="bg-secondary text-center p-2 md:p-4 text-white rounded-lg col-span-2 md:col-span-1">
                        <h1 className="text-xl font-bold">১০ম শ্রেনী</h1>
                    </Link>
                </div>
                <div className="grid grid-cols-3 gap-1 md:gap-4 mt-2">
                    <Link
                        to={"/admin/studentList/addStudent"}
                        className="bg-error text-center p-2 md:p-4 text-white rounded-lg"
                    >
                        <h1 className="text-xl font-bold">
                            নতুন শিক্ষার্থী যুক্ত করুন
                        </h1>
                    </Link>
                    <div className="bg-secondary text-center p-2 md:p-4 text-white rounded-lg col-span-2 md:col-span-1">
                        <h1 className="text-xl font-bold">
                            শিক্ষার্থী পোর্টাল এ জান
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminStudentList;
