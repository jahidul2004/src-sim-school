import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { FaFlask, FaChartLine, FaLandmark } from "react-icons/fa";

const AcademicProgrammes = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#f8f9fa]">
            <SectionHeader
                title="Academic Programmes"
                subtitle="From Classes 6 to 10, guiding students towards excellence and focused studies in their preferred streams."
            />

            <div className="max-w-5xl mx-auto mt-10 space-y-10">
                {/* Classes 6-8 */}
                <div className="bg-[#f0fdf4] rounded-2xl p-8 shadow-md">
                    <h3 className="text-2xl font-semibold text-[#249742] mb-4">
                        Classes 6 to 8
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Students receive a strong foundational education across
                        all subjects, preparing them for specialized studies in
                        higher classes.
                    </p>
                </div>

                {/* Classes 9-10 */}
                <div className="bg-[#fff4f4] rounded-2xl p-8 shadow-md">
                    <h3 className="text-2xl font-semibold text-[#8E1C20] mb-4">
                        Classes 9 & 10
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        At this stage, students choose their preferred stream
                        and study in departments tailored to their interests and
                        career goals.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Science */}
                        <div className="relative rounded-xl p-6 bg-white shadow-md border border-transparent hover:border-[#249742] cursor-pointer group">
                            {/* Gradient border */}
                            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#249742] via-[#8E1C20] to-[#249742] opacity-0"></div>

                            <div className="relative flex flex-col items-center text-center gap-6">
                                <div className="text-[#249742] text-5xl">
                                    <FaFlask />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-[#249742] mb-2">
                                        Science
                                    </h4>
                                    <p className="text-gray-700 text-base leading-relaxed max-w-xl">
                                        For students passionate about Physics,
                                        Chemistry, Biology, and Mathematics,
                                        laying the groundwork for medical,
                                        engineering, and scientific careers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Business Studies */}
                        <div className="relative rounded-xl p-6 bg-white shadow-md border border-transparent hover:border-[#249742] cursor-pointer group">
                            <div className="absolute -inset-1 rounded-xl"></div>

                            <div className="relative flex flex-col items-center text-center gap-6">
                                <div className="text-[#249742] text-5xl">
                                    <FaChartLine />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-[#249742] mb-2">
                                        Business Studies
                                    </h4>
                                    <p className="text-gray-700 text-base leading-relaxed max-w-xl">
                                        Focused on Commerce, Accounting,
                                        Finance, and Management, preparing
                                        students for careers in business and
                                        entrepreneurship.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Humanities */}
                        <div className="relative rounded-xl p-6 bg-white shadow-md border border-transparent hover:border-[#249742] cursor-pointer group">
                            <div className="absolute -inset-1 rounded-xl"></div>

                            <div className="relative flex flex-col items-center text-center gap-6">
                                <div className="text-[#249742] text-5xl">
                                    <FaLandmark />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-[#249742] mb-2">
                                        Humanities
                                    </h4>
                                    <p className="text-gray-700 text-base leading-relaxed max-w-xl">
                                        Emphasizing History, Geography, Civics,
                                        and Arts for students interested in
                                        social sciences and creative fields.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicProgrammes;
