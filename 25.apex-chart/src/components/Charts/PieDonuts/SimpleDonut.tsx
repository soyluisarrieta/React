import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function SimpleDonut() {
  const series = [44, 55, 41, 17, 15];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
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
      type="donut"
    />
  );
}
