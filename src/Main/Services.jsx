import Component2 from "../assets/Component2.png";
import Component from "../assets/Component.png";
import Component1 from "../assets/Component1.png";
import Component3 from "../assets/Component3.png";
import Component4 from "../assets/Component4.png";

export default function Services() {
  return (
    <div>
      <div className="xsm:px-20 px-6 sm:px-10 py-20 gradient ">
        <div className="bg-GreyOne flex justify-start items-center border border-gray-600 py-6  radius mt-6">
          <img src={Component2} className="w-16 ml-4" />
          <p className="text-3xl xs:text-4xl ml-6 text-gray-300">
            Seamless API Integration
          </p>
        </div>
        <div className="bg-GreyOne flex justify-start items-center border-gray-600 border py-6 radius mt-6 ">
          <img src={Component} className="w-16  ml-4" />
          <p className="text-3xl xs:text-4xl ml-6 text-gray-300">
            Secure Escrow Service
          </p>
        </div>
        <div className="bg-GreyOne flex justify-start items-center border border-gray-600 py-6 radius mt-6">
          <img src={Component1} className="w-16  ml-4" />
          <p className="text-3xl xs:text-4xl ml-6 text-gray-300">
            Deposit & Withdrawal
          </p>
        </div>
        <div className="bg-GreyOne flex justify-start items-center border border-gray-600 py-6 radius mt-6">
          <img src={Component3} className="w-16  ml-4" />
          <p className="text-3xl xs:text-4xl ml-6 text-gray-300">
            AI Automatic Matching
          </p>
        </div>
        <div className="bg-GreyOne flex justify-start items-center border border-gray-600 py-6 radius mt-6">
          <img src={Component4} className="w-16 ml-4" />
          <p className="text-3xl xs:text-4xl ml-6 text-gray-300">
            24/7 Customer Support
          </p>
        </div>
      </div>
    </div>
  );
}
