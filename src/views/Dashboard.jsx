import DashboardCard from "../components/DashboardCard";
import ApplicationTrend from "../components/ApplicationTrend";
import RecentActivity from "../components/RecentActivity";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      <DashboardCard />
      <div className="flex flex-row gap-5">
        <div className="flex-1">
          <ApplicationTrend />
        </div>
        <div className="flex-1">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
