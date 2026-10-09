import { createFileRoute } from "@tanstack/react-router";
import ContactsPanel from "@/nexus/components/chat/ContactsPanel.jsx";
export const Route = createFileRoute("/app/contacts")({
  head: () => ({
    meta: [
      { title: "Contacts — Nexus Chat" },
      { name: "description", content: "Your Nexus Chat contacts." },
      { property: "og:title", content: "Contacts — Nexus Chat" },
      { property: "og:description", content: "Your Nexus Chat contacts." },
    ],
  }),
  component: Page,
});

function Page() {
  return <ContactsPanel />;
}
