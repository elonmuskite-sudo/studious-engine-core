import { createFileRoute } from "@tanstack/react-router";
import AuthGuard from "@/nexus/components/AuthGuard.jsx";
import ResetPassword from "@/nexus/pages/ResetPassword.jsx";
export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Reset password — Nexus Chat" },
      { name: "description", content: "Choose a new password for Nexus Chat." },
      { property: "og:title", content: "Reset password — Nexus Chat" },
      { property: "og:description", content: "Choose a new password for Nexus Chat." },
    ],
  }),
  component: Page,
});

function Page() {
  return <AuthGuard><ResetPassword /></AuthGuard>;
}
