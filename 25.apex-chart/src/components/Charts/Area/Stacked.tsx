import { ApexOptions } from "apexcharts";
import ApexChart from "../../ApexChart";
import { generateDayWiseTimeSeries } from "../../utils";

export default function Stacked() {
  const series = [
    {
      name: 'South',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'North',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 20
      })
    },
    {
      name: 'Central',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 15
      })
    }
  ];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      stacked: true,
      events: {
        selection: function (_, e) {
          console.log(new Date(e.xaxis.min))
        }
      },
    },
    colors: ['#008FFB', '#00E396', '#CED4DC'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
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
