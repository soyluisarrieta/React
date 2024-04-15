import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

interface ApexChartProps  {
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


const ApexChart = ({ ...props }: ApexChartProps): JSX.Element => {
  return (
    <Chart {...props} />
  );
};

export default ApexChart;
