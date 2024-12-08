"use client";
import Button from "@/app/component/common/Button";
import Input from "@/app/component/common/Input";
import { IMAGES, ROUTES } from "@/app/util/imports";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const RegisterPage = () => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");
  const [userInfo, setuserInfo] = useState({
    firstname: "",
    lastname: "",
    experience: selectedValue,
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handlesOnChange = (e) => {
    e.preventDefault();
       if (e.target.id === "experience") {
      setSelectedValue(e.target.id);
    }
    setuserInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  console.log(userInfo);
  const handlesRegister = () => {};

  
  return (
    <section className=" ">
      <IoIosArrowBack
        onClick={() => router.push("/")}
        className="font-extrabold text-5xl absolute top-2 left-2  cursor-pointer"
      />
      <div className=" flex flex-col gap-4">
        <h2 className="text-5xl font-bold">
          Welcome to
          <Image
            src={IMAGES.Logo}
            alt="qode-logo"
            className="inline-block w-40"
          />
        </h2>
        <p className=" text-xl">
          Already have an account?
          <Link href={ROUTES.LOGIN} className="text-color-primary3">
            
            Login
          </Link>
        </p>

        <form action="">
          <Input
            label="First Name"
            placeholder="First Name"
            value={userInfo.firstname}
            type="text"
            id="firstname"
            onchange={handlesOnChange}
          />
          <Input
            label="Last Name"
            placeholder="Last Name"
            value={userInfo.lastname}
            type="text"
            id="lastname"
            onchange={handlesOnChange}
          />

          <label htmlFor="experience" className="text-lg">
            Experience Level
          </label>
          <select
            name=""
            id="experience"
            defaultValue=""
            onChange={handlesOnChange}

            className={`block w-full  mx-auto px-3 duration-200 bg-color-white focus:border-color-primary6 py-3 sm:py-4 border-none rounded-lg outline-none mb-6 text-black  ${
              selectedValue === "" ? "text-gray-400" : "text-black"
            }`}
          >
            <option value="" disabled>
              
              Please select an option
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>

          <Input
            label="Email"
            placeholder="Email"
            value={userInfo.email}
            type="text"
            id="email"
            onchange={handlesOnChange}
          />

          <Input
            label="Password"
            placeholder="********"
            value={userInfo.password}
            type="password"
            id="password"
            onchange={handlesOnChange}
          />
          <Input
            label="Confirm Password"
            placeholder="********"
            value={userInfo.confirmpassword}
            type="password"
            id="confirmpassword"
            onchange={handlesOnChange}
          />
          <Button
            onclick={handlesRegister}
            width="w-full my-6"
            variant="primary"
            label="Register"
          />
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
