import { TrendingUp } from "lucide-react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useApplications } from "../hooks/useApplications";
import { useApplicationTrends } from "../hooks/useApplicationTrends";

const ApplicationTrend = () => {
  const { applications } = useApplications();
  const { trendData, timeRange, setTimeRange } =
    useApplicationTrends(applications);

  return (
    <div className="rounded-md p-3 border border-[var(--border)]">
      <div className="flex items-center justify-between mb-4">
        <p className="text-md text-[var(--primary)] font-semibold flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Applications Over Time
        </p>

        {/* Filter Dropdown */}
        <select
          className="text-sm border rounded px-2 py-1"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="day">Last 30 Days</option>
          <option value="week">Last 8 Weeks</option>
          <option value="month">By Month</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="period"
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="applications"
            stroke="#3bf65a"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicationTrend;
