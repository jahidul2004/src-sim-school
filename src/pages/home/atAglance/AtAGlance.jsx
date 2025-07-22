import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const AtAGlance = () => {
    return (
        <div className="my-10 md:my-20">
            <div className="w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8">
                {/* Img div */}
                <div className="w-full md:w-1/2">
                    <img
                        className="border-2 border-[#249743] p-2 md:p-4"
                        src="https://i.ibb.co/DYd16TV/5680e4eb-33ea-48b7-85a1-a2c75c66651f.jpg"
                        alt=""
                    />
                </div>
                {/* Img div end */}
                {/* Content div */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#8E1C20]">
                        At A Glance
                    </h1>
                    <p className="my-3 md:my-5 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem officia delectus fuga vel, veritatis minima
                        expedita nulla nemo in eius reprehenderit quia
                        voluptates, molestias cum perspiciatis amet quas enim
                        odio! Aperiam doloribus dolorem molestias eum!
                        Repellendus nihil corrupti commodi enim! Lorem ipsum,
                        dolor sit amet consectetur adipisicing elit.{" "}
                        <span className="hidden md:inline">
                            {" "}
                            Voluptas soluta facilis aliquam vero voluptates
                            commodi sunt voluptatibus illo velit placeat dolorem
                            beatae at ullam laboriosam odio molestias adipisci
                            totam, aperiam eveniet! Dignissimos, eos. Eum
                            reiciendis, soluta facere ea fuga quidem. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti vitae, repellat aperiam expedita officiis
                            enim ut nihil praesentium consequuntur veniam? Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Laboriosam, eligendi?
                        </span>
                    </p>
                    <Link
                        className="btn bg-[#249743] text-white border-none outline-none rounded-none flex items-center gap-2 w-max"
                        to={"/about"}
                    >
                        More About Us <IoIosArrowDropright />
                    </Link>
                </div>
                {/* Content div end */}
            </div>
        </div>
    );
};

export default AtAGlance;
