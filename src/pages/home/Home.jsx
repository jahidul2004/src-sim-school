import AtAGlance from "./atAglance/AtAGlance";
import Header from "./header/Header";
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
        </>
    );
};

export default Home;
