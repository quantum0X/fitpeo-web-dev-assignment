import React from "react";
import { Balance, Earning, Orders, TotalSales } from "./Cards";

const CurrentStats = () => {
  return (
    <div className="h-fit w-full grid grid-cols-2 gap-8 max-sm:gap-3 content-center mx-auto lg:grid-cols-4 py-3 ">
      <Earning loss="2" amount="144" />
      <Orders profit="23" amount="23" />
      <Balance profit="35" amount="112" />
      <TotalSales loss="9" amount="5" />
    </div>
  );
};

export default CurrentStats;
