import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { useApplications } from "../hooks/useApplications";

const RecentActivity = () => {
  const { applications } = useApplications();
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Flatten all activities from all applications
    const allActivities = applications.flatMap((app) =>
      (app.activities || []).map((activity) => ({
        ...activity,
        company: app.company,
        position: app.position,
        status: app.status,
        appId: app.id,
      }))
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

  return (
    <div className="rounded-md p-3 border border-[var(--border)]">
      <p className="text-md mb-4 text-[var(--primary)] font-semibold flex items-center gap-2">
        <Clock className="w-5 h-5" />
        Recent Activity
      </p>
      <div className="space-y-3">
        {recentActivities.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-4">
            No recent activity
          </p>
        ) : (
          recentActivities.map((activity) => (
            <div
              key={`${activity.appId}-${activity.id}`}
              className="activity flex items-start justify-between rounded-md bg-[var(--secondary)] p-3"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--primary)]">
                  {getActivityMessage(activity)}
                </p>
                <p className="text-xs text-[var(--primary)] opacity-70">
                  {activity.position}
                </p>
              </div>
              <div className="text-right">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${getStatusColor(activity.status)}`}
                >
                  {activity.status}
                </span>
                <p className="text-xs text-[var(--primary)] opacity-70 mt-1">
                  {getTimeElapsed(activity.timestamp)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentActivity;