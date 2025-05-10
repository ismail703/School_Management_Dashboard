import EventCalendar from "@/components/EventCalendar";
import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";

function TeacherPage() {
    return (
        <main className='flex p-4 gap-4 flex-col xl:flex-row'>
            {/* LEFT */}
            <section className="w-full xl:w-2/3">
                <div className="h-full bg-white rounded-md p-4">
                    <h1 className="text-xl font-semibold">Schedule (4A)</h1>
                    <BigCalendar />
                </div>

            </section>
            {/* RIGHT */}
            <section className="w-full xl:w-1/3 flex flex-col gap-8">
                <Announcement />
            </section>
        </main>

    )
}

export default TeacherPage