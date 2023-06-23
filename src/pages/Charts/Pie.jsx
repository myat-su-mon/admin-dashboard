import React from "react";
import { pieChartData } from "../../data/dummy";
import { Header, Pie as PieChart } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Inflation Rate in Percentage" />
      <div className="w-full">
        <PieChart
          id="pie-chart"
          data={pieChartData}
          legendVisibility
          height="full"
        />
      </div>
    </div>
  );
};

export default Pie;
