import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import AttendanceChart from '@/components/AttendanceChart'
import FinanceChart from '@/components/FinanceChart'
import EventCalendar from '@/components/EventCalendar'
import Announcement from '@/components/Announcement'

function AdminPage() {
    return (
        <main className='flex p-4 gap-4 flex-col md:flex-row'>
            {/* LEFT */}
            <section className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* USER CARD */}
                <div className='flex gap-4 flex-wrap'>
                    <UserCard type='student'></UserCard>
                    <UserCard type='teacher'></UserCard>
                    <UserCard type='parent'></UserCard>
                    <UserCard type='staff'></UserCard>
                </div>

                {/* CHARTS */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 lg:h-[375px] max-h-[450px]">
                        <CountChart />
                    </div>
                    <div className="w-full lg:w-2/3 lg:h-[375px] max-h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                <div className="w-full h-[500]">
                    <FinanceChart />
                </div>
            </section>
            {/* RIGHT */}
            <section className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcement />
            </section>
        </main>
    )
}

export default AdminPage