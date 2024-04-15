import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function StrokedGauge() {
  const series = [67];

  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: undefined,
            formatter: function (val: number) {
              return val + "%";
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 4
    },
    labels: ['Median Ratio'],
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
