import { useState } from "react";
import { Link } from "react-router-dom";

const studentsData = [
    {
        student_id: "SSIM-08-001",
        name_bn: "মোঃ আবির হোসেন",
        name_en: "Md. Abir Hossain",
        birth_date: "২০১১-০৩-১৫",
        class: "৮ম",
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
        student_id: "SSIM-08-002",
        name_bn: "সাবরিনা আক্তার",
        name_en: "Sabrina Akter",
        birth_date: "২০১১-০৭-০৫",
        class: "৮ম",
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
        student_id: "SSIM-08-003",
        name_bn: "রাফিউল ইসলাম",
        name_en: "Rafiqul Islam",
        birth_date: "২০১০-১২-২২",
        class: "৮ম",
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
];

const Class9List = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState({
        gender: "",
        blood_group: "",
        religion: "",
    });

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
        <div>
            <div className="text-center mb-2 md:mb-4 border-b-2 border-[#249742] pb-4">
                <h1 className="text-2xl font-semibold">
                    ৯ম শ্রেনী শিক্ষার্থী ম্যানেজমেন্ট পোর্টাল
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 border-b-2 pb-4 border-[#249742]">
                <Link
                    to={"/admin/studentList/addStudent"}
                    className="cursor-pointer bg-error p-4 rounded-lg text-center text-white text-lg font-semibold flex flex-col items-center"
                >
                    নতুন শিক্ষার্থী যুক্ত করুন
                </Link>
                <div className="bg-warning text-white rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-2">
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

                <div className="bg-success p-4 rounded-lg text-white font-semibold">
                    <input
                        className="input input-sm input-bordered w-full text-black"
                        placeholder="নাম, আইডি অথবা ফোন"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="w-full overflow-x-auto rounded-lg shadow-md">
                <table className="table w-full bg-white text-sm sm:text-base">
                    <thead className="bg-[#249742] text-white">
                        <tr>
                            <th>শিক্ষার্থী আইডি</th>
                            <th>নাম</th>
                            <th>ঠিকানা</th>
                            <th>অভিবাবকের ফোন</th>
                            <th>অ্যাকশন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student, index) => (
                            <tr key={index} className="hover">
                                <td>{student?.student_id}</td>
                                <td>{student?.name_bn}</td>
                                <td>{student?.present_address}</td>
                                <td>{student?.guardian_phone}</td>
                                <td>
                                    <Link
                                        to={`/admin/studentList/${student?.student_id}`}
                                        className="btn btn-sm btn-success text-white"
                                    >
                                        বিস্তারিত দেখুন
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-center my-4">
                <Link
                    to={"/admin/studentList"}
                    className="btn btn-success text-white"
                >
                    পেছনে ফিরে জান
                </Link>
            </div>
        </div>
    );
};

export default Class9List;
