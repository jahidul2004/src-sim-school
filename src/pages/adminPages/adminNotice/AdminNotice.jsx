import React from "react";
import { FaPlus } from "react-icons/fa";

const AdminNotice = () => {
    const notices = [
        {
            id: "N-001",
            title: "৬ষ্ঠ শ্রেণির পরীক্ষার সময়সূচি প্রকাশ",
            shortDesc:
                "৬ষ্ঠ শ্রেণির ২য় সাময়িক পরীক্ষার সময়সূচি প্রকাশ করা হয়েছে।",
            noticeLink: "https://example.com/notice-001",
            date: "২০২৫-০৭-২৫",
        },
        {
            id: "N-002",
            title: "বিদ্যালয় বন্ধ সংক্রান্ত বিজ্ঞপ্তি",
            shortDesc:
                "আগামী সোমবার জাতীয় শোক দিবস উপলক্ষে বিদ্যালয় বন্ধ থাকবে।",
            noticeLink: "https://example.com/notice-002",
            date: "২০২৫-০৭-২০",
        },
    ];

    return (
        <div className="p-4 sm:p-8 bg-white rounded-xl shadow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#249742] border-b-2 border-[#249742] pb-2">
                    সাম্প্রতিক নোটিশসমূহ
                </h1>
                <button className="btn bg-[#249742] hover:bg-[#1f7c38] text-white">
                    <FaPlus className="mr-2" /> নতুন নোটিশ যোগ করুন
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full text-sm sm:text-base">
                    <thead className="bg-[#249742] text-white text-left">
                        <tr>
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">শিরোনাম</th>
                            <th className="py-3 px-4">সংক্ষিপ্ত বিবরণ</th>
                            <th className="py-3 px-4">তারিখ</th>
                            <th className="py-3 px-4">অ্যাকশন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notices.map((notice, index) => (
                            <tr
                                key={notice.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="py-3 px-4 font-semibold">
                                    {index + 1}
                                </td>
                                <td className="py-3 px-4 text-[#249742] font-medium">
                                    {notice.title}
                                </td>
                                <td className="py-3 px-4">
                                    {notice.shortDesc}
                                </td>
                                <td className="py-3 px-4">{notice.date}</td>
                                <td className="py-3 px-4">
                                    <div className="flex gap-2">
                                        <a
                                            href={notice.noticeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#249742] hover:bg-[#1f7c38] text-white px-3 py-1 rounded transition text-sm"
                                        >
                                            View
                                        </a>
                                        <button className="border border-[#249742] text-[#249742] hover:bg-[#249742] hover:text-white px-3 py-1 rounded transition text-sm">
                                            Update
                                        </button>
                                        <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1 rounded transition text-sm">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {notices.length === 0 && (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-center py-4 text-gray-500"
                                >
                                    কোনো নোটিশ পাওয়া যায়নি।
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminNotice;
