const EditApplicationForm = ({ selectedApp, onChange, onSave }) => {
  if (!selectedApp) return null;

  return (
    <form className="space-y-3">
      <div>
        <label className="text-sm">Company</label>
        <input
          className="w-full rounded border px-2 py-1 text-sm"
          value={selectedApp.company}
          onChange={(e) => onChange("company", e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm">Position</label>
        <input
          className="w-full rounded border px-2 py-1 text-sm"
          value={selectedApp.position}
          onChange={(e) => onChange("position", e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm">Status</label>
        <select
          className="w-full rounded border px-2 py-1 text-sm"
          value={selectedApp.status}
          onChange={(e) => onChange("status", e.target.value)}
        >
          <option>Applied</option>
          <option>Interviewing</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      <div>
        <label className="text-sm">
          Interview Date{" "}
          <span className="text-xs text-gray-400">
            (leave blank if not scheduled)
          </span>
        </label>
        <input
          type="date"
          className="w-full rounded border px-2 py-1 text-sm"
          value={
            selectedApp.interviewDate
              ? selectedApp.interviewDate.slice(0, 10)
              : ""
          }
          onChange={(e) =>
            onChange(
              "interviewDate",
              e.target.value ? new Date(e.target.value).toISOString() : null,
            )
          }
        />
      </div>

      <div>
        <label className="text-sm">Work Arrangement</label>
        <select
          className="w-full rounded border px-2 py-1 text-sm"
          value={selectedApp.work}
          onChange={(e) => onChange("work", e.target.value)}
        >
          <option>On-Site</option>
          <option>Remote</option>
          <option>Hybrid</option>
        </select>
      </div>

      <div>
        <label className="text-sm">Type</label>
        <select
          className="w-full rounded border px-2 py-1 text-sm"
          value={selectedApp.type}
          onChange={(e) => onChange("type", e.target.value)}
        >
          <option>Full-time</option>
          <option>Contract</option>
        </select>
      </div>

      <div>
        <label className="text-sm">Notes</label>
        <textarea
          className="w-full rounded border px-2 py-1 text-sm"
          rows={3}
          value={selectedApp.notes}
          onChange={(e) => onChange("notes", e.target.value)}
        />
      </div>

      <button
        type="button"
        onClick={onSave}
        className="w-full rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditApplicationForm;
