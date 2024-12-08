import React from "react";
import ButtonLink from "../common/ButtonLink";
import { Afacad } from "next/font/google";
const AfacadFont = Afacad({
  subsets: ["latin"],
  display: "swap",
});
const Hero = () => {
  return (
    <div
      className={`${AfacadFont.className} relative text-center pb-32 flex flex-col items-center bg-cover bg-center`}
      style={{ backgroundImage: `url('../../../container.png')` }}
    >
      <div className="w-1/2 mt-24 ">
        <h1 className={`text-7xl font-semibold`}>
          Test Your Knowledge, <br />
          Challenge Your Mind!
        </h1>
        <p className="my-5 text-xl ">
          Join the fun and put your skills to the test with our interactive
          quizzes on various topics. Whether you&#39;re a trivia enthusiast or just looking to learn something new, we have a quiz for you!
        </p>
        <ButtonLink
          href="/register"
          label="Start Quiz"
          variant="primary"
          width="w-[80%] py-4"
        />
      </div>
      {/* <div className="mt-32 flex gap-10">
        <Card background="bg-secondary-lightblue" image={IMAGES.Heropic1} />
        <Card background="bg-secondary-lightpink" image={IMAGES.LaptopBoy} />
        <Card background="bg-color-100" image={IMAGES.LaptopBoy} />
      </div> */}
    </div>
  );
};

export default Hero;
