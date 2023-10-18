import React from "react";
import { FiSearch } from "react-icons/fi";
import TableItem from "./TableItem";

const data = [
  {
    title: "Abstract 3D",
    subtitle: "The best wallpaper for your home",
    inStock: "32",
    cost: "12",
    totalSales: "35",
  },
  {
    title: "Night Lamp",
    subtitle: "The best home decorator",
    inStock: "30",
    cost: "22",
    totalSales: "93",
  },
  {
    title: "Spiderman wall sticker",
    subtitle: "The best wallpaper for your home",
    inStock: "12",
    cost: "34",
    totalSales: "12",
  },
];

const ProductSell = () => {
  return (
    <div className="bg-white p-4 my-6 rounded-lg overflow-x-scroll">
      <div className="flex justify-between ">
        <div className="font-bold text-xl text-gray-800">Product Sell</div>
        <div className="flex gap-4">
          <div className="w-fit py-1 px-2 bg-gray-100 rounded-md text-gray-500 flex items-center gap-2">
            <FiSearch />
            <input
              placeholder="Search"
              className="outline-none max-sm:hidden bg-gray-100"
            />
          </div>
          <div>
            <select className="px-2 py-1 rounded-md text-gray-500 ">
              <option>Today</option>
              <option>weekly</option>
              <option selected>Last 30 days</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-between text-gray-400 p-4 border-b-2">
          <div>Product Name</div>
          <div className="flex gap-4 ">
            <div>Stock</div>
            <div>Price</div>
            <div>Total Sales</div>
          </div>
        </div>
        {data.map((item, i) => (
          <TableItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductSell;
