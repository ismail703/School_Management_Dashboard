'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import TeacherForm from '@/components/forms/TeacherForm';
import StudentForm from './forms/StudentForm';

// const TeacherForm = dynamic(() => import("@/components/forms/TeacherForm"), {
//     loading: () => <h1>loading...</h1>
// });
// const StudentForm = dynamic(() => import("@/components/forms/StudentForm"), {
//     loading: () => <h1>loading...</h1>
// });



const forms: {
   [key: string]: ( type: "create" | "update", data?: any) => JSX.Element
} = {
    teacher: (type, data) => <TeacherForm type={type} data={data} />,
    student: (type, data) => <StudentForm type={type} data={data} />,
}

function FormModal({
    table,
    type,
    data,
    id,
}: {
    table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}) {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
        type === "create"
            ? "bg-yellow"
            : type === "update"
                ? "bg-blueSky"
                : "bg-purple";

    const [isOpen, setIsOpen] = useState(false);

    function Form() {
        return type === "delete" && id ? (
            <form action="" className='p-4 flex flex-col gap-4'>
                <span className="text-center font-medium">All data will be lost. Are sure you want to delete this {table}</span>
                <button className="bg-[#ff4040] text-white py-2 px-2 rounded-md border-none w-max self-center">Delete</button>
            </form>
        ) : type === "create" || type === "update" ? (
            forms[table](type, data)
           ) : "Form not found"
    }

    return (
        <>
            <button
                className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
                onClick={() => setIsOpen(true)}
            >
                <Image src={`/${type}.png`} alt="" width={16} height={16} className="" />
            </button>
            {isOpen && (
                <div className="fixed inset-0 w-full h-full bg-black bg-opacity-60 z-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                        <Form />
                        <div
                            className="absolute top-4 right-4 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            <Image src="/close.png" alt="" width={14} height={14} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default FormModal;