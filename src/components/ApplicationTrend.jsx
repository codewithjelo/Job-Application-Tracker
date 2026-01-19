import { useState, useEffect } from "react";
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

const ApplicationTrend = () => {
  const { applications } = useApplications();
  const [trendData, setTrendData] = useState([]);
  useEffect(() => {
    if (applications.length === 0) return;

    // Group applications by week
    const groupByWeek = () => {
      const weekMap = {};
      const now = new Date();

      applications.forEach((app) => {
        const appliedDate = new Date(app.appliedDate);
        const diffTime = now - appliedDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const weekNumber = Math.floor(diffDays / 7);

        // Only track last 8 weeks
        if (weekNumber < 8) {
          const weekKey = `Week ${8 - weekNumber}`;
          weekMap[weekKey] = (weekMap[weekKey] || 0) + 1;
        }
      });

      // Convert to array and sort
      const sortedData = Object.entries(weekMap)
        .map(([week, count]) => ({
          week,
          applications: count,
          weekNum: parseInt(week.split(" ")[1]),
        }))
        .sort((a, b) => a.weekNum - b.weekNum)
        .map(({ week, applications }) => ({ week, applications }));

      return sortedData;
    };

    setTrendData(groupByWeek());
  }, [applications]);

  return (
    <div className="rounded-md p-3 border border-[var(--border)] h-94">
      <p className="text-md mb-4 text-[var(--primary)] font-semibold flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        Applications Over Time
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Application"
            stroke="#3bf69f"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicationTrend;
