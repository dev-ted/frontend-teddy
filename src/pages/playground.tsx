import React from 'react'

export default function playground() {
  return (
    <div>
      <div className="flex bg-white min-h-screen items-center flex-col justify-center">
        <div className="animate-heartbeat flex h-60 w-60 items-center justify-center bg-gradient-to-t from-pink-600 via-red-400 to-amber-200 will-change-transform">
          <div className="relative flex h-full w-full items-center justify-center bg-white mix-blend-screen">
            <div className="relative h-32 w-32 rotate-45 bg-black before:absolute before:inset-0 before:-top-1/2 before:rounded-t-full before:bg-black after:absolute after:inset-0 after:-left-1/2 after:rounded-l-full after:bg-black"></div>
            <div className="absolute top-0 right-0 h-16 w-16 rounded-full bg-white/50 blur-xl"></div>
          </div>
        </div>
        <h1 className="relative bg-gradient-to-r  from-rose-500 via-amber-300 to-red-500 bg-clip-text text-transparent uppercase top-0.5 p-50  text-center text-4xl font-black ">
          Happy <span>Valentines</span> Day
        </h1>
      </div>
    </div>
  );
}
