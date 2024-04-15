import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function BasicBar() {
  const series = [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
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
