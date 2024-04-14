import React, { useRef, useEffect } from 'react';
import { createChart, IChartApi } from 'lightweight-charts';

interface DataPoint {
  time: string;
  value: number;
}

interface ChartProps {
  data: DataPoint[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      chartInstance.current = createChart(chartContainerRef.current, { width: 1000, height: 300 });
      const lineSeries = chartInstance.current.addLineSeries();
      lineSeries.setData(data);

      return () => {
        if (chartInstance.current) {
          chartInstance.current.remove();
        }
      };
    }
  }, [data]);

  return <div ref={chartContainerRef} style={{ width: '100%', height: '300px' }} />;
};

const App: React.FC = () => {
  const data: DataPoint[] = [
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
  ];

  return <Chart data={data} />;
};

export default App;
