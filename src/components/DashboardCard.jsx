import { useApplications } from "../hooks/useApplications";

const DashboardCard = () => {
  const { applications } = useApplications();
  const cardList = [
    {
      title: "Total Job Applications",
      count: applications.length,
    },
    {
      title: "Total Applied",
      count: applications.filter((app) => app.status === "Applied").length,
    },
    {
      title: "Total Interviewing",
      count: applications.filter((app) => app.status === "Interviewing").length,
    },
    {
      title: "Total Rejected",
      count: applications.filter((app) => app.status === "Rejected").length,
    },
  ];

  return (
    <div className="flex flex-row justify-evenly">
      {cardList.map((app) => (
        <div className="flex flex-col p-4 border border-[var(--border)]">
          <p className="text-xl font-semibold text-[var(--primary)]">
            {app.title}
          </p>
          <span className="text-xl font-semibold text-[var(--secondary)]">
            {app.count}
          </span>
        </div>
      ))}
      ;
    </div>
  );
};

export default DashboardCard;
