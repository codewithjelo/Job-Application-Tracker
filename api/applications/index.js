import applications from "../../src/data/applications";

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(applications);
  }

  if (req.method === "POST") {
    const newApp = {
      id: applications.length + 1,
      ...req.body,
    };

    applications.push(newApp);
    return res.status(201).json(newApp);
  }

  return res.status(405).json({ message: "Method not allowed" });
}