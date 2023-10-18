import React from "react";

const TableItem = ({ title, subtitle, inStock, cost, totalSales }) => {
  return (
    <div className="w-full flex justify-between items-center p-4 bg-gray-50 my-2 rounded-lg">
      <div className="flex items-center gap-2">
        <div className="h-10 w-16 rounded-md bg-blue-400"></div>
        <div>
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-xs font-medium text-gray-400">{subtitle}</div>
        </div>
      </div>
      <div className="flex gap-8 max-sm:gap-2">
        <div className="text-gray-500">{inStock} in stock</div>
        <div className="font-bold text-gray-700">${cost}</div>
        <div className="text-gray-500">{totalSales}</div>
      </div>
    </div>
  );
};

export default TableItem;
