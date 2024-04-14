import CardChart from "./components/CardChart";
import AreaBasic from "./components/Charts/Area/Basic";
import SplineArea from "./components/Charts/Area/Spline";

function App() {

  return (
    <main>
      <h1>Apex Chart</h1>
      <div>
        <h2>Area</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '20px' }}>
          <CardChart title='Area Basic'><AreaBasic /></CardChart>
          <CardChart title='Spline Area'><SplineArea /></CardChart>
        </div>
      </div>
    </main>
  );
}

export default App;
