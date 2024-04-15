import { ApexOptions } from "apexcharts";
import ApexChartComponent from "../../ApexChart";

export default function GroupedStackedBars() {
  const series = [
    {
      name: 'Q1 Budget',
      group: 'budget',
      data: [44000, 55000, 41000, 67000, 22000]
    },
    {
      name: 'Q1 Actual',
      group: 'actual',
      data: [48000, 50000, 40000, 65000, 25000]
    },
    {
      name: 'Q2 Budget',
      group: 'budget',
      data: [13000, 36000, 20000, 8000, 13000]
    },
    {
      name: 'Q2 Actual',
      group: 'actual',
      data: [20000, 40000, 25000, 10000, 12000]
    }
  ];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    stroke: {
      width: 1,
      colors: ['#111']
    },
    dataLabels: {
      formatter: (val: number) => {
        return val / 1000 + 'K';
      }
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    xaxis: {
      categories: [
        'Online advertising',
        'Sales Training',
        'Print advertising',
        'Catalogs',
        'Meetings'
      ],
      labels: {
        formatter: (val: string) => {
          return Number(val) / 1000 + 'K';
        }
      }
    },
    fill: {
      opacity: 1,
    },
    colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
    legend: {
      position: 'top',
      horizontalAlign: 'left'
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
