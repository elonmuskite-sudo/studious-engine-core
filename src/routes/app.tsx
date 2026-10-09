import { createFileRoute } from "@tanstack/react-router";
import ProtectedRoute from "@/nexus/components/ProtectedRoute.jsx";
import ChatLayout from "@/nexus/layouts/ChatLayout.jsx";
export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Chats — Nexus Chat" },
      { name: "description", content: "Your Nexus Chat conversations." },
      { property: "og:title", content: "Chats — Nexus Chat" },
      { property: "og:description", content: "Your Nexus Chat conversations." },
    ],
  }),
  component: Page,
});

function Page() {
  return <ProtectedRoute><ChatLayout /></ProtectedRoute>;
}
