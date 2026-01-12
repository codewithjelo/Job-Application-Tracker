const ApplicationList = () => {
  const applicationList = [
    {
      id: 1,
      company: "Google",
      position: "Frontend Engineer",
      status: "Applied",
      date: "2025-12-10",
      location: "Mountain View, CA",
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
      type: "Full-time",
      notes: "Completed technical round",
    },
    {
      id: 3,
      company: "Spotify",
      position: "UI Engineer",
      status: "Rejected",
      date: "2025-11-28",
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
      type: "Full-time",
      notes: "Offer expires in 2 weeks",
    },
    {
      id: 5,
      company: "Airbnb",
      position: "React Engineer",
      status: "Applied",
      date: "2025-12-05",
      location: "Remote",
      type: "Full-time",
      notes: "",
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
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
                Type
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Notes
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {applicationList.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50 transition-colors">
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
                        ? "bg-blue-100 text-blue-700"
                        : app.status === "Interviewing"
                        ? "bg-yellow-100 text-yellow-700"
                        : app.status === "Offer"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{app.date}</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {app.location}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{app.type}</td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {app.notes || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
