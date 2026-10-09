import { createFileRoute } from "@tanstack/react-router";
import AuthGuard from "@/nexus/components/AuthGuard.jsx";
import Register from "@/nexus/pages/Register.jsx";
export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account — Nexus Chat" },
      { name: "description", content: "Create a free Nexus Chat account." },
      { property: "og:title", content: "Create account — Nexus Chat" },
      { property: "og:description", content: "Create a free Nexus Chat account." },
    ],
  }),
  ssr: false,
  component: Page,
});

function Page() {
  return <AuthGuard><Register /></AuthGuard>;
}
