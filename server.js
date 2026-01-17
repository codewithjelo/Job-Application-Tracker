import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Your applications array lives right here
let applications = [
  { id: 1, company: "Google", position: "Frontend Engineer", status: "Applied", date: "2025-12-10", location: "Mountain View, CA", work: "On-Site", type: "Full-time", notes: "Referred by alumni" },
  { id: 2, company: "Microsoft", position: "Software Engineer", status: "Interviewing", date: "2025-12-15", location: "Redmond, WA", work: "On-Site", type: "Full-time", notes: "Completed technical round" },
  { id: 3, company: "Spotify", position: "UI Engineer", status: "Rejected", date: "2025-11-28", location: "Remote", work: "Remote", type: "Contract", notes: "Strong portfolio feedback" },
  { id: 4, company: "Stripe", position: "Frontend Developer", status: "Offer", date: "2025-12-20", location: "San Francisco, CA", work: "On-Site", type: "Full-time", notes: "Offer expires in 2 weeks" },
  { id: 5, company: "Airbnb", position: "React Engineer", status: "Applied", date: "2025-12-05", location: "Remote", work: "Remote", type: "Full-time", notes: "" },
];

// GET all applications
app.get("/applications", (req, res) => res.json(applications));

// GET one application by ID
app.get("/applications/:id", (req, res) => {
  const appItem = applications.find(a => a.id === parseInt(req.params.id));
  if (!appItem) return res.status(404).json({ message: "Application not found" });
  res.json(appItem);
});

// POST new application
app.post("/applications", (req, res) => {
  const newApp = { id: applications.length + 1, ...req.body };
  applications.push(newApp);
  res.status(201).json(newApp);
});

// PUT update application
app.put("/applications/:id", (req, res) => {
  const index = applications.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Application not found" });
  applications[index] = { ...applications[index], ...req.body };
  res.json(applications[index]);
});

// DELETE application
app.delete("/applications/:id", (req, res) => {
  const index = applications.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Application not found" });
  const deleted = applications.splice(index, 1);
  res.json(deleted[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});