import Image from "next/image";
import React from "react";
import kepler from "@/images/keplr.png";
import metamask from "@/images/metamask.svg";

import { RiArrowRightSLine } from "react-icons/ri";

interface Iprops {
  handleMetamask: () => void;
  handleKeplr: () => void;
  setIsOpen: (value: boolean) => void;
}
const ConnectWallet = ({ handleKeplr, handleMetamask, setIsOpen }: Iprops) => {
  return (
    <div className="w-full font">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-sans text-lg font-semibold">Select Wallet</h2>
      </div>
      <div className="flex flex-col gap-6 pt-[18px]">
        <div
          onClick={() => {
            handleKeplr();
            setIsOpen(false);
          }}
          className="group transition delay-300 duration-300 flex justify-between items-center border px-2 py-2 cursor-pointer"
        >
          <div className="flex items-center gap-2 transition delay-300 duration-300">
            <Image
              src={kepler}
              height="32"
              width="32"
              alt="keplr wallet image"
            />
            <p className="font-bold text-black group-hover:text-secondary transition delay-200 duration-200">
              Keplr
            </p>
          </div>
          <RiArrowRightSLine className="h-6 w-6 stroke-sky-500 group-hover:text-secondary transition delay-200 duration-200" />
        </div>
        <div
          onClick={() => {
            handleMetamask();
            setIsOpen(false);
          }}
          className="group flex justify-between items-center border px-2 py-2 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Image
              src={metamask}
              height="32"
              width="32"
              alt="metamask wallet image"
            />
            <p className="font-bold text-black group-hover:text-secondary transition delay-200 duration-200">
              Metamask
            </p>
          </div>
          <RiArrowRightSLine className="h-6 w-6 stroke-sky-500 group-hover:text-secondary transition delay-200 duration-200" />
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
