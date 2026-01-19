import { useMemo, useState } from "react";

export const useApplicationFilters = (applications) => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [workFilter, setWorkFilter] = useState("All");

  const filteredApplications = useMemo(() => {
    return applications
      .filter((app) => {
        const statusMatch =
          statusFilter === "All" || app.status === statusFilter;

        const typeMatch = typeFilter === "All" || app.type === typeFilter;

        const workMatch = workFilter === "All" || app.work === workFilter;

        return statusMatch && typeMatch && workMatch;
      })
      .sort((a, b) => {
        const dateA = a.appliedDate ? new Date(a.appliedDate) : new Date(0);
        const dateB = b.appliedDate ? new Date(b.appliedDate) : new Date(0);

        return dateB - dateA;
      });
  }, [applications, statusFilter, typeFilter, workFilter]);

  return {
    statusFilter,
    typeFilter,
    workFilter,
    setStatusFilter,
    setTypeFilter,
    setWorkFilter,
    filteredApplications,
  };
};
