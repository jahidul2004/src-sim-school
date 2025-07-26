import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    User,
    Briefcase,
    CalendarDays,
    Droplet,
    CreditCard,
    HeartHandshake,
    Flag,
    Phone,
    Mail,
    CalendarCheck,
    BookOpen,
    MapPin,
    Heart,
    PhoneCall,
    Trash2, // For remove button
    MailCheck, // For mail button
    Edit, // For update button
    Printer, // For print button
    Users, // Generic for gender if no specific icon
} from "lucide-react";

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
        photo_url: "https://i.ibb.co/rRx3vzt/noman.jpg", // Placeholder image URL
        marital_status: "অবিবাহিত",
        emergency_contact: "০১৯৯৯৯৯৯৯৯৯",
    };

    // State for update modal visibility
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    // State to hold editable teacher data for the modal
    const [updatedTeacherData, setUpdatedTeacherData] = useState(teacher);

    // Reusable Card component for consistent styling
    const Card = ({ children, className = "" }) => (
        <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
            {children}
        </div>
    );

    // Reusable Button component with enhanced styling
    const Button = ({
        children,
        variant = "default",
        className = "",
        ...props
    }) => {
        const base =
            "px-5 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105";
        const variants = {
            default: "bg-[#249742] text-white hover:bg-[#1e7f38]", // Your theme green
            outline:
                "border border-gray-300 text-gray-700 hover:bg-gray-100 hover:shadow-md",
            destructive: "bg-red-600 text-white hover:bg-red-700",
            info: "bg-blue-500 text-white hover:bg-blue-600", // For info button
        };
        return (
            <button
                className={`${base} ${variants[variant]} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    };

    // Function to get icon based on label
    const getIconForField = (label) => {
        switch (label) {
            case "নাম (বাংলা)":
            case "নাম (ইংরেজি)":
                return <User size={18} className="mr-2 text-[#249742]" />;
            case "পদবি":
            case "বিভাগ":
                return <Briefcase size={18} className="mr-2 text-blue-500" />;
            case "লিঙ্গ":
                return <Users size={18} className="mr-2 text-pink-500" />; // Generic gender icon
            case "জন্ম তারিখ":
                return (
                    <CalendarDays size={18} className="mr-2 text-purple-500" />
                );
            case "রক্তের গ্রুপ":
                return <Droplet size={18} className="mr-2 text-red-500" />;
            case "জাতীয় পরিচয়পত্র":
                return (
                    <CreditCard size={18} className="mr-2 text-orange-500" />
                );
            case "ধর্ম":
                return (
                    <HeartHandshake size={18} className="mr-2 text-teal-500" />
                );
            case "জাতীয়তা":
                return <Flag size={18} className="mr-2 text-yellow-500" />;
            case "ফোন":
                return <Phone size={18} className="mr-2 text-green-500" />;
            case "ইমেইল":
                return <Mail size={18} className="mr-2 text-indigo-500" />;
            case "যোগদানের তারিখ":
                return (
                    <CalendarCheck size={18} className="mr-2 text-cyan-500" />
                );
            case "শিক্ষাগত যোগ্যতা":
                return <BookOpen size={18} className="mr-2 text-lime-600" />;
            case "বর্তমান ঠিকানা":
            case "স্থায়ী ঠিকানা":
                return <MapPin size={18} className="mr-2 text-gray-600" />;
            case "বৈবাহিক অবস্থা":
                return <Heart size={18} className="mr-2 text-pink-600" />;
            case "জরুরি যোগাযোগ":
                return <PhoneCall size={18} className="mr-2 text-red-600" />;
            default:
                return null;
        }
    };

    // Handle change in update form fields
    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTeacherData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle update form submission
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        console.log("Teacher Data Updated:", updatedTeacherData);
        // In a real application, you would send updatedTeacherData to your backend API here
        alert("শিক্ষকের তথ্য সফলভাবে আপডেট করা হয়েছে!"); // Simple success feedback
        setIsUpdateModalOpen(false); // Close the modal
    };

    // Handle print summary
    const handlePrintSummary = () => {
        window.print();
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
            <Card className="max-w-5xl mx-auto">
                {/* Teacher Header Section */}
                <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-gray-200 mb-6">
                    <div className="flex-shrink-0">
                        <img
                            src={teacher.photo_url}
                            alt={teacher.name_bn}
                            className="p-1 w-32 h-32 rounded-full border-4 border-[#249742] object-cover shadow-md"
                        />
                    </div>
                    <div className="text-center md:text-left flex-grow">
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">
                            {teacher.name_bn}{" "}
                            <span className="text-gray-500 text-xl">
                                ({teacher.name_en})
                            </span>
                        </h2>
                        <p className="mt-1 text-[#249742] font-semibold text-lg">
                            {teacher.designation}, {teacher.department}
                        </p>
                        <p className="mt-1 font-semibold text-gray-700">
                            শিক্ষক আইডি:{" "}
                            <span className="text-gray-600">
                                {teacher?.teacher_id}
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
                        {/* Mail Button */}
                        <Link
                            to={`mailto:${teacher.email}`}
                            className="btn btn-lg rounded-lg bg-[#249742] text-white hover:bg-[#1e7f38]"
                        >
                            <MailCheck size={18} className="mr-2" /> মেইল করুন
                        </Link>
                        {/* Update Info Button */}
                        <Button
                            variant="info"
                            onClick={() => setIsUpdateModalOpen(true)}
                        >
                            <Edit size={18} className="mr-2" /> তথ্য আপডেট
                        </Button>
                        {/* Remove */}
                        <Button variant="destructive">
                            <Trash2 size={18} className="mr-2" /> রিমুভ করুন
                        </Button>
                    </div>
                </div>

                {/* Teacher Information Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-8">
                    {Object.entries(teacher).map(([key, value], index) => {
                        // Exclude photo_url as it's handled separately
                        if (key === "photo_url") return null;

                        // Map keys to Bengali labels for display
                        let label;
                        switch (key) {
                            case "teacher_id":
                                label = "শিক্ষক আইডি";
                                break;
                            case "name_bn":
                                label = "নাম (বাংলা)";
                                break;
                            case "name_en":
                                label = "নাম (ইংরেজি)";
                                break;
                            case "gender":
                                label = "লিঙ্গ";
                                break;
                            case "birth_date":
                                label = "জন্ম তারিখ";
                                break;
                            case "blood_group":
                                label = "রক্তের গ্রুপ";
                                break;
                            case "national_id":
                                label = "জাতীয় পরিচয়পত্র";
                                break;
                            case "religion":
                                label = "ধর্ম";
                                break;
                            case "nationality":
                                label = "জাতীয়তা";
                                break;
                            case "phone":
                                label = "ফোন";
                                break;
                            case "email":
                                label = "ইমেইল";
                                break;
                            case "joining_date":
                                label = "যোগদানের তারিখ";
                                break;
                            case "designation":
                                label = "পদবি";
                                break;
                            case "department":
                                label = "বিভাগ";
                                break;
                            case "education":
                                label = "শিক্ষাগত যোগ্যতা";
                                break;
                            case "present_address":
                                label = "বর্তমান ঠিকানা";
                                break;
                            case "permanent_address":
                                label = "স্থায়ী ঠিকানা";
                                break;
                            case "marital_status":
                                label = "বৈবাহিক অবস্থা";
                                break;
                            case "emergency_contact":
                                label = "জরুরি যোগাযোগ";
                                break;
                            default:
                                label = key;
                        }

                        return (
                            <div
                                key={index}
                                className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm"
                            >
                                {getIconForField(label)}
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-medium">
                                        {label}
                                    </span>
                                    <span className="font-semibold text-gray-800 text-sm">
                                        {value}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Print Summary Button */}
                <div className="flex justify-center mt-6">
                    <Button variant="default" onClick={handlePrintSummary}>
                        <Printer size={18} className="mr-2" /> সামারি প্রিন্ট
                        করুন
                    </Button>
                </div>
            </Card>

            {/* Update Teacher Info Modal */}
            {isUpdateModalOpen && (
                <dialog
                    id="update_teacher_modal"
                    className="modal modal-bottom sm:modal-middle"
                    open
                >
                    <div className="modal-box max-w-3xl">
                        <h3 className="font-bold text-lg mb-4 text-[#249742]">
                            শিক্ষকের তথ্য আপডেট করুন
                        </h3>
                        <form
                            onSubmit={handleUpdateSubmit}
                            className="space-y-4"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* Dynamically generate fields from updatedTeacherData */}
                                {Object.entries(updatedTeacherData).map(
                                    ([key, value]) => {
                                        // Exclude photo_url from direct input as it's typically handled differently (e.g., file upload)
                                        if (
                                            key === "photo_url" ||
                                            key === "teacher_id"
                                        )
                                            return null;

                                        let label;
                                        let inputType = "text";
                                        let options = [];

                                        switch (key) {
                                            case "name_bn":
                                                label = "নাম (বাংলা)";
                                                break;
                                            case "name_en":
                                                label = "নাম (ইংরেজি)";
                                                break;
                                            case "gender":
                                                label = "লিঙ্গ";
                                                inputType = "select";
                                                options = [
                                                    "পুরুষ",
                                                    "মহিলা",
                                                    "অন্যান্য",
                                                ];
                                                break;
                                            case "birth_date":
                                                label = "জন্ম তারিখ";
                                                inputType = "date";
                                                break;
                                            case "blood_group":
                                                label = "রক্তের গ্রুপ";
                                                inputType = "select";
                                                options = [
                                                    "A+",
                                                    "A-",
                                                    "B+",
                                                    "B-",
                                                    "O+",
                                                    "O-",
                                                    "AB+",
                                                    "AB-",
                                                ];
                                                break;
                                            case "national_id":
                                                label = "জাতীয় পরিচয়পত্র";
                                                break;
                                            case "religion":
                                                label = "ধর্ম";
                                                inputType = "select";
                                                options = [
                                                    "ইসলাম",
                                                    "হিন্দু",
                                                    "খ্রিস্টান",
                                                    "বৌদ্ধ",
                                                    "অন্যান্য",
                                                ];
                                                break;
                                            case "nationality":
                                                label = "জাতীয়তা";
                                                break;
                                            case "phone":
                                                label = "ফোন";
                                                inputType = "tel";
                                                break;
                                            case "email":
                                                label = "ইমেইল";
                                                inputType = "email";
                                                break;
                                            case "joining_date":
                                                label = "যোগদানের তারিখ";
                                                inputType = "date";
                                                break;
                                            case "designation":
                                                label = "পদবি";
                                                break;
                                            case "department":
                                                label = "বিভাগ";
                                                break;
                                            case "education":
                                                label = "শিক্ষাগত যোগ্যতা";
                                                inputType = "textarea";
                                                break;
                                            case "present_address":
                                                label = "বর্তমান ঠিকানা";
                                                inputType = "textarea";
                                                break;
                                            case "permanent_address":
                                                label = "স্থায়ী ঠিকানা";
                                                inputType = "textarea";
                                                break;
                                            case "marital_status":
                                                label = "বৈবাহিক অবস্থা";
                                                inputType = "select";
                                                options = [
                                                    "অবিবাহিত",
                                                    "বিবাহিত",
                                                    "বিপত্নীক",
                                                    "তালাকপ্রাপ্ত",
                                                ];
                                                break;
                                            case "emergency_contact":
                                                label = "জরুরি যোগাযোগ";
                                                inputType = "tel";
                                                break;
                                            default:
                                                label = key;
                                        }

                                        if (!label) return null; // Skip if label is not defined

                                        return (
                                            <div key={key}>
                                                <label className="label">
                                                    <span className="label-text">
                                                        {label}
                                                    </span>
                                                </label>
                                                {inputType === "select" ? (
                                                    <select
                                                        name={key}
                                                        value={value}
                                                        onChange={
                                                            handleUpdateChange
                                                        }
                                                        className="select select-bordered w-full"
                                                    >
                                                        <option
                                                            value=""
                                                            disabled
                                                        >
                                                            নির্বাচন করুন
                                                        </option>
                                                        {options.map(
                                                            (option) => (
                                                                <option
                                                                    key={option}
                                                                    value={
                                                                        option
                                                                    }
                                                                >
                                                                    {option}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                ) : inputType === "textarea" ? (
                                                    <textarea
                                                        name={key}
                                                        value={value}
                                                        onChange={
                                                            handleUpdateChange
                                                        }
                                                        className="textarea textarea-bordered h-24 w-full"
                                                    ></textarea>
                                                ) : (
                                                    <input
                                                        type={inputType}
                                                        name={key}
                                                        value={value}
                                                        onChange={
                                                            handleUpdateChange
                                                        }
                                                        className="input input-bordered w-full"
                                                        required={
                                                            key !==
                                                                "blood_group" &&
                                                            key !==
                                                                "marital_status" &&
                                                            key !==
                                                                "emergency_contact"
                                                        } // Make essential fields required
                                                    />
                                                )}
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                            <div className="modal-action justify-center mt-6">
                                <Button type="submit" variant="default">
                                    আপডেট করুন
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setIsUpdateModalOpen(false)}
                                >
                                    বাতিল করুন
                                </Button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default AdminTeacherDetails;
