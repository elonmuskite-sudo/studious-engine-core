import { createFileRoute } from "@tanstack/react-router";
import AuthGuard from "@/nexus/components/AuthGuard.jsx";
import ForgotPassword from "@/nexus/pages/ForgotPassword.jsx";
export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot password — Nexus Chat" },
      { name: "description", content: "Recover access to your Nexus Chat account." },
      { property: "og:title", content: "Forgot password — Nexus Chat" },
      { property: "og:description", content: "Recover access to your Nexus Chat account." },
    ],
  }),
  component: Page,
});

function Page() {
  return <AuthGuard><ForgotPassword /></AuthGuard>;
}
