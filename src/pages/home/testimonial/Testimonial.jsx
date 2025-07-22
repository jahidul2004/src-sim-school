import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

const testimonials = [
    {
        id: 1,
        name: "রাকিব হাসান",
        batch: "2018",
        feedback:
            "আমার জীবনের ভিত্তি তৈরি হয়েছে এই স্কুলেই। শিক্ষকরা শুধু পড়াশোনা নয়, জীবনের মূল্যবোধ শেখাতেন। এখনো তাদের শিক্ষা ও পরামর্শ জীবনে কাজে লাগে। এমন সহানুভূতিশীল পরিবেশ আমি আর কোথাও পাইনি।",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop",
    },
    {
        id: 2,
        name: "নুসরাত জাহান",
        batch: "2019",
        feedback:
            "স্কুল জীবনের প্রতিটি মুহূর্ত ছিল অসাধারণ। বন্ধুরা, শিক্ষকরা এবং প্রতিটি ক্লাসের স্মৃতি এখনো মনে পড়ে। লেখাপড়ার পাশাপাশি সাংস্কৃতিক চর্চা আমাকে আত্মবিশ্বাসী করে তুলেছে।",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop",
    },
    {
        id: 3,
        name: "তানভীর রহমান",
        batch: "2020",
        feedback:
            "স্কুলের প্রতিটি দিনই ছিল শেখার সুযোগে ভরা। শিক্ষকরা সবসময় উৎসাহ দিতেন এবং আমার দুর্বল দিকগুলো নিয়েও কাজ করেছেন। আজ আমি যা কিছু শিখেছি, তার ভিত্তি এই প্রতিষ্ঠানেই।",
        image: "https://images.unsplash.com/photo-1629114112651-a4cd6e401942?w=300&h=300&fit=crop",
    },
    {
        id: 4,
        name: "সাদিয়া ইসলাম",
        batch: "2021",
        feedback:
            "এই স্কুল আমাকে স্বপ্ন দেখতে শিখিয়েছে। শিক্ষকদের ভালবাসা আর সহানুভূতিশীল আচরণ আমাকে অনুপ্রাণিত করেছে। ক্লাসরুমের পরিবেশ, লাইব্রেরি আর অ্যাক্টিভিটিগুলো এখনো মনে পড়ে।",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop",
    },
    {
        id: 5,
        name: "মাহাদি হোসেন",
        batch: "2017",
        feedback:
            "আমার আত্মবিশ্বাস এবং দক্ষতার পেছনে এই স্কুলের অবদান অপরিসীম। প্রতিটি শিক্ষক ছিলেন দিকনির্দেশক। ক্লাসের বাইরেও তারা সবসময় পাশে ছিলেন। আমি গর্বিত এই স্কুলের ছাত্র হতে পেরে।",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=300&h=300&fit=crop",
    },
    {
        id: 6,
        name: "তাসনিম আক্তার",
        batch: "2016",
        feedback:
            "এই স্কুল শুধু শিক্ষা নয়, ভালো মানুষ হতে শিখিয়েছে। শিক্ষক ও সহপাঠীদের সহযোগিতা আমাকে সবসময় অনুপ্রাণিত করেছে। জীবনের বহু মূল্যবান পাঠ এখানেই পেয়েছি।",
        image: "https://images.unsplash.com/photo-1614287752068-3b8b2fd7c4de?w=300&h=300&fit=crop",
    },
    {
        id: 7,
        name: "আরাফাত হোসেন",
        batch: "2015",
        feedback:
            "এই স্কুলের পড়াশোনা, ডিসিপ্লিন ও সংস্কৃতিমূলক পরিবেশ আমাকে অন্য রকমভাবে গড়ে তুলেছে। স্কুলের প্রতিটি মুহূর্ত এখনো হৃদয়ে গাঁথা। আমি গর্বিত এই স্কুলের ছাত্র হয়ে।",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop",
    },
    {
        id: 8,
        name: "রেশমা পারভিন",
        batch: "2014",
        feedback:
            "এই স্কুলের শিক্ষাব্যবস্থা সত্যিই প্রশংসনীয়। প্রতিটি ক্লাস, প্রতিটি পরীক্ষা ছিল শিখার সুযোগ। শিক্ষকরা শুধু পাঠদানই করেননি, বরং জীবনের দিকনির্দেশনাও দিয়েছেন।",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300&h=300&fit=crop",
    },
    {
        id: 9,
        name: "জুবায়ের আহমেদ",
        batch: "2013",
        feedback:
            "আমার স্কুল জীবনের সেরা স্মৃতি এই স্কুলের সাথে জড়িত। শিক্ষকদের আন্তরিকতা, পাঠদানের ধরণ এবং শিক্ষার মান অতুলনীয়। আমি আজও এই প্রতিষ্ঠানকে মিস করি।",
        image: "https://images.unsplash.com/photo-1502767089025-6572583495b0?w=300&h=300&fit=crop",
    },
    {
        id: 10,
        name: "মেহজাবিন চৌধুরী",
        batch: "2012",
        feedback:
            "আমার স্কুল ছিল আমার দ্বিতীয় পরিবার। শিক্ষকদের আন্তরিকতা আর সততা আমাকে জীবনে বড় হতে সাহায্য করেছে। এই স্কুলের প্রতিটি মানুষ এখনো আমার মনে আছে।",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop",
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="py-14 bg-[#f9f9f9] my-10">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div>
                    <SectionHeader
                        title={"প্রাক্তন শিক্ষার্থীদের অভিমত"}
                        subtitle={
                            "আমাদের প্রাক্তন শিক্ষার্থীদের অভিজ্ঞতা জানুন—যারা এই বিদ্যালয়কে আজীবনের ভালোবাসা দিয়ে মনে রেখেছে।"
                        }
                    ></SectionHeader>
                </div>
                <Slider {...settings}>
                    {testimonials.map((t, index) => (
                        <div key={index} className="px-4 md:px-10">
                            <div className="bg-white shadow-xl rounded-2xl border border-[#e2e8f0] p-6 md:p-10 text-left relative">
                                <FaQuoteRight className="text-[#8E1C20] text-3xl absolute bottom-4 right-4 bg-white p-1 rounded-full" />
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                                    {t.feedback}
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-14 h-14 object-cover rounded-full border-2 border-[#249742] p-1"
                                    />
                                    <div className="text-left">
                                        <h4 className="font-semibold text-[#249742] text-lg">
                                            {t.name}
                                        </h4>
                                        <p className="text-sm text-[#8E1C20]">
                                            ব্যাচঃ {t.batch}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
