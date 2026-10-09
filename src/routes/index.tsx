import { createFileRoute } from "@tanstack/react-router";
import AuthGuard from "@/nexus/components/AuthGuard.jsx";
import AuthLanding from "@/nexus/pages/AuthLanding.jsx";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Private messaging — Nexus Chat" },
      { name: "description", content: "Nexus Chat is a privacy-first messaging app for secure real-time conversations." },
      { property: "og:title", content: "Private messaging — Nexus Chat" },
      { property: "og:description", content: "Nexus Chat is a privacy-first messaging app for secure real-time conversations." },
    ],
  }),
  component: Page,
});

function Page() {
  return <AuthGuard><AuthLanding /></AuthGuard>;
}
