import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState, useRef } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
            resetProgress();
        },
        created() {
            resetProgress();
        },
    });

    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const progressRef = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            if (slider.current) {
                slider.current.next();
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [slider]);

    const resetProgress = () => {
        setProgress(0);
        let start = Date.now();
        const duration = 8000;

        const animate = () => {
            let now = Date.now();
            let timePassed = now - start;
            let percent = Math.min(timePassed / duration, 1) * 100;
            setProgress(percent);

            if (percent < 100) {
                progressRef.current = requestAnimationFrame(animate);
            }
        };

        cancelAnimationFrame(progressRef.current);
        progressRef.current = requestAnimationFrame(animate);
    };

    const slides = [
        {
            id: 1,
            title: "Education is the Backbone of a Nation",
            desc: "At Sreerayerchar SIM High School, students receive quality education, strong moral values, and a clear vision for a brighter future. We believe in building both academic excellence and strong character.",
            bg: "https://i.ibb.co/SxtJdzT/school.jpg",
        },
        {
            id: 2,
            title: "Leadership Through Co-Curricular Activities",
            desc: "Our school goes beyond textbooks. From debates and quizzes to science fairs and sports, we shape confident, capable leaders ready to take on the world.",
            bg: "https://i.ibb.co/q5FTsWz/c2acb51d-317b-4956-9b66-40d60f60ff4b.jpg",
        },
        {
            id: 3,
            title: "Inspiring Young Minds Every Day",
            desc: "Sreerayerchar SIM High School creates an environment where dreams grow, creativity flows, and students are inspired to achieve greatness in every step of life.",
            bg: "https://i.ibb.co/BCL8yTm/school2.jpg",
        },
    ];

    return (
        <div className="relative">
            <div
                ref={sliderRef}
                className="keen-slider h-[550px] overflow-hidden"
            >
                {slides.map((slide, idx) => (
                    <div
                        key={slide.id}
                        className="keen-slider__slide relative flex items-center justify-center"
                    >
                        <img
                            src={slide.bg}
                            alt={slide.title}
                            className="w-full h-full object-center blur-[2px]"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#00000063] "></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
                            {/* Gradient Overlay to protect text visibility, keep bg visible */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

                            <div className="relative z-10 max-w-3xl space-y-6">
                                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                    <span className="text-[#34d45f]">
                                        {slide.title}
                                    </span>
                                </h2>
                                <p className="text-lg md:text-xl text-white/90">
                                    {slide.desc}
                                </p>

                                <div className="flex justify-center gap-6 mt-4">
                                    <Link
                                        to={"/about"}
                                        className="bg-[#249743] hover:bg-[#1e7a34] transition-colors duration-300 text-white px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
                                    >
                                        About Us
                                        <IoIosArrowDropright />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}

            <IoIosArrowDropleft
                onClick={() => slider.current?.prev()}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#249742] text-white p-2 rounded-full hover:bg-opacity-80 z-10 shadow-md cursor-pointer"
                size={48}
            />
            <IoIosArrowDropright
                onClick={() => slider.current?.next()}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#249742] text-white p-2 rounded-full hover:bg-opacity-80 z-10 shadow-md cursor-pointer"
                size={48}
            />

            {/* Progress Bar */}
            <div className="absolute bottom-4 right-4 w-24 h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                <div
                    className="h-full bg-[#8E1C20] transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Header;
