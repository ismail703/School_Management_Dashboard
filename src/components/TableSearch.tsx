import Image from "next/image";

function TableSearch() {
    return (
        <div>
            <form action="" className='w-full md:w-auto flex items-center gap-2 text-xs rounded-lg ring-[1.5px] ring-gray-300 px-2 bg-white'>
                <Image src='/search.png' alt='search icon' width={14} height={14} />
                <input className="h-10 border-none px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 w-full" type="text" placeholder="Search..." />
            </form>
        </div>
    );
}

export default TableSearch;