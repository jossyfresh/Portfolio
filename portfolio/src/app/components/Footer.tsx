import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-14 bg-slate-900 flex items-center px-10 justify-between">
      <div className="w-52 h-8 bg-slate-400 rounded-lg"></div>
      <div className="flex gap-10">
        <div className="w-20 h-5 bg-slate-400 rounded-lg"></div>
        <div className="w-20 h-5 bg-slate-400 rounded-lg"></div>
        <div className="w-20 h-5 bg-slate-400 rounded-lg"></div>
      </div>
    </div>
  );
}
