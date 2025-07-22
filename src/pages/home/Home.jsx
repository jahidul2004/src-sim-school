import AtAGlance from "./atAglance/AtAGlance";
import Header from "./header/Header";

const Home = () => {
    return (
        <>
            {/* Header */}
            <Header></Header>
            {/* Header end */}

            {/* At a glance */}
            <AtAGlance></AtAGlance>
            {/* At a glance end */}
        </>
    );
};

export default Home;
