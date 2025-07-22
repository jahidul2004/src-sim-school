import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { FiChevronRight } from "react-icons/fi";

const notices = [
    {
        id: 1,
        date: "July 15, 2025",
        title: "School Closed Tomorrow",
        description:
            "Due to maintenance work, the school will remain closed on July 16, 2025.",
    },
    {
        id: 2,
        date: "July 10, 2025",
        title: "Exam Schedule Released",
        description:
            "The final exam schedule for this term is now available. Check your respective classes.",
    },
    {
        id: 3,
        date: "June 30, 2025",
        title: "Annual Sports Day",
        description:
            "Annual Sports Day will be held on August 5, 2025. All students are encouraged to participate.",
    },
    {
        id: 4,
        date: "June 30, 2025",
        title: "Annual Sports Day",
        description:
            "Annual Sports Day will be held on August 5, 2025. All students are encouraged to participate.",
    },
];

const NoticeBoard = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20">
            <SectionHeader
                title="Notice Board"
                subtitle="Stay updated with the latest announcements and important dates at Sreerayerchar SIM High School."
            />

            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                {notices.map((notice) => (
                    <div
                        key={notice.id}
                        className="border bg-white rounded-xl shadow-lg p-6 border-l-8 border-[#249742] hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                    >
                        <div>
                            <p className="text-sm text-[#8E1C20] font-semibold mb-1">
                                {notice.date}
                            </p>
                            <h3 className="text-xl font-bold text-[#249742]">
                                {notice.title}
                            </h3>
                            <p className="text-gray-700 mt-2 text-base leading-relaxed">
                                {notice.description}
                            </p>
                        </div>
                    </div>
                ))}
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
