"use client";
import React, { useState } from "react";
import Countdown from "../../countdown";
import DrawEnd from "../../drawEnd";
import DrawEvents from "../../drawEvent";

const Events = () => {
  const [isTime, setIsTime] = useState(true);
  return (
    <div className="w-full max-w-[550px] flex flex-col gap-8 mb-[4rem]">
      <Countdown
        countType={isTime ? "Event Coutdown" : "Cooldown Period"}
        timeInSeconds={0}
      />
      {isTime ? <DrawEvents /> : <DrawEnd />}
    </div>
  );
};

export default Events;
