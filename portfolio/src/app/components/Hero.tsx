import React from "react";

export default function Hero() {
  return (
    <div className="flex gap-24">
      {/* left pic */}
      <div className="w-1/2 h-96 bg-gray-300"></div>
      {/* right text */}
      <div className="w-1/2 flex flex-col gap-10">
        {/* 1st */}
        <div className="w-2/3 h-14 bg-gray-300"></div>
        {/* 2nd */}
        <div className="w-2/3 h-14 bg-gray-300 ml-14"></div>
        {/* 3rd */}
        <div className="w-2/3 h-14 bg-gray-300 ml-24"></div>
        <div className="w-40 h-14 bg-gray-700 self-end"></div>
      </div>
    </div>
  );
}
