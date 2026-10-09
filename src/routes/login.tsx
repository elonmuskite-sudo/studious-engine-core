import { createFileRoute } from "@tanstack/react-router";
import AuthGuard from "@/nexus/components/AuthGuard.jsx";
import Login from "@/nexus/pages/Login.jsx";
export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Nexus Chat" },
      { name: "description", content: "Sign in to your Nexus Chat account." },
      { property: "og:title", content: "Sign in — Nexus Chat" },
      { property: "og:description", content: "Sign in to your Nexus Chat account." },
    ],
  }),
  component: Page,
});

function Page() {
  return <AuthGuard><Login /></AuthGuard>;
}
