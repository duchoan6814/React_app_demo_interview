import React from "react";
import PropTypes from "prop-types";

import BarChart from "./BarChart";
import { CHART_MODE } from "./constants";

import LineChart from "./LineChart";

const Chart = ({ mode, ...rest }) => {
  const renderChart = {
    [CHART_MODE.LINE_CHART]: () => <LineChart {...rest} />,
    [CHART_MODE.BAR_CHART]: () => <BarChart {...rest} />,
  };

  return renderChart[mode]();
};

export default Chart;

Chart.propTypes = {
  mode: PropTypes.oneOf([CHART_MODE.LINE_CHART, CHART_MODE.BAR_CHART]),
};

Chart.defaultProps = {
  mode: CHART_MODE.LINE_CHART,
};
