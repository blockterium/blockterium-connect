import React from "react";
import Frame from "../assets/Frame.png";
import Nav from "../Navbar/Nav";

const Hero = () => {
  return (
    <div className=" navbg pb-[3rem] w-full">
      <Nav />
      <div className="xsm:px-20 px-6 sm:px-10 pt-[10rem] w-full">
        <h1 className="sm:gradient text-white text-5xl sm:text-6xl font-semibold  ">
          Maximize your <br className="hidden ss:block" /> payment efficiency
        </h1>
        <p className="text-dimWhite mt-4 mb-8 xsm:w-[60%]">
          Stay ahead of the curve and embrace the benefits of decentralized
          finance with our On-Ramp & Off-Ramp Payment Solutions to Boost Your
          Business.
        </p>
        <button
          className=" text-white py-[6px] px-4
                            bg-blue font-normal  hover:bg-indigo-900"
        >
          Get Started as a Business
        </button>
        <img src={Frame} className="mt-[3rem] w-[27rem] h-auto" />
      </div>
    </div>
  );
};

export default Hero;
