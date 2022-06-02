import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

import { dataFormatToArray } from "../helper";
import "./BarChart.scss";

const prefix = "bar-chart";

const BarChart = ({ data, width, height, color }) => {
  const dataChart = dataFormatToArray(data);

  /**
   * Function
   * ===================================================
   */

  const getMaxX = useCallback(() => {
    const _maxX = dataChart?.length;
    return _maxX;
  }, [dataChart]);

  const getMaxY = useCallback(() => {
    const _maxY = dataChart?.reduce((prev, next) => {
      return prev > next ? prev : next;
    }, 0);

    return _maxY;
  }, [dataChart]);

  const getSVGX = useCallback(
    (x) => {
      return (x / getMaxX()) * (width - 50) + 70;
    },
    [getMaxX, width]
  );

  const getSVGY = useCallback(
    (y) => {
      return height - (y / getMaxY()) * height + 50;
    },
    [height, getMaxY]
  );

  /**
   * Render view
   * =============================================
   */

  const renderBar = useMemo(() => {
    return dataChart?.map((item, index) => {
      return (
        <path
          style={{ fill: color }}
          d={`M ${getSVGX(index) - 10} ${height + 45} L ${
            getSVGX(index) - 10
          } ${height + 45} L ${getSVGX(index) - 10} ${getSVGY(item)} L ${
            getSVGX(index) + 10
          } ${getSVGY(item)} L ${getSVGX(index) + 10} ${height + 45} Z`}
        />
      );
    });
  }, [color, dataChart, getSVGX, getSVGY, height]);

  const makeAxis = useMemo(() => {
    return (
      <g className={`${prefix}__axis`}>
        <line x1={50} y1={0} x2={50} y2={height + 45} />
        <line x1={50} y1={height + 45} x2={width} y2={height + 45} />
      </g>
    );
  }, [height, width]);

  const makeIntervalLine = useMemo(() => {
    const _maxY = getMaxY();

    return (
      <g className={`${prefix}__interval`}>
        {[...Array?.(6)?.keys()]?.map((item) => {
          const _yPosition = (_maxY / 5) * (item + 1);

          return (
            <line
              x1={50}
              y1={getSVGY(_yPosition)}
              x2={width}
              y2={getSVGY(_yPosition)}
            />
          );
        })}
      </g>
    );
  }, [getMaxY, getSVGY, width]);

  const renderYAxis = useMemo(() => {
    const _maxY = getMaxY();

    return [...Array?.(6)?.keys()]?.map((item) => {
      const _yPosition = (_maxY / 5) * (item + 1);

      return (
        <text x={0} y={getSVGY(_yPosition) + 5}>
          {Math.round(_yPosition * 100) / 100}
        </text>
      );
    });
  }, [getMaxY, getSVGY]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className={prefix}
      viewBox={`0 0 ${width + 50} ${height + 50}`}
    >
      {makeAxis}
      {makeIntervalLine}
      {renderYAxis}
      {renderBar}
    </svg>
  );
};

export default BarChart;

BarChart.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.string,
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

BarChart.defaultProps = {
  data: [],
  width: 600,
  height: 200,
  color: "red",
};
