import { createFileRoute } from "@tanstack/react-router";
import { InviteApp } from "@/components/invitation/invite-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <InviteApp variant="home" />;
}
