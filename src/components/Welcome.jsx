import React from "react";

import { RiTeamLine } from "react-icons/ri";
import { AiOutlineLock } from "react-icons/ai";
import { FiCpu } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import { SlEnvolopeLetter } from "react-icons/sl";
import { PiComputerTowerLight } from "react-icons/pi";

import WelcomeCard from "./WelcomeCard";
const Welcome = () => {
  return (
    <div className="mt-10">
      <p className="uppercase text-sm text-blue-400 text-left">Welcome</p>
      <div className="relative">
        <div className=" top-20 absolute  left-0 w-full bg-blue-600 rounded-bl-full rounded-tr-full h-24 z-0"></div>
        <div className="relative z-10">
          <div className="absolute top-20 left-10 max-w-md text-left text-4xl font-bold text-white">
            Ready to help you in your projects!
          </div>

          <div className="flex gap-32 pt-10 px-10">
            <div className="pt-40 max-w-lg text-white text-left">
              <p className="mb-4">
                Our sales team will get in touch to better understand your
                needs, and will help you with the sign-up process.
              </p>

              <div className="flex gap-4 pt-4">
                <button className="cursor-pointer hover:bg-blue-400 rounded-lg  px-6 py-2 bg-blue-600 text-white">
                  Start Now
                </button>
                <button className=" cursor-pointer border text-white hover:bg-blue-400 border-blue-400 rounded-lg px-4 py-2 ">
                  Contact Sales
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-8 pr-8">
              <WelcomeCard
                imag={<RiTeamLine className="size-14 text-sky-700 ml-1" />}
                title="Accounts"
                text="Manage an unlimited number of accounts from one place"
              />
              <WelcomeCard
                imag={<AiOutlineLock className="size-14 text-sky-700 ml-1" />}
                title="Roles & Permissions"
                text="Full control with flexible user permissions for views and actions"
              />
              <WelcomeCard
                imag={<FiCpu className="size-14 text-sky-700 ml-1" />}
                title="Integration"
                text="Connect the tools you already use"
              />
              <WelcomeCard
                imag={<RiRobot2Line className="size-14 text-sky-700 ml-1" />}
                title="Chat Bots"
                text="AI-powered chatbots to improve your business and customer satisfaction"
              />
              <WelcomeCard
                imag={
                  <SlEnvolopeLetter className="size-14 text-sky-700 ml-1" />
                }
                title="In-App Messaging"
                text="Build a better business with proactive messages"
              />
              <WelcomeCard
                imag={
                  <PiComputerTowerLight className="size-14 text-sky-700 ml-1" />
                }
                title="Knowledge Base"
                text="Create and publish answers for customers"
              />
            </div>
          </div>
        </div>
        <div className=" bottom-14 absolute  right-0 w-4xl bg-blue-600 rounded-bl-full rounded-br-full h-24 z-0"></div>
      </div>
    </div>
  );
};

export default Welcome;
