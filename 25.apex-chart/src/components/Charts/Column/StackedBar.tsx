import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function StackedBar() {
  const series = [
    {
      name: 'PRODUCT A',
      data: [44, 55, 41, 67, 22, 43, 21, 49]
    },
    {
      name: 'PRODUCT B',
      data: [13, 23, 20, 8, 13, 27, 33, 12]
    },
    {
      name: 'PRODUCT C',
      data: [11, 17, 15, 15, 21, 14, 15, 13]
    }
  ];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    xaxis: {
      categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'],
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'right',
      offsetX: 0,
      offsetY: 50
    },
  };

  return (
    <ApexChartComponent
      options={chartOptions}
      series={series}
      type="bar"
      height={350}
    />
  );
}
