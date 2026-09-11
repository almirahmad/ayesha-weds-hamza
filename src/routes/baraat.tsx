import { createFileRoute } from "@tanstack/react-router";
import { InviteApp } from "@/components/invitation/invite-app";

export const Route = createFileRoute("/baraat")({
  component: BaraatInvite,
});

function BaraatInvite() {
  return <InviteApp variant="baraat" />;
}
