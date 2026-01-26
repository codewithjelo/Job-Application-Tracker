import { useState, useEffect } from "react";

export const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "api/applications";

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

  const updateApplication = async (updatedApp) => {
    try {
      const res = await fetch(`${API_URL}/${updatedApp.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedApp),
      });
      if (!res.ok) throw new Error('Failed to update');
      const data = await res.json();

      setApplications((prev) =>
        prev.map((app) => (app.id === data.id ? data : app))
      );
    } catch (error) {
      console.error("Failed to update application:", error);
    }
  };

  const addApplication = async (newApp) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newApp),
      });
      if (!res.ok) throw new Error('Failed to add');
      const data = await res.json();
      setApplications((prev) => [...prev, data]);
    } catch (error) {
      console.error("Failed to add application:", error);
    }
  };

  const deleteApplication = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error('Failed to delete');
      setApplications((prev) => prev.filter((app) => app.id !== id));
    } catch (error) {
      console.error("Failed to delete application:", error);
    }
  };

  return {
    applications,
    loading,
    updateApplication,
    addApplication,
    deleteApplication,
  };
};