import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      {/* first part */}
      <div className="flex">
        <div className="h-10 w-20 bg-gray-300"></div>
      </div>
      {/* second part */}
      <div className="flex gap-10">
        <div className="h-8 w-20 bg-gray-300"></div>
        <div className="h-8 w-20 bg-gray-300"></div>
        <div className="h-8 w-20 bg-gray-300"></div>
        <div className="h-8 w-20 bg-gray-300"></div>
      </div>
      {/* third part */}
      <div className="flex gap-10">
        <div className="h-10 w-12 bg-gray-300"></div>
        <div className="h-10 w-12 bg-gray-300"></div>
        <div className="h-10 w-24 bg-gray-300"></div>
      </div>
    </div>
  );
}
