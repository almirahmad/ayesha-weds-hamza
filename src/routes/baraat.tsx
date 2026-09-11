import { createFileRoute } from "@tanstack/react-router";
import { InviteApp } from "@/components/invitation/invite-app";

export const Route = createFileRoute("/baraat")({
  component: BaratOnly,
});

function BaratOnly() {
  return <InviteApp variant="baraatOnly" />;
}
