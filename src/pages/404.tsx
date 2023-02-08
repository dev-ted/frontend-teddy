import { Button } from '@nextui-org/react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react'

export default function NotFound() {
  return (
    <div className="h-screen w-screen grid gap-10 ">
      <div className="h-[600px] flex flex-col">
        <div className="max-w-screen-lg h-96  mt-10 mx-auto flex flex-col justify-center items-center">
          <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
            <div className="absolute inset-auto z-50 h-[200px] w-[32rem] -translatesss-y-1/2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 opacity-50 blur-3xl"></div>
          </div>
          <h1 className="bg-gradient-to-l -translate-y-[12.5rem] text-center grid place-items-center md:h-[100px]  px-10 font-black  from-pink-500  to-orange-400 bg-clip-text text-transparent text-6xl md:text-7xl">
            Page not found !
          </h1>

          <p>Looks like the page you are looking for does not exist.</p>
        </div>
        <div className="md:px-20 px-10 py-10 grid place-items-center justify-center">
          <Button
            auto
            as={Link}
            href="/"
            className="relative rounded-lg w-20  px-20 py-4 ring-red-500/50 dark:bg-black bg-white ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2"
          >
            <span className="absolute  inset-px z-10 grid place-items-center rounded-lg dark:bg-black bg-white bg-gradient-to-t dark:from-neutral-800 text-black dark:text-neutral-300">
              {`Go Home`}
            </span>
            <span
              aria-hidden
              className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conics before:from-gray-200 before:via-pink-500 before:to-orange-400"
            />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
