import { Clock } from "lucide-react";

const RecentActivity = () => {
  return (
    <div className="rounded-md p-3 border border-[var(--border)]">
      <p className="text-md mb-4 text-[var(--primary)] font-semibold flex items-center gap-2">
        <Clock className="w-5 h-5" />
        Recent Activity
      </p>

      <div className="space-y-3">
        <div className="activity flex items-start justify-between rounded-md border border-black p-3">
          <div className="flex-1">
            <p className="text-sm font-semibold text-[var(--primary)]">Activity</p>
            <p className="text-sm text-[var(--primary)]">Company</p>
          </div>
          <div className="text-right">
            <span className="text-sm text-[var(--primary)]">Status</span>
            <p className="text-xs text-[var(--primary)]">2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
