"use client";
import Image from "next/image";
import ButtonLink from "../common/ButtonLink";
import { IMAGES, ROUTES } from "@/app/util/imports";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center my-7 ">
      <div className="w-28">
        <Image src={IMAGES.Logo} alt="logo" />
      </div>
      <nav className="hidden md:flex gap-10">
        <ul className={`${pathname === ROUTES.HOME ? "text-color-500" : ""}`}>
         <Link href="/">Home</Link>  
        </ul>
        <ul className={`${pathname === ROUTES.ABOUT ? "text-color-500" : ""}`}>
          <Link href="#about"> About</Link>
        
        </ul>
        <ul
          className={`${pathname === ROUTES.CONTACT ? "text-color-500" : ""}`}
        >
          <Link href="#contact"> Feature</Link> 
        </ul>
      </nav>
      <div className=" hidden md:flex gap-5 ">
        <ButtonLink href={ROUTES.LOGIN} label="Login" variant="secondary" />
        <ButtonLink href={ROUTES.REGISTER} label="Register" variant="primary" />
      </div>
    </header>
  );
};

export default Header;
