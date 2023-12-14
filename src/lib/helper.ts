export const shortenAddress = (address: string) => {
  return `${address.slice(0, 8)}...${address.slice(-5)}`;
};

export const convertTime = (milliseconds: number) => {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = seconds.toString().padStart(2, "0");

  return {
    hours: paddedHours,
    minutes: paddedMinutes,
    seconds: paddedSeconds,
    totalMilliseconds: milliseconds,
  };
};
