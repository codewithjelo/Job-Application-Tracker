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

  const groupedActivities = recentActivities.reduce((groups, activity) => {
    const date = new Date(activity.timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    let dateKey;
    if (date.toDateString() === today.toDateString()) {
      dateKey = "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      dateKey = "Yesterday";
    } else {
      dateKey = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year:
          date.getFullYear() !== today.getFullYear() ? "numeric" : undefined,
      });
    }

    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(activity);
    return groups;
  }, {});

  return (
    <div className="h-full flex flex-col rounded-md border border-[var(--border)] p-3">
      <p className="text-md mb-4 text-[var(--primary)] font-semibold">
        Job Application Log
      </p>
      <div className="space-y-4 h-180 overflow-y-auto mb-4">
        {recentActivities.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-4">
            No recent activity
          </p>
        ) : (
          Object.entries(groupedActivities).map(([date, activities]) => (
            <div key={date} className="space-y-2">
              <div className="sticky top-0 bg-[var(--white)] z-10">
                <p className="text-xs font-medium text-[var(--primary)] opacity-60 py-1">
                  {date}
                </p>
              </div>
              {activities.map((activity) => (
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
                    <p
                      className="text-xs text-[var(--primary)] opacity-70 mt-1"
                      title={activity.timestamp.slice(0, 10)}
                    >
                      {getTimeElapsed(activity.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ApplicationActivity;
