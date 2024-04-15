// Función para generar datos de ejemplo con rangos personalizados
export function generateDayWiseTimeSeries(baseval: number, count: number, yrange: { min: number; max: number }): [number, number][] {
  let i = 0;
  const series: [number, number][] = [];
  while (i < count) {
    const x = baseval;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
