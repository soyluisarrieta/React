import CardChart from "./components/CardChart";
import BasicArea from "./components/Charts/Area/BasicArea";
import Negative from "./components/Charts/Area/Negative";
import SplineArea from "./components/Charts/Area/Spline";
import Stacked from "./components/Charts/Area/Stacked";
import BasicLine from "./components/Charts/Line/BasicLine";
import Gradient from "./components/Charts/Line/Gradient";
import LineWithDataLabels from "./components/Charts/Line/LineWithDataLabels";
import SectionCharts from "./components/SectionCharts";

function App() {

  return (
    <main>
      <h1 style={{color: '#fff'}}>Apex Chart</h1>
      <SectionCharts title='Area'>
        <CardChart name='Basic'><BasicArea /></CardChart>
        <CardChart name='Spline'><SplineArea /></CardChart>
        <CardChart name='Negative'><Negative /></CardChart>
        <CardChart name='Stacked'><Stacked /></CardChart>
      </SectionCharts>
      <SectionCharts title='Line'>
        <CardChart name='Basic Line'><BasicLine /></CardChart>
        <CardChart name='Line with Data Labels'><LineWithDataLabels /></CardChart>
        <CardChart name='Gradient'><Gradient /></CardChart>
      </SectionCharts>
    </main>
  );
}

export default App;
