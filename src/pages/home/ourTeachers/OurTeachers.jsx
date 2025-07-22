import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

const OurTeachers = () => {
    const teachersData = [
        {
            id: 1,
            name: "মোঃ রফিকুল ইসলাম",
            subject: "গণিত",
            group: "বিজ্ঞান",
            email: "rafiqul@school.edu.bd",
            phone: "০১৭১২৩৪৫৬৭৮",
            classes: ["নবম শ্রেণি", "দশম শ্রেণি"],
            image: "https://i.ibb.co/9kPS76VN/28-21-CST-10.jpg",
        },
        {
            id: 2,
            name: "মিসেস সালমা খাতুন",
            subject: "ইতিহাস",
            group: "মানবিক",
            email: "salma@school.edu.bd",
            phone: "০১৮২৩৪৫৬৭৮৯",
            classes: ["অষ্টম শ্রেণি", "নবম শ্রেণি"],
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 3,
            name: "মিঃ কামাল উদ্দিন",
            subject: "হিসাববিজ্ঞান",
            group: "ব্যবসায় শিক্ষা",
            email: "kamal@school.edu.bd",
            phone: "০১৬৯৮৭৬৫৪৩২",
            classes: ["নবম শ্রেণি", "দশম শ্রেণি"],
            image: "https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 4,
            name: "মিসেস নাজমা আক্তার",
            subject: "জীববিজ্ঞান",
            group: "বিজ্ঞান",
            email: "nazma@school.edu.bd",
            phone: "০১৫১২৩৪৫৬৭৮",
            classes: ["অষ্টম শ্রেণি", "দশম শ্রেণি"],
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
        },
    ];

    return (
        <div className="bg-[#f8f9fa] py-16 px-4 md:px-8 lg:px-10 text-center">
            <div className="w-[95%] mx-auto">
                <SectionHeader
                    title={"আমাদের সুদক্ষ শিক্ষকবৃন্দ"}
                    subtitle={
                        "আমাদের রয়েছে একদল অভিজ্ঞ শিক্ষক, যারা শুধু পাঠ্যশিক্ষাই নয় — আদব-কায়দা ও বাস্তবজীবনের মূল্যবান শিক্ষা দেন।"
                    }
                ></SectionHeader>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
                {teachersData.map((teacher) => (
                    <div
                        key={teacher.id}
                        className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300"
                    >
                        <img
                            src={teacher.image}
                            alt={teacher.name}
                            className="w-24 h-24 rounded-full mx-auto mb-2 object-cover border-4 border-[#249742] p-1"
                        />
                        <div className="flex items-center justify-center">
                            <p className="text-sm text-[#249742] bg-[#24974336] rounded-2xl w-max px-1">
                                {teacher.subject}
                            </p>
                        </div>
                        <h3 className="md:text-lg font-bold text-gray-800 mb-1">
                            {teacher.name}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1 italic">
                            {teacher.group}
                        </p>
                        <Link
                            to={`/teachers/${teacher.id}`}
                            className="btn w-max mt-4 text-white bg-[#249742] hover:bg-[#1e7f36] rounded-full"
                        >
                            ডিটেইলস দেখুন
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <Link
                    to="/teachers"
                    className="btn btn-lg rounded-lg bg-[#249742] text-white"
                >
                    সকল শিক্ষকদের দেখুন <BsArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default OurTeachers;
