import Details from "../components/widget/Details";
import Events from "../components/widget/events";

// items-center
export default function Home() {
  return (
    <main className="flex flex-col gap-14 p-6 py-24 lg:flex-row lg:p-24 md:gap-14 justify-between mb-24 lg:mb-0">
      <Details />
      <div className="w-full max-w-[550px] flex flex-col gap-8 mb-[4rem] md:pb-[6rem]">
        <Events />
      </div>
    </main>
  );
}
