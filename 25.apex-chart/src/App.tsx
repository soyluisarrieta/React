import CardChart from "./components/CardChart";
import AreaBasic from "./components/Charts/Area/Basic";
import Negative from "./components/Charts/Area/Negative";
import SplineArea from "./components/Charts/Area/Spline";
import Stacked from "./components/Charts/Area/Stacked";
import SectionCharts from "./components/SectionCharts";

function App() {

  return (
    <main>
      <h1 style={{color: '#fff'}}>Apex Chart</h1>
      <SectionCharts title='Area'>
        <CardChart name='Basic'><AreaBasic /></CardChart>
        <CardChart name='Spline'><SplineArea /></CardChart>
        <CardChart name='Negative'><Negative /></CardChart>
        <CardChart name='Stacked'><Stacked /></CardChart>
      </SectionCharts>
    </main>
  );
}

export default App;
