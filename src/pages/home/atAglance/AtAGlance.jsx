import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

const AtAGlance = () => {
    return (
        <div className="my-10 md:my-20">
            <div className="w-[95%] mx-auto">
                <SectionHeader
                    title={"এক নজরে"}
                    subtitle={
                        "শ্রীরায়েরচর এস.আই.এম. উচ্চ বিদ্যালয় — আমাদের যাত্রা, মূল্যবোধ এবং মানসম্পন্ন শিক্ষার প্রতি আমাদের অঙ্গীকার।"
                    }
                ></SectionHeader>
            </div>
            <div className="mt-10 md:mt-20 w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8">
                {/* Img div */}
                <div className="w-full md:w-1/2">
                    <img
                        className="border-2 border-[#249743] p-2 md:p-4 rounded-lg"
                        src="https://i.ibb.co/DYd16TV/5680e4eb-33ea-48b7-85a1-a2c75c66651f.jpg"
                        alt=""
                    />
                </div>
                {/* Img div end */}
                {/* Content div */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#8E1C20]">
                        আমাদের সম্পর্কে এক নজরে
                    </h1>
                    <p className="my-3 md:my-5 leading-relaxed text-justify">
                        আমাদের বিদ্যালয় একটি ঐতিহ্যবাহী ও মানসম্মত শিক্ষা
                        প্রতিষ্ঠান, যেখানে শিক্ষার্থীদের সার্বিক উন্নয়নের ওপর
                        জোর দেওয়া হয়। ক্লাস ৬ থেকে ১০ পর্যন্ত শিক্ষাদান
                        কার্যক্রম পরিচালিত হয় এবং নবম শ্রেণিতে শিক্ষার্থীরা
                        তাদের পছন্দ অনুযায়ী বিজ্ঞান, ব্যবসায় শিক্ষা অথবা
                        মানবিক বিভাগ বেছে নিতে পারে। প্রতিটি শ্রেণিতে দক্ষ ও
                        অভিজ্ঞ শিক্ষক দ্বারা পাঠদান পরিচালিত হয়। বিদ্যালয়ের
                        একাডেমিক পরিবেশ ও শৃঙ্খলা অত্যন্ত প্রশংসনীয়।
                        <span className="hidden md:inline">
                            শিক্ষার্থীদের মেধা ও মননের বিকাশে আমরা নিয়মিত
                            পাঠ্যবহির্ভূত কার্যক্রম পরিচালনা করে থাকি, যার মধ্যে
                            আছে বিতর্ক প্রতিযোগিতা, বিজ্ঞান মেলা, কুইজ ও
                            সাংস্কৃতিক অনুষ্ঠান। বিদ্যালয়ের আধুনিক পাঠদান
                            পদ্ধতি ও প্রযুক্তিনির্ভর শ্রেণিকক্ষ শিক্ষার মানকে
                            আরও উন্নত করেছে। শিক্ষক, অভিভাবক ও শিক্ষার্থীদের
                            সম্মিলিত প্রচেষ্টায় আমাদের প্রতিষ্ঠান ক্রমাগত
                            অগ্রসর হচ্ছে।
                        </span>
                    </p>
                    <Link
                        className="btn bg-[#249743] text-white border-none outline-none flex items-center gap-2 w-max rounded-lg"
                        to={"/about"}
                    >
                        আরো পরুন <IoIosArrowDropright />
                    </Link>
                </div>
                {/* Content div end */}
            </div>
        </div>
    );
};

export default AtAGlance;
