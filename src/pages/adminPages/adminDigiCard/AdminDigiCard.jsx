import React from "react";

const AdminDigiCard = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center space-y-4 max-w-md">
                <img
                    src="https://cdn-icons-png.flaticon.com/128/11871/11871072.png"
                    alt="Coming Soon"
                    className="w-32 mx-auto animate-bounce"
                />
                <h1 className="text-3xl font-bold text-[#249742]">
                    ডিজি কার্ড আসছে শীঘ্রই!
                </h1>
                <p className="text-gray-600 text-base">
                    অ্যাডমিনদের জন্য বিশেষ ডিজি কার্ড ফিচার প্রস্তুত করা হচ্ছে।
                    কিছুক্ষণের মধ্যেই আপনি এটি ব্যবহার করতে পারবেন।
                </p>
                <div className="text-sm text-gray-400">
                    #StayTuned #DigitalBangladesh
                </div>
            </div>
        </div>
    );
};

export default AdminDigiCard;
