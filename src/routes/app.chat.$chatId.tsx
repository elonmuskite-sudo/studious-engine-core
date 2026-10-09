import { createFileRoute } from "@tanstack/react-router";
import ChatPage from "@/nexus/pages/ChatPage.jsx";
export const Route = createFileRoute("/app/chat/$chatId")({
  head: () => ({
    meta: [
      { title: "Conversation — Nexus Chat" },
      { name: "description", content: "A Nexus Chat conversation." },
      { property: "og:title", content: "Conversation — Nexus Chat" },
      { property: "og:description", content: "A Nexus Chat conversation." },
    ],
  }),
  ssr: false,
  component: Page,
});

function Page() {
  return <ChatPage />;
}
