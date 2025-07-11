import React from "react";
import "./Dropdown";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" mr-4 ml-4">
      <div className="sticky top-0 z-50 flex ">
        <Link
          to="/"
          className="hover:underline bg-blue-600 mb-4 max-h-12 p-3 rounded-b-4xl"
        >
          <span className="text-xl font-bold text-white title">Saas</span>
          <span className="text-l font-bold text-white ">Tribe</span>
        </Link>

        <div className="flex-1"></div>
        <ul className=" hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="text-gray-400 ">Home </li>
          <li>
            <Dropdown title={"Company"} />
          </li>
          <li>
            <Dropdown title={"Account"} />
          </li>
          <li>
            <Dropdown title={"Products"} />
          </li>
          <li>
            <Link to="/cards" className="hover:underline">
              TableAPIConsumption
            </Link>
          </li>
          <li>
            <button className="cursor-pointer hover:bg-blue-400 rounded-lg  px-6 py-1  bg-blue-600 text-white">
              Purchase Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
