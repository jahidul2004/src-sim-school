import { useState } from "react";
import { Link } from "react-router-dom";

const Class6List = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState({
        gender: "",
        blood_group: "",
        religion: "",
    });

    const studentsData = [
        {
            student_id: "SSIM-06A-001",
            name_bn: "মোঃ আবির হোসেন",
            name_en: "Md. Abir Hossain",
            birth_date: "২০১১-০৩-১৫",
            class: "৬ষ্ঠ",
            session: "২০২৪",
            gender: "পুরুষ",
            blood_group: "O+",
            nationality: "বাংলাদেশী",
            religion: "ইসলাম",
            permanent_address: "সিদ্ধিরগঞ্জ, নারায়ণগঞ্জ",
            present_address: "মালিবাগ, ঢাকা",
            father_name: "মোঃ আমজাদ হোসেন",
            father_occupation: "সরকারি কর্মচারী",
            mother_name: "মাহমুদা বেগম",
            mother_occupation: "গৃহিণী",
            guardian_phone: "০১৭১২৩৪৫৬৭৮",
            student_photo_url: "https://example.com/photos/abir.jpg",
            birth_certificate_no: "১৯৮৭২৩৪৫৬৭",
        },
        {
            student_id: "SSIM-06A-002",
            name_bn: "সাবরিনা আক্তার",
            name_en: "Sabrina Akter",
            birth_date: "২০১১-০৭-০৫",
            class: "৬ষ্ঠ",
            session: "২০২৪",
            gender: "মহিলা",
            blood_group: "A+",
            nationality: "বাংলাদেশী",
            religion: "ইসলাম",
            permanent_address: "বহদ্দারহাট, চট্টগ্রাম",
            present_address: "চকবাজার, চট্টগ্রাম",
            father_name: "মোঃ নূরুল হক",
            father_occupation: "ব্যবসায়ী",
            mother_name: "সেলিনা আক্তার",
            mother_occupation: "শিক্ষিকা",
            guardian_phone: "০১৮৯৮৭৬৫৪৩২",
            student_photo_url: "https://example.com/photos/sabrina.jpg",
            birth_certificate_no: "১৯৮৭২৩৪৫৬৮",
        },
        {
            student_id: "SSIM-06B-003",
            name_bn: "রাফিউল ইসলাম",
            name_en: "Rafiqul Islam",
            birth_date: "২০১০-১২-২২",
            class: "৬ষ্ঠ",
            session: "২০২৪",
            gender: "পুরুষ",
            blood_group: "B+",
            nationality: "বাংলাদেশী",
            religion: "ইসলাম",
            permanent_address: "নওগাঁ সদর, রাজশাহী",
            present_address: "নওগাঁ সদর, রাজশাহী",
            father_name: "মোঃ হানিফ আলী",
            father_occupation: "চাষাবাদ",
            mother_name: "জিন্নাত আরা",
            mother_occupation: "গৃহিণী",
            guardian_phone: "০১৯১১১১২৩৪৫",
            student_photo_url: "https://example.com/photos/rafiul.jpg",
            birth_certificate_no: "১৯৮৭২৩৪৫৬৯",
        },
        {
            student_id: "SSIM-06A-004",
            name_bn: "মেহজাবিন ইসলাম",
            name_en: "Mehjabin Islam",
            birth_date: "২০১২-০২-০৯",
            class: "৬ষ্ঠ",
            session: "২০২৪",
            gender: "মহিলা",
            blood_group: "AB+",
            nationality: "বাংলাদেশী",
            religion: "ইসলাম",
            permanent_address: "পতেঙ্গা, চট্টগ্রাম",
            present_address: "পতেঙ্গা, চট্টগ্রাম",
            father_name: "মোঃ ইউসুফ আলী",
            father_occupation: "প্রকৌশলী",
            mother_name: "রোকসানা ইসলাম",
            mother_occupation: "ডাক্তার",
            guardian_phone: "০১৭২২২২৩৩৩৪",
            student_photo_url: "https://example.com/photos/mehjabin.jpg",
            birth_certificate_no: "১৯৮৭২৩৪৫৭০",
        },
        {
            student_id: "SSIM-06B-005",
            name_bn: "সাদিয়া রহমান",
            name_en: "Sadia Rahman",
            birth_date: "২০১১-০৬-১৭",
            class: "৬ষ্ঠ",
            session: "২০২৪",
            gender: "মহিলা",
            blood_group: "O−",
            nationality: "বাংলাদেশী",
            religion: "হিন্দু",
            permanent_address: "দিনাজপুর, রংপুর বিভাগ",
            present_address: "মিরপুর, ঢাকা",
            father_name: "বিপ্লব কুমার",
            father_occupation: "শিক্ষক",
            mother_name: "সুমনা দত্ত",
            mother_occupation: "গৃহিণী",
            guardian_phone: "০১৬১২৩৪৫৬৭৮",
            student_photo_url: "https://example.com/photos/sadia.jpg",
            birth_certificate_no: "১৯৮৭২৩৪৫৭১",
        },
    ];

    const filteredStudents = studentsData.filter((student) => {
        const matchesSearch =
            student.name_bn.includes(searchTerm) ||
            student.student_id.includes(searchTerm) ||
            student.guardian_phone.includes(searchTerm);

        const matchesGender = filter.gender
            ? student.gender === filter.gender
            : true;
        const matchesBlood = filter.blood_group
            ? student.blood_group === filter.blood_group
            : true;
        const matchesReligion = filter.religion
            ? student.religion === filter.religion
            : true;

        return (
            matchesSearch && matchesGender && matchesBlood && matchesReligion
        );
    });

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
            <div className="text-center mb-6 border-b-4 border-[#249742] pb-4">
                <h1 className="text-3xl font-bold text-[#249742]">
                    ৬ষ্ট শ্রেনী শিক্ষার্থী ম্যানেজমেন্ট পোর্টাল
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <Link
                    to="/admin/studentList/addStudent"
                    className="p-6 bg-[#e3342f] rounded-xl shadow-md text-white text-center font-semibold text-lg hover:bg-[#cc1f1a] transition-all duration-300"
                >
                    নতুন শিক্ষার্থী যুক্ত করুন
                </Link>

                <div className="bg-yellow-400 text-white rounded-xl p-6 shadow-md">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <select
                            className="select select-sm select-bordered text-black"
                            onChange={(e) =>
                                setFilter({ ...filter, gender: e.target.value })
                            }
                        >
                            <option value="">লিঙ্গ</option>
                            <option value="পুরুষ">পুরুষ</option>
                            <option value="মহিলা">মহিলা</option>
                        </select>
                        <select
                            className="select select-sm select-bordered text-black"
                            onChange={(e) =>
                                setFilter({
                                    ...filter,
                                    blood_group: e.target.value,
                                })
                            }
                        >
                            <option value="">রক্তের গ্রুপ</option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="O+">O+</option>
                            <option value="O−">O−</option>
                            <option value="AB+">AB+</option>
                        </select>
                        <select
                            className="select select-sm select-bordered text-black"
                            onChange={(e) =>
                                setFilter({
                                    ...filter,
                                    religion: e.target.value,
                                })
                            }
                        >
                            <option value="">ধর্ম</option>
                            <option value="ইসলাম">ইসলাম</option>
                            <option value="হিন্দু">হিন্দু</option>
                            <option value="খ্রিস্টান">খ্রিস্টান</option>
                        </select>
                    </div>
                </div>

                <div className="bg-green-500 p-6 rounded-xl text-white font-semibold shadow-md">
                    <input
                        className="input input-sm input-bordered w-full text-black"
                        placeholder="নাম, আইডি অথবা ফোন"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="w-full overflow-x-auto rounded-lg shadow-xl">
                <table className="table w-full bg-white text-sm sm:text-base">
                    <thead className="bg-[#249742] text-white text-left">
                        <tr>
                            <th className="py-3 px-4">শিক্ষার্থী আইডি</th>
                            <th className="py-3 px-4">নাম</th>
                            <th className="py-3 px-4">ঠিকানা</th>
                            <th className="py-3 px-4">অভিবাবকের ফোন</th>
                            <th className="py-3 px-4">অ্যাকশন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4">
                                    {student?.student_id}
                                </td>
                                <td className="py-2 px-4">
                                    {student?.name_bn}
                                </td>
                                <td className="py-2 px-4">
                                    {student?.present_address}
                                </td>
                                <td className="py-2 px-4">
                                    {student?.guardian_phone}
                                </td>
                                <td className="py-2 px-4">
                                    <Link
                                        to={`/admin/studentList/${student?.student_id}`}
                                        className="btn btn-sm bg-[#249742] hover:bg-[#1e7a37] text-white"
                                    >
                                        বিস্তারিত দেখুন
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-center mt-8">
                <Link
                    to="/admin/studentList"
                    className="btn bg-[#249742] hover:bg-[#1d7a36] text-white px-6 py-2 rounded-lg shadow-md"
                >
                    পেছনে ফিরে যান
                </Link>
            </div>
        </div>
    );
};

export default Class6List;
