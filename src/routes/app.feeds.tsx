import { createFileRoute } from "@tanstack/react-router";
import FeedsPage from "@/nexus/pages/FeedsPage.jsx";
export const Route = createFileRoute("/app/feeds")({
  head: () => ({
    meta: [
      { title: "Feeds — Nexus Chat" },
      { name: "description", content: "Stories and updates on Nexus Chat." },
      { property: "og:title", content: "Feeds — Nexus Chat" },
      { property: "og:description", content: "Stories and updates on Nexus Chat." },
    ],
  }),
  component: Page,
});

function Page() {
  return <FeedsPage />;
}
