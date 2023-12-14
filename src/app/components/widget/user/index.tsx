import React from "react";
import NFTCard from "../../card";
import toxic_alien from "@/images/toxic_alien.png";

const User = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-10">
        <NFTCard
          img={toxic_alien}
          multiplier={1.5}
          nftName="Toxic Alien"
          isStaked={true}
        />
        <NFTCard
          img={null}
          multiplier={2}
          nftName="Lorem Ipsum"
          isStaked={false}
        />
        <NFTCard
          img={null}
          multiplier={2.5}
          nftName="Lorem Ipsum"
          isStaked={false}
        />
      </div>
    </div>
  );
};

export default User;
