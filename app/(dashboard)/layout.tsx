"use client";
import Image from "next/image";
import { IMAGES, ROUTES } from "../util/imports";
import { usePathname } from "next/navigation";

export function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const route = usePathname();
  const left = [ROUTES.REGISTER, ROUTES.CONFIRM_EMAIL];
  return (
    <>
        <main className="w-[90%] m-auto flex flex-col justify-center md:mx-10  md:justify-start md:w-[50%] mt-20">
          {children}
        </main>
      

    </>
  );
}

export default DashboardLayout;
