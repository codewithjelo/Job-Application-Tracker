import { useState } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import ContentArea from "./layout/ContentArea";

function App() {
  const [activeView, setActiveView] = useState("dashboard");

  const handleCategoryClick = (category) => {
    setActiveView(category);
  };

  return (
    <div className="flex h-screen w-screen max-w-full overflow-x-hidden">
      <Sidebar onCategoryClick={handleCategoryClick} />

      <div className="flex flex-col flex-1 md:ml-64 min-w-0">
        <Header />
        <div className="p-5 flex-1">
          <ContentArea
            activeView={activeView}
            onCategoryClick={handleCategoryClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
