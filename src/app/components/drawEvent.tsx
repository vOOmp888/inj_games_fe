"use client";
import Button from "./ui/button";
import Select from "./select";
import { useState } from "react";

const DrawEvents = () => {
  const [selectedOption, setSelectedOption] = useState("1");

  const handleSelectChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="w-full p-6 rounded-lg flex flex-col border-[0.5px] border-accent_fff text-accent_fff bg-accent_000 ">
      <h1 className="font-sans text-3xl font-bold text-center w-full font-normal">
        Hover Draw Event
      </h1>
      <div className="w-full flex gap-2 justify-center py-5 font-sans">
        <div className="max-w-[200px] w-full min-h-[60px] px-1 border border-accent_fff rounded">
          <span className="text-[12px] text-accent_fff text-xs font-normal">
            Total Price Pool
          </span>
          <p className="text-[20px] font-semibold">10 INJ</p>
        </div>
        <div className="max-w-[200px] w-full min-h-[60px] px-1 border border-accent_fff rounded">
          <span className="font-sans text-[12px] text-accent_fff text-xs font-normal">
            Ticket Remaining
          </span>
          <p className="text-[20px] font-semibold">100</p>
        </div>
      </div>
      <div className="w-full flex items-center gap-4 pt-4">
        <div className="w-[180px] h-[1px] bg-accent_fff"></div>
        <p className="text-xl font-extrabold">Transactions</p>
        <div className="w-[180px] h-[1px] bg-accent_fff"></div>
      </div>
      <div className="w-full flex flex-col gap-2 md:px-10 pt-6 font-sans">
        <div className="flex justify-between">
          <p className="text-base font-medium">Ticket Price</p>
          <p className="text-base font-medium">0.2 INJ</p>
        </div>
        <div className="flex justify-between">
          <p className="text-base font-medium">Ticket Count</p>
          <Select
            id="quantity"
            handleSelectChange={handleSelectChange}
            selectedOption={selectedOption}
          />
        </div>
        <div className="flex justify-between pt-2">
          <p className="text-lg font-medium">Total Amount</p>
          <p className="text-lg font-medium">0.11 INJ</p>
        </div>
        <div className="flex justify-between">
          <p className="text-base font-medium">Platform Fees: 0.01 INJ</p>
          <p className="text-base font-medium">Network Fees: TBC</p>
        </div>
        <div className="w-full pt-6">
          <Button
            className="w-full h-[4.5rem] text-2xl	font-semibold"
            variant="accent"
          >
            Get {selectedOption} ticket for {(+selectedOption * 0.2).toFixed(1)}
            INJ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DrawEvents;
