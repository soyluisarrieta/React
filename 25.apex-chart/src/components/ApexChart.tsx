import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

interface ApexChartProps  {
  id: string
  type?:
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap";
  series?: ApexOptions["series"];
  width?: string | number;
  height?: string | number;
  options?: ApexOptions;
}


const ApexChart = ({ id, ...props }: ApexChartProps): JSX.Element => {
  return (
    <Chart id={id} {...props} />
  );
};

export default ApexChart;
