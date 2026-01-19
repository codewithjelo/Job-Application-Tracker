import { Table } from "lucide-react";
import RecentApplicationItem from "./RecentApplicationItem";
import { useApplications } from "../hooks/useApplications";
import { useApplicationFilters } from "../hooks/useApplicationFilters";

const RecentApplicationList = () => {
  const { applications } = useApplications();
  const { filteredApplications } = useApplicationFilters(applications);

  return (
    <div className="rounded-md p-3 border border-[var(--border)]">
      <p className="text-md mb-4 text-[var(--primary)] font-semibold flex items-center gap-2">
        <Table className="w-5 h-5" />
        Applications Over Time
      </p>
      <div className="flex flex-col overflow-y-auto min-w-2/4 2xl:min-w-3/4">
        {/*Table*/}
        <table className="overflow-hidden">
          <thead className="bg-[var(--secondary)]">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--white)]">
                Company
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--white)]">
                Position
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--white)]">
                Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--white)]">
                Location
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--white)]">
                Work Arrangement
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--white)]">
                Type
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {filteredApplications.map((app) => (
              <RecentApplicationItem key={app.id} app={app} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentApplicationList;
