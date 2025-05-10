'use client';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    { name: 'Group A', value: 92, fill: 'var(--blueSky)' },
    { name: 'Group B', value: 8, fill: 'var(--yellow)' },
];

function Performance() {
    return (
        <div className="relative bg-white p-4 rounded-md h-80 mt-4 mb-4">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Performance</h1>
                <Image
                    src="/moreDark.png"
                    alt=""
                    width={16}
                    height={16}
                />
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        fill="var(--purple)"
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className='text-3xl font-bold text-center'>9.2</h1>
                <p className='text-xs text-gray-500'>of 10 max LTS</p>
            </div>
            <div className="absolute bottom-1/4 left-0 right-0 m-auto text-center font-bold">1st Semester - 2nd Semester</div>
        </div>
    );
}

export default Performance;