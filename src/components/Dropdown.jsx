import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = ({ title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="  text-gray-400">
      <div className="flex">
        <button className="  cursor-pointer" onClick={() => setOpen(!open)}>
          {title}{" "}
        </button>
        <IoMdArrowDropdown className="mt-1.5" />
      </div>

      {open && (
        <ul>
          <li className="hover:bg-gray-300 rounded-md text-blue-400">
            option 1
          </li>
          <li className="hover:bg-gray-300 rounded-md text-blue-400">
            option 2
          </li>
          <li className="hover:bg-gray-300 rounded-md text-blue-400">
            option 3
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
