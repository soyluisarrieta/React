import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function MultipleRadialBars() {
  const series = [44, 55, 67, 83];

  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            }
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
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
