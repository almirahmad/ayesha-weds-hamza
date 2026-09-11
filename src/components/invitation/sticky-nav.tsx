import { useEffect, useState } from "react";
import { NAV } from "@/lib/event";
import { cn } from "@/lib/utils";

type NavItem = { id: string; label: string };

export function StickyNav({ items = NAV }: { items?: readonly NavItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const nodes = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  function go(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  }

  return (
    <nav className="nav-bar" aria-label="Invitation sections">
      <div className="mx-auto flex max-w-3xl items-center justify-start gap-0.5 overflow-x-auto px-2 sm:justify-center">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={cn("nav-link", active === item.id && "is-active")}
            onClick={() => go(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
