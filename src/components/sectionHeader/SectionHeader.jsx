// components/SectionHeader.jsx
const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-8 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {title}
            </h2>
            <p className="text-base md:text-lg text-gray-500">{subtitle}</p>
            <div className="w-24 h-1 bg-[#00b795] mx-auto mt-3 rounded-full"></div>
        </div>
    );
};

export default SectionHeader;
