"use client";
import { useState } from "react";
import "@/app/globals.css";
const Main = () => {
  const [ready, setReady] = useState<boolean>(false);
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-y-[20px]">
      <div className="flex w-full h-[50px] flex-row justify-center items-center text-[40px] gap-x-[10px] ">
        <img src="/mine.png" className="h-full"></img>
        <p className="font-titlefont text-title">MineSweeper</p>
      </div>

      <div className="relative w-[30%] h-[70%] flex justify-center items-center">
        <div className="absolute rounded-3xl w-full h-full bg-[url('/theme.jpg)] opacity-60 bg-cover bg-center bg-no-repeat z-[-1]">
          <Input selectionCallback={} />
        </div>
      </div>
    </div>
  );
};
export default Main;
