import { useState, useEffect } from "react";

export const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const API_URL = "../../api/applications";


  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setApplications(data);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      }
    };

    fetchApplications();
  }, []);

  // Update an application via API
  const updateApplication = async (updatedApp) => {
    try {
      const res = await fetch(`${API_URL}/${updatedApp.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedApp),
      });
      const data = await res.json();

      setApplications((prev) =>
        prev.map((app) => (app.id === data.id ? data : app)),
      );
    } catch (error) {
      console.error("Failed to update application:", error);
    }
  };

  // Add a new application via API
  const addApplication = async (newApp) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newApp),
      });
      const data = await res.json();
      setApplications((prev) => [...prev, data]);
    } catch (error) {
      console.error("Failed to add application:", error);
    }
  };

  // Delete an application via API (not used)
  const deleteApplication = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setApplications((prev) => prev.filter((app) => app.id !== id));
    } catch (error) {
      console.error("Failed to delete application:", error);
    }
  };

  return {
    applications,
    updateApplication,
    addApplication,
    deleteApplication,
  };
};
