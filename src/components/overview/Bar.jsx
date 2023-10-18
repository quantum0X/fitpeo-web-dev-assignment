import React from "react";

const Bar = ({ height, active, month }) => {
  return (
    <span>
      <div
        style={{ height: height }}
        className={
          "w-10 bottom-0 rounded-xl " +
          (active ? " bg-blue-400 " : " bg-gray-300 ")
        }
      ></div>
      <div className="text-center text-gray-600 py-2">{month}</div>
    </span>
  );
};

export default Bar;
