import React from "react";

import Indicator from "./Indicator";

const Cards = ({ Icon, profit, loss, amount }) => {
  return (
    <div className="w-full h-full flex item-center fit bg-white p-3 rounded-xl">
      <div className="h-16 w-16 flex justify-center rounded-full item-center bg-red-300 my-auto p-3">
        {Icon}
      </div>
      <div className="ml-4 w-full">
        <p className="text-gray-500 sm:text-sm">Earning</p>
        <p className="font-bold text-xl text-gray-900">${amount}k</p>
        <Indicator profit={profit} loss={loss} />
      </div>
    </div>
  );
};

export default Cards;
