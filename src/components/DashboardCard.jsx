import { APPLICATIONS } from "../data/applications";

const DashboardCard = () => {
  const cardList = [
    {
      title: "Total Job Application",
      count: APPLICATIONS.length,
    },
    {
      title: "Total Applied",
      count: APPLICATIONS.filter((app) => app.status === "Applied").length,
    },
  ];

  return (
    <div className="flex flex-row justify-evenly">
      {cardList.map((app) => (
      <div className="flex flex-col p-4 border border-[var(--border)]">
        <p className="text-xl font-semibold text-[var(--primary)]">
          {app.title}
        </p>
        <span className="text-4xl font-semibold text-[var(--secondary)]">
          {app.count}
        </span>
      </div>
      ))}
    </div>
  );
};

export default DashboardCard;
