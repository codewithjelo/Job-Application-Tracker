import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleClick = (category) => {
    onCategoryClick(category);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:w-64 z-40`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Job Application Tracker</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  All Applications
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Add New Application
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
