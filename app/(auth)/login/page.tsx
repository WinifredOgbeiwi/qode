"use client";
import Button from "@/app/component/common/Button";
import Input from "@/app/component/common/Input";
import { IMAGES, ROUTES } from "@/app/util/imports";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { IoIosArrowBack } from "react-icons/io";

const LoginPage = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInfo, setuserInfo] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const handlesOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    setuserInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handlesLogin = async (e: React.FormEvent) => {
    e.preventDefault();
        setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/login", {
        email: userInfo.email,
        password: userInfo.password,
      });
      console.log("User logged in:", response.data);
      router.push("/dashboard");
    } catch (error) {
  if (axios.isAxiosError(error)) {

    throw new Error(error.response?.data?.error || "Invalid credentials");
  } else {

    throw new Error("An unexpected error occurred");
  }
} finally {
      setLoading(false);

    }
  };

  return (
    <section className=" ">
      {/* <IoIosArrowBack
        onClick={() => router.push("/")}
        className="font-extrabold text-5xl absolute top-2 left-2 "
      /> */}
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
          </span>
          account
        </p>
        <p className=" text-xl">
          Don&#39;t have an account?
          <Link href={ROUTES.REGISTER} className="text-color-primary3">
             Register
          </Link>
        </p>

        <form action="">
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
          <Button
            onclick={handlesLogin}
            width="w-full mt-6"
            variant="primary"
            label={loading ? "loading...":"Login"}
          />
          <Link
            href={ROUTES.FORGOT_PASSWORD}
            className="text-color-primary3 text-lg mt-3 mb-5 inline-block "
          >
            Forgot Password?
          </Link>
          <p className="text-red-400">{error}</p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
