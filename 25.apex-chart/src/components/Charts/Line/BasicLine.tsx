import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function BasicLine() {
  const series = [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }];

  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#1f1f1f', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };

  return (
    <ApexChartComponent
      options={chartOptions}
      series={series}
      type="line"
      height={350}
    />
  );
}
