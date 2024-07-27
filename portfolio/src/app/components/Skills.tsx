import React from "react";

export default function Skills() {
  return (
    <div className="flex flex-col items-center gap-20">
      {/* title */}
      <div className="w-40 h-10 bg-gray-400"></div>
      {/* skills */}
      <div className="flex flex-col gap-0 items-center">
        {/* 1st row */}
        <div className="flex gap-10">
          {/* 1st r 1st c */}

          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
        </div>
        {/* 2nd row */}
        <div className="flex gap-10">
          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
        </div>
        <div className="flex gap-10">
          {/* 1st r 1st c */}

          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
          <div className="w-20 h-20 bg-gray-400 rotate-45 flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
}
