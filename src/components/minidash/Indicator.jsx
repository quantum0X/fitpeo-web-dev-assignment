import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

const Indicator = ({ profit, loss }) => {
  return (
    <p className="flex items-center">
      {profit && (
        <div className="mr-1 flex items-center text-green-600 font-medium">
          <BsArrowUpShort style={{ fontSize: "20px" }} />
          <span>{profit}% </span>
        </div>
      )}
      {loss && (
        <span className="mr-1 flex items-center text-red-600 font-medium">
          <BsArrowDownShort style={{ fontSize: "20px" }} />
          {loss}%
        </span>
      )}
      <span className="text-sm font-medium text-gray-600"> this month</span>
    </p>
  );
};

export default Indicator;
