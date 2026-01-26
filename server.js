import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import applications from "./api/data/applications.js"

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// GET all applications
app.get("/applications", (req, res) => res.json(applications));

// GET one application by ID
app.get("/applications/:id", (req, res) => {
  const appItem = applications.find((a) => a.id === parseInt(req.params.id));
  if (!appItem)
    return res.status(404).json({ message: "Application not found" });
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
  const index = applications.findIndex((a) => a.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ message: "Application not found" });
  applications[index] = { ...applications[index], ...req.body };
  res.json(applications[index]);
});

// DELETE application
app.delete("/applications/:id", (req, res) => {
  const index = applications.findIndex((a) => a.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ message: "Application not found" });
  const deleted = applications.splice(index, 1);
  res.json(deleted[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
