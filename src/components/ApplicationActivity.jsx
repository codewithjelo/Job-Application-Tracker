import { useApplications } from "../hooks/useApplications";
import { useApplicationActivity } from "../hooks/useApplicationActivity";

const ApplicationActivity = () => {
  const { applications } = useApplications();
  const {
    recentActivities,
    getTimeElapsed,
    getActivityMessage,
    getStatusColor,
  } = useApplicationActivity(applications);

  return (
    <div className="flex flex-col rounded-md border border-[var(--border)] p-3">
      <p className="text-md mb-4 text-[var(--primary)] font-semibold">
        Job Application Log
      </p>
      <div className="space-y-4 overflow-y-auto h-7/10 mb-4">
        {recentActivities.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-4">
            No recent activity
          </p>
        ) : (
          recentActivities.map((activity) => (
            <div
              key={`${activity.appId}-${activity.id}`}
              className="activity flex items-start justify-between rounded-md border border-[var(--secondary)] bg-[var(--blue-fade)] p-3"
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
                <p className="text-xs text-[var(--primary)] opacity-70 mt-1" title={activity.timestamp.slice(0, 10)}>
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

export default ApplicationActivity;
