import SectionHeader from "../../components/sectionHeader/SectionHeader";

const AboutUs = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-20 text-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="mb-5 md:mb-8 lg:mb-12">
                    <SectionHeader
                        title={"প্রতিষ্ঠান সম্পর্কে"}
                        subtitle={
                            "জানুন আমাদের প্রতিষ্ঠানের ইতিহাস ও ঐতিহ্যের গল্প।"
                        }
                    ></SectionHeader>
                </div>

                {/* header area */}
                <div className="mt-6 mb-12">
                    <div>
                        <img
                            className="rounded-lg"
                            src="https://i.ibb.co/SxtJdzT/school.jpg"
                            alt=""
                        />
                    </div>
                </div>

                {/* 1. Overview Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-3">
                        প্রতিষ্ঠান সম্পর্কে সংক্ষিপ্ত বিবরণ
                    </h3>
                    <p className="text-lg leading-relaxed">
                        শ্রীরায়ের চর এস আই এম উচ্চ বিদ্যালয় ১৯৬৫ সালে
                        প্রতিষ্ঠিত হয়। প্রতিষ্ঠার পর থেকে এটি অত্র অঞ্চলের
                        শিক্ষার্থীদের মানসম্মত শিক্ষা প্রদানের লক্ষ্যে কাজ করে
                        যাচ্ছে। আধুনিক সুযোগ-সুবিধা, দক্ষ শিক্ষকবৃন্দ এবং উন্নত
                        পাঠদান পদ্ধতির মাধ্যমে প্রতিষ্ঠানটি একটি মডেল শিক্ষা
                        প্রতিষ্ঠানে রূপান্তরিত হয়েছে।
                    </p>
                </div>

                {/* 2. Mission and Vision */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-3">
                        আমাদের লক্ষ্য ও উদ্দেশ্য
                    </h3>
                    <p className="text-lg leading-relaxed">
                        শিক্ষার্থীদের নৈতিক, সামাজিক ও একাডেমিক দিক থেকে
                        পরিপূর্ণ মানুষ হিসেবে গড়ে তোলা আমাদের প্রধান লক্ষ্য।
                        আমরা এমন একটি পরিবেশ নিশ্চিত করতে চাই যেখানে শিক্ষার্থী
                        আত্মবিশ্বাস, নেতৃত্ব ও মূল্যবোধ নিয়ে বেড়ে উঠবে।
                    </p>
                </div>

                {/* 3. Prodhan shikkhok o protishthatar bani */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6">
                        প্রতিষ্ঠাতা ও প্রধান শিক্ষক এর বাণী
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div class="shadow-lg rounded-lg p-6 md:p-8 lg:p-10 text-center">
                            <img
                                class="mx-auto mb-5 w-24 h-24 border-3 border-[#249742] rounded-full p-1 object-cover"
                                src="https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif"
                                alt="Sirajul Islam"
                            />
                            <h1 class="text-3xl font-extrabold text-[#249742] mb-1">
                                শ্রদ্ধেয় সিরাজুল ইসলাম
                            </h1>
                            <p class="text-md text-gray-600 font-medium">
                                প্রতিষ্ঠাতা, এস এস আই এম এস
                            </p>
                            <div class="mt-6 pt-4 border-t border-gray-200">
                                <p class="text-base text-gray-700 leading-relaxed">
                                    শিক্ষার্থীদের নৈতিক, সামাজিক ও একাডেমিক দিক
                                    থেকে পরিপূর্ণ মানুষ হিসেবে গড়ে তোলা আমাদের
                                    প্রধান লক্ষ্য। আমরা এমন একটি পরিবেশ নিশ্চিত
                                    করতে চাই যেখানে শিক্ষার্থী আত্মবিশ্বাস,
                                    নেতৃত্ব ও মূল্যবোধ নিয়ে বেড়ে উঠবে।
                                </p>
                            </div>
                        </div>

                        <div class="shadow-lg rounded-lg p-6 md:p-8 lg:p-10 text-center">
                            <img
                                class="mx-auto mb-5 w-24 h-24 border-3 border-[#249742] rounded-full p-1 object-cover"
                                src="https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif"
                                alt="Sirajul Islam"
                            />
                            <h1 class="text-3xl font-extrabold text-[#249742] mb-1">
                                জয়নাল আবেদীন শিকদার
                            </h1>
                            <p class="text-md text-gray-600 font-medium">
                                প্রধান শিক্ষক, এস এস আই এম এস
                            </p>
                            <div class="mt-6 pt-4 border-t border-gray-200">
                                <p class="text-base text-gray-700 leading-relaxed">
                                    শিক্ষার্থীদের নৈতিক, সামাজিক ও একাডেমিক দিক
                                    থেকে পরিপূর্ণ মানুষ হিসেবে গড়ে তোলা আমাদের
                                    প্রধান লক্ষ্য। আমরা এমন একটি পরিবেশ নিশ্চিত
                                    করতে চাই যেখানে শিক্ষার্থী আত্মবিশ্বাস,
                                    নেতৃত্ব ও মূল্যবোধ নিয়ে বেড়ে উঠবে।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
