import Link from "next/link";
import React from "react";

export default function LandingHero() {
  return (
    <section className="relative  flex md:min-h-[750px] h-full md:gap-5 gap-20 flex-col items-center justify-center overflow-hidden   bg-neutral  z-0">
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <div className="absolute inset-auto z-50 h-[200px] w-[32rem] -translatesss-y-1/2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 opacity-50 blur-3xl"></div>
      </div>

      <div className="mt-8 relative z-50 flex  md:-translate-y-[22.5rem] flex-col items-center justify-center  ">
        <h1 className="bg-gradient-to-l  text-center grid place-items-center leading-[70px] px-10 font-black  from-pink-500  to-orange-400 bg-clip-text text-transparent text-6xl md:text-9xl">
          Frontend Teddy
        </h1>
      </div>
      <div className="relative z-50  md:-translate-y-[10.5rem]">
        <h2 className="flex flex-col  gap-4 text-center text-3xl font-black md:flex-row lg:tracking-tight xl:text-3xl">
          <span
            className="before:absolute before:-z-10 before:text-neutral before:content-[attr(data-text)]"
            data-text=" UI / UX Design."
          >
            <span className="animate-gradient-1 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
              UI / UX Design.{" "}
            </span>{" "}
          </span>

          <span
            className="before:absolute before:-z-10 before:text-neutral before:content-[attr(data-text)]"
            data-text=" Web Development."
          >
            <span className="animate-gradient-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Web Development.
            </span>{" "}
          </span>
          <span
            className="before:absolute before:-z-10 before:text-neutral before:content-[attr(data-text)]"
            data-text="PWA Development."
          >
            <span className="animate-gradient-3 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              PWA Development.
            </span>{" "}
          </span>
        </h2>
      </div>
    </section>
  );
}
