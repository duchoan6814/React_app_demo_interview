import React from "react";
import BarChart from "./BarChart";

import LineChart from "./LineChart";

const Chart = ({ mode, ...rest }) => {
  const renderChart = {
    LINE_CHART: () => <LineChart {...rest} />,
    BAR_CHART: () => <BarChart {...rest} />,
  };

  return renderChart[mode]();
};

export default Chart;
