import React from "react";
import Bar from "./Bar";

const data = [
  {
    month: "Jan",
    height: "120px",
    active: false,
  },
  {
    month: "Feb",
    height: "210px",
    active: false,
  },
  {
    month: "Mar",
    height: "50px",
    active: false,
  },
  {
    month: "Apr",
    height: "150px",
    active: false,
  },
  {
    month: "May",
    height: "120px",
    active: false,
  },
  {
    month: "Jun",
    height: "188px",
    active: false,
  },
  {
    month: "Jul",
    height: "90px",
    active: false,
  },
  {
    month: "Aug",
    height: "12px",
    active: false,
  },
  {
    month: "Sep",
    height: "199px",
    active: true,
  },
  {
    month: "Oct",
    height: "123px",
    active: false,
  },
  {
    month: "Nov",
    height: "99px",
    active: false,
  },
  {
    month: "Dec",
    height: "166px",
    active: false,
  },
];

const Overview = () => {
  return (
    <div className="sm:h-full sm:w-full py-6 px-2 my-2 bg-white rounded-xl overflow-x-scroll">
      {/* heading */}
      <div className="flex justify-between p-2">
        <span className="text-lg text-gray-600 font-medium">
          Overview
          <div className="text-sm text-gray-400">monthly Earning</div>
        </span>
        <span>
          <select className="px-2 py-1 rounded-md text-gray-500 border-2 border-gray-200">
            <option>Weekly</option>
            <option>Monthly</option>
            <option selected>Quaterly</option>
          </select>
        </span>
      </div>
      {/* graph */}
      <div className="h-full justify-between flex items-end gap-2 p-4 mt-6">
        {data.map((bar, i) => (
          <Bar key={i} {...bar} />
        ))}
      </div>
    </div>
  );
};

export default Overview;
