"use client";
import {
  ImageIcon,
  MessageSquare,
  Code,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    description: "Chat with the smartest AI assistant.",
    icon: MessageSquare,
    href: "/conversation",
  },
  {
    label: "Image Generation",
    description: "Turn text prompts into stunning visuals.",
    icon: ImageIcon,
    href: "/image",
  },
  {
    label: "Code Generation",
    description: "Generate, refactor, and explain code.",
    icon: Code,
    href: "/code",
  },
];

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-accent/50 px-3 py-1 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Welcome back
        </div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Explore the power of AI
        </h1>
        <p className="mt-2 text-muted-foreground">
          Pick a tool to get started — everything you need in one place.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            onClick={() => router.push(tool.href)}
            className="group cursor-pointer gap-0 border-border p-6 transition hover:border-primary/40 hover:shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground transition group-hover:bg-primary group-hover:text-primary-foreground">
                <tool.icon className="h-5 w-5" />
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
            <h3 className="mt-5 text-base font-semibold tracking-tight">
              {tool.label}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {tool.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
