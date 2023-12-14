"use client";

import { Eligibility } from "./components/page/eligibility";

export default function Home() {
  return (
    <main className="flex flex-col gap-14 p-6 py-24 lg:flex-row lg:p-24 md:gap-14 justify-center mb-24 lg:mb-0 items-center">
      <Eligibility />
    </main>
  );
}
