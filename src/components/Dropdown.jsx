import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = ({title}) => {
  return (
    <div className="flex text-gray-400 ">
      <p>{title}</p>
      <IoMdArrowDropdown className="self-center" />
    </div>
  );
};

export default Dropdown;
