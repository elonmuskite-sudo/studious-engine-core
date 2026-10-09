import { createFileRoute } from "@tanstack/react-router";
import Home from "@/nexus/pages/Home.jsx";
export const Route = createFileRoute("/app/")({
  head: () => ({
    meta: [
      { title: "Chats — Nexus Chat" },
      { name: "description", content: "Start a new conversation on Nexus Chat." },
      { property: "og:title", content: "Chats — Nexus Chat" },
      { property: "og:description", content: "Start a new conversation on Nexus Chat." },
    ],
  }),
  ssr: false,
  component: Page,
});

function Page() {
  return <Home />;
}
