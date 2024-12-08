"use client";
import Button from "@/app/component/common/Button";
import Input from "@/app/component/common/Input";
import { IMAGES, ROUTES } from "@/app/util/imports";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const RegisterPage = () => {
  const router = useRouter();
  const handlesRegister = () =>{

  }
  return (
    <section className=" ">
      <IoIosArrowBack
        onClick={() => router.push("/")}
        className="font-extrabold text-5xl absolute top-2 left-2  cursor-pointer"
      />
      <div className=" flex flex-col gap-4">
        <h2 className="text-5xl font-bold">Welcome to 
           <Image
              src={IMAGES.Logo}
              alt="qode-logo"
              className="inline-block w-40"
            />
        </h2>
        <p className=" text-xl">
          Already have an account? 
          <Link href={ROUTES.LOGIN} className="text-color-primary3"> Login</Link>
        </p>

        <form action="">
              <Input
            label="First Name"
            placeholder="First Name"
            value=""
            type="text"
            id="firstname"
          />
           <Input
            label="Last Name"
            placeholder="Last Name"
            value=""
            type="text"
           id="lastname"
           />

          
           <label htmlFor="experience" className="text-lg">Experience Level </label>
           <select name="" id="experience" className="block w-full  mx-auto px-3 duration-200  focus:border-primary py-[14px] sm:py-[14px] border border-solid border-primary rounded-lg outline-color-primary3 mb-6 ">
            <option value="" className="text-gray-100">Experience Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
           </select>

          
          <Input
            label="Email"
            placeholder="Email"
            value=""
            type="text"
            id="email"
          />

          <Input
            label="Password"
            placeholder="********"
            value=""
            type="password"
            id="password"
          />
         <Button onclick={handlesRegister} width="w-full my-6" variant="primary" label="Register"/>
         
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
