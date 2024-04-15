import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function BasicRadialBar() {
  const series = [70];

  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        }
      },
    },
    labels: ['Cricket'],
  };

  return (
    <ApexChartComponent
      options={chartOptions}
      series={series}
      type="radialBar"
      height={350}
    />
  );
}
