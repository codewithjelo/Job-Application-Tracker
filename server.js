import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let applications = [
  {
    id: 1,
    company: "Google",
    position: "Frontend Engineer",
    status: "Applied",
    appliedDate: "2025-12-10T09:30:00.000Z",
    interviewDate: null,
    rejectedDate: null,
    location: "Mountain View, CA",
    work: "On-Site",
    type: "Full-time",
    notes: "Referred by alumni",
    activities: [
      {
        id: 1,
        type: "created",
        timestamp: "2025-12-10T09:30:00.000Z",
        note: "Application submitted"
      }
    ]
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Software Engineer",
    status: "Interviewing",
    appliedDate: "2025-12-15T14:00:00.000Z",
    interviewDate: "2026-01-20T10:00:00.000Z",
    rejectedDate: null,
    location: "Redmond, WA",
    work: "On-Site",
    type: "Full-time",
    notes: "Completed technical round",
    activities: [
      {
        id: 1,
        type: "created",
        timestamp: "2025-12-15T14:00:00.000Z",
        note: "Application submitted"
      },
      {
        id: 2,
        type: "status_change",
        from: "Applied",
        to: "Interviewing",
        timestamp: "2026-01-10T11:00:00.000Z",
        note: "Moved to interviewing stage"
      }
    ]
  },
  {
    id: 3,
    company: "Spotify",
    position: "UI Engineer",
    status: "Rejected",
    appliedDate: "2025-11-28T16:45:00.000Z",
    interviewDate: "2025-12-05T15:30:00.000Z",
    rejectedDate: "2025-12-12T09:00:00.000Z",
    location: "Remote",
    work: "Remote",
    type: "Contract",
    notes: "Strong portfolio feedback",
    activities: [
      {
        id: 1,
        type: "created",
        timestamp: "2025-11-28T16:45:00.000Z",
        note: "Application submitted"
      },
      {
        id: 2,
        type: "status_change",
        from: "Applied",
        to: "Interviewing",
        timestamp: "2025-12-05T15:30:00.000Z",
        note: "Scheduled for interview"
      },
      {
        id: 3,
        type: "status_change",
        from: "Interviewing",
        to: "Rejected",
        timestamp: "2025-12-12T09:00:00.000Z",
        note: "Application rejected after interview"
      }
    ]
  },
  {
    id: 4,
    company: "Stripe",
    position: "Frontend Developer",
    status: "Offer",
    appliedDate: "2025-12-20T11:20:00.000Z",
    interviewDate: "2026-01-08T14:00:00.000Z",
    rejectedDate: null,
    location: "San Francisco, CA",
    work: "On-Site",
    type: "Full-time",
    notes: "Offer expires in 2 weeks",
    activities: [
      {
        id: 1,
        type: "created",
        timestamp: "2025-12-20T11:20:00.000Z",
        note: "Application submitted"
      },
      {
        id: 2,
        type: "status_change",
        from: "Applied",
        to: "Interviewing",
        timestamp: "2026-01-03T10:00:00.000Z",
        note: "Invited for interview"
      },
      {
        id: 3,
        type: "status_change",
        from: "Interviewing",
        to: "Offer",
        timestamp: "2026-01-15T16:30:00.000Z",
        note: "Received job offer"
      }
    ]
  },
  {
    id: 5,
    company: "Airbnb",
    position: "React Engineer",
    status: "Applied",
    appliedDate: "2025-12-05T08:15:00.000Z",
    interviewDate: null,
    rejectedDate: null,
    location: "Remote",
    work: "Remote",
    type: "Full-time",
    notes: "",
    activities: [
      {
        id: 1,
        type: "created",
        timestamp: "2025-12-05T08:15:00.000Z",
        note: "Application submitted"
      }
    ]
  },
];

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
