import Header from "./components/Header";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <ApplicationForm />
        <ApplicationList />
      </div>
    </div>
  );
}

export default App;
