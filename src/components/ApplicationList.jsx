import React, { useEffect } from 'react';
import useApplications from '../hooks/useApplication';
import ApplicationItem from '../components/ApplicationItem';

const ApplicationList = () => {
  const { applications, fetchApplications } = useApplications();

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {applications.map(app => <ApplicationItem key={app.id} app={app} />)}
    </div>
  );
};

export default ApplicationList;