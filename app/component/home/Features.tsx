import React from "react";
import Heading from "../common/Heading";
import Image from "next/image";
import { IMAGES } from "@/app/util/imports";

const Features = () => {
  return (
    <section
      className={` relative text-center section py-5 bg-cover bg-center`}
      style={{ backgroundImage: `url('../../../background.png')` }}
    >
  <Heading
        headingText="Why Choose Our Tech Quiz App?"
        paragraphText="Our app is designed to make learning fun and engaging. Here is why you wll love it:"/>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-rows-2 gap-4 items-center">

        <div>
          <h3>Variety of Quizzes</h3>
          <p>
            Choose from a wide range of tech-related topics, including
            programming languages, AI, cybersecurity, hardware, software, and
            more.
          </p>
        </div>

        <div className=" hidden md:block md:row-span-2">
          <Image src={IMAGES.Feature} alt="features"/>
        </div>

        <div>
          <h3> Track Progress and Analytics</h3>
          <p>
          Users can view their quiz history, track progress, and identify areas of improvement through personalized performance analytics.
          </p>
        </div>

        <div>
          <h3>Win Prizes on the Leaderboard</h3>
          <p>
            Encourage competition by offering exciting rewards for top scorers on the global leaderboard. The more quizzes you ace, the higher you climb!
          </p>
        </div>
        <div>
          <h3>Social Sharing and Badges</h3>
          <p>
            Make it social! Share quiz results and leaderboard positions on social media, and earn badges for milestones like &quot;Quiz Master&quot; or &quot;Fastest Thinker.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

