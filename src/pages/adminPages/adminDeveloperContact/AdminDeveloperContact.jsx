import React, { useState } from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
} from "react-icons/fa";
import { MdContactEmergency } from "react-icons/md";
import { Link } from "react-router-dom";

const AdminDeveloperContact = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    return (
        <div className="min-h-screen bg-white px-4 sm:px-8 py-12 text-[#1e1e1e]">
            <div className="max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-2xl p-6 sm:p-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#249742] mb-8 border-b pb-3">
                    ডেভেলপারের সাথে যোগাযোগ
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
                    {/* Profile Info */}
                    <div className="flex-shrink-0 text-center">
                        <img
                            src="https://i.ibb.co/0D15PXH/Whats-App-Image-2024-01-15-at-21-28-37-d3e60b3a.png"
                            alt="Developer"
                            className="p-1 w-36 h-36 rounded-full border-4 border-[#249742] mx-auto"
                        />
                        <h3 className="mt-4 text-xl font-semibold">
                            জাহিদুল ইসলাম জিহাদ
                        </h3>
                        <p className="text-gray-600 text-sm">
                            ফুল-স্ট্যাক ওয়েব ডেভেলপার
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center sm:text-left">
                        <div className="flex items-center gap-3 justify-center sm:justify-start text-gray-700">
                            <FaPhone className="text-[#249742]" />{" "}
                            +৮৮০১৭৮৭২৭৫২৮৮
                        </div>
                        <div className="flex items-center gap-3 justify-center sm:justify-start text-gray-700">
                            <FaEnvelope className="text-[#249742]" />{" "}
                            islamjahiduljihad@gmail.com
                        </div>
                        <div className="flex items-center gap-3 justify-center sm:justify-start text-gray-700">
                            <FaWhatsapp className="text-[#249742]" />{" "}
                            +৮৮০১৭৮৭২৭৫১৮৮
                        </div>

                        <button
                            onClick={handleModalOpen}
                            className="btn flex items-center gap-2 mt-4 bg-[#249742] text-white rounded-md font-medium hover:bg-[#1d7e36] transition"
                        >
                            <MdContactEmergency />
                            জরুরি যোগাযোগ
                        </button>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-10">
                    <Link
                        to="https://facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#249742] text-2xl hover:scale-110 transition"
                    >
                        <FaFacebookF />
                    </Link>
                    <Link
                        to="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#249742] text-2xl hover:scale-110 transition"
                    >
                        <FaLinkedinIn />
                    </Link>
                    <Link
                        to="https://github.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#249742] text-2xl hover:scale-110 transition"
                    >
                        <FaGithub />
                    </Link>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
                    <div className="bg-white w-[90%] max-w-md rounded-lg p-6 text-center shadow-xl relative">
                        <button
                            onClick={handleModalClose}
                            className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-semibold mb-4 text-[#249742]">
                            জরুরি যোগাযোগ
                        </h3>
                        <p className="text-3xl font-bold text-gray-800 mb-6">
                            +৮৮০১৭৮৭২৭৫২৮৮
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:islamjahiduljihad@gmail.com"
                                className="w-full sm:w-auto bg-[#249742] text-white px-5 py-2 rounded hover:bg-[#1d7e36] transition"
                            >
                                মেইল করুন
                            </a>
                            <a
                                href="https://wa.me/8801787275288"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-[#25D366] text-white px-5 py-2 rounded hover:bg-[#1ca94c] transition"
                            >
                                হোয়াটসঅ্যাপ করুন
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDeveloperContact;
