import Announcer from "../ui/Announcer";
import DashboardNavbar from "../ui/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Announcer />
      <DashboardNavbar />
      {children}
    </section>
  );
}
