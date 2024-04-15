import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function SimplePie() {
  const series = [44, 55, 13, 43, 22];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
      type="pie"
    />
  );
}
