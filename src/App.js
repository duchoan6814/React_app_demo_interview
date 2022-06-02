import "./App.css";

import { Chart, CHART_MODE } from "./components";

function App() {
  return (
    <div style={{ paddingLeft: 100, paddingRight: 100 }} className="App">
      <h1>DEMO CHART</h1>
      <Chart
        data={[6, 4, 5, 1, 2, 6, 6, 4, 5, 1, 2, 6]}
        mode={CHART_MODE.LINE_CHART}
      />
      <Chart
        data="6, 4, 5, 1, 2, 6, 6, 4, 5, 1, 2, 6"
        mode={CHART_MODE.LINE_CHART}
        color={"blue"}
      />
      <Chart mode={CHART_MODE.BAR_CHART} />
    </div>
  );
}

export default App;
