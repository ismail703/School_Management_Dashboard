import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden xl:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];


function TeacherList() {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-2 p-2 align-middle">
        <Image src={item.photo} alt="" width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover" />
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell p-2 align-middle">{item.teacherId}</td>
      <td className="hidden md:table-cell p-2 align-middle">{item.subjects.join(',')}</td>
      <td className="hidden md:table-cell p-2 align-middle">{item.classes.join(',')}</td>
      <td className="hidden lg:table-cell p-2 align-middle">{item.phone}</td>
      <td className="hidden xl:table-cell p-2 align-middle">{item.address}</td>
      <td className="p-2">
        <div className="flex items-center justify-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blueSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {
            role === "admin" && (
              <FormModal type="delete" table="teacher" id={item.id} />
            )
          }
        </div>
      </td>
    </tr>
  );
  return (
    <main className="mx-4 bg-white rounded-md p-6 mt-4">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 flex-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow hover:bg-yellowLight transition-all duration-200">
              <Image src="/filter.png" alt="" width={20} height={20} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow hover:bg-yellowLight transition-all duration-200">
              <Image src="/sort.png" alt="" width={20} height={20} />
            </button>
            {role === "admin" && <FormModal type="create" table="teacher" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      <Pagination />
    </main>
  );
}

export default TeacherList;