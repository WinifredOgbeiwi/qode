"use client";
import Button from "@/app/component/common/Button";
import Input from "@/app/component/common/Input";
import { IMAGES, ROUTES } from "@/app/util/imports";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const LoginPage = () => {
  const router = useRouter();
  const handlesRegister = () => {};
  return (
    <section className=" ">
      <IoIosArrowBack
        onClick={() => router.push("/")}
        className="font-extrabold text-5xl absolute top-2 left-2 "
      />
      <div className="lg:mx-16 flex flex-col gap-4">
        <h2 className="text-5xl font-bold">Welcome Back</h2>
        <p className="text-xl">
          Login to access your
          <span className="font-bold">
            <Image
              src={IMAGES.Logo}
              alt="qode-logo"
              className="inline-block w-16"
            />
          </span>{" "}
          account
        </p>
        <p className=" text-xl">
          Don't have an account?{" "}
          <Link href={ROUTES.REGISTER} className="text-color-primary3">
            Register
          </Link>
        </p>

        <form action="">
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
          <Button
            onclick={handlesRegister}
            width="w-full mt-6"
            variant="primary"
            label="Login"
          />
          <Link
            href={ROUTES.FORGOT_PASSWORD}
            className="text-color-primary3 text-lg mt-3 mb-5 inline-block "
          >
            Forgot Password?
          </Link>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
