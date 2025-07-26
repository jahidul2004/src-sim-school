import React from "react";

// স্কুলের লোগোর জন্য প্লেসহোল্ডার, কারণ স্থানীয় ফাইল ইম্পোর্ট সমর্থিত নয়
const logoTransparent =
    "https://placehold.co/100x100/249742/ffffff?text=School+Logo";

const DigiCard = () => {
    // শিক্ষার্থীর ডেটা অবজেক্ট
    const student = {
        student_id: "SSIM-10A-001",
        name_bn: "সাদিয়া রহমান",
        name_en: "Sadia Rahman",
        birth_date: "২০১১-০৬-১৭",
        class: "৬ষ্ঠ",
        session: "২০২৪",
        gender: "মহিলা",
        blood_group: "O−",
        religion: "হিন্দু",
        father_name: "বিপ্লব কুমার",
        mother_name: "সুমনা দত্ত",
        guardian_phone: "০১৬১২৩৪৫৬৭৮",
        student_photo_url:
            "https://i.ibb.co/8QSdzpm/463b3ad3-8d02-4eac-8d28-60f36b71cfe2.jpg",
    };

    return (
        // মূল কার্ড কন্টেইনার
        <div className="relative w-[340px] sm:w-[500px] h-auto border-2 border-gray-200 shadow-xl bg-gradient-to-br from-white to-gray-50 overflow-hidden font-sans text-[12px] sm:text-[14px] text-[#1e1e1e] mx-auto my-8">
            {/* ডেকোরেটিভ শেপস */}
            {/* উপরের বাম কোণে বড় সবুজ শেপ */}
            <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#d4f0d4] rounded-br-full opacity-70 transform -translate-x-1/3 -translate-y-1/3"></div>
            {/* নীচের ডান কোণে বড় সবুজ শেপ */}
            <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-40 sm:h-40 bg-[#a8e6cf] rounded-tl-full opacity-70 transform translate-x-1/3 translate-y-1/3"></div>
            {/* উপরের ডান কোণে ছোট বৃত্তাকার শেপ */}
            <div className="absolute top-1/4 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#249742] rounded-full opacity-15 transform translate-x-1/4 -translate-y-1/4"></div>
            {/* নীচের বাম কোণে ছোট বৃত্তাকার শেপ */}
            <div className="absolute bottom-1/4 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#1a7f37] rounded-full opacity-15 transform -translate-x-1/4 translate-y-1/4"></div>
            {/* মাঝখানে একটি ছোট ডায়াগোনাল শেপ */}
            <div className="absolute top-1/2 left-1/2 w-20 h-20 sm:w-28 sm:h-28 bg-[#c2e7b0] rounded-lg rotate-45 opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
            {/* হেডার এবং ফুটারের জন্য স্ট্রাইপ ডিজাইন */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-[#1a7f37] opacity-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#1a7f37] opacity-10"></div>

            {/* হেডার সেকশন */}
            <div className="relative z-10 flex items-center gap-2 border-b border-gray-200 px-4 py-3 bg-gradient-to-r from-[#eaf8f0] to-[#d4f0d4]">
                <img
                    className="w-12 sm:w-16 h-12 sm:h-16 border-4 border-[#249742] rounded-full p-1 shadow-md"
                    src={logoTransparent}
                    alt="School Logo"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                            "https://placehold.co/100x100/249742/ffffff?text=School+Logo";
                    }} // ইমেজ লোড না হলে প্লেসহোল্ডার
                />
                <div className="leading-5 sm:leading-6">
                    <h1 className="font-extrabold text-base sm:text-xl text-[#1a7f37]">
                        শ্রীরায়েরচর এস আই এম উচ্চ বিদ্যালয়
                    </h1>
                    <p className="text-gray-600 text-[10px] sm:text-sm">
                        শ্রীরায়েরচর, দাউদকান্দি, কুমিল্লা
                    </p>
                </div>
            </div>

            {/* টাইটেল সেকশন */}
            <div className="relative z-10 text-center py-2 sm:py-3">
                <span className="inline-block bg-[#1a7f37] text-white px-5 py-2 rounded-full text-base font-bold shadow-lg transform -translate-y-1">
                    শিক্ষার্থী ডিজি কার্ড
                </span>
            </div>

            {/* বডি সেকশন (শিক্ষার্থীর তথ্য এবং ছবি/QR) */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 px-4 py-4">
                {/* শিক্ষার্থীর তথ্য */}
                <div className="sm:col-span-1 leading-6 sm:leading-7">
                    <p>
                        <span className="font-bold text-[#249742] w-20 inline-block">
                            আইডিঃ
                        </span>{" "}
                        {student.student_id}
                    </p>
                    <p>
                        <span className="font-bold text-[#249742] w-20 inline-block">
                            নামঃ
                        </span>{" "}
                        {student.name_bn}
                    </p>
                    <p>
                        <span className="font-bold text-[#249742] w-20 inline-block">
                            পিতাঃ
                        </span>{" "}
                        {student.father_name}
                    </p>
                    <p>
                        <span className="font-bold text-[#249742] w-20 inline-block">
                            মাতাঃ
                        </span>{" "}
                        {student.mother_name}
                    </p>
                    <p>
                        <span className="font-bold text-[#249742] w-20 inline-block">
                            জন্মঃ
                        </span>{" "}
                        {student.birth_date}
                    </p>
                    <p>
                        <span className="font-bold text-[#249742] w-20 inline-block">
                            রক্তঃ
                        </span>{" "}
                        {student.blood_group}
                    </p>
                    <p>
                        <span className="font-bold text-[#249742] w-20 inline-block">
                            ক্লাসঃ
                        </span>{" "}
                        {student.class}
                    </p>
                    <p>
                        <span className="font-bold text-[#249742] w-20 inline-block">
                            সেশনঃ
                        </span>{" "}
                        {student.session}
                    </p>
                </div>

                {/* ছবি এবং QR কোড */}
                <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:col-span-1 mt-4 sm:mt-0">
                    <img
                        className="w-28 h-28 sm:w-32 sm:h-32 border-4 border-[#1a7f37] object-cover rounded-lg shadow-lg"
                        src={student.student_photo_url}
                        alt="Student"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                                "https://placehold.co/128x128/cccccc/333333?text=Student+Photo";
                        }} // ইমেজ লোড না হলে প্লেসহোল্ডার
                    />
                    <img
                        className="w-28 h-28 sm:w-32 sm:h-32 border-2 border-gray-300 p-1 rounded-md shadow-md"
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=ID:${student.student_id};Name:${student.name_en};Mobile:${student?.guardian_phone}`}
                        alt="QR Code"
                    />
                </div>
            </div>

            {/* ফুটার সেকশন */}
            <div className="relative z-10 flex justify-between items-center px-4 py-3 border-t border-gray-200 mt-4 bg-gray-50 text-[10px] sm:text-sm text-gray-700">
                <div>
                    <p>জরুরি ফোনঃ {student.guardian_phone}</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold">আজিজ</p>
                    <div className="border-t-2 border-gray-400 w-32 mx-auto mt-2" />
                    <p className="text-[10px] sm:text-xs text-gray-500">
                        প্রধান শিক্ষক
                    </p>
                </div>
            </div>
        </div>
    );
};

// অ্যাপ কম্পোনেন্ট যা DigiCard কে রেন্ডার করে
const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <DigiCard />
        </div>
    );
};

export default App;
