import React from "react";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const AdminPhotoManagement = () => {
    const photos = [
        {
            id: "P-001",
            imageUrl: "https://i.ibb.co/BCL8yTm/school2.jpg",
            title: "বিদ্যালয়ের প্রধান ফটক",
            date: "২০২৫-০৭-২৪",
        },
        {
            id: "P-002",
            imageUrl:
                "https://i.ibb.co/DYd16TV/5680e4eb-33ea-48b7-85a1-a2c75c66651f.jpg",
            title: "স্কুলের বার্ষিক ক্রীড়া অনুষ্ঠান",
            date: "২০২৫-০৬-২০",
        },
        {
            id: "P-003",
            imageUrl: "https://i.ibb.co/R4B4S7VN/Screenshot-59.png",
            title: "নতুন গ্রন্থাগার উদ্বোধন",
            date: "২০২৫-০৫-১৫",
        },
    ];

    return (
        <div className="p-4 sm:p-8 bg-white rounded-xl shadow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#249742] border-b-2 border-[#249742] pb-2">
                    ফটো ম্যানেজমেন্ট
                </h1>
                <button className="btn bg-[#249742] hover:bg-[#1f7c38] text-white">
                    <FaPlus className="mr-2" /> নতুন ছবি যোগ করুন
                </button>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
                    >
                        <img
                            src={photo.imageUrl}
                            alt={photo.title}
                            className="rounded-t-lg w-full h-48 object-cover"
                        />
                        <div className="p-4 space-y-2">
                            <h2 className="text-lg font-semibold text-[#249742]">
                                {photo.title}
                            </h2>
                            <p className="text-sm text-gray-600">
                                আপলোড তারিখ: {photo.date}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <button className="flex items-center gap-1 bg-[#249742] hover:bg-[#1f7c38] text-white px-3 py-1 rounded text-sm transition">
                                    <FaEye /> View
                                </button>
                                <button className="flex items-center gap-1 border border-[#249742] text-[#249742] hover:bg-[#249742] hover:text-white px-3 py-1 rounded text-sm transition">
                                    <FaEdit /> Update
                                </button>
                                <button className="flex items-center gap-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1 rounded text-sm transition">
                                    <FaTrash /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {photos.length === 0 && (
                    <p className="text-gray-500 text-center col-span-full py-4">
                        কোনো ছবি আপলোড করা হয়নি।
                    </p>
                )}
            </div>
        </div>
    );
};

export default AdminPhotoManagement;
