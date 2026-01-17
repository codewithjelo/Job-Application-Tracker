import Dashboard from "../views/Dashboard";
import AllApplication from "../views/AllApplication";
import AddNewApplication from "../views/AddNewApplication";

const ContentArea = ({ activeView }) => {
  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "all-applications":
        return <AllApplication />;
      case "add-new":
        return <AddNewApplication />;
      default:
        return <ApplicationList />;
    }
  };

  return <div className="flex-1">{renderContent()}</div>;
};

export default ContentArea;
