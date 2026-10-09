import { createFileRoute } from "@tanstack/react-router";
import VerifyEmail from "@/nexus/pages/VerifyEmail.jsx";
export const Route = createFileRoute("/verify-email")({
  head: () => ({
    meta: [
      { title: "Verify email — Nexus Chat" },
      { name: "description", content: "Confirm your email address for Nexus Chat." },
      { property: "og:title", content: "Verify email — Nexus Chat" },
      { property: "og:description", content: "Confirm your email address for Nexus Chat." },
    ],
  }),
  ssr: false,
  component: Page,
});

function Page() {
  return <VerifyEmail />;
}
