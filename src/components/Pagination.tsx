function Pagination() {

    return (
        <div className="flex items-center justify-center text-gray-500 p-4">
            <button disabled className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibolds disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
            <div className="flex items-center gap-2 text-xs">
                <button className="rounded-md px-2">1</button>
                <button className="rounded-md px-2">2</button>
                <button className="rounded-md px-2">3</button>
                ...
                <button className="rounded-md px-2">10</button>
            </div>
            <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibolds disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
        </div>
    );
}

export default Pagination;