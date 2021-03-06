export interface ChartData {
  name: string;
  value: string | number;
  itemStyle: any;
}

export interface BarChart {
  xAxis: ChartData[];
  yAxis: ChartData[][];
}

export interface LedgeChartModel {
  title: string;
  barChart?: BarChart;
}

export interface LedgeTable {
  header: any[];
  cells: any[][];
}
