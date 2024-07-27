import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-20">
      {/* title */}
      <div className="w-40 h-10 bg-gray-300"></div>
      {/* card 1st row */}
      <div className="flex justify-between gap-32">
        {/* 1st r 1st c */}
        <div className="flex flex-col items-center gap-10">
          <div className="h-12 w-20 bg-gray-700"></div>
          <div className="h-40 w-72 bg-slate-500"></div>
        </div>
        {/* 1st r 2nd c */}
        <div className="flex flex-col items-center gap-10">
          <div className="h-12 w-20 bg-gray-700"></div>
          <div className="h-40 w-72 bg-slate-500"></div>
        </div>
        {/* 1st r 3rd c */}
        <div className="flex flex-col items-center gap-10">
          <div className="h-12 w-20 bg-gray-700"></div>
          <div className="h-40 w-72 bg-slate-500"></div>
        </div>
      </div>
      {/* card 2nd row */}
      <div className="flex justify-between gap-32">
        {/* 2nd r 1st c */}
        <div className="flex flex-col items-center gap-10">
          <div className="h-12 w-20 bg-gray-700"></div>
          <div className="h-40 w-72 bg-slate-500"></div>
        </div>
        {/* 2nd r 2nd c */}
        <div className="flex flex-col items-center gap-10">
          <div className="h-12 w-20 bg-gray-700"></div>
          <div className="h-40 w-72 bg-slate-500"></div>
        </div>
      </div>
    </div>
  );
}
