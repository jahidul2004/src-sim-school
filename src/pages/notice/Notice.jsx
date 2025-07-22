import React from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const notices = [
    {
        id: 1,
        title: "ডিপ্লোমা ইন টেকনিক্যাল এডুকেশন পরীক্ষার রুটিন প্রকাশ",
        date: "২১ জুলাই, ২০২৫",
        link: "#",
    },
    {
        id: 2,
        title: "নবম শ্রেণির ভর্তি বিজ্ঞপ্তি প্রকাশিত হয়েছে",
        date: "১৫ জুলাই, ২০২৫",
        link: "#",
    },
    {
        id: 3,
        title: "বিদ্যালয়ের বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫",
        date: "১০ জুলাই, ২০২৫",
        link: "#",
    },
    {
        id: 4,
        title: "SSC পরীক্ষার্থীদের Mock Test সময়সূচি",
        date: "১ জুলাই, ২০২৫",
        link: "#",
    },
];

const Notice = () => {
    return (
        <div className="p-4 md:p-8">
            <div>
                <SectionHeader
                    title={"নোটিশ বোর্ড"}
                    subtitle={"এখানে এস এস আই এম এর সকল নোটিশ পাওয়া যাবে।"}
                ></SectionHeader>
            </div>
            <div className="overflow-x-auto shadow rounded-lg w-[95%] md:w-[80%] mx-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#249742] text-white">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                #
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                নোটিশ
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                তারিখ
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                                ডাউনলোড
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {notices.map((notice, idx) => (
                            <tr key={notice.id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-sm text-gray-700">
                                    {idx + 1}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-800">
                                    {notice.title}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600">
                                    {notice.date}
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <a
                                        href={notice.link}
                                        className="inline-block bg-[#249742] text-white px-3 py-1 rounded hover:bg-[#249743c9] text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        দেখুন
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Notice;
