import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, classesData } from "@/lib/data";
import FormModal from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";


type Class = {
    id: number;
    name: string;
    capacity: number;
    grade: number;
    supervisor: string;
};

const columns = [
    {
        header: "Class Name",
        accessor: "name",
    },
    {
        header: "Capacity",
        accessor: "capacity",
        className: "hidden md:table-cell",
    },
    {
        header: "Grade",
        accessor: "grade",
        className: "hidden md:table-cell",
    },
    {
        header: "Supervisor",
        accessor: "supervisor",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

function ClassList() {
    const renderRow = (item: Class) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
        >
            <td className="p-2 align-middle">{item.name}</td>
            <td className="hidden md:table-cell p-2 align-middle">{item.capacity}</td>
            <td className="hidden md:table-cell p-2 align-middle">{item.grade}</td>
            <td className="hidden md:table-cell p-2 align-middle">{item.supervisor}</td>

            <td className="p-2">
                <div className="flex items-center justify-start gap-2">
                    {
                        role === "admin" && (
                            <>
                                <FormModal type="update" table="class" data={item} />
                                <FormModal type="create" table="class" />
                            </>
                        )
                    }
                </div>
            </td>
        </tr>
    );
    return (
        <main className="mx-4 bg-white rounded-md p-6 mt-4">
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 flex-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow hover:bg-yellowLight transition-all duration-200">
                            <Image src="/filter.png" alt="" width={20} height={20} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow hover:bg-yellowLight transition-all duration-200">
                            <Image src="/sort.png" alt="" width={20} height={20} />
                        </button>
                        {role === "admin" && <FormModal type="create" table="class" />}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={classesData} />
            <Pagination />
        </main>
    );
}

export default ClassList;