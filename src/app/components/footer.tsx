import React from "react";
import voomp from "@/images/voomp.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, #000 -70.2%, rgba(0, 0, 0, 0.00) 100%)",
      }}
      className="h-[99px] w-full absolute left-0 bottom-0 mt-8 pb-8"
    >
      <div className="flex flex-col items-center justify-center md:absolute md:bottom-78 md:right-24">
        <div className="mt-[-8rem]">
          <Image src={voomp} alt="voomp image" />
        </div>
        <div className="text-center font-normal text-accent_fff mt-[-2rem]">
          <p className="text-xs">T&C Apply</p>
          <span className="text-xs">All rights are reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
