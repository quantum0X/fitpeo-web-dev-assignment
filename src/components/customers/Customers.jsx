import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Customers = () => {
  return (
    <div className="md:h-fit md:w-fit sm:h-full sm:w-full p-4 my-2 rounded-xl bg-white">
      <div>
        <div className="text-lg text-gray-600 font-medium">Customer</div>
        <div className="text-sm text-gray-400">customer that buy Products</div>
      </div>
      <div className="h-80 w-80 p-2 mx-auto rounded-full  shadow-md">
        <Doughnut className="-mt-1" data={data} />
      </div>
    </div>
  );
};

export default Customers;
