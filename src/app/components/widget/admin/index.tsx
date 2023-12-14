import React from "react";
import { Input } from "@/app/components/ui/input";
import Button from "../../ui/button";

const AdminSettings = () => {
  return (
    <div className="w-full p-6 rounded-lg flex flex-col gap-8 border-[0.5px] border-accent_fff text-accent_fff bg-accent_000">
      <h1 className="font-sans text-3xl font-bold text-center w-full font-normal">
        Admin Controls
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p>Current Round</p>
          <p>007</p>
        </div>
        <div className="flex justify-between">
          <p>Current Round Duration</p>
          <p>60 Minutes</p>
        </div>
        <div className="flex justify-between">
          <p>Current Cooldown Duration</p>
          <p>60 Minutes</p>
        </div>
        <div className="flex justify-between">
          <p>Current Entry Fee</p>
          <p>0.2 INJ</p>
        </div>
      </div>
      <div className="w-full bg-accent_fff h-[2px]"></div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <Input
            type="number"
            placeholder="round duration"
            className="placeholder-accent_fff placeholder:font-joti_one placeholder:opacity-75"
          />
          <Button className="text-accent_000" variant="secondary">
            Set
          </Button>
        </div>
        <div className="flex gap-6">
          <Input
            type="number"
            placeholder="Cooldown Period"
            className="placeholder-accent_fff placeholder:font-joti_one placeholder:opacity-75"
          />
          <Button className="text-accent_000" variant="secondary">
            Set
          </Button>
        </div>
        <div className="flex gap-6">
          <Input
            type="number"
            placeholder="Entry Fee"
            className="placeholder-accent_fff placeholder:font-joti_one placeholder:opacity-75"
          />
          <Button className="text-accent_000" variant="secondary">
            Set
          </Button>
        </div>
        <div className="flex gap-6">
          <Input
            type="number"
            placeholder="Winner fee %"
            className="placeholder-accent_fff placeholder:font-joti_one placeholder:opacity-75"
          />
          <Button className="text-accent_000" variant="secondary">
            Set
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <Button className="text-accent_000" variant="secondary" disabled>
          Randomly Select Winner
        </Button>
        <Button className="text-accent_000" variant="secondary">
          Start New Round
        </Button>
      </div>
    </div>
  );
};

export default AdminSettings;
