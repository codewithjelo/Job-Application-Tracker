import ApplicationForm from "../components/ApplicationForm";
import AllApplication from "../views/AllApplication";

const ContentArea = ({ activeView }) => {
  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <p>Welcome! Here's an overview of your applications.</p>
            {/* charts or stats */}
          </div>
        );
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
