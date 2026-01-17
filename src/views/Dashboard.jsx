import DashboardCard from "../components/DashboardCard";
import RecentActivity from "../components/RecentActivity";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-blue">
        <DashboardCard />
      </div>
      <div className="bg-red">
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
