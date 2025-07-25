import { useParams } from "react-router-dom";
import {
    FaUser,
    FaBirthdayCake,
    FaVenusMars,
    FaTint,
    FaFlag,
    FaPrayingHands,
    FaPhoneAlt,
    FaMale,
    FaFemale,
    FaMapMarkerAlt,
    FaIdBadge,
} from "react-icons/fa";
import {
    MdSchool,
    MdLocationCity,
    MdOutlineAssignmentInd,
} from "react-icons/md";
import { BsCardImage } from "react-icons/bs";

const student = {
    student_id: "SSIM-06-005",
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
    student_photo_url:
        "https://i.ibb.co/8QSdzpm/463b3ad3-8d02-4eac-8d28-60f36b71cfe2.jpg",
    birth_certificate_no: "১৯৮৭২৩৪৫৭১",
};

const AdminStudentDetails = () => {
    const { id } = useParams();
    console.log("Student ID from URL:", id);

    return (
        <div className="p-4">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left: Student Photo */}
                    <div className="col-span-1 flex flex-col items-center justify-center">
                        <img
                            src={student.student_photo_url}
                            alt={student.name_en}
                            className="w-40 h-40 rounded-full shadow-md object-cover border-2 border-[#249742] p-1"
                        />
                        <div className="mt-4 text-center">
                            <h2 className="text-lg font-bold">
                                {student.name_bn}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {student.name_en}
                            </p>
                            <p className="badge badge-success mt-2">
                                <MdSchool className="mr-1" />
                                {student.class} শ্রেণি, {student.session}
                            </p>
                            <p className="text-sm mt-1">
                                <FaIdBadge className="inline mr-1" />{" "}
                                {student.student_id}
                            </p>
                        </div>
                    </div>

                    {/* Right: Personal Info */}
                    <div className="col-span-2 space-y-3">
                        <h3 className="text-xl font-semibold mb-2 border-b pb-1">
                            ব্যক্তিগত তথ্য
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p>
                                <FaBirthdayCake className="inline mr-1" /> জন্ম
                                তারিখ: {student.birth_date}
                            </p>
                            <p>
                                <FaVenusMars className="inline mr-1" /> লিঙ্গ:{" "}
                                {student.gender}
                            </p>
                            <p>
                                <FaTint className="inline mr-1" /> রক্তের গ্রুপ:{" "}
                                {student.blood_group}
                            </p>
                            <p>
                                <FaFlag className="inline mr-1" /> জাতীয়তা:{" "}
                                {student.nationality}
                            </p>
                            <p>
                                <FaPrayingHands className="inline mr-1" /> ধর্ম:{" "}
                                {student.religion}
                            </p>
                            <p>
                                <MdOutlineAssignmentInd className="inline mr-1" />{" "}
                                জন্ম সনদ নম্বর: {student.birth_certificate_no}
                            </p>
                        </div>

                        <div className="divider">অভিভাবক তথ্য</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p>
                                <FaMale className="inline mr-1" /> পিতার নাম:{" "}
                                {student.father_name}
                            </p>
                            <p>
                                <FaFemale className="inline mr-1" /> মাতার নাম:{" "}
                                {student.mother_name}
                            </p>
                            <p>
                                <MdLocationCity className="inline mr-1" /> পেশা
                                (পিতা): {student.father_occupation}
                            </p>
                            <p>
                                <MdLocationCity className="inline mr-1" /> পেশা
                                (মাতা): {student.mother_occupation}
                            </p>
                            <p>
                                <FaPhoneAlt className="inline mr-1" /> মোবাইল
                                নম্বর: {student.guardian_phone}
                            </p>
                        </div>

                        <div className="divider">ঠিকানা</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p>
                                <FaMapMarkerAlt className="inline mr-1" />{" "}
                                বর্তমান ঠিকানা: {student.present_address}
                            </p>
                            <p>
                                <FaMapMarkerAlt className="inline mr-1" />{" "}
                                স্থায়ী ঠিকানা: {student.permanent_address}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminStudentDetails;
