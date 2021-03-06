import "./style.css";
import PropTypes from "prop-types";

/**
 * component for displaying performance chart
 * @param {array} performance data for user's performance
 * @param {object} indicators labels for the data
 * @example
 * const performance = [{value: 80, kind:1}, {value: 120, kind:2}];
 * const indicators = {"1": 'cardio', "2": 'energy'};
 * @returns (
 * <Performance performance={performance} indicators={indicators} />
 * )
 */

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export default function Performance({ performance, indicators }) {
  const data = performance.map((object) => ({
    value: object.value,
    kind:
      indicators[performance.indexOf(object) + 1][0].toUpperCase() +
      indicators[performance.indexOf(object) + 1].slice(1),
  }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        className="radar-chart"
        cx="50%"
        cy="50%"
        outerRadius="80%"
        innerRadius="8%"
        data={data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" stroke="white" />
        <PolarRadiusAxis axisLine={false} stroke="none" />
        <Radar
          dataKey="value"
          fill="#FF0101"
          stroke="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

Performance.propTypes = {
  performance: PropTypes.array.isRequired,
  indicators: PropTypes.object.isRequired,
};

Performance.defaultProps = {
  performance: [],
  indicators: {},
};
