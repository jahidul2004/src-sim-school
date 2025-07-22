import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

const events = [
    { date: new Date(2025, 0, 1), title: "শিক্ষাবর্ষের শুরু" },
    { date: new Date(2025, 1, 15), title: "বার্ষিক ক্রীড়া প্রতিযোগিতা" },
    { date: new Date(2025, 1, 21), title: "একুশে ফেব্রুয়ারি পালন" },
    // আরও ইভেন্ট যুক্ত করতে পারো
];

const AcademicCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    // ঐ দিনের ইভেন্টগুলো filter করা
    const filteredEvents = events.filter(
        (event) =>
            selectedDate &&
            event.date.toDateString() === selectedDate.toDateString()
    );

    // এই ফাংশন চেক করবে ঐ তারিখে ইভেন্ট আছে কিনা
    const hasEvent = (date) => {
        return events.some(
            (event) => event.date.toDateString() === date.toDateString()
        );
    };

    return (
        <div className="max-w-4xl mx-auto p-6 py-10 md:py-12">
            <div className="w-[95%] mx-auto">
                <SectionHeader
                    title={"একাডেমিক ক্যালেন্ডার ২০২৫"}
                    subtitle={"আমাদের একাডেমিক ক্যালেন্ডার সেকশন এ ২০২৫ সালের সকল কার্যক্রম এর ইভেন্ট রয়েছে।"}
                ></SectionHeader>
            </div>

            <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="mx-auto rounded-lg border border-[#249742] shadow-lg max-w-full"
                tileContent={({ date, view }) => {
                    if (view === "month" && hasEvent(date)) {
                        return (
                            <div className="flex justify-center mt-1">
                                {/* ছোট সবুজ বৃত্ত দিয়ে চিহ্ন */}
                                <span className="w-3 h-3 rounded-full bg-[#249742] animate-pulse"></span>
                            </div>
                        );
                    }
                    return null;
                }}
                tileClassName={({ date, view }) => {
                    // আজকের তারিখ আলাদা কালার দেয়া
                    const today = new Date();
                    if (date.toDateString() === today.toDateString()) {
                        return "bg-[#249742] text-white rounded-full";
                    }
                    // সিলেক্টেড তারিখ আলাদা হাইলাইট
                    if (
                        selectedDate &&
                        date.toDateString() === selectedDate.toDateString()
                    ) {
                        return "bg-[#8E1C20] text-white rounded-full";
                    }
                    return "";
                }}
            />

            {selectedDate && (
                <div className="mt-6 p-6 bg-[#f0fdf4] rounded-lg border border-[#249742] shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-[#249742]">
                        {selectedDate.toLocaleDateString("bn-BD", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                        - এর ইভেন্ট
                    </h3>
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event, idx) => (
                            <p key={idx} className="text-gray-700 text-lg mb-2">
                                • {event.title}
                            </p>
                        ))
                    ) : (
                        <p className="text-gray-500 text-lg">কোন ইভেন্ট নেই</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default AcademicCalendar;
