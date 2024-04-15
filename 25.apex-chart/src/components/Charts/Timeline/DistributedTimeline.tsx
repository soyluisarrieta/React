import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";
import moment from "moment";

export default function DistributedTimeline() {
  const series = [
    {
      data: [
        {
          x: 'Analysis',
          y: [
            new Date('2019-02-27').getTime(),
            new Date('2019-03-04').getTime()
          ],
          fillColor: '#008FFB'
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime()
          ],
          fillColor: '#00E396'
        },
        {
          x: 'Coding',
          y: [
            new Date('2019-03-07').getTime(),
            new Date('2019-03-10').getTime()
          ],
          fillColor: '#775DD0'
        },
        {
          x: 'Testing',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime()
          ],
          fillColor: '#FEB019'
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-17').getTime()
          ],
          fillColor: '#FF4560'
        }
      ]
    }
  ];

  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'rangeBar'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: false
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function(val:string, opts) {
        const label = opts.w.globals.labels[opts.dataPointIndex];
        const a = moment(val[0]);
        const b = moment(val[1]);
        const diff = b.diff(a, 'days');
        return label + ': ' + diff + (diff > 1 ? ' days' : ' day');
      },
      style: {
        colors: ['#f3f4f5', '#fff']
      }
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      show: false
    },
    grid: {
      row: {
        colors: ['#f2f2f2', '#fff'],
        opacity: 1
      }
    }
  };

  return (
    <ApexChartComponent
      options={chartOptions}
      series={series}
      type="rangeBar"
      height={350}
    />
  );
}
