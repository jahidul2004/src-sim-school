import React from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { Link } from "react-router-dom";

const teachers = [
    {
        id: 1,
        name: "মোঃ কামরুল ইসলাম",
        subject: "বাংলা",
        designation: "সহকারী শিক্ষক",
        department: "General",
        image: "https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif",
        description:
            "বাংলা সাহিত্য ও ব্যাকরণে দক্ষ এই শিক্ষক দীর্ঘ ৮ বছর ধরে শিক্ষকতা করছেন।",
    },
    {
        id: 2,
        name: "শাহানা আক্তার",
        subject: "ইংরেজি",
        designation: "সহকারী শিক্ষক",
        department: "General",
        image: "https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif",
        description:
            "ইংরেজি ভাষা শিক্ষায় আধুনিক পদ্ধতি প্রয়োগে অভিজ্ঞ ও ছাত্রদের প্রিয় শিক্ষক।",
    },
    {
        id: 3,
        name: "মোঃ হাসান মাহমুদ",
        subject: "গণিত",
        designation: "সহকারী শিক্ষক",
        department: "Science",
        image: "https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif",
        description:
            "জটিল গণিতকে সহজভাবে ব্যাখ্যা করার জন্য ছাত্রদের কাছে অত্যন্ত জনপ্রিয়।",
    },
    {
        id: 4,
        name: "জান্নাতুল মাওয়া",
        subject: "রসায়ন",
        designation: "সহকারী শিক্ষক",
        department: "Science",
        image: "https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif",
        description: "রসায়নের নানা পরীক্ষণ ও প্র্যাকটিকাল ক্লাসে পারদর্শী।",
    },
    {
        id: 5,
        name: "মোঃ ইমরান হোসেন",
        subject: "জীববিজ্ঞান",
        designation: "সহকারী শিক্ষক",
        department: "Science",
        image: "https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif",
        description:
            "জীববিজ্ঞানের বাস্তবমুখী শিক্ষা প্রদানে দক্ষ ও অত্যন্ত সহানুভূতিশীল।",
    },
    {
        id: 6,
        name: "সালেহা বেগম",
        subject: "হিসাববিজ্ঞান",
        designation: "সহকারী শিক্ষক",
        department: "Business",
        image: "https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif",
        description:
            "হিসাবের সূত্র ও প্রয়োগে সুস্পষ্ট ধারণা দিতে পারদর্শী একজন অভিজ্ঞ শিক্ষক।",
    },
    {
        id: 7,
        name: "মোঃ সজিব রহমান",
        subject: "ব্যবসায় সংগঠন",
        designation: "সহকারী শিক্ষক",
        department: "Business",
        image: "https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif",
        description:
            "ব্যবসার বাস্তবিক দৃষ্টিভঙ্গিতে শিক্ষার্থীদের প্রস্তুত করতে কাজ করছেন।",
    },
    {
        id: 8,
        name: "নাজমুন নাহার",
        subject: "অর্থনীতি",
        designation: "সহকারী শিক্ষক",
        department: "Business",
        image: "https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif",
        description: "দেশীয় ও আন্তর্জাতিক অর্থনীতির শিক্ষা দিতে দক্ষ ও অভিজ্ঞ।",
    },
    {
        id: 9,
        name: "আবু রায়হান",
        subject: "ইতিহাস",
        designation: "সহকারী শিক্ষক",
        department: "Humanities",
        image: "https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif",
        description:
            "ইতিহাসকে জীবন্ত করে তোলার জন্য পরিচিত, ছাত্রদের কাছে খুবই জনপ্রিয়।",
    },
    {
        id: 10,
        name: "সানজিদা তানভিন",
        subject: "সমাজবিজ্ঞান",
        designation: "সহকারী শিক্ষক",
        department: "Humanities",
        image: "https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif",
        description:
            "সমাজ ও মানুষের আচরণ সম্পর্কে বিশ্লেষণধর্মী পড়ানোর জন্য প্রশংসিত।",
    },
];

const departments = ["General", "Science", "Business", "Humanities"];

const Faculty = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div>
                    <SectionHeader
                        title={"আমাদের অভিজ্ঞ ফ্যাকাল্টি"}
                        subtitle={"আমাদের রয়েছে অভিজ্ঞ ও সুদক্ষ ফ্যাকাল্টি।"}
                    ></SectionHeader>
                </div>

                {departments.map((dept) => {
                    const deptTeachers = teachers.filter(
                        (t) => t.department === dept
                    );

                    return (
                        <div key={dept} className="mb-12">
                            <h3 className="text-2xl font-semibold text-[#249742] mb-6 border-b pb-2">
                                {dept} বিভাগ
                            </h3>

                            {deptTeachers.length > 0 ? (
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {deptTeachers.map((teacher) => (
                                        <div
                                            key={teacher.id}
                                            className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col items-center text-center"
                                        >
                                            <img
                                                src={teacher.image}
                                                alt={teacher.name}
                                                className="w-24 h-24 rounded-full border-4 border-[#249742] object-cover mb-4 p-1"
                                            />
                                            <h4 className="text-lg font-semibold text-gray-800">
                                                {teacher.name}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {teacher.subject} |{" "}
                                                {teacher.designation}
                                            </p>
                                            <p className="mt-3 text-sm text-gray-700 text-justify">
                                                {teacher.description}
                                            </p>
                                            <Link className="btn bg-[#249742] text-white rounded-lg">
                                                ডিটেইলস দেখুন
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">
                                    এই বিভাগে কোনো শিক্ষক খুঁজে পাওয়া যায়নি।
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Faculty;
