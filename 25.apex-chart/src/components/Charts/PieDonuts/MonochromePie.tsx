import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function MonochromePie() {
  const series = [25, 15, 44, 55, 41, 17];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'pie',
    },
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    theme: {
      monochrome: {
        enabled: true
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5
        }
      }
    },
    title: {
      text: "Monochrome Pie"
    },
    dataLabels: {
      formatter(val: number, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return name + ': ' + val.toFixed(1) + '%';
      }
    },
    legend: {
      show: false
    }
  };

  return (
    <ApexChartComponent
      options={chartOptions}
      series={series}
      type="pie"
    />
  );
}
