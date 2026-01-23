import { useApplications } from "../hooks/useApplications";
import { Briefcase, Send, Users, XCircle } from "lucide-react";

const DashboardCard = () => {
  const { applications } = useApplications();
  const cardList = [
    {
      title: "Job Applications",
      count: applications.length,
      icon: Briefcase,
    },
    {
      title: "Applied",
      count: applications.filter((app) => app.status === "Applied").length,
      icon: Send,
    },
    {
      title: "Interviewing",
      count: applications.filter((app) => app.status === "Interviewing").length,
      icon: Users,
    },
    {
      title: "Rejected",
      count: applications.filter((app) => app.status === "Rejected").length,
      icon: XCircle,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5">
      {cardList.map((app) => (
        <div className="flex flex-col rounded-md border border-[var(--border)] lg:min-w-64">
          <p className="text-sm lg:text-md py-3 bg-[var(--secondary)] text-center rounded-t-md font-semibold border-b border-[var(--border)] text-[var(--white)] flex items-center justify-center gap-2">
            <app.icon className="w-4 h-4 md:w-5 lg:h-5" />
            {app.title}
          </p>
          <span className="text-xl py-5 text-center font-semibold text-[var(--secondary)]">
            {app.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
