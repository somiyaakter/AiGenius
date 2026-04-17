"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ImageIcon, LayoutDashboard, MessageSquare, Code } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";

const routes = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Conversation", icon: MessageSquare, href: "/conversation" },
  { label: "Image Generation", icon: ImageIcon, href: "/image" },
  { label: "Code Generation", icon: Code, href: "/code" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      <div className="flex-1 px-3 py-5">
        <Link href="/dashboard" className="mb-8 block px-3">
          <Logo size={24} />
        </Link>

        <div className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Workspace
        </div>

        <nav className="space-y-1">
          {routes.map((route) => {
            const active = pathname === route.href;
            return (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                )}
              >
                <route.icon
                  className={cn(
                    "h-4 w-4 transition",
                    active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                />
                {route.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-sidebar-border p-4">
        <div className="rounded-lg bg-accent/60 p-3 text-xs">
          <p className="font-medium text-foreground">Upgrade to Pro</p>
          <p className="mt-1 text-muted-foreground">
            Unlimited generations and priority support.
          </p>
        </div>
      </div>
    </div>
  );
}
