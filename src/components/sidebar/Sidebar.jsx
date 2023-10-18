import React, { useState } from "react";
import { ListItem } from "./ListItem";

export function Sidebar() {
  const [isHidden, setIsHidden] = useState(false);
  const hideDashboard = () => {
    isHidden ? setIsHidden(false) : setIsHidden(true);
  };

  return (
    <div className="w-fit h-screen py-4 px-3 bg-green-200">
      <div className="text-3xl">
        <i class="fa-solid fa-bars" onClick={hideDashboard}></i>
        {!isHidden && (
          <>
            <span className="mx-2">Dashboard </span>
          </>
        )}
      </div>
      <div>
        <ListItem title="Dashboard" hidden={isHidden} />
        <ListItem title="Dashboard" hidden={isHidden} />
      </div>
    </div>
  );
}
