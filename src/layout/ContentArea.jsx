import Dashboard from "../views/Dashboard";
import AllApplication from "../views/AllApplication";

const ContentArea = ({ activeView }) => {
  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "all-applications":
        return <AllApplication />;
      case "add-new":
        return (<h1>Hello</h1>);
      default:
        return <ApplicationList />;
    }
  };

  return <div className="flex-1">{renderContent()}</div>;
};

export default ContentArea;
