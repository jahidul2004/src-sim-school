import React from "react";
import { Link } from "react-router-dom";

const AdminTeacherDetails = () => {
    const teacher = {
        teacher_id: "T-004",
        name_bn: "নিহারিকা সেন",
        name_en: "Niharika Sen",
        gender: "মহিলা",
        birth_date: "১৯৮৮-০৯-১২",
        blood_group: "AB−",
        national_id: "১৯৮৮১২৩৪৫৬৭৮৯",
        religion: "হিন্দু",
        nationality: "বাংলাদেশী",
        phone: "০১৮১২৩৪৫৬৭৮",
        email: "niharika@example.com",
        joining_date: "২০১২-০৯-২০",
        designation: "শিক্ষিকা",
        department: "বিজ্ঞান",
        education: "এম.এসসি (পদার্থবিজ্ঞান), রাজশাহী বিশ্ববিদ্যালয়",
        present_address: "নিউমার্কেট, খুলনা",
        permanent_address: "বাগেরহাট সদর, খুলনা",
        photo_url: "https://i.ibb.co/rRx3vzt9/noman.jpg",
        marital_status: "অবিবাহিত",
        emergency_contact: "০১৯৯৯৯৯৯৯৯৯",
    };

    const infoFields = [
        { label: "নাম (বাংলা)", value: teacher.name_bn },
        { label: "নাম (ইংরেজি)", value: teacher.name_en },
        { label: "পদবি", value: teacher.designation },
        { label: "বিভাগ", value: teacher.department },
        { label: "লিঙ্গ", value: teacher.gender },
        { label: "জন্ম তারিখ", value: teacher.birth_date },
        { label: "রক্তের গ্রুপ", value: teacher.blood_group },
        { label: "জাতীয় পরিচয়পত্র", value: teacher.national_id },
        { label: "ধর্ম", value: teacher.religion },
        { label: "জাতীয়তা", value: teacher.nationality },
        { label: "ফোন", value: teacher.phone },
        { label: "ইমেইল", value: teacher.email },
        { label: "যোগদানের তারিখ", value: teacher.joining_date },
        { label: "শিক্ষাগত যোগ্যতা", value: teacher.education },
        { label: "বর্তমান ঠিকানা", value: teacher.present_address },
        { label: "স্থায়ী ঠিকানা", value: teacher.permanent_address },
        { label: "বৈবাহিক অবস্থা", value: teacher.marital_status },
        { label: "জরুরি যোগাযোগ", value: teacher.emergency_contact },
    ];

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center sm:text-left flex items-center gap-2">
                    <img
                        src={teacher.photo_url}
                        alt={teacher.name_bn}
                        className="p-1 w-28 h-28 rounded-full border-4 border-green-600 object-cover"
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            {teacher.name_bn}
                        </h2>
                        <p className="mt-1 text-green-600 font-semibold">
                            {teacher.designation}, {teacher.department}
                        </p>
                        <p className="mt-1 font-semibold">
                            আইডিঃ {teacher?.teacher_id}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <button className="btn btn-error text-white border-none">
                        রিমুভ করুন
                    </button>
                    <button className="btn bg-[#249742] text-white border-none">
                        মেইল করুন
                    </button>
                    <button className="btn btn-info text-white border-none">
                        তথ্য আপডেট
                    </button>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {infoFields.map((field, index) => (
                    <div key={index} className="flex flex-col">
                        <span className="text-sm text-gray-500">
                            {field.label}
                        </span>
                        <span className="font-medium text-gray-800">
                            {field.value}
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex justify-en">
                <button className="mt-4 btn bg-[#249742] text-white">
                    সামারি প্রিন্ট করুন
                </button>
            </div>
        </div>
    );
};

export default AdminTeacherDetails;
