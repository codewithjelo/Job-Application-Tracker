import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({ company: '', position: '', status: 'Applied' });
  const { addApplication } = useApplications();

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication(formData);
    setFormData({ company: '', position: '', status: 'Applied' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
      <input
        type="text"
        placeholder="Company"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        className="block w-full p-2 mb-2 border"
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={formData.position}
        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
        className="block w-full p-2 mb-2 border"
        required
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        className="block w-full p-2 mb-2 border"
      >
        <option>Applied</option>
        <option>Interviewed</option>
        <option>Rejected</option>
        <option>Accepted</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Application</button>
    </form>
  );
};

export default ApplicationForm;