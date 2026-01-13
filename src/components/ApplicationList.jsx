import { useMemo, useState } from "react";

const ApplicationList = () => {
  const applicationList = [
    {
      id: 1,
      company: "Google",
      position: "Frontend Engineer",
      status: "Applied",
      date: "2025-12-10",
      location: "Mountain View, CA",
      work: "On-Site",
      type: "Full-time",
      notes: "Referred by alumni",
    },
    {
      id: 2,
      company: "Microsoft",
      position: "Software Engineer",
      status: "Interviewing",
      date: "2025-12-15",
      location: "Redmond, WA",
      work: "On-Site",
      type: "Full-time",
      notes: "Completed technical round",
    },
    {
      id: 3,
      company: "Spotify",
      position: "UI Engineer",
      status: "Rejected",
      date: "2025-11-28",
      work: "Remote",
      location: "Remote",
      type: "Contract",
      notes: "Strong portfolio feedback",
    },
    {
      id: 4,
      company: "Stripe",
      position: "Frontend Developer",
      status: "Offer",
      date: "2025-12-20",
      location: "San Francisco, CA",
      work: "On-Site",
      type: "Full-time",
      notes: "Offer expires in 2 weeks",
    },
    {
      id: 5,
      company: "Airbnb",
      position: "React Engineer",
      status: "Applied",
      date: "2025-12-05",
      work: "Remote",
      location: "Remote",
      type: "Full-time",
      notes: "",
    },
  ];

  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [workFilter, setWorkFilter] = useState("All");
  const [selectedApp, setSelectedApp] = useState(null);

  const filteredApplications = useMemo(() => {
    return applicationList.filter((app) => {
      const statusMatch = statusFilter === "All" || app.status === statusFilter;

      const typeMatch = typeFilter === "All" || app.type === typeFilter;

      const workMatch = workFilter === "All" || app.work === workFilter;

      return statusMatch && typeMatch && workMatch;
    });
  }, [applicationList, statusFilter, typeFilter, workFilter]);

  const handleChange = (field, value) => {
    setSelectedApp((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-row">

      <div className="flex flex-col overflow-y-auto min-w-3/4">

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
              <tr
                key={app.id}
                onClick={() => setSelectedApp(app)}
                className={`cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedApp?.id === app.id ? "bg-[var(--background-color)]" : ""
                }`}
              >
                <td className="px-4 py-3 text-sm text-gray-900">
                  {app.company}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {app.position}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium
                    ${
                      app.status === "Applied"
                        ? "border-1 bg-blue-100 text-blue-700"
                        : app.status === "Interviewing"
                        ? "border-1 bg-yellow-100 text-yellow-700"
                        : app.status === "Offer"
                        ? "border-1 bg-green-100 text-green-700"
                        : "border-1 bg-red-100 text-red-700"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{app.date}</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {app.location}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{app.work}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{app.type}</td>
                <td
                  className={`px-4 py-3 text-sm ${
                    !app.notes ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {app.notes || "No notes."}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*Edit Panel*/}
      <div className="ml-5 px-4 py-3 min-w-80 border border-gray-200">
        <p className="text-left text-sm font-semibold text-gray-700">
          Modify Application
        </p>

        {!selectedApp ? (
          <p className="text-sm text-gray-400">Select an application to edit</p>
        ) : (
          <form className="space-y-3">
            <div>
              <label className="text-xs text-gray-600">Company</label>
              <input
                className="w-full rounded border px-2 py-1 text-sm"
                value={selectedApp.company}
                onChange={(e) => handleChange("company", e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs text-gray-600">Position</label>
              <input
                className="w-full rounded border px-2 py-1 text-sm"
                value={selectedApp.position}
                onChange={(e) => handleChange("position", e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs text-gray-600">Status</label>
              <select
                className="w-full rounded border px-2 py-1 text-sm"
                value={selectedApp.status}
                onChange={(e) => handleChange("status", e.target.value)}
              >
                <option>Applied</option>
                <option>Interviewing</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-600">Work Arrangement</label>
              <select
                className="w-full rounded border px-2 py-1 text-sm"
                value={selectedApp.work}
                onChange={(e) => handleChange("work", e.target.value)}
              >
                <option>On-Site</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-600">Type</label>
              <select
                className="w-full rounded border px-2 py-1 text-sm"
                value={selectedApp.type}
                onChange={(e) => handleChange("type", e.target.value)}
              >
                <option>Full-time</option>
                <option>Contract</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-600">Notes</label>
              <textarea
                className="w-full rounded border px-2 py-1 text-sm"
                rows={3}
                value={selectedApp.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
              />
            </div>

            <button
              type="button"
              className="w-full rounded px-3 py-2 text-sm text-white"
            >
              Save Changes
            </button>
          </form>
        )}
      </div>

    </div>
  );
};

export default ApplicationList;
