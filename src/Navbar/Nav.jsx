import React, { useState } from "react";
import Group2 from "../assets/Group2.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className="xsm:px-20 px-6 sm:px-10 py-[2rem]  w-full fixed bg-transparent backdrop-blur-sm z-10">
      <div className="flex justify-between w-full">
        <div>
          <img src={Group2} className="w-auto h-auto " />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="sm:hidden text-xl text-dimWhite z-10"
        >
          {open ? (
            <FaTimes className="text-mainRed" />
          ) : (
            <FaBars className="" />
          )}
        </div>

        <div className="hidden sm:flex">
          <button
            className="border mx-3 text-white p-2 text-xs
                         font-normal w-40  hover:bg-slate-200 hover:text-gray-800"
          >
            Become a Merchant
          </button>
          <button
            className="mx-3 text-white p-2 text-xs
                          bg-blue font-normal w-32   hover:bg-indigo-900"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile nav */}
        <>
          <ul
            className={`
        sm:hidden bg-darkestBlue fixed flex flex-col items-center w-full h-[100vh] xs:w-[50%] ss:w-[30%] top-0 overflow-y-auto bottom-0 pt-[7rem] pl-4 text-[20px] font-semibold
        duration-500 ${open ? "right-0 " : "right-[-100%] "}
       `}
          >
            <button
              className="border mx-3 text-white p-2 text-xs
                         font-normal w-40  hover:bg-slate-200 hover:text-gray-800"
            >
              Become a Merchant
            </button>
            <button
              className="mx-3 text-white p-2 text-xs
                          bg-blue font-normal w-32 mt-6  hover:bg-indigo-900"
            >
              Contact Us
            </button>

            {/* <li className="hover:cursor-pointer hover:text-Lightgrey">
              <AnchorLink
                spy={true}
                smooth={true}
                to="productSection"
                onClick={closeMobileMenu}
              >
                Products
              </AnchorLink>
            </li> */}
          </ul>
        </>
      </div>
    </nav>
  );
}
