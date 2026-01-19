import { useState, useEffect } from "react";

export const useApplicationTrends = (applications) => {
  const [trendData, setTrendData] = useState([]);
  const [timeRange, setTimeRange] = useState("week");

  useEffect(() => {
    if (applications.length === 0) {
      setTrendData([]);
      return;
    }

    const groupByWeek = () => {
      const weekMap = {};
      const now = new Date();

      applications.forEach((app) => {
        const appliedDate = new Date(app.appliedDate);
        const diffTime = now - appliedDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const weekNumber = Math.floor(diffDays / 7);

        if (weekNumber < 8) {
          const weekLabel = weekNumber === 0 ? "This Week" : `${weekNumber}w ago`;
          weekMap[weekNumber] = {
            label: weekLabel,
            count: (weekMap[weekNumber]?.count || 0) + 1,
          };
        }
      });

      // Fill in missing weeks with 0
      const result = [];
      for (let i = 7; i >= 0; i--) {
        result.push({
          period: weekMap[i]?.label || (i === 0 ? "This Week" : `${i}w ago`),
          applications: weekMap[i]?.count || 0,
        });
      }

      return result;
    };

    const groupByMonth = () => {
      const monthMap = {};

      applications.forEach((app) => {
        const appliedDate = new Date(app.appliedDate);
        const monthYear = appliedDate.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });

        monthMap[monthYear] = (monthMap[monthYear] || 0) + 1;
      });

      return Object.entries(monthMap)
        .map(([month, count]) => ({
          period: month,
          applications: count,
          date: new Date(month),
        }))
        .sort((a, b) => a.date - b.date)
        .map(({ period, applications }) => ({ period, applications }));
    };

    const groupByDay = () => {
      const days = [];
      const now = new Date();

      for (let i = 29; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        const dateKey = date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });

        days.push({ period: dateKey, applications: 0, fullDate: date });
      }

      applications.forEach((app) => {
        const appliedDate = new Date(app.appliedDate);
        const dayIndex = days.findIndex((day) => {
          return day.fullDate.toDateString() === appliedDate.toDateString();
        });

        if (dayIndex !== -1) {
          days[dayIndex].applications += 1;
        }
      });

      return days.map(({ period, applications }) => ({ period, applications }));
    };

    switch (timeRange) {
      case "week":
        setTrendData(groupByWeek());
        break;
      case "month":
        setTrendData(groupByMonth());
        break;
      case "day":
        setTrendData(groupByDay());
        break;
      default:
        setTrendData(groupByWeek());
    }
  }, [applications, timeRange]);

  return { trendData, timeRange, setTimeRange };
};