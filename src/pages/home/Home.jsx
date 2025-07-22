import AcademicProgrammes from "./academicProgrammes/AcademicProgrammes";
import AtAGlance from "./atAglance/AtAGlance";
import Header from "./header/Header";
import NoticeBoard from "./noticeBoard/NoticeBoard";
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
        </>
    );
};

export default Home;
