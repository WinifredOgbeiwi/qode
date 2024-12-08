"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ButtonLink from "../common/ButtonLink";
import { IMAGES, ROUTES } from "@/app/util/imports";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center my-5 ">
      <div className="w-28">
        <Image src={IMAGES.Logo} alt="logo" />
      </div>
      <nav className="flex gap-10">
        <ul className={`${pathname === ROUTES.HOME ? "text-color-500" : ""}`}>
         <Link href="/#about">Home</Link>  
        </ul>
        <ul className={`${pathname === ROUTES.ABOUT ? "text-color-500" : ""}`}>
          <a href="/#about"> About</a>
        
        </ul>
        <ul
          className={`${pathname === ROUTES.CONTACT ? "text-color-500" : ""}`}
        >
          <a href="/#contact"> Contact</a> 
        </ul>
      </nav>
      <div className="flex gap-5">
        <ButtonLink href={ROUTES.LOGIN} label="Login" variant="secondary" />
        <ButtonLink href={ROUTES.REGISTER} label="Register" variant="primary" />
      </div>
    </header>
  );
};

export default Header;
