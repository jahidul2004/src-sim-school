import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
    X, // For close button in modal
    Bell, // For notice icon
    Calendar, // For date icon
    Link2, // For notice link icon
    FileText, // For short description icon
} from "lucide-react";

const AdminNotice = () => {
    const [notices, setNotices] = useState([
        // Changed to useState to allow adding new notices
        {
            id: "N-001",
            title: "৬ষ্ঠ শ্রেণির পরীক্ষার সময়সূচি প্রকাশ",
            shortDesc:
                "৬ষ্ঠ শ্রেণির ২য় সাময়িক পরীক্ষার সময়সূচি প্রকাশ করা হয়েছে।",
            noticeLink: "https://example.com/notice-001",
            date: "২০২৫-০৭-২৫",
        },
        {
            id: "N-002",
            title: "বিদ্যালয় বন্ধ সংক্রান্ত বিজ্ঞপ্তি",
            shortDesc:
                "আগামী সোমবার জাতীয় শোক দিবস উপলক্ষে বিদ্যালয় বন্ধ থাকবে।",
            noticeLink: "https://example.com/notice-002",
            date: "২০২৫-০৭-২০",
        },
        {
            id: "N-003",
            title: "বিদ্যালয় বন্ধ সংক্রান্ত বিজ্ঞপ্তি",
            shortDesc:
                "আগামী সোমবার জাতীয় শোক দিবস উপলক্ষে বিদ্যালয় বন্ধ থাকবে।",
            noticeLink: "https://example.com/notice-002",
            date: "২০২৫-০৭-২০",
        },
        {
            id: "N-004",
            title: "বিদ্যালয় বন্ধ সংক্রান্ত বিজ্ঞপ্তি",
            shortDesc:
                "আগামী সোমবার জাতীয় শোক দিবস উপলক্ষে বিদ্যালয় বন্ধ থাকবে।",
            noticeLink: "https://example.com/notice-002",
            date: "২০২৫-০৭-২০",
        },
    ]);

    const [isAddNoticeModalOpen, setIsAddNoticeModalOpen] = useState(false);
    const [newNoticeData, setNewNoticeData] = useState({
        title: "",
        shortDesc: "",
        noticeLink: "",
        date: "",
    });

    // Handle input change for new notice form fields
    const handleNoticeFormChange = (e) => {
        const { name, value } = e.target;
        setNewNoticeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle new notice form submission
    const handleAddNoticeSubmit = (e) => {
        e.preventDefault();
        // Generate a simple unique ID (for demonstration purposes)
        const newId = `N-${Date.now()}`;
        const finalNoticeData = { ...newNoticeData, id: newId };

        console.log("New Notice Data Submitted:", finalNoticeData);
        // In a real application, you would send finalNoticeData to your backend API here
        // For now, we'll just add it to the local state
        setNotices((prevNotices) => [...prevNotices, finalNoticeData]);

        alert("নোটিশ সফলভাবে যুক্ত করা হয়েছে!"); // Show success alert

        setIsAddNoticeModalOpen(false); // Close the modal
        setNewNoticeData({
            // Clear the form
            title: "",
            shortDesc: "",
            noticeLink: "",
            date: "",
        });
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
            {" "}
            {/* Added a light background */}
            <div className="card bg-base-100 shadow-xl p-6">
                {" "}
                {/* Unified card styling */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 pb-4 border-b-2 border-[#249742]">
                    <h1 className="text-3xl font-extrabold text-[#249742]">
                        সাম্প্রতিক নোটিশসমূহ
                    </h1>
                    <button
                        onClick={() => setIsAddNoticeModalOpen(true)}
                        className="btn bg-[#249742] hover:bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                    >
                        <FaPlus className="mr-2" /> নতুন নোটিশ যোগ করুন
                    </button>
                </div>
                {/* Notices Table */}
                <div className="w-full overflow-x-auto rounded-lg shadow-lg border border-gray-200">
                    <table className="table w-full text-base">
                        <thead className="bg-[#249742] text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">#</th>
                                <th className="py-3 px-4 text-left">শিরোনাম</th>
                                <th className="py-3 px-4 text-left">
                                    সংক্ষিপ্ত বিবরণ
                                </th>
                                <th className="py-3 px-4 text-left">তারিখ</th>
                                <th className="py-3 px-4 text-center">
                                    অ্যাকশন
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {notices.length > 0 ? (
                                notices.map((notice, index) => (
                                    <tr
                                        key={notice.id}
                                        className="hover border-b border-gray-100 last:border-b-0"
                                    >
                                        <td className="py-3 px-4 font-semibold text-gray-800">
                                            {index + 1}
                                        </td>
                                        <td className="py-3 px-4 text-[#249742] font-medium">
                                            {notice.title}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {notice.shortDesc}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {notice.date}
                                        </td>
                                        <td className="py-3 px-4 text-center">
                                            <div className="flex justify-center gap-2">
                                                <a
                                                    href={notice.noticeLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm bg-[#249742] hover:bg-green-700 text-white transition-colors duration-200"
                                                >
                                                    দেখুন
                                                </a>
                                                <button className="btn btn-sm border border-[#249742] text-[#249742] hover:bg-[#249742] hover:text-white transition-colors duration-200">
                                                    আপডেট
                                                </button>
                                                <button className="btn btn-sm border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200">
                                                    ডিলিট
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center py-6 text-gray-500 text-lg"
                                    >
                                        কোনো নোটিশ পাওয়া যায়নি।
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Add Notice Modal */}
            {isAddNoticeModalOpen && (
                <dialog
                    id="add_notice_modal"
                    className="modal modal-bottom sm:modal-middle"
                    open
                >
                    <div className="modal-box max-w-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-xl text-[#249742]">
                                নতুন নোটিশ যুক্ত করুন
                            </h3>
                            <button
                                className="btn btn-sm btn-circle btn-ghost"
                                onClick={() => setIsAddNoticeModalOpen(false)}
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <form
                            onSubmit={handleAddNoticeSubmit}
                            className="space-y-4"
                        >
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        <Bell
                                            size={18}
                                            className="mr-2 text-[#249742]"
                                        />{" "}
                                        শিরোনাম
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={newNoticeData.title}
                                    onChange={handleNoticeFormChange}
                                    placeholder="নোটিশের শিরোনাম লিখুন"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        <FileText
                                            size={18}
                                            className="mr-2 text-blue-500"
                                        />{" "}
                                        সংক্ষিপ্ত বিবরণ
                                    </span>
                                </label>
                                <textarea
                                    name="shortDesc"
                                    value={newNoticeData.shortDesc}
                                    onChange={handleNoticeFormChange}
                                    placeholder="নোটিশের সংক্ষিপ্ত বিবরণ লিখুন"
                                    className="textarea textarea-bordered h-24 w-full"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        <Link2
                                            size={18}
                                            className="mr-2 text-purple-500"
                                        />{" "}
                                        নোটিশ লিংক (ঐচ্ছিক)
                                    </span>
                                </label>
                                <input
                                    type="url"
                                    name="noticeLink"
                                    value={newNoticeData.noticeLink}
                                    onChange={handleNoticeFormChange}
                                    placeholder="নোটিশের সম্পূর্ণ লিংকের URL"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        <Calendar
                                            size={18}
                                            className="mr-2 text-orange-500"
                                        />{" "}
                                        তারিখ
                                    </span>
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={newNoticeData.date}
                                    onChange={handleNoticeFormChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="modal-action justify-center">
                                <button
                                    type="submit"
                                    className="btn bg-[#249742] text-white hover:bg-green-700 px-6"
                                >
                                    জমা দিন
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline"
                                    onClick={() =>
                                        setIsAddNoticeModalOpen(false)
                                    }
                                >
                                    বাতিল করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default AdminNotice;
