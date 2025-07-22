import { useState } from "react";
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
    // Demo Data
    const totalStudents = 500;
    const boys = 280;
    const girls = 220;
    const classData = {
        "Class 6": 90,
        "Class 7": 95,
        "Class 8": 85,
        "Class 9": 120,
        "Class 10": 110,
    };

    // Pie chart data for Gender Ratio
    const genderData = {
        labels: ["Boys", "Girls"],
        datasets: [
            {
                label: "Students",
                data: [boys, girls],
                backgroundColor: ["#249742", "#8E1C20"],
                hoverOffset: 30,
            },
        ],
    };

    // Bar chart data for Class wise students
    const barData = {
        labels: Object.keys(classData),
        datasets: [
            {
                label: "Number of Students",
                data: Object.values(classData),
                backgroundColor: "#249742",
                borderRadius: 6,
            },
        ],
    };

    return (
        <section className="px-6 py-10 bg-white rounded-lg">
            <h2 className="text-4xl font-bold text-[#249742] mb-3 text-center"></h2>
            <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto"></p>

            <div className="w-[95%] mx-auto my-10 md:my-20">
                <SectionHeader
                    title={"Student Statistics"}
                    subtitle={
                        "Overview of our student body by gender and class distribution.Our school values diversity and balanced growth."
                    }
                ></SectionHeader>
            </div>

            {/* Top Summary */}
            <div className="flex justify-center gap-10 mb-12 flex-wrap">
                <div className="bg-[#249742] text-white rounded-lg px-8 py-6 shadow-lg min-w-[140px] text-center">
                    <h3 className="text-2xl font-semibold">{totalStudents}</h3>
                    <p>Total Students</p>
                </div>
                <div className="bg-[#8E1C20] text-white rounded-lg px-8 py-6 shadow-lg min-w-[140px] text-center">
                    <h3 className="text-2xl font-semibold">{boys}</h3>
                    <p>Boys</p>
                </div>
                <div className="bg-[#249742] text-white rounded-lg px-8 py-6 shadow-lg min-w-[140px] text-center">
                    <h3 className="text-2xl font-semibold">{girls}</h3>
                    <p>Girls</p>
                </div>
            </div>

            {/* Charts Container */}
            <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
                {/* Gender Pie Chart */}
                <div className="w-full md:w-1/2 max-w-md bg-[#f9fafb] p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-center mb-6 text-[#249742]">
                        Gender Ratio
                    </h3>
                    <Pie data={genderData} />
                </div>

                {/* Class-wise Bar Chart */}
                <div className="w-full md:w-1/2 max-w-md bg-[#f9fafb] p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-center mb-6 text-[#249742]">
                        Students by Class
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
                                    stepSize: 20,
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default StudentStatistics;
