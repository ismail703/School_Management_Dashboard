import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { role, examsData } from "@/lib/data";
import FormModal from "@/components/FormModal";

type Exam = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
    className: "",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

function ExamList() {
  const renderRow = (item: Exam) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
    >
      <td className="p-2 align-middle">{item.subject}</td>
      <td className="p-2 align-middle">{item.class}</td>
      <td className="hidden md:table-cell p-2 align-middle">{item.teacher}</td>
      <td className="hidden md:table-cell p-2 align-middle">{item.date}</td>
      <td className="p-2">
        <div className="flex items-center justify-start gap-2">
          {role === "admin" && (
            <>
              <FormModal type="update" table="exam" data={item} />
              <FormModal type="delete" table="exam" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <main className="mx-4 bg-white rounded-md p-6 mt-4">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Exams</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 flex-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow hover:bg-yellowLight transition-all duration-200">
              <Image src="/filter.png" alt="" width={20} height={20} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow hover:bg-yellowLight transition-all duration-200">
              <Image src="/sort.png" alt="" width={20} height={20} />
            </button>
            {role === "admin" && <FormModal type="create" table="exam" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={examsData} />
      <Pagination />
    </main>
  );
}

export default ExamList;
