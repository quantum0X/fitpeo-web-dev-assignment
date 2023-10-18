import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { MdAccountBalanceWallet } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Cards from "./Cards";

const style = { fontSize: "40px" };
const data = [
  {
    Icon: <AiOutlineDollar style={style} />,
    title: "Earning",
    loss: "2",
    profit: "",
    amount: "144",
  },
  {
    Icon: <CgNotes style={style} />,
    title: "Earning",
    loss: "",
    profit: "23",
    amount: "23",
  },
  {
    Icon: <MdAccountBalanceWallet style={style} />,
    title: "Earning",
    loss: "",
    profit: "35",
    amount: "112",
  },
  {
    Icon: <HiOutlineShoppingBag style={style} />,
    title: "Earning",
    loss: "9",
    profit: "",
    amount: "5",
  },
];

const CurrentStats = () => {
  return (
    <div className="h-fit w-full grid grid-cols-2 gap-8 max-sm:gap-3 content-center mx-auto lg:grid-cols-4 max-sm:grid-cols-1 py-3 ">
      {data.map((el, i) => (
        <Cards {...el} />
      ))}
    </div>
  );
};

export default CurrentStats;
