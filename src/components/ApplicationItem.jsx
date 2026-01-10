const ApplicationItem = ({ app }) => (
  <div className="bg-white p-4 rounded shadow-md border">
    <h3 className="font-bold">{app.company}</h3>
    <p>{app.position}</p>
    <p>Status: {app.status}</p>
    <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
  </div>
);

export default ApplicationItem;