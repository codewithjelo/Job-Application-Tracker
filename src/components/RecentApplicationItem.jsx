const ApplicationItem = ({ app }) => {
  return (
    <tr
      className="cursor-pointer hover:bg-gray-50"
    >
      <td className="px-4 py-3 text-sm text-[var(--primary)]">{app.company}</td>

      <td className="px-4 py-3 text-sm text-[var(--primary)]">{app.position}</td>

      <td className="px-4 py-3 text-sm text-[var(--primary)]">
        { app.appliedDate.slice(0, 10) }
      </td>

      <td className="px-4 py-3 text-sm text-[var(--primary)]">{app.location}</td>

      <td className="px-4 py-3 text-sm text-[var(--primary)]">{app.work}</td>

      <td className="px-4 py-3 text-sm text-[var(--primary)]">{app.type}</td>
    </tr>
  );
};

export default ApplicationItem;
