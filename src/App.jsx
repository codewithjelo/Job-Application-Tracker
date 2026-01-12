import { useState } from 'react';
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import ContentArea from "./layout/ContentArea";

function App() {
  const [activeView, setActiveView] = useState("dashboard");

  const handleCategoryClick = (category) => {
    setActiveView(category);
  };

  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar onCategoryClick={handleCategoryClick} />
      <div className="flex-1 md:ml-64">
        <Header />
        <ContentArea activeView={activeView} />
      </div>
    </div>
  );
}

export default App;
