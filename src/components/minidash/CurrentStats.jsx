import React from "react";
import { Balance, Earning, Orders, TotalSales } from "./Cards";

const CurrentStats = () => {
  return (
    <div className="grid grid-cols-2 m-auto lg:grid-cols-4 py-3 h-fit gap-2">
      <Earning loss="2" amount="144" />
      <Orders profit="23" amount="23" />
      <Balance profit="35" amount="112" />
      <TotalSales loss="9" amount="5" />
    </div>
  );
};

export default CurrentStats;
