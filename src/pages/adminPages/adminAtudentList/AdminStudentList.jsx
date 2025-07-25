import React from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import {
    FaUserGraduate,
    FaChalkboardTeacher,
    FaBullhorn,
    FaTasks,
    FaUsers,
    FaClipboardList,
} from "react-icons/fa";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const AdminStudentList = () => {
    // চার্ট ডাটা (Demo)
    const lineData = {
        labels: ["জানু", "ফেব্রু", "মার্চ", "এপ্রিল", "মে", "জুন"],
        datasets: [
            {
                label: "শিক্ষার্থী সংখ্যা",
                data: [50, 65, 80, 75, 90, 100],
                borderColor: "#249742",
                backgroundColor: "rgba(36, 151, 66, 0.2)",
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const pieData = {
        labels: ["হাজিরা", "অনুপস্থিত", "ছুটি"],
        datasets: [
            {
                label: "উপস্থিতির ভাগ",
                data: [450, 30, 20],
                backgroundColor: ["#249742", "#ffbb28", "#ff8042"],
                hoverOffset: 30,
            },
        ],
    };

    const barData = {
        labels: [
            "৬ষ্ট শ্রেনী",
            "৭ম শ্রেনী",
            "৮ম শ্রেনী",
            "৯ম শ্রেনী",
            "১০ম শ্রেনী",
        ],
        datasets: [
            {
                label: "শিক্ষার্থী সংখ্যা",
                data: [120, 115, 130, 110, 105],
                backgroundColor: "#249742",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "bottom", labels: { font: { size: 14 } } },
            title: { display: false },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { font: { size: 14 } },
            },
            x: {
                ticks: { font: { size: 14 } },
            },
        },
    };

    // নতুন ৪টা সেকশনের ডাটা
    const totalStudents = 580;
    const totalTeachers = 45;
    const recentNotices = [
        { id: 1, title: "শিক্ষার্থী উপস্থিতি নিয়ম", date: "২০২৫-০৭-২০" },
        { id: 2, title: "ঈদ ছুটির ঘোষণা", date: "২০২৫-০৭-১৫" },
    ];
    const progressStatus = [
        { task: "নতুন ভবন নির্মাণ", progress: 75 },
        { task: "লাইব্রেরি আপডেট", progress: 40 },
        { task: "ইনফ্রাস্ট্রাকচার উন্নয়ন", progress: 90 },
    ];

    return (
        <div className="max-w-7xl mx-auto p-4 space-y-10">
            {/* শ্রেণী লিংকস */}
            <div className="border-2 border-[#249742] rounded-lg p-4 shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[
                        "৬ষ্ট শ্রেনী",
                        "৭ম শ্রেনী",
                        "৮ম শ্রেনী",
                        "৯ম শ্রেনী",
                        "১০ম শ্রেনী",
                    ].map((cls, i) => (
                        <a
                            href={`/admin/studentList/${6 + i}`}
                            key={cls}
                            className={`text-white text-center p-4 rounded-lg font-bold ${
                                i === 0
                                    ? "bg-[#249742] hover:bg-[#1f7c38]"
                                    : i === 1
                                    ? "bg-yellow-500 hover:bg-yellow-600"
                                    : i === 2
                                    ? "bg-green-600 hover:bg-green-700"
                                    : i === 3
                                    ? "bg-red-600 hover:bg-red-700"
                                    : "bg-purple-600 hover:bg-purple-700 col-span-2 md:col-span-1"
                            }`}
                        >
                            {cls}
                        </a>
                    ))}
                </div>
            </div>

            {/* চার্টস সেকশন */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* লাইন চার্ট */}
                <div className="bg-white p-4 rounded-lg shadow border border-[#249742]">
                    <h3 className="text-xl font-bold text-[#249742] mb-3 flex items-center gap-2">
                        <FaUserGraduate /> শিক্ষার্থীর প্রবৃদ্ধি
                    </h3>
                    <Line data={lineData} options={options} />
                </div>

                {/* পাই চার্ট */}
                <div className="bg-white p-4 rounded-lg shadow border border-[#249742]">
                    <h3 className="text-xl font-bold text-[#249742] mb-3 flex items-center gap-2">
                        <FaClipboardList /> উপস্থিতির সারাংশ
                    </h3>
                    <Pie data={pieData} options={options} />
                </div>

                {/* বার চার্ট */}
                <div className="bg-white p-4 rounded-lg shadow border border-[#249742]">
                    <h3 className="text-xl font-bold text-[#249742] mb-3 flex items-center gap-2">
                        <FaChalkboardTeacher /> শ্রেণী অনুযায়ী শিক্ষার্থী সংখ্যা
                    </h3>
                    <Bar data={barData} options={options} />
                </div>
            </div>

            {/* ৪টি নতুন অর্থবোধক সেকশন */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* মোট শিক্ষার্থী */}
                <div className="bg-[#249742] p-6 rounded-lg shadow text-white flex flex-col items-center justify-center space-y-2">
                    <FaUserGraduate size={40} />
                    <h3 className="text-3xl font-bold">{totalStudents}</h3>
                    <p className="text-lg">মোট শিক্ষার্থী</p>
                </div>

                {/* মোট শিক্ষক */}
                <div className="bg-yellow-500 p-6 rounded-lg shadow text-white flex flex-col items-center justify-center space-y-2">
                    <FaChalkboardTeacher size={40} />
                    <h3 className="text-3xl font-bold">{totalTeachers}</h3>
                    <p className="text-lg">মোট শিক্ষক</p>
                </div>

                {/* সাম্প্রতিক ঘোষণা */}
                <div className="bg-white p-4 rounded-lg shadow border border-[#249742]">
                    <h3 className="text-xl font-bold text-[#249742] mb-4 flex items-center gap-2">
                        <FaBullhorn /> সাম্প্রতিক ঘোষণা
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {recentNotices.map((notice) => (
                            <li key={notice.id}>
                                <span className="font-semibold">
                                    {notice.title}
                                </span>{" "}
                                -{" "}
                                <span className="text-gray-500">
                                    {notice.date}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* কার্যক্রমের স্ট্যাটাস */}
                <div className="bg-white p-4 rounded-lg shadow border border-[#249742]">
                    <h3 className="text-xl font-bold text-[#249742] mb-4 flex items-center gap-2">
                        <FaTasks /> কার্যক্রমের স্ট্যাটাস
                    </h3>
                    <div className="space-y-4">
                        {progressStatus.map(({ task, progress }) => (
                            <div key={task}>
                                <p className="font-semibold text-gray-800 mb-1">
                                    {task}
                                </p>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div
                                        className="bg-[#249742] h-4 rounded-full"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminStudentList;
