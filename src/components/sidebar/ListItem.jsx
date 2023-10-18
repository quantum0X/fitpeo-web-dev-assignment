import React from "react";
import { TbCircleKeyFilled } from "react-icons/tb";

export function ListItem({ title, hidden }) {
  return (
    <div className="px-2 py-2 my-2 text-xl bg-red-300 cursor-pointer ">
      <TbCircleKeyFilled />
      {!hidden && <span className="ml-2 font-semibold ">{title}</span>}
    </div>
  );
}
