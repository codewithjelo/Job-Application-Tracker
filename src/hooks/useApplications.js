import { useState } from "react";
import { APPLICATIONS } from "../data/applications";

export const useApplications = () => {
  const [applications, setApplications] = useState(APPLICATIONS);

  const updateApplication = (updatedApp) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === updatedApp.id ? updatedApp : app
      )
    );
  };

  return {
    applications,
    updateApplication,
  };
};
