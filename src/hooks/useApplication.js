import { useState } from 'react';

const useApplications = () => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setApplications(data.slice(0, 3));
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  const addApplication = async (newApp) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newApp),
      });
      const addedApp = await response.json();
      setApplications([...applications, addedApp]);
    } catch (error) {
      console.error('Error adding:', error);
    }
  };

  

  return { applications, fetchApplications, addApplication };
};

export default useApplications;