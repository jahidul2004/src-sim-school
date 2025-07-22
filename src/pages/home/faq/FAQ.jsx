import SectionHeader from "../../../components/sectionHeader/SectionHeader";

const FAQ = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16">
            <div className="w-[95%] mx-auto">
                <SectionHeader
                    title={"সচরাচর জিগ্যাসিত প্রশ্ন"}
                    subtitle={
                        "আপনি এইখানে সচারাচর জিগ্যেস করা প্রস্নের উত্তর পাবেন।"
                    }
                ></SectionHeader>
            </div>

            <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="collapse collapse-plus bg-base-200 rounded-box">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium">
                        📅 ভর্তি কবে শুরু হয়?
                    </div>
                    <div className="collapse-content text-base text-gray-600 dark:text-gray-300">
                        সাধারণত প্রতি বছর জানুয়ারি মাসে নতুন শিক্ষাবর্ষের ভর্তি
                        কার্যক্রম শুরু হয়। ভর্তি বিজ্ঞপ্তি স্কুলের নোটিশ বোর্ড
                        এবং ওয়েবসাইটে প্রকাশ করা হয়।
                    </div>
                </div>

                {/* FAQ 2 */}
                <div className="collapse collapse-plus bg-base-200 rounded-box">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium">
                        💰 ভর্তি ফি কত?
                    </div>
                    <div className="collapse-content text-base text-gray-600 dark:text-gray-300">
                        ভর্তি ফি প্রতি বছর সামান্য পরিবর্তন হতে পারে। সাধারণত
                        এটি ২০০০-৩০০০ টাকার মধ্যে থাকে। বিস্তারিত তথ্য ভর্তি
                        বিজ্ঞপ্তিতে উল্লেখ থাকে।
                    </div>
                </div>

                {/* FAQ 3 */}
                <div className="collapse collapse-plus bg-base-200 rounded-box">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium">
                        📚 বই ও ইউনিফর্ম কোথা থেকে কিনবো?
                    </div>
                    <div className="collapse-content text-base text-gray-600 dark:text-gray-300">
                        বই ও ইউনিফর্ম বিদ্যালয়ের নির্ধারিত দোকান থেকে সংগ্রহ
                        করতে বলা হয়। ভর্তি হওয়ার পর প্রয়োজনীয় তথ্য সরবরাহ করা
                        হয়।
                    </div>
                </div>

                {/* FAQ 4 */}
                <div className="collapse collapse-plus bg-base-200 rounded-box">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium">
                        🕘 ক্লাস শুরু হওয়ার সময় কখন?
                    </div>
                    <div className="collapse-content text-base text-gray-600 dark:text-gray-300">
                        ক্লাস সাধারণত সকাল ৮:৩০ মিনিটে শুরু হয় এবং দুপুর ১:৩০
                        মিনিটে শেষ হয়। সপ্তাহের কার্যক্রম অনুযায়ী সময় পরিবর্তন
                        হতে পারে।
                    </div>
                </div>

                {/* FAQ 5 */}
                <div className="collapse collapse-plus bg-base-200 rounded-box">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-xl font-medium">
                        📞 স্কুলের সাথে কিভাবে যোগাযোগ করবো?
                    </div>
                    <div className="collapse-content text-base text-gray-600 dark:text-gray-300">
                        যোগাযোগের জন্য আমাদের অফিসিয়াল ফোন নাম্বার এবং ইমেইল
                        দেওয়া আছে Contact Us সেকশনে। এছাড়াও ওয়েবসাইটে Contact
                        ফর্ম রয়েছে।
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
