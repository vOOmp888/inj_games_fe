"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Connector from "./connector";

import logo from "@/images/voomp.svg";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full px-6 md:px-12  py-6 items-center justify-between bg-accent_000 border border-accent_fff h-[75px]">
      <div className="hidden md:flex items-center justify-center gap-2">
        <div className="flex w-[50px] h-[50px] rounded">
          <Image src={logo} alt="voomp logo" />
        </div>
        <p className="text-accent_fff font-joti_one text-xl font-normal	">
          Welcome,vOOmp
        </p>
      </div>
      <div>
        <p className="flex text-accent_fff font-joti_one text-xl font-normal">
          vOOmp.xyz
        </p>
      </div>
      <div className="max-w-[220px]">
        {pathname === "/" ? <div className="w-[20rem]"></div> : <Connector />}
      </div>
    </div>
  );
};

export default Header;
