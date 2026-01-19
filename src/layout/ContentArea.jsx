import Dashboard from "../views/Dashboard";
import AllApplication from "../views/AllApplication";
import AddNewApplication from "../views/AddNewApplication";
import ActivityLog from "../views/ActivityLog";

const ContentArea = ({ activeView, onCategoryClick }) => {
  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard onCategoryClick={onCategoryClick} />;
      case "all-applications":
        return <AllApplication />;
      case "add-new":
        return <AddNewApplication />;
      case "activity-log":
        return <ActivityLog />;
      default:
        return <Dashboard onCategoryClick={onCategoryClick} />;
    }
  };

  return <div className="flex-1">{renderContent()}</div>;
};

export default ContentArea;
