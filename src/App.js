import "./App.css";

import { Chart } from "./components";

function App() {
  return (
    <div className="App">
      <h1>DEMO CHART</h1>
      <Chart mode="LINE_CHART" />
      <Chart mode="BAR_CHART" />
    </div>
  );
}

export default App;
