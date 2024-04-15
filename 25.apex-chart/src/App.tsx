import CardChart from "./components/CardChart";
import BasicArea from "./components/Charts/Area/BasicArea";
import Negative from "./components/Charts/Area/Negative";
import SplineArea from "./components/Charts/Area/Spline";
import Stacked from "./components/Charts/Area/Stacked";
import BasicBar from "./components/Charts/Bar/BasicBar";
import GroupedBar from "./components/Charts/Bar/GroupedBar";
import BasicColumn from "./components/Charts/Column/BasicColumn";
import ColumnWithDataLabels from "./components/Charts/Column/ColumnWithDataLabels";
import ColumnWithNegativeValues from "./components/Charts/Column/ColumnWithNegativeValues";
import GroupedStackedColumns from "./components/Charts/Column/GroupedStackedColumns";
import StackedCompleteColumn from "./components/Charts/Column/StackedCompleteColumn";
import StackedColumns from "./components/Charts/Column/StackedColumns";
import BasicLine from "./components/Charts/Line/BasicLine";
import Gradient from "./components/Charts/Line/Gradient";
import LineWithDataLabels from "./components/Charts/Line/LineWithDataLabels";
import SectionCharts from "./components/SectionCharts";
import StackedBar from "./components/Charts/Bar/StackedBar";
import StackedCompleteBar from "./components/Charts/Bar/StackedCompleteBar";
import GroupedStackedBars from "./components/Charts/Bar/GroupedStackedBars";
import BarWithNegativeValues from "./components/Charts/Bar/BarWithNegativeValues";
import ReversedBarChart from "./components/Charts/Bar/ReversedBarChart";
import CustomDataLabels from "./components/Charts/Bar/CustomDataLabels";
import LineAndColumn from "./components/Charts/Mixed/LineAndColumn";
import LineAndArea from "./components/Charts/Mixed/LineAndArea";
import LineColumnArea from "./components/Charts/Mixed/LineColumnArea";
import BasicTimeline from "./components/Charts/Timeline/BasicTimeline";
import DistributedTimeline from "./components/Charts/Timeline/DistributedTimeline";
import MultiSeries from "./components/Charts/Timeline/MultiSeries";
import Advanced from "./components/Charts/Timeline/Advanced";
import MultipleSeriesGroupRows from "./components/Charts/Timeline/MultipleSeriesGroupRows";
import DumbbellChartHorizontal from "./components/Charts/Timeline/DumbbellChartHorizontal";
import DumbbellChartVertical from "./components/Charts/Column/DumbbellChartVertical";

function App() {

  return (
    <main>
      <h1 style={{color: '#fff'}}>Apex Chart</h1>
      <SectionCharts title='Area'>
        <CardChart name='Basic Area'><BasicArea /></CardChart>
        <CardChart name='Spline'><SplineArea /></CardChart>
        <CardChart name='Negative'><Negative /></CardChart>
        <CardChart name='Stacked'><Stacked /></CardChart>
      </SectionCharts>
      <SectionCharts title='Line'>
        <CardChart name='Basic Line'><BasicLine /></CardChart>
        <CardChart name='Line with Data Labels'><LineWithDataLabels /></CardChart>
        <CardChart name='Gradient'><Gradient /></CardChart>
      </SectionCharts>
      <SectionCharts title='Columns'>
        <CardChart name='Basic Columns'><BasicColumn /></CardChart>
        <CardChart name='Columns with Data Labels'><ColumnWithDataLabels /></CardChart>
        <CardChart name='Stacked Columns'><StackedColumns /></CardChart>
        <CardChart name='Stacked Complete Columns'><StackedCompleteColumn /></CardChart>
        <CardChart name='Grouped Stacked Columns'><GroupedStackedColumns /></CardChart>
        <CardChart name='Column with Negative Values'><ColumnWithNegativeValues /></CardChart>
        <CardChart name='Dumbbell Chart Vertical'><DumbbellChartVertical /></CardChart>
      </SectionCharts>
      <SectionCharts title='Bars'>
        <CardChart name='Basic Bars'><BasicBar /></CardChart>
        <CardChart name='Grouped Bars'><GroupedBar /></CardChart>
        <CardChart name='Stacked Bars'><StackedBar /></CardChart>
        <CardChart name='Stacked Complete Bars'><StackedCompleteBar /></CardChart>
        <CardChart name='Grouped Stacked Bars'><GroupedStackedBars /></CardChart>
        <CardChart name='Bar With Negative Values'><BarWithNegativeValues /></CardChart>
        <CardChart name='Reversed Bar Chart'><ReversedBarChart /></CardChart>
        <CardChart name='Custom Data Labels'><CustomDataLabels /></CardChart>
      </SectionCharts>
      <SectionCharts title='Mixed'>
        <CardChart name='Line and Column'><LineAndColumn /></CardChart>
        <CardChart name='Line and Area'><LineAndArea /></CardChart>
        <CardChart name='Line Column Area'><LineColumnArea /></CardChart>
      </SectionCharts>
      <SectionCharts title='Timeline'>
        <CardChart name='Basic Timeline'><BasicTimeline /></CardChart>
        <CardChart name='Distribuited Timeline'><DistributedTimeline /></CardChart>
        <CardChart name='Multi-Series'><MultiSeries /></CardChart>
        <CardChart name='Advanced'><Advanced /></CardChart>
        <CardChart name='Multiple Series Group Rows'><MultipleSeriesGroupRows /></CardChart>
        <CardChart name='DumbbellChartHorizontal'><DumbbellChartHorizontal /></CardChart>
      </SectionCharts>
    </main>
  );
}

export default App;
