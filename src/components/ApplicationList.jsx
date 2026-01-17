import { useState } from "react";
import Swal from "sweetalert2";
import ApplicationItem from "./ApplicationItem";
import ApplicationEditForm from "./ApplicationEditForm";
import { useApplications } from "../hooks/useApplications";
import { useApplicationFilters } from "../hooks/useApplicationFilters";

const ApplicationList = () => {
  const { applications, updateApplication } = useApplications();
  const [selectedApp, setSelectedApp] = useState(null);

  const {
    statusFilter,
    typeFilter,
    workFilter,
    setStatusFilter,
    setTypeFilter,
    setWorkFilter,
    filteredApplications,
  } = useApplicationFilters(applications);

  const handleChange = (field, value) => {
    setSelectedApp((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    const result = await Swal.fire({
      title: "Save Changes?",
      text: "Do you want to update this application?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, save",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      const updatedApp = { ...selectedApp };
      
      const originalApp = applications.find((app) => app.id === selectedApp.id);

      if (!originalApp) {
        console.error("Original app not found");
        return;
      }

      const statusChanged = originalApp.status !== updatedApp.status;

      if (!updatedApp.activities) {
        updatedApp.activities = [];
      }

      if (statusChanged) {
        const newActivity = {
          id: originalApp.activities.length + 1,
          type: "status_change",
          from: originalApp.status,
          to: updatedApp.status,
          timestamp: new Date().toISOString(),
          note: `Status changed from ${originalApp.status} to ${updatedApp.status}`,
        };
        updatedApp.activities = [...updatedApp.activities, newActivity];
      }

      if (updatedApp.status === "Rejected" && !updatedApp.rejectedDate) {
        updatedApp.rejectedDate = new Date().toISOString();
      }

      if (updatedApp.status !== "Rejected") {
        updatedApp.rejectedDate = null;
      }

      await updateApplication(updatedApp);

      Swal.fire("Saved!", "Application updated successfully.", "success");

      setOriginalStatus(null);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col overflow-y-auto min-w-2/4 2xl:min-w-3/4">
        {/*Filter Bar */}
        <div className="flex flex-wrap gap-4 pb-5">
          <select
            className="rounded-md px-3 py-2 text-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>

          <select
            className="rounded-md px-3 py-2 text-sm"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Contract">Contract</option>
          </select>

          <select
            className="rounded-md px-3 py-2 text-sm"
            value={workFilter}
            onChange={(e) => setWorkFilter(e.target.value)}
          >
            <option value="All">All Work Arrangements</option>
            <option value="On-Site">On-Site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/*Table*/}
        <table className="overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Company
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Position
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Location
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Work Arrangement
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Type
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Notes
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {filteredApplications.map((app) => (
              <ApplicationItem
                key={app.id}
                app={app}
                isSelected={selectedApp?.id === app.id}
                onSelect={setSelectedApp}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/*Edit Panel*/}
      <div className="ml-5 px-4 py-3 min-w-80 border border-gray-200 flex flex-col">
        <p className="text-left text-sm font-semibold text-gray-700">
          Modify Application
        </p>

        {!selectedApp ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-sm text-gray-400 text-center">
              Select an application to edit
            </p>
          </div>
        ) : (
          <ApplicationEditForm
            selectedApp={selectedApp}
            onChange={handleChange}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
};

export default ApplicationList;
