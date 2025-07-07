import React from "react";

const WelcomeCard = ({ title, imag, text }) => {
  return (
    <div className=" slide bg-gray-800 flex-col  justify-between place-items-start pl-4 rounded-2xl shadow-2xl ">
      <div className="bg-gray-700 rounded-4xl  ml-4 size-16">{imag}</div>
      <h2 className="text-xl font-bold mb-2 text-left ">{title}</h2>
      <p className="text-left">{text}</p>
    </div>
  );
};

export default WelcomeCard;
