import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
);

const StudentStatistics = () => {
    // Demo Student Data
    const totalStudents = 500;
    const boys = 280;
    const girls = 220;

    const classData = {
        "ক্লাস ০৬": 90,
        "ক্লাস ০৭": 95,
        "ক্লাস ০৮": 85,
        "ক্লাস ০৯": 120,
        "ক্লাস ১০": 110,
    };

    const departmentData = {
        Science: 80,
        "Business Studies": 70,
        Humanities: 80,
    };

    // Gender Pie Chart Data
    const genderData = {
        labels: ["বালক", "বালিকা"],
        datasets: [
            {
                label: "শিক্ষার্থী",
                data: [boys, girls],
                backgroundColor: ["#249742", "#8E1C20"],
                hoverOffset: 30,
            },
        ],
    };

    // Class-wise Bar Chart Data
    const barData = {
        labels: Object.keys(classData),
        datasets: [
            {
                label: "শিক্ষার্থীর সংখ্যা",
                data: Object.values(classData),
                backgroundColor: "#249742",
                borderRadius: 6,
            },
        ],
    };

    // Department-wise Pie Chart Data
    const departmentPieData = {
        labels: Object.keys(departmentData),
        datasets: [
            {
                label: "ডিপার্টমেন্ট",
                data: Object.values(departmentData),
                backgroundColor: ["#249742", "#8E1C20", "#f59e0b"],
                hoverOffset: 30,
            },
        ],
    };

    return (
        <section className="px-6 py-10 bg-white rounded-lg">
            {/* Section Header */}
            <div className="w-[95%] mx-auto my-10 md:my-20">
                <SectionHeader
                    title={"শিক্ষার্থী পরিসংখ্যান"}
                    subtitle={
                        "আমাদের শিক্ষার্থীদের লিঙ্গ ও শ্রেণি ভিত্তিক সার্বিক বিবরণ। আমাদের স্কুল বৈচিত্র্য এবং সমতা ভিত্তিক সমগ্র উন্নয়নকে মূল্য দেয়।"
                    }
                />
            </div>

            {/* Summary Boxes */}
            <div className="w-[95%] md:w-[50%] mx-auto grid grid-cols-3 gap-2 md:gap-5 lg:gap-10 mb-12">
                <div className="bg-[#249742] text-white rounded-lg px-8 py-6 shadow-lg text-center">
                    <h3 className="text-2xl font-semibold">{totalStudents}</h3>
                    <p>মোট শিক্ষার্থী</p>
                </div>
                <div className="bg-[#8E1C20] text-white rounded-lg px-8 py-6 shadow-lg text-center">
                    <h3 className="text-2xl font-semibold">{boys}</h3>
                    <p>বালক শিক্ষার্থী</p>
                </div>
                <div className="bg-[#249742] text-white rounded-lg px-8 py-6 shadow-lg text-center">
                    <h3 className="text-2xl font-semibold">{girls}</h3>
                    <p>বালিকা শিক্ষার্থী</p>
                </div>
            </div>

            {/* Chart Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-center w-[95%] mx-auto">
                {/* Gender Pie */}
                <div className="bg-[#f9fafb] p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-center mb-6 text-[#249742]">
                        লিঙ্গের অনুপাত
                    </h3>
                    <Pie data={genderData} />
                </div>

                {/* Class Bar */}
                <div className="bg-[#f9fafb] p-6 rounded-lg shadow-md h-full">
                    <h3 className="text-2xl font-semibold text-center mb-6 text-[#249742]">
                        ক্লাস ভেদে শিক্ষার্থী
                    </h3>
                    <Bar
                        data={barData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: { display: false },
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    ticks: { stepSize: 20 },
                                },
                            },
                        }}
                    />
                </div>

                {/* Department Pie */}
                <div className="bg-[#f9fafb] p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-center mb-6 text-[#249742]">
                        বিভাগ ভিত্তিক শিক্ষার্থী
                    </h3>
                    <Pie data={departmentPieData} />
                </div>
            </div>
        </section>
    );
};

export default StudentStatistics;
