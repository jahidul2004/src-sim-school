import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { FiChevronRight } from "react-icons/fi";

const notices = [
    {
        id: 1,
        date: "July 15, 2025",
        title: "আগামীকাল স্কুল বন্ধ প্রসঙ্গে",
        description:
            "রক্ষণাবেক্ষণ কাজের কারণে আগামী ১৬ জুলাই ২০২৫ তারিখে বিদ্যালয় বন্ধ থাকবে।",
    },
    {
        id: 2,
        date: "July 10, 2025",
        title: "পরীক্ষার রুটিন প্রকাশিত",
        description:
            "২০২৫ সালের অর্ধ বার্ষিক পরীক্ষার সিডিউল ও রুটিন প্রকাশিত হয়েছে।",
    },
    {
        id: 3,
        date: "June 30, 2025",
        title: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান ও স্পোর্টস সপ্তাহ",
        description:
            "আগামি ১০/০৮/২০২৫ ইং তারিখ হতে ১৭/০৮/২০২৫ ইং তারিখ পর্যন্ত বার্ষিক সাংস্কৃতিক সপ্তাহ.",
    },
    {
        id: 4,
        date: "June 30, 2025",
        title: "এস এস সি পরীক্ষার ফল প্রকাশ প্রসঙ্গে",
        description: "২০২৫ সালের এস এস সি পরীক্ষার ফলাফল প্রকাশিত হয়েছে।",
    },
];

const NoticeBoard = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20">
            <SectionHeader
                title="নোটিশ বোর্ড"
                subtitle="শ্রীরায়েরচর এস.আই.এম. উচ্চ বিদ্যালয়ের সর্বশেষ ঘোষণা ও গুরুত্বপূর্ণ তারিখগুলোর আপডেট পেতে সাথে থাকুন।"
            />

            <div className="w-[95%] md:w-[80%] lg:w-[70%] mx-auto">
                <div className="overflow-x-auto mt-8 shadow-lg rounded-2xl border border-[#C6F6D5]">
                    <table className="min-w-full text-sm text-left text-gray-700 bg-white">
                        <thead className="bg-[#249742] text-white text-sm uppercase tracking-wide">
                            <tr>
                                <th className="px-6 py-4">নোটিশ আইডি</th>
                                <th className="px-6 py-4">তারিখ</th>
                                <th className="px-6 py-4">শিরোনাম</th>
                                <th className="px-6 py-4">বর্ণনা</th>
                                <th className="px-6 py-4 text-center">
                                    অ্যাকশন
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {notices.map((notice, index) => (
                                <tr
                                    key={notice.id}
                                    className={`border-b border-gray-200 hover:bg-[#f7fcf9] transition-colors duration-200 ${
                                        index % 2 === 0
                                            ? "bg-[#F0FFF4]"
                                            : "bg-white"
                                    }`}
                                >
                                    <td className="px-6 py-4 font-medium text-[#8E1C20]">
                                        #{notice.id}
                                    </td>
                                    <td className="px-6 py-4">{notice.date}</td>
                                    <td className="px-6 py-4 font-semibold text-[#249742]">
                                        {notice.title}
                                    </td>
                                    <td className="px-6 py-4 line-clamp-2">
                                        {notice.description}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button className="bg-[#249742] hover:bg-[#1f7d39] text-white text-xs px-4 py-1 rounded-full transition-all duration-200">
                                            বিস্তারিত
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-center mt-10">
                <button
                    type="button"
                    className="inline-flex items-center bg-[#249742] hover:bg-[#1e7a37] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#8E1C20]"
                >
                    সব নোটিশ দেখুন
                    <FiChevronRight className="ml-2" />
                </button>
            </div>
        </section>
    );
};

export default NoticeBoard;
