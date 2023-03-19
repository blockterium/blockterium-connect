import Shieldlock from "../assets/Shieldlock.png";

export default function Section2() {
  return (
    <>
      <div className="xsm:px-20 px-6 sm:px-10 regbg flex flex-col items-center text-center py-20 w-full">
        <div className="">
          <img src={Shieldlock} />
        </div>
        <h1 className="text-5xl font-semibold mt-12 gradient sm:w-[80%] md:w-[60%] lg:w-[50%]">
          Regulatory standards and
          <span> information security</span>
        </h1>
        <p className="text-2xl  mt-6  gradient sm:w-[80%] md:w-[60%] lg:w-[50%]">
          {" "}
          best practices are fully met by our systems and procedures.
        </p>
      </div>
    </>
  );
}
