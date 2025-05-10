import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import FormModal from "@/components/FormModal";
import { role, parentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
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
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

function ParentList() {
  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex flex-col justify-center p-2">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500">{item?.email}</p>
      </td>
      <td className="hidden md:table-cell p-2 align-middle">{item.students.join(', ')}</td>
      <td className="hidden lg:table-cell p-2 align-middle">{item.phone}</td>
      <td className="hidden lg:table-cell p-2 align-middle">{item.address}</td>
      <td className="p-2">
        <div className="flex items-center justify-start gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blueSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link> */}
          {
            role === "admin" && (
              <>
                <FormModal table="parent" type="update" data={item} />
                <FormModal type="delete" table="parent" id={item.id} />
              </>
            )
          }
        </div>
      </td>
    </tr>
  );
  return (
    <main className="px-4 mt-4">
      <div className="bg-white rounded-md p-6">
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">All Parent</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
            <div className="flex items-center gap-4 flex-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow hover:bg-yellowLight transition-all duration-200">
                <Image src="/filter.png" alt="" width={20} height={20} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow hover:bg-yellowLight transition-all duration-200">
                <Image src="/sort.png" alt="" width={20} height={20} />
              </button>
              {role === "admin" && <FormModal type="create" table="parent" />}
            </div>
          </div>
        </div>
        <Table columns={columns} renderRow={renderRow} data={parentsData} />
        <Pagination />
      </div>
    </main>
  );
}

export default ParentList;