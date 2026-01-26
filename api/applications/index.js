import applications from "../data/applications.js";

export default function handler(req, res) {
  const { id } = req.query;
  const appId = parseInt(id);

  const index = applications.findIndex((a) => a.id === appId);

  if (index === -1) {
    return res.status(404).json({ message: "Application not found" });
  }

  if (req.method === "GET") {
    return res.status(200).json(applications[index]);
  }

  if (req.method === "PUT") {
    applications[index] = {
      ...applications[index],
      ...req.body,
    };
    return res.status(200).json(applications[index]);
  }

  if (req.method === "DELETE") {
    const deleted = applications.splice(index, 1);
    return res.status(200).json(deleted[0]);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
