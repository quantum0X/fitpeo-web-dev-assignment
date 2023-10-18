import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdAccountBalanceWallet } from "react-icons/md";

export const Earning = ({ profit, loss, amount }) => {
  return (
    <div className="w-[240px] h-fit flex item-center fit bg-white p-3 rounded-xl">
      <div className="h-16 w-16 flex justify-center rounded-full item-center bg-red-300 my-auto p-3">
        <AiOutlineDollar style={{ fontSize: "40px" }} />
      </div>
      <div className="ml-4">
        <p className="text-gray-500 sm:text-sm">Earning</p>
        <p className="font-bold text-xl text-gray-900">${amount}k</p>
        <p>
          {profit && (
            <span className="text-green-600 font-medium">
              <i
                class="fa-solid fa-arrow-up-long"
                style={{ marginRight: "5px", fontSize: "12px" }}
              ></i>
              {profit}%
            </span>
          )}
          {loss && (
            <span className="text-red-600 font-medium">
              <i
                class="fa-solid fa-arrow-down-long"
                style={{ marginRight: "5px", fontSize: "12px" }}
              ></i>
              {loss}%
            </span>
          )}
          <span className="text-sm text-gray-600"> this month</span>
        </p>
      </div>
    </div>
  );
};

export const Orders = ({ profit, loss, amount }) => {
  return (
    <div className="w-[240px] h-fit flex item-center fit bg-white p-3 rounded-xl">
      <div className="h-16 w-16 flex justify-center rounded-full item-center bg-red-300 my-auto p-3">
        <CgNotes style={{ fontSize: "40px" }} />
      </div>
      <div className="ml-4">
        <p className="text-gray-500 sm:text-sm">Orders</p>
        <p className="font-bold text-xl text-gray-900">${amount}k</p>
        <p>
          {profit && (
            <span className="text-green-600 font-medium">
              <i
                class="fa-solid fa-arrow-up-long"
                style={{ marginRight: "5px", fontSize: "12px" }}
              ></i>
              {profit}%
            </span>
          )}
          {loss && (
            <span className="text-red-600 font-medium">
              <i
                class="fa-solid fa-arrow-down-long"
                style={{ marginRight: "5px", fontSize: "12px" }}
              ></i>
              {loss}%
            </span>
          )}
          <span className="text-sm text-gray-600"> this month</span>
        </p>
      </div>
    </div>
  );
};

export const TotalSales = ({ profit, loss, amount }) => {
  return (
    <div className="w-[240px] h-fit flex item-center fit bg-white p-3 rounded-xl">
      <div className="h-16 w-16 flex justify-center rounded-full item-center bg-red-300 my-auto p-3">
        <HiOutlineShoppingBag style={{ fontSize: "40px" }} />
      </div>
      <div className="ml-4">
        <p className="text-gray-500 sm:text-sm">Total Sales</p>
        <p className="font-bold text-xl text-gray-900">${amount}k</p>
        <p>
          {profit && (
            <span className="text-green-600 font-medium">
              <i
                class="fa-solid fa-arrow-up-long"
                style={{ marginRight: "5px", fontSize: "12px" }}
              ></i>
              {profit}%
            </span>
          )}
          {loss && (
            <span className="text-red-600 font-medium">
              <i
                class="fa-solid fa-arrow-down-long"
                style={{ marginRight: "5px", fontSize: "12px" }}
              ></i>
              {loss}%
            </span>
          )}
          <span className="text-sm text-gray-600"> this month</span>
        </p>
      </div>
    </div>
  );
};

export const Balance = ({ profit, loss, amount }) => {
  return (
    <div className="w-[240px] h-fit flex item-center fit bg-white p-3 rounded-xl">
      <div className="h-16 w-16 flex justify-center rounded-full item-center bg-red-300 my-auto p-3">
        <MdAccountBalanceWallet style={{ fontSize: "40px" }} />
      </div>
      <div className="ml-4">
        <p className="text-gray-500 sm:text-sm">Balance</p>
        <p className="font-bold text-xl text-gray-900">${amount}k</p>
        <p>
          {profit && (
            <span className="text-green-600 font-medium">
              <i
                class="fa-solid fa-arrow-up-long"
                style={{ marginRight: "5px", fontSize: "12px" }}
              ></i>
              {profit}%
            </span>
          )}
          {loss && (
            <span className="text-red-600 font-medium">
              <i
                class="fa-solid fa-arrow-down-long"
                style={{ marginRight: "5px", fontSize: "12px" }}
              ></i>
              {loss}%
            </span>
          )}
          <span className="text-sm text-gray-600"> this month</span>
        </p>
      </div>
    </div>
  );
};
