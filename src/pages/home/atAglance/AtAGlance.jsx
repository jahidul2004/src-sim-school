import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

const AtAGlance = () => {
    return (
        <section className="my-10 md:my-16 py-8 md:py-10">
            <div className="w-[95%] mx-auto max-w-7xl">
                <SectionHeader
                    title="এক নজরে"
                    subtitle="শ্রীরায়েরচর এস.আই.এম. উচ্চ বিদ্যালয় — আমাদের যাত্রা, মূল্যবোধ এবং মানসম্পন্ন শিক্ষার প্রতি আমাদের অঙ্গীকার।"
                />
            </div>

            <div className="mt-10 md:mt-20 w-[95%] md:w-[90%] lg:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Image Section */}
                <div className="relative w-full h-auto rounded-xl shadow-xl overflow-hidden border-4 border-[#249743] transform hover:scale-102 transition-transform duration-500 ease-in-out group">
                    <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src="https://i.ibb.co/DYd16TV/5680e4eb-33ea-48b7-85a1-a2c75c66651f.jpg"
                        alt="School Overview - Main"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white p-2 rounded-lg bg-black bg-opacity-40">
                        <p className="text-sm font-light">
                            বার্ষিক বিজ্ঞান মেলায় শিক্ষার্থীরা
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#8E1C20] mb-4 leading-tight">
                        আমাদের সম্পর্কে{" "}
                        <span className="text-[#249743]">এক নজরে</span>
                    </h1>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                        আমাদের বিদ্যালয় একটি ঐতিহ্যবাহী ও মানসম্মত শিক্ষা
                        প্রতিষ্ঠান, যেখানে শিক্ষার্থীদের সার্বিক উন্নয়নের ওপর
                        জোর দেওয়া হয়। ক্লাস ৬ থেকে ১০ পর্যন্ত শিক্ষাদান
                        কার্যক্রম পরিচালিত হয় এবং নবম শ্রেণিতে শিক্ষার্থীরা
                        তাদের পছন্দ অনুযায়ী বিজ্ঞান, ব্যবসায় শিক্ষা অথবা
                        মানবিক বিভাগ বেছে নিতে পারে।
                    </p>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify hidden md:block">
                        শিক্ষার্থীদের মেধা ও মননের বিকাশে আমরা নিয়মিত
                        পাঠ্যবহির্ভূত কার্যক্রম পরিচালনা করে থাকি, যার মধ্যে আছে
                        বিতর্ক প্রতিযোগিতা, বিজ্ঞান মেলা, কুইজ ও সাংস্কৃতিক
                        অনুষ্ঠান। বিদ্যালয়ের আধুনিক পাঠদান পদ্ধতি ও
                        প্রযুক্তিনির্ভর শ্রেণিকক্ষ শিক্ষার মানকে আরও উন্নত
                        করেছে।
                    </p>

                    <div className="text-center grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                        <div className="card-body p-4 shadow-md rounded-lg">
                            <h2 className="card-title text-[#249743] text-xl font-bold">
                                ১০+ বছর ধরে সেবায়
                            </h2>
                        </div>
                        <div className="shadow-md card-body p-4 rounded-lg">
                            <h2 className="card-title text-[#249743] text-xl font-bold">
                                ৫০০+ প্রাক্তন শিক্ষার্থী
                            </h2>
                        </div>
                        <div className="shadow-md card-body p-4 rounded-lg">
                            <h2 className="card-title text-[#249743] text-xl font-bold">
                                ৫০+ অভিজ্ঞ শিক্ষক
                            </h2>
                        </div>
                        <div className="shadow-md card-body p-4 rounded-lg">
                            <h2 className="card-title text-[#249743] text-xl font-bold">
                                ৫+ নিয়মিত স্টাফ
                            </h2>
                        </div>
                    </div>

                    <Link
                        to="/about"
                        className="inline-flex items-center gap-2 bg-[#249743] hover:bg-[#1c6e36] transition-colors duration-300 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#249743] focus:ring-opacity-50 mt-6"
                    >
                        আরো পড়ুন{" "}
                        <IoIosArrowDropright className="text-xl ml-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AtAGlance;
