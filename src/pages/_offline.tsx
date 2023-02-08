
export default function Offline() {
  return (
    <div className="h-screen w-screen grid gap-10 ">
      <div className="h-[600px] flex flex-col">
        <div className="max-w-screen-lg h-96  mt-10 mx-auto flex flex-col justify-center items-center">
          <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
            <div className="absolute inset-auto z-50 h-[200px] w-[32rem] -translatesss-y-1/2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 opacity-50 blur-3xl"></div>
          </div>
          <h1 className="bg-gradient-to-l -translate-y-[12.5rem] text-center grid place-items-center md:h-[100px]  px-10 font-black  from-pink-500  to-orange-400 bg-clip-text text-transparent text-6xl md:text-7xl">
           You are offline !
          </h1>

          <p> Seems like you do not have internet connectivity.</p>
        </div>
       
      </div>

     
    </div>
  );
}
