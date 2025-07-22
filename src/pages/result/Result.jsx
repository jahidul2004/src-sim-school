import React, { useState } from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const demoResults = [
    {
        studentId: "202301",
        class: "9",
        examType: "বার্ষিক",
        name: "মোঃ রাকিবুল ইসলাম",
        results: [
            { subject: "বাংলা", marks: 85 },
            { subject: "ইংরেজি", marks: 78 },
            { subject: "গণিত", marks: 90 },
        ],
    },
    {
        studentId: "202302",
        class: "9",
        examType: "অর্ধ বার্ষিক",
        name: "আফরোজা নাসরিন",
        results: [
            { subject: "বাংলা", marks: 72 },
            { subject: "ইংরেজি", marks: 69 },
            { subject: "গণিত", marks: 80 },
        ],
    },
    // আরও ডেমো ডাটা চাইলে এখানে যোগ করুন
];

const Result = () => {
    const [studentId, setStudentId] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [examType, setExamType] = useState("");
    const [foundResult, setFoundResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = demoResults.find(
            (res) =>
                res.studentId === studentId &&
                res.class === studentClass &&
                res.examType === examType
        );
        setFoundResult(result || null);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <div>
                <SectionHeader
                    title={"ফলাফল"}
                    subtitle={
                        "এই পোর্টাল এ শিক্ষার্থী রা তদের রোল, শ্রেনী আর পরীক্ষার টাইপ ইনপুট দিয়ে ফলাফল দেখতে পারবে।"
                    }
                ></SectionHeader>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-6 space-y-4"
            >
                <input
                    type="text"
                    placeholder="স্টুডেন্ট আইডি দিন"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                />
                <select
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                >
                    <option value="">-- শ্রেণি নির্বাচন করুন --</option>
                    <option value="6">ষষ্ঠ</option>
                    <option value="7">সপ্তম</option>
                    <option value="8">অষ্টম</option>
                    <option value="9">নবম</option>
                    <option value="10">দশম</option>
                </select>
                <select
                    value={examType}
                    onChange={(e) => setExamType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                >
                    <option value="">-- পরীক্ষার ধরন নির্বাচন করুন --</option>
                    <option value="প্রথম সাময়িক">প্রথম সাময়িক</option>
                    <option value="অর্ধ বার্ষিক">অর্ধ বার্ষিক</option>
                    <option value="বার্ষিক">বার্ষিক</option>
                </select>
                <button
                    type="submit"
                    className="bg-[#249742] hover:bg-[#00977d] text-white py-3 px-6 rounded w-full font-semibold"
                >
                    ফলাফল দেখুন
                </button>
            </form>

            {foundResult ? (
                <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2 text-center">
                        শিক্ষার্থীর নাম: {foundResult.name}
                    </h3>
                    <table className="w-full text-left border mt-4">
                        <thead>
                            <tr className="bg-[#f0f0f0]">
                                <th className="p-2 border">বিষয়</th>
                                <th className="p-2 border">প্রাপ্ত নম্বর</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foundResult.results.map((res, idx) => (
                                <tr key={idx} className="hover:bg-gray-100">
                                    <td className="p-2 border">
                                        {res.subject}
                                    </td>
                                    <td className="p-2 border">{res.marks}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                studentId && (
                    <p className="text-center mt-6 text-red-500 font-medium">
                        ফলাফল পাওয়া যায়নি। অনুগ্রহ করে তথ্যগুলো আবার যাচাই করুন।
                    </p>
                )
            )}
        </div>
    );
};

export default Result;
