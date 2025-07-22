import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { FaFlask, FaChartLine, FaLandmark } from "react-icons/fa";

const AcademicProgrammes = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#f8f9fa]">
            <SectionHeader
                title="শিক্ষাগত কার্যক্রম"
                subtitle="আমাদের বিদ্যালয়ে ষষ্ঠ শ্রেণি থেকে দশম শ্রেণি পর্যন্ত শিক্ষার্থীদের সুনির্দিষ্ট লক্ষ্য এবং পছন্দ অনুযায়ী শিক্ষায় পথপ্রদর্শন করা হয়।"
            />

            <div className="max-w-6xl mx-auto mt-10 space-y-12">
                {/* Classes 6-8 */}
                <div className="bg-[#ecfdf5] rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300">
                    <h3 className="text-2xl font-semibold text-[#249742] mb-3">
                        ষষ্ঠ থেকে অষ্টম শ্রেণি
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        এই স্তরে শিক্ষার্থীরা বাংলা, ইংরেজি, গণিত, বিজ্ঞান,
                        সমাজবিজ্ঞানসহ সকল বিষয়ে একটি শক্তিশালী ভিত্তি গড়ে তোলে।
                        পরবর্তী শ্রেণিগুলোর জন্য এটি গুরুত্বপূর্ণ প্রস্তুতির
                        সময়।
                    </p>
                </div>

                {/* Classes 9-10 */}
                <div className="bg-[#fff4f4] rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300">
                    <h3 className="text-2xl font-semibold text-[#8E1C20] mb-3">
                        নবম ও দশম শ্রেণি
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify mb-6">
                        নবম শ্রেণি থেকে শিক্ষার্থীরা তাদের আগ্রহ ও ভবিষ্যৎ
                        লক্ষ্য অনুযায়ী বিভাগ নির্বাচন করে – বিজ্ঞান, ব্যবসায়
                        শিক্ষা অথবা মানবিক। প্রতিটি বিভাগে সংশ্লিষ্ট বিষয়ের উপর
                        বিশেষ গুরুত্ব দেওয়া হয়।
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Science */}
                        <div className="relative rounded-xl p-6 bg-white shadow-sm hover:shadow-lg hover:border-[#249742] transition duration-300 group">
                            <div className="relative flex flex-col items-center text-center gap-4">
                                <div className="text-[#249742] text-5xl">
                                    <FaFlask />
                                </div>
                                <h4 className="text-xl font-bold text-[#249742]">
                                    বিজ্ঞান বিভাগ
                                </h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান এবং গণিতের
                                    উপর ভিত্তি করে মেডিকেল, ইঞ্জিনিয়ারিং এবং
                                    গবেষণাধর্মী পেশার জন্য প্রস্তুতি।
                                </p>
                            </div>
                        </div>

                        {/* Business Studies */}
                        <div className="relative rounded-xl p-6 bg-white shadow-sm hover:shadow-lg hover:border-[#249742] transition duration-300 group">
                            <div className="relative flex flex-col items-center text-center gap-4">
                                <div className="text-[#249742] text-5xl">
                                    <FaChartLine />
                                </div>
                                <h4 className="text-xl font-bold text-[#249742]">
                                    ব্যবসায় শিক্ষা
                                </h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    হিসাববিজ্ঞান, ব্যবসায় সংগঠন ও ব্যবস্থাপনা,
                                    অর্থনীতি ইত্যাদি বিষয় শেখার মাধ্যমে
                                    ব্যবসায়িক ও উদ্যোক্তা জীবনের জন্য প্রস্তুতি।
                                </p>
                            </div>
                        </div>

                        {/* Humanities */}
                        <div className="relative rounded-xl p-6 bg-white shadow-sm hover:shadow-lg hover:border-[#249742] transition duration-300 group">
                            <div className="relative flex flex-col items-center text-center gap-4">
                                <div className="text-[#249742] text-5xl">
                                    <FaLandmark />
                                </div>
                                <h4 className="text-xl font-bold text-[#249742]">
                                    মানবিক বিভাগ
                                </h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    ইতিহাস, ভূগোল, নাগরিকশাস্ত্র ও চারুকলার উপর
                                    ভিত্তি করে সমাজবিজ্ঞান, সাহিত্য ও সৃজনশীল
                                    পেশার জন্য প্রস্তুতি।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicProgrammes;
