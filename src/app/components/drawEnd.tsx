const DrawEnd = () => {
  return (
    <div className="w-full p-6 rounded-lg flex flex-col  border-[0.5px] border-accent_fff text-accent_fff bg-accent_000 ">
      <h1 className="font-sans text-3xl font-bold text-center w-full font-normal">
        Current Round Ended
      </h1>
      <div className="w-full flex gap-2 justify-center py-5 font-sans"></div>
      <div className="w-full flex items-center gap-4 pt-4">
        <div className="w-[170px] h-[1px] bg-accent_fff"></div>
        <p className="text-xl font-extrabold">Round Data</p>
        <div className="w-[170px] h-[1px] bg-accent_fff"></div>
      </div>
      <div className="w-full flex flex-col gap-2 md:px-10 pt-6 font-sans">
        <div className="flex justify-between">
          <p className="text-base font-medium">Current Round No</p>
          <p className="text-base font-medium">10</p>
        </div>
        <div className="flex justify-between">
          <p className="text-base font-medium">Total Round Entry</p>
          <p className="text-base font-medium">200</p>
        </div>
        <div className="flex justify-between">
          <p className="text-base font-medium">INJ in Pool</p>
          <p className="text-base font-medium">100</p>
        </div>
        <div className="flex justify-between">
          <p className="text-base font-medium">🏆 Round Winner</p>
          <p className="text-base font-medium">inj1ne8g...sng47</p>
        </div>
        <div className="pt-12 pb-1 flex items-center justify-center">
          <small>Next round starts after cooldown...</small>
        </div>
      </div>
    </div>
  );
};

export default DrawEnd;
