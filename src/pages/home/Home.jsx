import AcademicCalendar from "./academicCalendar/AcademicCalendar";
import AcademicProgrammes from "./academicProgrammes/AcademicProgrammes";
import AtAGlance from "./atAglance/AtAGlance";
import FAQ from "./faq/FAQ";
import Header from "./header/Header";
import NoticeBoard from "./noticeBoard/NoticeBoard";
import OurTeachers from "./ourTeachers/OurTeachers";
import StudentStatistics from "./studentStatistics/StudentStatistics";
import Testimonial from "./testimonial/Testimonial";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <>
            {/* Header */}
            <Header></Header>
            {/* Header end */}

            {/* At a glance */}
            <AtAGlance></AtAGlance>
            {/* At a glance end */}

            {/* Why choose us */}
            <WhyChooseUs></WhyChooseUs>
            {/* Why choose us end */}

            {/* Notice Board */}
            <NoticeBoard></NoticeBoard>
            {/* Notice Board end */}

            {/* Academic Programmes */}
            <AcademicProgrammes></AcademicProgrammes>
            {/* Academic Programmes end */}

            {/* Student statistics */}
            <StudentStatistics></StudentStatistics>
            {/* Student statistics end */}

            {/* Our teachers */}
            <OurTeachers></OurTeachers>
            {/* Our teachers end */}

            {/* Academic Calendar */}
            <AcademicCalendar></AcademicCalendar>
            {/* Academic Calendar end */}

            {/* Testimonial */}
            <Testimonial></Testimonial>
            {/* Testimonial end */}

            {/* FAQ */}
            <FAQ></FAQ>
            {/* FAQ end */}
        </>
    );
};

export default Home;
