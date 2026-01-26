const applications = require('../data/applications');

module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id } = req.query;
  const appId = parseInt(id);
  const index = applications.findIndex((a) => a.id === appId);

  if (index === -1) {
    return res.status(404).json({ message: 'Application not found' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(applications[index]);
  }

  if (req.method === 'PUT') {
    applications[index] = {
      ...applications[index],
      ...req.body,
    };
    return res.status(200).json(applications[index]);
  }

  if (req.method === 'DELETE') {
    const deleted = applications.splice(index, 1);
    return res.status(200).json(deleted[0]);
  }

  return res.status(405).json({ message: 'Method not allowed' });
};