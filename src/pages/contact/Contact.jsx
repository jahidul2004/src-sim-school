import React, { useState } from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Message Sent:", formData);
        // এখানে তুমি backend বা email service এর সাথে যুক্ত করতে পারো
        alert("আপনার বার্তা সফলভাবে পাঠানো হয়েছে!");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="px-4 py-16 bg-[#f4f6fa] text-gray-800">
            <div>
                <SectionHeader
                    title={"যোগাযোগ"}
                    subtitle={"যেকোনো প্রয়জনে আমাদের সাথে যোগাযোগ করুন।"}
                ></SectionHeader>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-[#249742]">
                        যোগাযোগ করুন
                    </h2>
                    <p className="mb-4 text-gray-700">
                        আপনার যেকোনো প্রশ্ন, মতামত বা পরামর্শ জানাতে নিচের
                        ফর্মটি পূরণ করে পাঠান। আমরা দ্রুততম সময়ে আপনার সাথে
                        যোগাযোগ করবো।
                    </p>
                    <div className="space-y-4 mt-6">
                        <div>
                            <p className="font-semibold">📞 ফোন:</p>
                            <p>01312-345678</p>
                        </div>
                        <div>
                            <p className="font-semibold">✉️ ইমেইল:</p>
                            <p>schooldemo@email.com</p>
                        </div>
                        <div>
                            <p className="font-semibold">📍 ঠিকানা:</p>
                            <p>শ্রীরায়ের চর, মুরাদনগর, কুমিল্লা</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-lg p-8 space-y-6"
                >
                    <h2 className="text-2xl font-bold mb-6 text-[#249742]">
                        ইমেইল করুন
                    </h2>
                    <div>
                        <label className="block mb-1 font-medium">নাম *</label>
                        <input
                            placeholder="আপনার নাম লিখুন"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b795]"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">
                            ইমেইল *
                        </label>
                        <input
                            placeholder="আপনার ইমেইল লিখুন"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b795]"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">
                            বিষয় *
                        </label>
                        <input
                            placeholder="বিষয় লিখুন"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b795]"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">
                            বার্তা *
                        </label>
                        <textarea
                            placeholder="ম্যাসেজ এর বিস্তারিত লিখুন"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b795]"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#249742] text-white py-2 px-6 rounded-lg hover:bg-[#009e84] transition-all duration-300"
                    >
                        বার্তা পাঠান
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
