import CardChart from "./components/CardChart";
import AreaBasic from "./components/Charts/Area/Basic";
import Negative from "./components/Charts/Area/Negative";
import SplineArea from "./components/Charts/Area/Spline";

function App() {

  return (
    <main>
      <h1 style={{color: '#fff'}}>Apex Chart</h1>
      <div style={{padding: 20}}>
        <h2 style={{color: '#fff'}}>Area</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '20px' }}>
          <CardChart title='Basic'><AreaBasic /></CardChart>
          <CardChart title='Spline'><SplineArea /></CardChart>
          <CardChart title='Negative'><Negative /></CardChart>
        </div>
      </div>
    </main>
  );
}

export default App;
