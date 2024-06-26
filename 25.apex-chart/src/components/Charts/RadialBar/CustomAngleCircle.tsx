import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function CustomAngleCircle() {
  const series = [76, 67, 61, 90];

  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 110,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        width: 12,
        height: 12,
      },
      formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
            show: false
        }
      }
    }]
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
