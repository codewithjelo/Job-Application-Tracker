import Header from "./layout/Header";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";
import Sidebar from "./layout/Sidebar";
import ContentArea from "./layout/ContentArea";

function App() {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <ContentArea />
      </div>
    </div>
  );
}

export default App;
