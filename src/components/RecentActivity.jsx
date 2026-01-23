import { Clock, Plus, List } from "lucide-react";
import { useApplications } from "../hooks/useApplications";
import { useApplicationActivity } from "../hooks/useApplicationActivity";

const RecentActivity = ({ onCategoryClick }) => {
  const { applications } = useApplications();
  const {
    recentActivities2,
    getTimeElapsed,
    getActivityMessage,
    getStatusColor,
  } = useApplicationActivity(applications);

  const handleClick = (e, category) => {
    e.preventDefault();
    onCategoryClick(category);
  };

  return (
    <div className="rounded-md p-3 border border-[var(--border)] h-94">
      <p className="text-md mb-4 text-[var(--primary)] font-semibold flex items-center gap-2">
        <Clock className="w-5 h-5" />
        Recent Activity
      </p>
      <div className="space-y-4 overflow-y-auto h-7/10 mb-4">
        {recentActivities2.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-4">
            No recent activity
          </p>
        ) : (
          recentActivities2.map((activity) => (
            <div
              key={`${activity.appId}-${activity.id}`}
              className="activity flex items-start justify-between rounded-md border border-[var(--border)] p-3"
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
      <div className="flex flex-row gap-5">
        <div className="flex-1">
          <button
            className="text-sm mb-4 text-[var(--white)] font-semibold flex items-center justify-center gap-2 w-full"
            onClick={(e) => handleClick(e, "add-new")}
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>
        <div className="flex-1">
          <button
            className="text-sm mb-4 text-[var(--white)] font-semibold flex items-center justify-center gap-2 w-full"
            onClick={(e) => handleClick(e, "activity-log")}
          >
            <List className="w-5 h-5" />
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
