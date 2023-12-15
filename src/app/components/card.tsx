import Image, { StaticImageData } from "next/image";
import React from "react";
import { MdOutlineAdd } from "react-icons/md";

interface IProps {
  img: StaticImageData | null;
  multiplier: number;
  nftName: string;
  isStaked: boolean;
}
const NFTCard = ({ img, multiplier, nftName, isStaked }: IProps) => {
  return (
    <div className="flex relative items-start md:items-center gap-4 flex-col md:flex-row">
      <div className="h-[175px] w-[175px] bg-accent_000 border border-accent_fff rounded-lg flex justify-center">
        {img ? (
          <Image
            src={img}
            alt="nft image"
            height="150"
            className="py-[12px]"
            width="150"
          />
        ) : (
          <div className="w-full flex items-center justify-center text-accent_fff">
            <MdOutlineAdd className="w-[42px] h-[42px]" />
          </div>
        )}
      </div>
      <div className="flex gap-4 font-joti_one  md:mt-[-48px] flex-wrap">
        <div className="w-[150px] relative h-[40px] border border-tertiary_light rounded-lg flex items-center p-2">
          <span className="absolute bg-accent_fff w-[60px] h-[25px] flex items-center justify-center font-sans font-bold text-sm rounded top-[-36px]">
            {multiplier}
          </span>
          <p className="text-base text-accent_fff text-tertiary">{nftName}</p>
        </div>
        <div className="w-[75px] h-[40px] border border-tertiary_light rounded-lg flex items-center p-2">
          <p className="text-base text-accent_fff text-tertiary">
            {isStaked ? "Staked" : "Stake"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
