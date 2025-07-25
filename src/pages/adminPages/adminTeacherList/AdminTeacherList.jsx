import { FaEye, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminTeacherList = () => {
    const teachers = [
        {
            teacher_id: "T-001",
            name_bn: "মোহাম্মদ আলী",
            name_en: "Mohammad Ali",
            gender: "পুরুষ",
            birth_date: "১৯৮০-০৫-১৫",
            blood_group: "A+",
            national_id: "১৯৮০১২৩৪৫৬৭৮৯",
            religion: "ইসলাম",
            nationality: "বাংলাদেশী",
            phone: "০১৭১২৩৪৫৬৭৮",
            email: "m.ali@example.com",
            joining_date: "২০০৮-০১-২০",
            designation: "সহকারী শিক্ষক",
            department: "গণিত",
            education: "এম.এসসি (গণিত), ঢাকা বিশ্ববিদ্যালয়",
            present_address: "শাহবাগ, ঢাকা",
            permanent_address: "মাদারীপুর সদর, মাদারীপুর",
            photo_url: "https://i.ibb.co/rRx3vzt9/noman.jpg",
            marital_status: "বিবাহিত",
            emergency_contact: "০১৮৮৮৮৮৮৮৮৮",
        },
        {
            teacher_id: "T-002",
            name_bn: "সাবরিনা আক্তার",
            name_en: "Sabrina Akter",
            gender: "মহিলা",
            birth_date: "১৯৮৫-০৭-১০",
            blood_group: "B+",
            national_id: "১৯৮৫১২৩৪৫৬৭৮৯",
            religion: "ইসলাম",
            nationality: "বাংলাদেশী",
            phone: "০১৬১২৩৪৫৬৭৮",
            email: "sabrina@example.com",
            joining_date: "২০১০-০৬-১৫",
            designation: "সহকারী শিক্ষিকা",
            department: "বাংলা",
            education: "এম.এ (বাংলা), জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
            present_address: "উত্তরা, ঢাকা",
            permanent_address: "নাটোর সদর, রাজশাহী",
            photo_url: "https://i.ibb.co/rRx3vzt9/noman.jpg",
            marital_status: "অবিবাহিত",
            emergency_contact: "০১৭৯৯৯৯৯৯৯৯",
        },
        {
            teacher_id: "T-003",
            name_bn: "রফিকুল ইসলাম",
            name_en: "Rafiqul Islam",
            gender: "পুরুষ",
            birth_date: "১৯৭৫-১১-২৫",
            blood_group: "O+",
            national_id: "১৯৭৫১২৩৪৫৬৭৮৯",
            religion: "ইসলাম",
            nationality: "বাংলাদেশী",
            phone: "০১৯১২৩৪৫৬৭৮",
            email: "rafiqul@example.com",
            joining_date: "২০০৫-০৩-০১",
            designation: "সহকারী প্রধান শিক্ষক",
            department: "ইংরেজি",
            education: "এম.এ (ইংরেজি), চট্টগ্রাম বিশ্ববিদ্যালয়",
            present_address: "আগ্রাবাদ, চট্টগ্রাম",
            permanent_address: "চন্দনাইশ, চট্টগ্রাম",
            photo_url: "https://i.ibb.co/rRx3vzt9/noman.jpg",
            marital_status: "বিবাহিত",
            emergency_contact: "০১৭৭৭৭৭৭৭৭৭",
        },
        {
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
        },
    ];

    return (
        <div className="p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#249742] border-b-2 border-[#249742] pb-2">
                    শিক্ষক ম্যানেজমেন্ট পোর্টাল
                </h1>
                <button className="btn btn-success text-white mt-3 sm:mt-0">
                    <FaPlus className="mr-2" /> নতুন শিক্ষক যোগ করুন
                </button>
            </div>

            <div className="overflow-x-auto shadow rounded-lg">
                <table className="table w-full text-sm sm:text-base">
                    <thead className="bg-[#249742] text-white">
                        <tr>
                            <th>ছবি</th>
                            <th>নাম</th>
                            <th>পদবি</th>
                            <th>বিভাগ</th>
                            <th>ফোন</th>
                            <th>অ্যাকশন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map((teacher) => (
                            <tr key={teacher.teacher_id} className="hover">
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                                            <img
                                                src={teacher.photo_url}
                                                alt={teacher.name_bn}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-semibold">
                                        {teacher.name_bn}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {teacher.name_en}
                                    </div>
                                </td>
                                <td>{teacher.designation}</td>
                                <td>{teacher.department}</td>
                                <td>{teacher.phone}</td>
                                <td>
                                    <Link to={`/admin/teacherList/${teacher?.teacher_id}`} className="btn btn-sm btn-outline btn-success">
                                        <FaEye className="mr-1" />
                                        বিস্তারিত
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminTeacherList;
