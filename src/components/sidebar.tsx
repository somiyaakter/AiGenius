"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Code,
  Sparkles,
  Settings,
  LifeBuoy,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

const workspace = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Conversation", icon: MessageSquare, href: "/conversation" },
  { label: "Image Generation", icon: ImageIcon, href: "/image" },
  { label: "Code Generation", icon: Code, href: "/code" },
];

const system = [
  { label: "Settings", icon: Settings, href: "/settings" },
  { label: "Support", icon: LifeBuoy, href: "/support" },
];

function NavItem({
  href,
  icon: Icon,
  label,
  active,
}: {
  href: string;
  icon: typeof LayoutDashboard;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
        active
          ? "bg-accent text-foreground"
          : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
      )}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r bg-primary" />
      )}
      <Icon
        className={cn(
          "h-4 w-4 transition",
          active ? "text-primary" : "text-muted-foreground"
        )}
      />
      {label}
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      {/* Brand */}
      <div className="flex h-16 items-center border-b border-sidebar-border px-5">
        <Link href="/dashboard">
          <Logo size={24} />
        </Link>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto px-3 py-5">
        <div className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Workspace
        </div>
        <nav className="space-y-0.5">
          {workspace.map((route) => (
            <NavItem
              key={route.href}
              href={route.href}
              icon={route.icon}
              label={route.label}
              active={pathname === route.href}
            />
          ))}
        </nav>

        <div className="mt-8 mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          System
        </div>
        <nav className="space-y-0.5">
          {system.map((route) => (
            <NavItem
              key={route.href}
              href={route.href}
              icon={route.icon}
              label={route.label}
              active={pathname === route.href}
            />
          ))}
        </nav>
      </div>

      {/* Upgrade card */}
      <div className="border-t border-sidebar-border p-4">
        <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/10 via-background to-background p-4">
          <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <p className="text-sm font-semibold tracking-tight">
            Upgrade to Pro
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Unlimited generations, priority models, and team workspaces.
          </p>
          <Button size="sm" className="mt-3 h-8 w-full rounded-md text-xs">
            Upgrade
          </Button>
        </div>
      </div>
    </div>
  );
}
