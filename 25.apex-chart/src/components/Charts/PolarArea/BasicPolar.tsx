import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function BasicPolar() {
  const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'polarArea',
    },
    stroke: {
      colors: ['#fff']
    },
    fill: {
      opacity: 0.8
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <ApexChartComponent
      options={chartOptions}
      series={series}
      type="polarArea"
    />
  );
}
