import DashboardCard from "../components/DashboardCard";
import ApplicationTrend from "../components/ApplicationTrend";
import RecentActivity from "../components/RecentActivity";
import RecentApplicationList from "../components/RecentApplicationList";

const Dashboard = ({ onCategoryClick }) => {
  return (
    <div className="flex flex-col gap-5">
      <DashboardCard />
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex-1">
          <ApplicationTrend />
        </div>
        <div className="flex-1">
          <RecentActivity onCategoryClick={onCategoryClick} />
        </div>
      </div>
      <RecentApplicationList onCategoryClick={onCategoryClick} />
    </div>
  );
};

export default Dashboard;
