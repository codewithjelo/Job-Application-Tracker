// import { useState, useEffect } from "react";

// export const useApplications = () => {
//   const [applications, setApplications] = useState([]);
//   const API_URL = import.meta.env.VITE_API_URL;


//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const res = await fetch(API_URL);
//         const data = await res.json();
//         setApplications(data);
//       } catch (error) {
//         console.error("Failed to fetch applications:", error);
//       }
//     };

//     fetchApplications();
//   }, []);

//   // Update an application via API
//   const updateApplication = async (updatedApp) => {
//     try {
//       const res = await fetch(`${API_URL}/${updatedApp.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedApp),
//       });
//       const data = await res.json();

//       setApplications((prev) =>
//         prev.map((app) => (app.id === data.id ? data : app)),
//       );
//     } catch (error) {
//       console.error("Failed to update application:", error);
//     }
//   };

//   // Add a new application via API
//   const addApplication = async (newApp) => {
//     try {
//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newApp),
//       });
//       const data = await res.json();
//       setApplications((prev) => [...prev, data]);
//     } catch (error) {
//       console.error("Failed to add application:", error);
//     }
//   };

//   // Delete an application via API (not used)
//   const deleteApplication = async (id) => {
//     try {
//       await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//       setApplications((prev) => prev.filter((app) => app.id !== id));
//     } catch (error) {
//       console.error("Failed to delete application:", error);
//     }
//   };

//   return {
//     applications,
//     updateApplication,
//     addApplication,
//     deleteApplication,
//   };
// };

import { useState, useEffect } from "react";

export const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch(`${API_URL}?_limit=10`);
        const data = await res.json();

        const mappedApplications = data.map((post) => ({
          id: post.id,
          company: `Company ${post.userId}`,
          position: post.title,
          status: "Applied",
          appliedDate: new Date().toISOString(),
          interviewDate: null,
          rejectedDate: null,
          location: "Remote",
          work: "Remote",
          type: "Full-time",
          notes: post.body,
          activities: [
            {
              id: 1,
              type: "created",
              timestamp: new Date().toISOString(),
              note: "Application submitted",
            },
          ],
        }));

        setApplications(mappedApplications);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      }
    };

    fetchApplications();
  }, [API_URL]);

  const updateApplication = async (updatedApp) => {
    try {
      await fetch(`${API_URL}/${updatedApp.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedApp),
      });

      setApplications((prev) =>
        prev.map((app) =>
          app.id === updatedApp.id ? updatedApp : app,
        ),
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

      const data = await res.json();

      setApplications((prev) => [
        ...prev,
        {
          ...newApp,
          id: data.id || Date.now(),
          activities: [
            {
              id: 1,
              type: "created",
              timestamp: new Date().toISOString(),
              note: "Application submitted",
            },
          ],
        },
      ]);
    } catch (error) {
      console.error("Failed to add application:", error);
    }
  };

  const deleteApplication = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });

      setApplications((prev) =>
        prev.filter((app) => app.id !== id),
      );
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
