import type { InviteVariant } from "@/lib/event";
import { InvitationPage } from "./invitation-page";
import { Nasheed } from "./nasheed";
import { SkyLife } from "./sky-life";

export function InviteApp({ variant }: { variant: InviteVariant }) {
  return (
    <main className="relative min-h-dvh bg-paper text-ink">
      <SkyLife />
      <InvitationPage variant={variant} />
      <Nasheed />
    </main>
  );
}
