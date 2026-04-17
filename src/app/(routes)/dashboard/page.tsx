"use client";
import {
  ImageIcon,
  MessageSquare,
  Code,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/use-user";

const tools = [
  {
    label: "Conversation",
    description: "Reason, brainstorm, and ask anything.",
    icon: MessageSquare,
    href: "/conversation",
    preview: (
      <div className="space-y-1.5 p-4">
        <div className="w-3/4 rounded-md bg-foreground/5 px-2 py-1.5 text-[10px] text-muted-foreground">
          How do I debug this?
        </div>
        <div className="ml-auto w-[85%] rounded-md bg-primary px-2 py-1.5 text-[10px] text-primary-foreground">
          Start by isolating the smallest failing case…
        </div>
      </div>
    ),
  },
  {
    label: "Image Generation",
    description: "Prompt to pixel in seconds.",
    icon: ImageIcon,
    href: "/image",
    preview: (
      <div
        className="h-full w-full"
        style={{
          background:
            "conic-gradient(from 210deg at 50% 60%, oklch(0.62 0.22 278), oklch(0.65 0.22 320), oklch(0.7 0.18 250), oklch(0.62 0.22 278))",
          filter: "blur(1.5px)",
        }}
      />
    ),
  },
  {
    label: "Code Generation",
    description: "Write, refactor, explain code.",
    icon: Code,
    href: "/code",
    preview: (
      <div className="h-full w-full bg-[oklch(0.15_0.02_275)] p-3 font-mono text-[10px] leading-snug">
        <div className="text-[oklch(0.6_0.02_275)]">
          <span className="text-[oklch(0.75_0.18_300)]">const</span>{" "}
          <span className="text-[oklch(0.8_0.15_85)]">run</span> ={" "}
          <span className="text-[oklch(0.75_0.18_300)]">async</span> () =&gt;{" "}
          {"{"}
          <br />
          &nbsp;&nbsp;
          <span className="text-[oklch(0.75_0.18_300)]">await</span>{" "}
          <span className="text-[oklch(0.8_0.15_85)]">ship</span>();
          <br />
          {"}"};
        </div>
      </div>
    ),
  },
];

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

export default function Dashboard() {
  const router = useRouter();
  const { user } = useUser();
  const firstName = user?.name?.split(" ")[0] ?? "there";

  return (
    <div className="mx-auto max-w-6xl">
      {/* Greeting */}
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-accent/50 px-3 py-1 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Your workspace
        </div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {getGreeting()}, {firstName}.
        </h1>
        <p className="mt-2 text-muted-foreground">
          What would you like to create today?
        </p>
      </div>

      {/* Tool cards */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <button
            key={tool.href}
            onClick={() => router.push(tool.href)}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left transition hover:border-primary/30 hover:shadow-lift"
          >
            <div className="h-32 w-full overflow-hidden border-b border-border bg-muted/40">
              {tool.preview}
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <tool.icon className="h-4 w-4" />
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight">
                {tool.label}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Tip card */}
      <div className="mt-8 rounded-2xl border border-dashed border-border bg-muted/30 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight">
              Tip · Use ⌘K to jump anywhere
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              A keyboard-first workflow keeps you in flow. Most actions in Genius
              have a shortcut — try pressing ⌘K now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
