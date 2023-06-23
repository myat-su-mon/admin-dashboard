import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  Inject,
} from "@syncfusion/ej2-react-charts";
import { pieChartData } from "../../data/dummy";

function Pie() {
  return (
    <AccumulationChartComponent id="charts">
      <Inject services={[PieSeries]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={pieChartData}
          xName="x"
          yName="y"
          type="Pie"
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}
export default Pie;
