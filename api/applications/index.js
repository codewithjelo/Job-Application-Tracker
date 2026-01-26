const applications = require("../data/applications");

module.exports = function handler(req, res) {
  res.status(200).json({ message: "Hello from API" });
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    return res.status(200).json(applications);
  }

  if (req.method === "POST") {
    const newApp = {
      ...req.body,
      id: Math.max(...applications.map((a) => a.id)) + 1,
      activities: [
        {
          id: 1,
          type: "created",
          timestamp: new Date().toISOString(),
          note: "Application submitted",
        },
      ],
    };
    applications.push(newApp);
    return res.status(201).json(newApp);
  }

  return res.status(405).json({ message: "Method not allowed" });
};
