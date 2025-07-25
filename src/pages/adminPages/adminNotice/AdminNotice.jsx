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
        <div className="p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#249742] border-b-2 border-[#249742] pb-2">
                    সাম্প্রতিক নোটিশসমূহ
                </h1>
                <button className="btn btn-success text-white mt-3 sm:mt-0">
                    <FaPlus className="mr-2" /> নতুন নোটিশ যোগ করুন
                </button>
            </div>
            <div className="grid gap-4">
                {notices.map((notice) => (
                    <div
                        key={notice.id}
                        className="border border-[#249742] bg-white rounded-lg shadow-md p-4"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold text-[#249742]">
                                {notice.title}
                            </h3>
                            <span className="text-sm text-gray-500">
                                {notice.date}
                            </span>
                        </div>
                        <p className="text-gray-700 mb-2">{notice.shortDesc}</p>
                        <div className="flex flex-wrap gap-2">
                            <a
                                href={notice.noticeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#249742] text-white px-3 py-1 rounded hover:bg-[#1f7c38] transition"
                            >
                                View Notice
                            </a>
                            <button className="border border-[#249742] text-[#249742] px-3 py-1 rounded hover:bg-[#249742] hover:text-white transition">
                                Update
                            </button>
                            <button className="border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminNotice;
