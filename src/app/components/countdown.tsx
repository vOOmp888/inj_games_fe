import Image from "next/image";
import rectangle from "@/images/Rectangle.svg";
import { useEffect, useState } from "react";
import { convertTime } from "../../lib/helper";

interface IProps {
  countType: string;
  timeInSeconds: number;
}
const Countdown = ({ countType, timeInSeconds }: IProps) => {
  const [countdownTime, setCountdownTime] = useState(
    convertTime(timeInSeconds)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdownTime((prevTime) => {
        const totalMilliseconds = prevTime.totalMilliseconds - 1000;
        if (totalMilliseconds <= 0) {
          clearInterval(intervalId);
          // You may want to handle countdown completion here
          return prevTime;
        }
        return convertTime(totalMilliseconds);
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that

  return (
    <div className="w-full flex-wrap min-h-[89px] gap-2 p-6 rounded-lg flex items-center justify-between  border-[0.5px] border-accent_fff">
      <p className="font-sans text-xl text-accent_fff font-bold">
        {countType}:
      </p>
      <div className="flex gap-4 md:mr-8">
        <div className="relative h-[60px] w-[60px] bg-secondary flex items-center justify-center">
          <p className="text-accent-000 font-extrabold text-[28px]">
            {countdownTime.hours}
          </p>
          <Image
            src={rectangle}
            alt="rectangle svg"
            className="absolute bottom-0 right-0"
          />
          <p className="absolute bottom-0 right-[4px] text-[6px] font-semibold">
            Hours
          </p>
        </div>
        <div className="relative h-[60px] w-[60px] bg-secondary flex items-center justify-center">
          <p className="text-accent-000 font-extrabold text-[28px]">
            {countdownTime.minutes}
          </p>
          <Image
            src={rectangle}
            alt="rectangle svg"
            className="absolute bottom-0 right-0 w-[68]"
          />
          <p className="absolute bottom-0 right-[4px] text-[6px] font-semibold">
            Minutes
          </p>
        </div>
        <div className="relative h-[60px] w-[60px] bg-secondary flex items-center justify-center">
          <p className="text-accent-000 font-extrabold text-[28px]">
            {countdownTime.seconds}
          </p>
          <Image
            src={rectangle}
            alt="rectangle svg"
            className="absolute bottom-0 right-0"
          />
          <p className="absolute bottom-0 right-[4px] text-[6px] font-semibold">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
