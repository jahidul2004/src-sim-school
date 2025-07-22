import {
    FaChalkboardTeacher,
    FaLaptopCode,
    FaTrophy,
    FaUserGraduate,
} from "react-icons/fa";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

const WhyChooseUs = () => {
    return (
        <div className="bg-[#f8f9fa] py-16 px-4 md:px-10 lg:px-20">
            <SectionHeader
                title="Why Choose Us"
                subtitle="Discover what makes Sreerayerchar SIM High School unique and a top choice for education."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                {/* Feature 1 */}
                <div className="bg-gradient-to-b from-white to-[#f9f9f9] border border-gray-200 rounded-2xl p-6 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] group text-center">
                    <div className="bg-[#fbeaea] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                        <FaChalkboardTeacher className="text-3xl text-[#8E1C20]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#249742] mb-2 group-hover:underline">
                        Experienced Teachers
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Passionate, skilled, and committed — our educators
                        ensure quality learning for every student.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-gradient-to-b from-white to-[#f9f9f9] border border-gray-200 rounded-2xl p-6 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] group text-center">
                    <div className="bg-[#fbeaea] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                        <FaLaptopCode className="text-3xl text-[#8E1C20]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#249742] mb-2 group-hover:underline">
                        Modern Facilities
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Smart classrooms, computer labs, and a digital library
                        for 21st-century learning.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-gradient-to-b from-white to-[#f9f9f9] border border-gray-200 rounded-2xl p-6 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] group text-center">
                    <div className="bg-[#fbeaea] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                        <FaUserGraduate className="text-3xl text-[#8E1C20]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#249742] mb-2 group-hover:underline">
                        Student Focused
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        We nurture every student’s talent and help them grow in
                        a safe environment.
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-gradient-to-b from-white to-[#f9f9f9] border border-gray-200 rounded-2xl p-6 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] group text-center">
                    <div className="bg-[#fbeaea] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                        <FaTrophy className="text-3xl text-[#8E1C20]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#249742] mb-2 group-hover:underline">
                        Academic Excellence
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Consistently high results in board exams and
                        co-curricular activities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
