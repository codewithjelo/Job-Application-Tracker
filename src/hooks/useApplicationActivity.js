import { useEffect, useState } from "react";

export const useApplicationActivity = (applications) => {
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    if (!applications || applications.length === 0) {
      setRecentActivities([]);
      return;
    }

    const allActivities = applications.flatMap((app) =>
      (app.activities || []).map((activity) => ({
        ...activity,
        company: app.company,
        position: app.position,
        status: app.status,
        appId: app.id,
      })),
    );

    const sorted = allActivities
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 5);

    setRecentActivities(sorted);
  }, [applications]);

  const getTimeElapsed = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffMs = now - past;

    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMs / 3600000);
    const days = Math.floor(diffMs / 86400000);
    const weeks = Math.floor(days / 7);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return `${weeks}w ago`;
  };

  const getActivityMessage = (activity) => {
    switch (activity.type) {
      case "created":
        return `Applied to ${activity.company}`;
      case "status_change":
        return `${activity.company} - ${activity.from} → ${activity.to}`;
      default:
        return activity.note;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "bg-purple-100 text-purple-700";
      case "Interviewing":
        return "bg-green-100 text-green-700";
      case "Offer":
        return "bg-blue-100 text-blue-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return {
    recentActivities,
    getTimeElapsed,
    getActivityMessage,
    getStatusColor,
  };
};