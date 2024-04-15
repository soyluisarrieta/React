import { ApexOptions } from "apexcharts";
import ApexChart from "../../ApexChart";

export default function AreaBasic() {
  const series = [{
    name: "STOCK ABC",
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Fundamental Analysis of Stocks',
      align: 'left'
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left'
    },
    labels: ['2024-04-01', '2024-04-02', '2024-04-03', '2024-04-04', '2024-04-05', '2024-04-06', '2024-04-07', '2024-04-08', '2024-04-09'],
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    }
  }

  return (
    <ApexChart
      options={chartOptions}
      series={series}
      type="area"
      height={350}
    />
  );
}