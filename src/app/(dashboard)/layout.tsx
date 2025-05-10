import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import { inter } from '@/app/fonts';
import { lusitana } from '@/app/fonts';


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`flex ${inter.className}`}>
      <aside className="w-[14%] md:w-[8%] lg:w-[16.5%] xl:w-[16%] bg-[#fff] lg:px-4 py-6">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo-1.png" alt="Home" width={32} height={32} />
          <h1 className={`${lusitana.className} hidden lg:block font-bold text-xl`}>CoolSchool</h1>
        </Link>
        <Menu />
      </aside>
      <div className="w-[86%] md:w-[92%] lg:w-[84.5%] xl:w-[84%] bg-[#f3f3f4] p-2">
        <NavBar />
        {children}
      </div>
    </main>
  );
}
