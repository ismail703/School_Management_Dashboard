import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

function SingleStudentPage() {
    return (
        <main className="flex flex-col gap-4 p-4 flex-1 xl:flex-row">
            {/* LEFT */}
            <section className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Student'S CARD INFO */}
                    <div className="bg-blueSky shadow-md rounded-md p-4 flex-1 flex gap-4">
                        <div className="w-1/3">
                            <Image
                                src='https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg'
                                alt=''
                                width={124}
                                height={124}
                                className="rounded-full w-28 h-28 object-cover"
                            />
                        </div>
                        <div className="w-2/3">
                            <h1 className="text-xl font-semibold">John Doe</h1>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dolor.</p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium mt-4">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src='/blood.png' alt='' width={14} height={14} className="" />
                                    <span>A+</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src='/date.png' alt='' width={14} height={14} className="" />
                                    <span>July, 2025</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src='/mail.png' alt='' width={14} height={14} className="" />
                                    <span>Johndoe@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src='/phone.png' alt='' width={14} height={14} className="" />
                                    <span>(+212)670674566</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Student'S SMALL CARDS */}
                    <div className="flex-1 flex justify-between gap-4 flex-wrap">
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleAttendance.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleClass.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">6th</h1>
                                <span className="text-sm text-gray-400">Grades</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleBranch.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">16</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleLesson.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="">
                                <h1 className="text-xl font-semibold">5A</h1>
                                <span className="text-sm text-gray-400">Class Name</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM */}
                <div className="mt-4 bg-white rounded-md p-4 h-[80opx]">
                    <h1 className="text-xl font-semibold">Student&apos;s Schedule</h1>
                    <BigCalendar />
                </div>
            </section>
            {/* RIGHT */}
            <section className="w-full xl:w-1/3">
                <div className="bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-50">
                        <Link href="/" className="bg-blueSky text-white rounded-md p-3">Student&apos;s Lessons</Link>
                        <Link href="/" className="bg-purple text-white rounded-md p-3">Student&apos;s Teachers</Link>
                        <Link href="/" className="bg-yellow text-white rounded-md p-3">Student&apos;s Resuls</Link>
                        <Link href="/" className="bg-pink-50 text-white rounded-md p-3">Student&apos;s Exams</Link>
                        <Link href="/" className="bg-blueSkyLight text-white rounded-md p-3">Student&apos;s Assignments</Link>
                    </div>
                </div>
                <Performance />
                <Announcement />
            </section>
        </main>
    );
}

export default SingleStudentPage;