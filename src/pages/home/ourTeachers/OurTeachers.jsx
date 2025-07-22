import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

const teachersData = [
    {
        id: 1,
        name: "Md. Rafiqul Islam",
        subject: "Mathematics",
        group: "Science",
        email: "rafiqul@school.edu.bd",
        phone: "01712345678",
        classes: ["Class 9", "Class 10"],
        image: "https://i.ibb.co/9kPS76VN/28-21-CST-10.jpg",
    },
    {
        id: 2,
        name: "Ms. Salma Khatun",
        subject: "History",
        group: "Humanities",
        email: "salma@school.edu.bd",
        phone: "01823456789",
        classes: ["Class 8", "Class 9"],
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: 3,
        name: "Mr. Kamal Uddin",
        subject: "Accounting",
        group: "Business Studies",
        email: "kamal@school.edu.bd",
        phone: "01698765432",
        classes: ["Class 9", "Class 10"],
        image: "https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: 4,
        name: "Ms. Nazma Akter",
        subject: "Biology",
        group: "Science",
        email: "nazma@school.edu.bd",
        phone: "01512345678",
        classes: ["Class 8", "Class 10"],
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    },
];

const OurTeachers = () => {
    return (
        <div className="max-w-6xl mx-auto py-16 px-4 text-center">
            <div className="w-[95%] mx-auto">
                <SectionHeader
                    title={"Our Experienced Teachers"}
                    subtitle={
                        "We have a group of experienced teachers those teach not only education but also manners and real life."
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
                            View Details
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <Link
                    to="/teachers"
                    className="border border-[#249742] text-[#249742] hover:bg-[#249742]/10 flex items-center justify-center gap-2 px-6 py-2 rounded-full w-max mx-auto transition"
                >
                    View All Teachers <BsArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default OurTeachers;
