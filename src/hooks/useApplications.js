import { useState, useEffect } from "react";

export const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL || "/api/applications";

  // Fetch once on mount
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setApplications(data);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  // Update locally only (no API call)
  const updateApplication = (updatedApp) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === updatedApp.id ? updatedApp : app))
    );
  };

  // Add locally only (no API call)
  const addApplication = (newApp) => {
    const appWithId = {
      ...newApp,
      id: Math.max(...applications.map(a => a.id)) + 1,
    };
    setApplications((prev) => [...prev, appWithId]);
  };

  // Delete locally only (no API call)
  const deleteApplication = (id) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  };

  return {
    applications,
    loading,
    updateApplication,
    addApplication,
    deleteApplication,
  };
};