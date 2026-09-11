import { createFileRoute } from "@tanstack/react-router";
import { InviteApp } from "@/components/invitation/invite-app";

export const Route = createFileRoute("/all")({
  component: AllCelebrations,
});

function AllCelebrations() {
  return <InviteApp variant="all" />;
}
