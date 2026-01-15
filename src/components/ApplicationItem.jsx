const ApplicationItem = ({ app, isSelected, onSelect }) => {
  return (
    <tr
      onClick={() => onSelect(app)}
      className={`cursor-pointer hover:bg-gray-50 transition-colors ${
        isSelected ? "bg-[var(--secondary)]" : ""
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

      <td className="px-4 py-3 text-sm text-gray-700">
        {app.date}
      </td>

      <td className="px-4 py-3 text-sm text-gray-700">
        {app.location}
      </td>

      <td className="px-4 py-3 text-sm text-gray-700">
        {app.work}
      </td>

      <td className="px-4 py-3 text-sm text-gray-700">
        {app.type}
      </td>

      <td
        className={`px-4 py-3 text-sm ${
          app.notes ? "text-gray-700" : "text-gray-400"
        }`}
      >
        {app.notes || "No notes."}
      </td>
    </tr>
  );
};

export default ApplicationItem;
