"use client"

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';


const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function EventCalendar() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="w-full bg-white rounded-md p-4">
            <Calendar onChange={onChange} value={value} />
            <div className='flex flex-col gap-4 mt-8'>
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
                    <h1 className='text-xl font-semibold'>Events</h1>
                    <Image src="/moreDark.png" alt="" width={20} height={20} />
                </div>
                <div className="flex flex-col gap-4">
                    {
                        events.map((event) => (
                            <div key={event.id} className="p-4 bg-gray-100 rounded-md shadow-md border-gray-100 border-t-4 odd:border-t-blueSky even:border-t-purple">
                                <div className="flex items-center justify-between">
                                    <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                                    <span className='text-gray-300 text-xs'>{event.time}</span>
                                </div>
                                <p className="text-gray-400 mt-2 text-sm">{event.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default EventCalendar;