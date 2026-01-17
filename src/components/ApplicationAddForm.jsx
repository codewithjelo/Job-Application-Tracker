const ApplicationAddForm = () => {
  return (
    <div className="flex flex-col rounded-md border border-[var(--border)] p-3">
      <p className="text-md font-semibold text-gray-700">Add New Application</p>
      <form className="space-y-3">
        <div>
          <label className="text-sm">Company</label>
          <input
            className="w-full rounded border px-2 py-1 text-sm"
            value=""
          />
        </div>

        <div>
          <label className="text-sm">Position</label>
          <input
            className="w-full rounded border px-2 py-1 text-sm"
            value=""
          />
        </div>

        <div>
          <label className="text-sm">Status</label>
          <select
            className="w-full rounded border px-2 py-1 text-sm"
            value=""
          >
            <option>Applied</option>
            <option>Interviewing</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>

        <div>
          <label className="text-sm">Apply Date</label>
          <input
            type="date"
            className="w-full rounded border px-2 py-1 text-sm"
            value=""
          />
        </div>

        <div>
          <label className="text-sm">Work Arrangement</label>
          <select
            className="w-full rounded border px-2 py-1 text-sm"
            value=""
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
            value=""
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
            value=""
          />
        </div>

        <button
          type="button"
          className="w-full rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
        >
          Add Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationAddForm;
