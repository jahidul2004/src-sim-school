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
                title="আমাদেরকে কেন বেছে নেবেন?"
                subtitle="জেনে নিন কীভাবে শ্রীরায়েরচর এস.আই.এম. উচ্চ বিদ্যালয় হয়ে উঠেছে একটি বিশেষ ও সেরা শিক্ষাপ্রতিষ্ঠান"
            />

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8 mt-10">
                {/* Feature 1 */}
                <div className="bg-gradient-to-b from-white to-[#f9f9f9] border border-gray-200 rounded-2xl p-6 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] group text-center">
                    <div className="bg-[#fbeaea] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                        <FaChalkboardTeacher className="text-3xl text-[#8E1C20]" />
                    </div>
                    <h3 className="md:text-xl text-[#249742] mb-2 group-hover:underline font-bold">
                        সুদক্ষ শিক্ষকবৃন্দ
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        উদ্যমী, দক্ষ ও প্রতিশ্রুতিশীল — আমাদের শিক্ষকরা প্রতিটি
                        শিক্ষার্থীর জন্য মানসম্মত শিক্ষার নিশ্চয়তা দেন।
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-gradient-to-b from-white to-[#f9f9f9] border border-gray-200 rounded-2xl p-6 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] group text-center">
                    <div className="bg-[#fbeaea] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                        <FaLaptopCode className="text-3xl text-[#8E1C20]" />
                    </div>
                    <h3 className="md:text-xl font-bold text-[#249742] mb-2 group-hover:underline">
                        আধুনিক সুবিধা
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        ২১শ শতকের শিক্ষার জন্য স্মার্ট শ্রেণিকক্ষ, কম্পিউটার
                        ল্যাব এবং ডিজিটাল লাইব্রেরি।
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-gradient-to-b from-white to-[#f9f9f9] border border-gray-200 rounded-2xl p-6 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] group text-center">
                    <div className="bg-[#fbeaea] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                        <FaUserGraduate className="text-3xl text-[#8E1C20]" />
                    </div>
                    <h3 className="md:text-xl font-bold text-[#249742] mb-2 group-hover:underline">
                        শিক্ষার্থী ফোকাসড
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        আমরা প্রতিটি শিক্ষার্থীর প্রতিভা লালন করি এবং তাদের
                        নিরাপদ পরিবেশে বিকাশে সহায়তা করি।
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-gradient-to-b from-white to-[#f9f9f9] border border-gray-200 rounded-2xl p-6 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] group text-center">
                    <div className="bg-[#fbeaea] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                        <FaTrophy className="text-3xl text-[#8E1C20]" />
                    </div>
                    <h3 className="md:text-xl font-bold text-[#249742] mb-2 group-hover:underline">
                        শিক্ষাগত উৎকর্ষতা
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        ChatGPT said: পরীক্ষার ফলাফল এবং সহশিক্ষা কার্যক্রমে
                        ধারাবাহিক উচ্চ সাফল্য।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
