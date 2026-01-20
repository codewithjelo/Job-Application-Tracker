const ApplicationItem = ({ app }) => {
  return (
    <tr
      className="cursor-pointer hover:bg-gray-50"
    >
      <td className="px-4 py-3 text-sm text-[var(--primary)] truncate max-w-0">{app.company}</td>

      <td className="px-4 py-3 text-sm text-[var(--primary)] truncate max-w-0">{app.position}</td>

      <td className="px-4 py-3 text-sm text-[var(--primary)] truncate max-w-0">
        { app.appliedDate.slice(0, 10) }
      </td>

      <td className="px-4 py-3 text-sm text-[var(--primary)] truncate max-w-0">{app.location}</td>

      <td className="px-4 py-3 text-sm text-[var(--primary)] truncate max-w-0">{app.work}</td>

      <td className="px-4 py-3 text-sm text-[var(--primary)] truncate max-w-0">{app.type}</td>
    </tr>
  );
};

export default ApplicationItem;
