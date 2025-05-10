import Image from 'next/image'

function UserCard({type}:{type:string}) {
    return (
        <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1 min-w-[130px] shadow-md">
            <div className="flex justify-between items-center">
                <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>2025/04</span>
                <Image src="/more.png" alt="" width={20} height={20}></Image>
            </div>           
            <h1 className='text-2xl font-semibold my-4'>1,234</h1> 
            <h2 className='capitilize text-sm font-meduim text-gray-500'>{type}</h2>
        </div>
    )
}

export default UserCard