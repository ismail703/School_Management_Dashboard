import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, assignmentsData } from "@/lib/data";
import FormModal from "@/components/FormModal";
import Image from "next/image";

type Assignment = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    dueDate: string;
};

const columns = [
    {
        header: "Subject Name",
        accessor: "name",
    },
    {
        header: "Class",
        accessor: "class",
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "Due Date",
        accessor: "dueDate",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

function AssignmentList() {
    const renderRow = (item: Assignment) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
        >
            <td className="p-2 align-middle">{item.subject}</td>
            <td className="p-2 align-middle">{item.class}</td>
            <td className="hidden md:table-cell p-2 align-middle">{item.teacher}</td>
            <td className="hidden md:table-cell p-2 align-middle">{item.dueDate}</td>

            <td className="p-2">
                <div className="flex items-center justify-start gap-2">
                    {role === "admin" && (
                        <>
                            <FormModal type="update" table="assignment" data={item} />
                            <FormModal type="delete" table="assignment" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </tr>
    );
    return (
        <main className="mx-4 bg-white rounded-md p-6 mt-4">
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 flex-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow hover:bg-yellowLight transition-all duration-200">
                            <Image src="/filter.png" alt="" width={20} height={20} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow hover:bg-yellowLight transition-all duration-200">
                            <Image src="/sort.png" alt="" width={20} height={20} />
                        </button>
                        {role === "admin" && (
                            <FormModal type="create" table="assignment" />
                        )}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
            <Pagination />
        </main>
    );
}

export default AssignmentList;
