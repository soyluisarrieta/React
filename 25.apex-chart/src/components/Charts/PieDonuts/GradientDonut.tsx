import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function GradientDonut() {
  const series = [44, 55, 41, 17, 15];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: function(val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex]
      }
    },
    title: {
      text: 'Gradient Donut with custom Start-angle'
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
      type="donut"
    />
  );
}
