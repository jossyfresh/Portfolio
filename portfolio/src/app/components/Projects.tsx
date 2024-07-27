import React from "react";
import Marquee from "react-fast-marquee";

export default function Projects() {
  return (
    <div className="flex flex-col items-center gap-20">
      {/* Title */}
      <div className="w-40 h-10 bg-gray-400"></div>
      {/* Marquee */}
      <Marquee
        speed={100}
        gradient={false}
        play={false}
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="flex gap-10">
          <div className="w-[300px] h-96 bg-slate-400 rounded-lg ml-10">
            {/* pic */}
            <div className="h-[45%] w-full bg-slate-100 rounded-t-lg"></div>
            <div className="h-[55%] w-full bg-slate-900  flex flex-col items-center py-5 gap-5">
              {/* title */}
              <div className="w-32 h-8 bg-gray-400"></div>
              <div className="w-60 h-20 bg-gray-400"></div>
              {/* chips */}
              <div className="flex justify-between gap-5">
                <div className="w-10 h-4 bg-gray-400 rounded-lg"></div>
                <div className="w-10 h-4 bg-gray-400 rounded-lg"></div>
                <div className="w-10 h-4 bg-gray-400 rounded-lg"></div>
                <div className="w-10 h-4 bg-gray-400 rounded-lg"></div>
              </div>
              {/* links */}
              <div className="flex justify-between gap-5">
                <div className="w-10 h-4 bg-gray-400 rounded-lg"></div>
                <div className="w-10 h-4 bg-gray-400 rounded-lg"></div>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-96 bg-slate-400 rounded-lg "></div>
          <div className="w-[300px] h-96 bg-slate-400 rounded-lg "></div>
          <div className="w-[300px] h-96 bg-slate-400 rounded-lg "></div>
          <div className="w-[300px] h-96 bg-slate-400 rounded-lg "></div>
          <div className="w-[300px] h-96 bg-slate-400 rounded-lg"></div>
        </div>
      </Marquee>
    </div>
  );
}
