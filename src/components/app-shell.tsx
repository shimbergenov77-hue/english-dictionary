import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Layers, Mic, Newspaper } from "lucide-react";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "Словарь", icon: BookOpen },
  { to: "/cards", label: "Карточки", icon: Layers },
  { to: "/reading", label: "Reading", icon: Newspaper },
  { to: "/speaking", label: "Speaking", icon: Mic },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-bg text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="font-display text-xl leading-none tracking-tight">
            Karamatdin <span className="text-teal">English</span>
          </Link>
          <nav className="flex flex-wrap gap-1">
            {NAV.map((item) => {
              const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold ${
                    active ? "bg-teal text-surface" : "text-muted hover:bg-teal-soft hover:text-teal-deep"
                  }`}
                >
                  <Icon size={16} aria-hidden />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-6 pb-16">{children}</main>
    </div>
  );
}
