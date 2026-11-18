
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function ClimateChart({
  data = [],
  dataKey = "temperature",
  title = "Climate trend",
  color = "#16a34a",
  unit = "°C"
}) {
  return (
    <section className="chart-card">
      <div className="chart-heading">
        <h3>{title}</h3>
        <span>Sample data</span>
      </div>

      {data.length === 0 ? (
        <p className="empty-message">No climate data available.</p>
      ) : (
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis unit={unit} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={dataKey}
                name={title}
                stroke={color}
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}

export default ClimateChart;
