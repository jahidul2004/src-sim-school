import { Link } from "react-router-dom";
import logoTransparent from "../assets/logo/logoTransparent.png";
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4 flex flex-col md:flex-row justify-between items-center">
                <aside className="grid-flow-col items-center">
                    <img className="w-14 h-14" src={logoTransparent} alt="" />
                    <p>
                        <span className="font-bold md:text-lg text-[#249742]">
                            শ্রীরায়েরচর এস আই এম উচ্চ বিদ্যালয়
                        </span>
                        <br />
                        শ্রীরায়েরচর, দাউদকান্দি, কুমিল্লা
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">প্রতিষ্ঠান পেজ সমূহ</h6>
                    <a className="link link-hover">হোম</a>
                    <a className="link link-hover">প্রতিষ্ঠান সম্পর্কে</a>
                    <a className="link link-hover">স্টুডেন্ট পোর্টাল</a>
                    <a className="link link-hover">নোটিশ</a>
                    <a className="link link-hover">প্রতিষ্ঠান ফলাফল</a>
                </nav>
                <nav>
                    <h6 className="footer-title">জরুরি লিঙ্ক সমূহ</h6>
                    <a className="link link-hover">কুমিল্লা শিক্ষা বোর্ড</a>
                    <a className="link link-hover">শিক্ষা মন্ত্রনালয়</a>
                    <a className="link link-hover">জরুরি সেবা</a>
                    <a className="link link-hover">প্রধান উপদেষ্টার কার্যালয়</a>
                    <a className="link link-hover">জাতীয় দক্ষতা পোর্টাল</a>
                </nav>
                <nav>
                    <h6 className="footer-title">যোগাযোগ</h6>
                    <div className="flex items-center gap-1">
                        <input
                            className="input rounded-lg"
                            placeholder="আপনার ইমেইল দিন"
                            type="email"
                        />
                        <button
                            className="btn bg-[#249742] text-white border-none rounded-lg"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="mt-2">
                            <h1 className="font-semibold">মোবাইল নাম্বার</h1>
                            <p>+৮৮০১৭৮৭২৭৫২৮৮</p>
                        </div>
                        <div className="mt-2">
                            <h1 className="font-semibold">ইমেইল</h1>
                            <p>srcsim@gmail.com</p>
                        </div>
                    </div>
                </nav>
            </footer>
            <footer className="p-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
                <small>
                    &copy; কপিরাইট ২০২৫ এস এস আই এম উচ্চ বিদ্যালয় সরবসত্ত
                    সংরক্ষিত
                </small>
                <small>
                    ডেভেলপারঃ{" "}
                    <Link className="text-[#249742]">জাহিদুল ইসলাম জিহাদ</Link>
                </small>
            </footer>
        </div>
    );
};

export default Footer;
