import React from "react";

export default function Contact() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2  flex flex-col gap-20">
        <div className="w-[60%] rounded-lg bg-gray-400 h-12"></div>
        <div className="flex flex-col gap-5">
          <div className="w-[60%] h-12 flex gap-10 flex-row">
            <div className="w-[15%] h-full rounded-lg bg-red-100"></div>
            <div className="w-[75%] h-full rounded-lg bg-red-500"></div>
          </div>
          <div className="w-[60%] h-12 flex gap-10 flex-row">
            <div className="w-[15%] h-full rounded-lg bg-red-100"></div>
            <div className="w-[75%] h-full rounded-lg bg-red-500"></div>
          </div>
          <div className="w-[60%] h-12 flex gap-10 flex-row">
            <div className="w-[15%] h-full rounded-lg bg-red-100"></div>
            <div className="w-[75%] h-full rounded-lg bg-red-500"></div>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-96 bg-slate-300 rounded-lg"></div>
    </div>
  );
}
