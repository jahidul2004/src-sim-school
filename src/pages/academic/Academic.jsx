import React from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader"; // Adjust path as per your project
import { FaFlask, FaChartLine, FaLandmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const classSubjects = {
    "ক্লাস ৬-৮": [
        "বাংলা",
        "ইংরেজি",
        "গণিত",
        "বিজ্ঞান",
        "সামাজিক বিজ্ঞান",
        "ধর্ম ও নৈতিক শিক্ষা",
    ],
    "ক্লাস ৯-১০ (বিজ্ঞান)": [
        "বাংলা",
        "ইংরেজি",
        "গণিত",
        "ফিজিক্স",
        "কেমিস্ট্রি",
        "বায়োলজি",
        "আইসিটি",
    ],
    "ক্লাস ৯-১০ (ব্যবসায় শিক্ষা)": [
        "বাংলা",
        "ইংরেজি",
        "গণিত",
        "অ্যাকাউন্টিং",
        "বিজনেস এন্ট্রিপ্রেনরশিপ",
        "অর্থনীতি",
        "আইসিটি",
    ],
    "ক্লাস ৯-১০ (মানবিক)": [
        "বাংলা",
        "ইংরেজি",
        "ইতিহাস",
        "ভূগোল",
        "সামাজিক বিজ্ঞান",
        "অর্থনীতি",
    ],
};

const academicCalendarSummary = [
    { date: "১ জানুয়ারি ২০২৫", event: "শিক্ষাবর্ষের শুরু" },
    { date: "১৫ ফেব্রুয়ারি ২০২৫", event: "বার্ষিক ক্রীড়া প্রতিযোগিতা" },
    { date: "২১ ফেব্রুয়ারি ২০২৫", event: "একুশে ফেব্রুয়ারি পালন" },
    { date: "১ মে ২০২৫", event: "শ্রমিক দিবস" },
    { date: "৩০ অক্টোবর ২০২৫", event: "বার্ষিক পরীক্ষা শুরু" },
];

const examRoutine = [
    { subject: "বাংলা", date: "১০ অক্টোবর ২০২৫" },
    { subject: "গণিত", date: "১২ অক্টোবর ২০২৫" },
    { subject: "ইংরেজি", date: "১৪ অক্টোবর ২০২৫" },
    { subject: "বিজ্ঞান", date: "১৬ অক্টোবর ২০২৫" },
    { subject: "অ্যাকাউন্টিং", date: "১৮ অক্টোবর ২০২৫" },
];

const teacherSummary = [
    {
        name: "মোঃ রফিকুল ইসলাম",
        subject: "গণিত",
        designation: "প্রধান শিক্ষক",
        img: "https://i.ibb.co/9kPS76VN/28-21-CST-10.jpg",
    },
    {
        name: "সালমা খাতুন",
        subject: "ইতিহাস",
        designation: "সহকারী প্রধান শিক্ষক",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    },
];

const Academic = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white max-w-7xl mx-auto">
            <SectionHeader
                title="একাডেমিক প্রোগ্রাম"
                subtitle="শ্রেণী ৬ থেকে ১০ পর্যন্ত আমাদের একাডেমিক প্রোগ্রাম ও পরীক্ষা সম্পর্কিত সকল তথ্য।"
            />

            {/* Subjects by Class */}
            <div>
                <h3 className="mt-12 text-2xl font-bold text-[#8E1C20] mb-4">
                    ক্লাস ভিত্তিক সাবজেক্ট লিস্ট
                </h3>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {Object.entries(classSubjects).map(
                        ([className, subjects]) => (
                            <div
                                key={className}
                                className="bg-[#f0fdf4] border border-[#249742] rounded-xl p-6 shadow-md"
                            >
                                <h3 className="text-2xl font-semibold text-[#249742] mb-4">
                                    {className}
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    {subjects.map((subj, i) => (
                                        <li
                                            key={i}
                                            className="hover:text-[#8E1C20] cursor-default"
                                        >
                                            {subj}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Academic Calendar Summary */}
            <div className="mt-16 bg-[#fefefe] border border-[#8E1C20] rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-[#8E1C20] mb-4">
                    একাডেমিক ক্যালেন্ডার সংক্ষিপ্তসার
                </h3>
                <ul className="space-y-3 text-gray-700">
                    {academicCalendarSummary.map(({ date, event }, i) => (
                        <li
                            key={i}
                            className="flex justify-between border-b border-dashed border-gray-300 py-2"
                        >
                            <span>{date}</span>
                            <span className="font-semibold text-[#249742]">
                                {event}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Exam Routine */}
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-[#249742] mb-6">
                    পরবর্তী পরীক্ষার রুটিন
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-md border border-[#249742]">
                    <table className="w-full text-left text-gray-700">
                        <thead className="bg-[#249742] text-white">
                            <tr>
                                <th className="py-3 px-6">বিষয়</th>
                                <th className="py-3 px-6">পরীক্ষার তারিখ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {examRoutine.map(({ subject, date }, i) => (
                                <tr
                                    key={i}
                                    className="border-b border-gray-300 hover:bg-[#f0fdf4] transition-colors duration-200"
                                >
                                    <td className="py-3 px-6">{subject}</td>
                                    <td className="py-3 px-6">{date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Teacher Summary */}
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-[#8E1C20] mb-6">
                    সম্মানিত প্রধান শিক্ষক ও সহকারী প্রধান শিক্ষক
                </h3>
                <div className="grid grid-cols-2 gap-6">
                    {teacherSummary.map(
                        ({ name, subject, img, designation }, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col items-center text-center"
                            >
                                <img
                                    src={img}
                                    alt={name}
                                    className="p-1 w-24 h-24 rounded-full border-4 border-[#249742] object-cover mb-3"
                                />
                                <p className="bg-[#24974350] text-[#249742] px-1 rounded-xl my-2">
                                    {designation}
                                </p>
                                <h4 className="text-lg font-semibold text-[#249742]">
                                    {name}
                                </h4>
                                <Link
                                    className="btn rounded-lg bg-[#249742] text-white border-none shadow-none mt-3"
                                    to={"/"}
                                >
                                    ডিটেইলস দেখুন
                                </Link>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Academic;
