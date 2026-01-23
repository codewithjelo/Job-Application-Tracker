import { useState } from "react";
import {
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  ClipboardList,
} from "lucide-react";
import "../styles/layout/sidebar.css";

const Sidebar = ({ onCategoryClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleClick = (e, category) => {
    e.preventDefault();
    onCategoryClick(category);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:w-64 z-40 border-r border-[var(--border)]`}
      >
        <div className="p-4">
          <h2 className="text-4xl text-center text-gray-700 font-bold border-b border-[var(--border)] pb-4">
            TrabaLog
          </h2>
          <nav>
            <ul className="space-y-2 mt-4">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleClick(e, "dashboard")}
                  className="block p-2 rounded-md text-md mb-4 text-[var(--primary)] font-semibold flex items-center gap-2"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleClick(e, "all-applications")}
                  className="block p-2 rounded-md text-md mb-4 text-[var(--primary)] font-semibold flex items-center gap-2"
                >
                  <Briefcase className="w-5 h-5" />
                  All Applications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleClick(e, "add-new")}
                  className="block p-2 rounded-md text-md mb-4 text-[var(--primary)] font-semibold flex items-center gap-2"
                >
                  <PlusCircle className="w-5 h-5" />
                  Add New Application
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleClick(e, "activity-log")}
                  className="block p-2 rounded-md text-md mb-4 text-[var(--primary)] font-semibold flex items-center gap-2"
                >
                  <ClipboardList className="w-5 h-5" />
                  Job Application Log
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
    </>
  );
};

export default Sidebar;
