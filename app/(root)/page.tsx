import About from "../component/home/About";
import Features from "../component/home/Features";
import Hero from "../component/home/Hero";
import HowItWorks from "../component/home/HowItWorks";
import Subscribe from "../component/home/Subscribe";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Subscribe/>
    </>
  );
};

export default Homepage;
