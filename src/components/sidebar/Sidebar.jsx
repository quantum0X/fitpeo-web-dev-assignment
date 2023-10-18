import React, { useState } from "react";
import { ListItem } from "./ListItem";
import { TbCircleKeyFilled, TbDiscount2 } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { LuUserSquare2 } from "react-icons/lu";
import { RiWallet3Line } from "react-icons/ri";
import { MdOutlineLiveHelp } from "react-icons/md";

const style = {
  fontSize: "30px",
};

const data = [
  {
    title: "Dashboard",
    Icon: <TbCircleKeyFilled style={style} />,
    style: { style },
    isActive: true,
    hidden: true,
  },
  {
    title: "Product",
    Icon: <FiBox style={style} />,
    style: { style },
    isActive: true,
    hidden: true,
  },
  {
    title: "Customer",
    Icon: <LuUserSquare2 style={style} />,
    style: { style },
    isActive: true,
    hidden: true,
  },
  {
    title: "Income",
    Icon: <RiWallet3Line style={style} />,
    style: { style },
    isActive: true,
    hidden: true,
  },
  {
    title: "Promote",
    Icon: <TbDiscount2 style={style} />,
    style: { style },
    isActive: true,
    hidden: true,
  },
  {
    title: "Help",
    Icon: <MdOutlineLiveHelp style={style} />,
    style: { style },
    isActive: true,
    hidden: true,
  },
];

export function Sidebar() {
  const [isHidden, setIsHidden] = useState(false);
  let [activeTab, setActiveTab] = useState(0);

  const hideDashboard = () => {
    isHidden ? setIsHidden(false) : setIsHidden(true);
  };

  return (
    <div
      className={
        " h-screen py-4 px-3 text-gray-100 bg-indigo-950 " +
        (isHidden ? "w-fit " : "w-[350px] ")
      }
    >
      <div className="flex px-2 mb-12 items-center text-3xl gap-4">
        <FaBars className="text-3xl cursor-pointer" onClick={hideDashboard} />
        {!isHidden && <span>Dashboard</span>}
      </div>
      <div>
        {data.map((el, i) => (
          <ListItem
            key={i}
            title={el.title}
            Icon={el.Icon}
            hidden={isHidden}
            isActive={activeTab === i}
          />
        ))}
      </div>
    </div>
  );
}
