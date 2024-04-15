import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function MonochromePolar() {
  const series = [42, 47, 52, 58, 65];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'polarArea'
    },
    labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        },
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 0.6
      }
    }
  };

  return (
    <ApexChartComponent
      options={chartOptions}
      series={series}
      type="polarArea"
    />
  );
}
