import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import {
    CalendarDays,
    UserPlus,
    Settings,
    Users,
    ShieldCheck,
    LogOut,
} from "lucide-react";

const AdminHome = () => {
    const Card = ({ children }) => (
        <div className="bg-white rounded-lg shadow p-4">{children}</div>
    );

    const Button = ({ children, variant = "default", ...props }) => {
        const base =
            "px-4 py-2 rounded font-semibold flex items-center justify-center";
        const variants = {
            default: "bg-[#249742] text-white hover:bg-[#1e7f38]",
            outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
            destructive: "bg-red-500 text-white hover:bg-red-600",
        };
        return (
            <button
                className={`btn btn-sm ${base} ${variants[variant]}`}
                {...props}
            >
                {children}
            </button>
        );
    };

    return (
        <div className="p-4 space-y-6">
            {/* Dashboard Overview Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <Users className="mx-auto text-blue-500" size={32} />
                    <h3 className="text-2xl font-bold text-center mt-2">
                        ১২০০+
                    </h3>
                    <p className="text-center text-gray-500">মোট শিক্ষার্থী</p>
                </Card>
                <Card>
                    <UserPlus className="mx-auto text-green-500" size={32} />
                    <h3 className="text-2xl font-bold text-center mt-2">৪৫</h3>
                    <p className="text-center text-gray-500">
                        নতুন শিক্ষার্থী (এই সপ্তাহ)
                    </p>
                </Card>
                <Card>
                    <ShieldCheck
                        className="mx-auto text-yellow-500"
                        size={32}
                    />
                    <h3 className="text-2xl font-bold text-center mt-2">৯৮৭</h3>
                    <p className="text-center text-gray-500">
                        সক্রিয় শিক্ষার্থী
                    </p>
                </Card>
                <Card>
                    <CalendarDays
                        className="mx-auto text-purple-500"
                        size={32}
                    />
                    <h3 className="text-2xl font-bold text-center mt-2">৩৫০</h3>
                    <p className="text-center text-gray-500">
                        মোট পোস্ট / এন্ট্রি
                    </p>
                </Card>
            </div>

            {/* Analytics / Graphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <h2 className="text-xl font-bold mb-2">
                        শিক্ষার্থী সাইন-আপ ট্রেন্ড
                    </h2>
                    <Line
                        data={{
                            labels: [
                                "সোম",
                                "মঙ্গল",
                                "বুধ",
                                "বৃহস্পতি",
                                "শুক্র",
                                "শনি",
                                "রবি",
                            ],
                            datasets: [
                                {
                                    label: "নতুন শিক্ষার্থী",
                                    data: [12, 19, 10, 8, 15, 9, 13],
                                    backgroundColor: "rgba(59, 130, 246, 0.5)",
                                    borderColor: "rgba(59, 130, 246, 1)",
                                },
                            ],
                        }}
                    />
                </Card>
                <Card>
                    <h2 className="text-xl font-bold mb-2">মাসিক উপস্থিতি</h2>
                    <Bar
                        data={{
                            labels: [
                                "জানু",
                                "ফেব",
                                "মার্চ",
                                "এপ্রিল",
                                "মে",
                                "জুন",
                            ],
                            datasets: [
                                {
                                    label: "উপস্থিতি",
                                    data: [5000, 7000, 6000, 8000, 7500, 9000],
                                    backgroundColor: "rgba(34,197,94,0.5)",
                                },
                            ],
                        }}
                    />
                </Card>
            </div>

            {/* Recent Activity Feed */}
            <Card>
                <h2 className="text-xl font-bold mb-4">সাম্প্রতিক কার্যকলাপ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <p className="shadow-md py-2 px-1 rounded-lg">
                        ✅ Jahidul সাইন আপ করেছেন -{" "}
                        <span className="text-sm text-gray-500">
                            ৫ মিনিট আগে
                        </span>
                    </p>
                    <p className="shadow-md py-2 px-1 rounded-lg">
                        📝 Tusi একটি রিভিউ দিয়েছেন -{" "}
                        <span className="text-sm text-gray-500">
                            ১০ মিনিট আগে
                        </span>
                    </p>
                    <p className="shadow-md py-2 px-1 rounded-lg">
                        ⚠️ Hasan রিপোর্ট করেছেন -{" "}
                        <span className="text-sm text-gray-500">
                            ৩০ মিনিট আগে
                        </span>
                    </p>
                    <p className="shadow-md py-2 px-1 rounded-lg">
                        ⚠️ Sojib রিপোর্ট করেছেন -{" "}
                        <span className="text-sm text-gray-500">
                            ৫০ মিনিট আগে
                        </span>
                    </p>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pending Approvals / Notifications */}
                <Card>
                    <h2 className="text-xl font-bold mb-4">
                        বিচারাধীন বিষয়সমূহ
                    </h2>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between border p-1 md:p-4 rounded-lg shadow-md">
                            <p>নতুন ইউজার রিকোয়েস্ট - Samiul</p>
                            <div className="flex gap-2">
                                <Button variant="outline">অনুমোদন</Button>
                                <Button variant="destructive">বাতিল</Button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border p-1 md:p-4 rounded-lg shadow-md">
                            <p>রিপোর্টকৃত পোস্ট: #124</p>
                            <div className="flex gap-2">
                                <Button variant="outline">সমাধান</Button>
                                <Button variant="destructive">বাতিল</Button>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Admin Notes */}
                <Card className="mt-6">
                    <h2 className="text-xl font-bold mb-2">অ্যাডমিন নোট</h2>
                    <p className="text-sm my-2">
                        📝 আগামীকাল রিপোর্টগুলো রিভিউ করতে হবে।
                    </p>
                    <p className="text-sm my-2">
                        📝 নতুন শিক্ষার্থী ভর্তির নোটিশ দিতে হবে।
                    </p>
                    <p className="text-sm my-2">
                        📝 সাংস্কৃতিক অনুষ্ঠান এর তারিখ নিয়ে আলোচনা করতে হবে।
                    </p>
                </Card>
            </div>

            {/* 🔗 Quick Access Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <Button
                    className="w-full flex flex-col items-center justify-center p-4 border shadow-sm hover:shadow-md transition rounded-xl"
                    variant="outline"
                >
                    <UserPlus className="w-6 h-6 mb-1 text-[#249742]" />
                    <span className="text-sm font-medium">
                        নতুন ব্যবহারকারী
                    </span>
                </Button>

                <Button
                    className="w-full flex flex-col items-center justify-center p-4 border shadow-sm hover:shadow-md transition rounded-xl"
                    variant="outline"
                >
                    <Users className="w-6 h-6 mb-1 text-[#249742]" />
                    <span className="text-sm font-medium">সকল ব্যবহারকারী</span>
                </Button>

                <Button
                    className="w-full flex flex-col items-center justify-center p-4 border shadow-sm hover:shadow-md transition rounded-xl"
                    variant="outline"
                >
                    <Settings className="w-6 h-6 mb-1 text-[#249742]" />
                    <span className="text-sm font-medium">সেটিংস</span>
                </Button>

                <Button
                    className="w-full flex flex-col items-center justify-center p-4 border shadow-sm hover:shadow-md transition rounded-xl"
                    variant="destructive"
                >
                    <LogOut className="w-6 h-6 mb-1 text-[#249742]" />
                    <span className="text-sm font-medium">লগআউট</span>
                </Button>
            </div>

            {/* Shortcut Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card>
                    <h2 className="font-bold">আজকের জন্মদিন</h2>
                    <p>🎂 Rahim - শুভ জন্মদিন!</p>
                </Card>
                <Card>
                    <h2 className="font-bold">সিস্টেম স্ট্যাটাস</h2>
                    <p>✅ সার্ভার সচল</p>
                </Card>
                <Card>
                    <h2 className="font-bold">আজকের ক্যালেন্ডার</h2>
                    <p>📅 ২২ জুলাই ২০২৫, মঙ্গলবার</p>
                </Card>
            </div>
        </div>
    );
};

export default AdminHome;
