import Image from "next/image"

const NavBar = () => {
    return (
        <header className='sticky flex items-center md:justify-between justify-end px-4 py-4'>
            {/* Search Bar */}
            <form action="" className='hidden md:flex items-center gap-2 text-xs rounded-lg ring-[1.5px] ring-gray-300 px-2 bg-white'>
                <Image src='/search.png' alt='search icon' width={14} height={14} />
                <input className="h-10 border-none px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 w-full" type="text" placeholder="Search..." />
            </form>


            {/* Icons & User */}
            <div className='flex items-center gap-6'>
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                    <Image src='/message.png' alt='message icon' width={20} height={20} />
                </div>
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer relative">
                    <Image src='/announcement.png' alt='announcement icon' width={20} height={20} />
                    <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-[#43b0f1] text-white rounded-full text-[10px]">1</div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="flex flex-col">
                        <span className="text-xs leading-3 font-meduim">John doe</span>
                        <span className="text-[10px] text-gray-500 text-right">Admin</span>
                    </div>
                    <Image className="rounded-full" src='/avatar.png' alt='profile icon' width={32} height={32} />
                </div>
            </div>

        </header>
    )
}

export default NavBar