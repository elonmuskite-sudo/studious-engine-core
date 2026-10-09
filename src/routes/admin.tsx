import { createFileRoute } from "@tanstack/react-router";
import AdminGuard from "@/nexus/components/AdminGuard.jsx";
import AdminDashboard from "@/nexus/pages/AdminDashboard.jsx";
export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Nexus Chat" },
      { name: "description", content: "Nexus Chat administration dashboard." },
      { property: "og:title", content: "Admin — Nexus Chat" },
      { property: "og:description", content: "Nexus Chat administration dashboard." },
    ],
  }),
  ssr: false,
  component: Page,
});

function Page() {
  return <AdminGuard><AdminDashboard /></AdminGuard>;
}
