"use client";
import Image from "next/image";
import { IMAGES, ROUTES } from "../util/imports";
import { usePathname } from "next/navigation";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const route = usePathname();
  const left = [ROUTES.REGISTER, ROUTES.CONFIRM_EMAIL];
  return (
    <>
      <div
        className={`flex flex-col bg-color-primary8  ${
          left.includes(route) ? "md:flex-row" : "md:flex-row-reverse"
        } min-h-screen`}
      >
          <div
          className="flex rounded-b-full md:rounded-none flex-col items-center justify-center bg-primary w-full md:w-[50%] bg-cover bg-center"
          style={{ backgroundImage: `url('../../../images/purple-bg.png')` }}
        >
          <Image src={IMAGES.BrainBoy} alt="Logo" className="" />
        </div>
        <main className="w-[90%] m-auto flex flex-col justify-center md:mx-10  md:justify-start md:w-[50%] mt-20">
          {children}
        </main>
      
      </div>
    </>
  );
}

export default AuthLayout;
