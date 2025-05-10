"use client";
import Image from "next/image";
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Total",
        count: 106,
        fill: "white",
    },
    {
        name: "Girls",
        count: 53,
        fill: "var(--yellow)",
    },
    {
        name: "Boys",
        count: 53,
        fill: "var(--blueSky)",
    },
];

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="" width={18} height={18} />
            </div>
            {/* CHART */}
            <div className="relative w-full h-[65%]">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image
                    src="/maleFemale.png"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            {/* BOTTOM */}
            <div className="flex justify-center md:gap-16 lg:gap-8">
                <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-5 bg-blueSky rounded-full" />
                    <h1 className="font-bold">1,234</h1>
                    <span className="text-xs text-gray-300">Boys (55%)</span>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <div className="w-5 h-5 bg-yellow rounded-full" />
                    <h1 className="font-bold">1,234</h1>
                    <span className="text-xs text-gray-300">Girls (45%)</span>
                </div>
            </div>
        </div>
    );
};

export default CountChart;