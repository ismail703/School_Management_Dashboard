function Announcement() {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between py-2 px-4 rounded-md">
                <h1 className='text-xl font-semibold'>Announcement</h1>
                <span className="text-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-2">
                <div className="bg-blueSkyLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2>Lorem ipsum dolor sit.</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md p-1">
                            2025-10-10
                        </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dicta ipsa ea.</p>
                </div>

                <div className="bg-purpleLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2>Lorem ipsum dolor sit.</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md p-1">
                            2025-10-10
                        </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dicta ipsa ea.</p>
                </div>

                <div className="bg-yellowLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2>Lorem ipsum dolor sit.</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md p-1">
                            2025-10-10
                        </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dicta ipsa ea.</p>
                </div>
            </div>
        </div>
    )

}

export default Announcement;