import Group2 from "../assets/Group2.png";
import Frame1 from "../assets/Frame1.png";

export default function Footer() {
  return (
    <>
      <div className="xsm:px-20 px-6 sm:px-10 py-20 sm:flex">
        <div>
          <img src={Group2} className="hidden sm:block" />
          <img src={Group2} className="mx-auto sm:hidden" />
          <p className="text-gray-500 text-xs mt-2 sm:w-[60%]">
            This is a blockchain infrastructure company that allows businesses
            or enterprises to access secured blockchain node protocols to
            establish, run and scale their digital assets activities seamlessly.
          </p>
        </div>

        <div className=" flex flex-col items-center sm:items-end w-full">
          <img src={Frame1} className="w-20 h-8 mt-9 mb-3" />
          <p className="text-gray-500 text-xs">
            Ⓒ Blockterium 2023- All Rights Reserved{" "}
            <a href="" className="text-blue font-semibold">
              Terms and Policy
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
