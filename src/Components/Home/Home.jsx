import React from "react";
import bgImg from "../../assets/bg.png";

const Home = () => {
  return (
    <div className=" flex flex-col lg:flex-row items-center justify-between mt-10 text-white min-h-screen">
      <div className="sm:flex sm:flex-col w-full lg:w-1/2 p-4 lg:pl-10 lg:order-1 order-2">
        <h1 className="sm:text-5xl md:text-4xl lg:text-6xl font-bold leading-normal tracking-tighter sm:text-center">
          Hello, I am BHUMIKA
        </h1>

        <p className="sm:text-2xl md:text-xl lg:text-2xl tracking-tight mt-5 sm:text-center">
          I'm an Aspiring Software Developer.
          <br />
          Currently doing 5th semester of BCA.
        </p>

        <button className=" sm:text-xl sm:self-center mt-5 lg:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#001E2B] border">
          Contact Me
        </button>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 p-3 order-1 lg:order-2">
        <img
          src={bgImg}
          alt="working on laptop"
          className="w-full sm:h-120 sm:w-120 sm:mx-auto"
        />
      </div>

    </div>
  );
};

export default Home;