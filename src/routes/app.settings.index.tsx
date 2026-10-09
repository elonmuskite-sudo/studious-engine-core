import { createFileRoute } from "@tanstack/react-router";
import SettingsPage from "@/nexus/pages/SettingsPage.jsx";
export const Route = createFileRoute("/app/settings/")({
  head: () => ({
    meta: [
      { title: "Settings — Nexus Chat" },
      { name: "description", content: "Manage your Nexus Chat settings." },
      { property: "og:title", content: "Settings — Nexus Chat" },
      { property: "og:description", content: "Manage your Nexus Chat settings." },
    ],
  }),
  ssr: false,
  component: Page,
});

function Page() {
  return <SettingsPage />;
}
