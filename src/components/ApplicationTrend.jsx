import { useState } from "react";
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

const ApplicationTrend = () => {
  const [applicationTrend] = useState([
    { week: "Week 1", applications: 8 },
    { week: "Week 2", applications: 12 },
    { week: "Week 3", applications: 15 },
    { week: "Week 4", applications: 13 },
  ]);

  return (
    <div className="rounded-md p-3 border border-[var(--border)] h-94">
      <p className="text-md mb-4 text-[var(--primary)] font-semibold flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        Applications Over Time
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={applicationTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="applications"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicationTrend;
