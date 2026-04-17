import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo, { LogoMark } from "@/components/logo";
import {
  ArrowRight,
  ArrowUpRight,
  MessageSquare,
  ImageIcon,
  Code2,
  Check,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ——— Nav ——— */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-10 text-sm text-muted-foreground md:flex">
            <a href="#product" className="transition hover:text-foreground">Product</a>
            <a href="#features" className="transition hover:text-foreground">Features</a>
            <a href="#pricing" className="transition hover:text-foreground">Pricing</a>
            <a href="#docs" className="transition hover:text-foreground">Docs</a>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/sign-in">
              <Button variant="ghost" size="sm" className="text-sm">
                Sign in
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm" className="rounded-full px-4 text-sm">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* ——— Hero ——— */}
      <section className="relative overflow-hidden">
        <div className="aurora" />
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-24 text-center md:pt-36 md:pb-32">
          <Link
            href="/sign-up"
            className="group mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs backdrop-blur-md transition hover:border-primary/30"
          >
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              New
            </span>
            <span className="text-muted-foreground">
              Genius 2.0 · Conversation, vision, and code, together
            </span>
            <ArrowRight className="h-3 w-3 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
          </Link>

          <h1 className="display mx-auto mt-10 max-w-5xl text-6xl font-semibold sm:text-7xl md:text-8xl">
            AI you can{" "}
            <span className="text-gradient-primary">trust to ship</span>.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Genius is the professional workspace for conversation, images, and
            code — designed with the craft and restraint your work deserves.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="group h-12 rounded-full px-7 text-base shadow-primary-glow"
              >
                Start for free
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="#product">
              <Button
                size="lg"
                variant="ghost"
                className="h-12 rounded-full px-5 text-base text-muted-foreground hover:text-foreground"
              >
                See the product
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-primary" />
            Free forever
            <span className="mx-2">·</span>
            <Check className="h-3.5 w-3.5 text-primary" />
            No credit card
            <span className="mx-2">·</span>
            <Check className="h-3.5 w-3.5 text-primary" />
            Ready in 30 seconds
          </div>
        </div>

        {/* Hairline divider */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="hairline" />
        </div>
      </section>

      {/* ——— Product showcase ——— */}
      <section id="product" className="relative">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              Product
            </div>
            <h2 className="display mt-4 text-4xl font-semibold sm:text-5xl">
              Three tools. One workspace.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Stop juggling tabs. Genius unifies the modalities that matter in
              one calm, keyboard-first interface.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {/* Conversation card */}
            <div className="card-premium flex flex-col overflow-hidden rounded-2xl">
              <div className="relative h-44 overflow-hidden border-b border-border bg-gradient-to-br from-muted/70 via-background to-accent/40 p-5">
                <div className="space-y-2">
                  <div className="w-4/5 rounded-lg bg-foreground/5 px-3 py-2 text-[11px] text-muted-foreground">
                    How do I reduce churn?
                  </div>
                  <div className="ml-auto w-[92%] rounded-lg bg-primary px-3 py-2 text-[11px] leading-relaxed text-primary-foreground">
                    Start by segmenting — cancel reasons cluster into three root
                    causes worth solving separately…
                  </div>
                  <div className="w-3/5 rounded-lg bg-foreground/5 px-3 py-2 text-[11px] text-muted-foreground">
                    Show me the data model.
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Conversation
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Reason, brainstorm, and ask anything — with context that
                  persists across your workspace.
                </p>
                <Link
                  href="/sign-up"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                >
                  Try it
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Image card */}
            <div className="card-premium flex flex-col overflow-hidden rounded-2xl">
              <div className="relative h-44 overflow-hidden border-b border-border">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "conic-gradient(from 210deg at 50% 60%, oklch(0.62 0.22 278), oklch(0.65 0.22 320), oklch(0.7 0.18 250), oklch(0.62 0.22 278))",
                    filter: "blur(2px)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 rounded-md bg-background/80 px-3 py-1.5 text-[11px] text-muted-foreground backdrop-blur">
                  &ldquo;A serene mountain lake at dawn, hyperreal&rdquo;
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <ImageIcon className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Image generation
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Prompt to pixel in seconds. Ship social, marketing, and
                  product imagery without a stock subscription.
                </p>
                <Link
                  href="/sign-up"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                >
                  Try it
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Code card */}
            <div className="card-premium flex flex-col overflow-hidden rounded-2xl">
              <div className="relative h-44 overflow-hidden border-b border-border bg-[oklch(0.15_0.02_275)] p-5 font-mono text-[11px] leading-relaxed">
                <div className="text-[oklch(0.6_0.02_275)]">
                  <span className="text-[oklch(0.75_0.18_300)]">export</span>{" "}
                  <span className="text-[oklch(0.75_0.18_300)]">function</span>{" "}
                  <span className="text-[oklch(0.8_0.15_85)]">debounce</span>(
                  <br />
                  &nbsp;&nbsp;fn:{" "}
                  <span className="text-[oklch(0.78_0.13_200)]">Function</span>,
                  ms = <span className="text-[oklch(0.8_0.15_85)]">200</span>
                  <br />) {"{"}
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-[oklch(0.75_0.18_300)]">let</span>{" "}
                  t:{" "}
                  <span className="text-[oklch(0.78_0.13_200)]">any</span>;
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-[oklch(0.75_0.18_300)]">return</span>{" "}
                  (...a) =&gt; {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-[oklch(0.8_0.15_85)]">clearTimeout</span>
                  (t);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;t ={" "}
                  <span className="text-[oklch(0.8_0.15_85)]">setTimeout</span>
                  (...);
                  <br />
                  &nbsp;&nbsp;{"}"};
                  <br />
                  {"}"}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Code2 className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Code generation
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Explain, refactor, and write code in any language — with the
                  quality you&apos;d expect from a senior engineer.
                </p>
                <Link
                  href="/sign-up"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                >
                  Try it
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Feature strip ——— */}
      <section id="features" className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold tracking-tight">
                Built for speed
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Streaming responses. Instant switching. No loading spinners
                longer than a blink.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight">
                Crafted interface
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Every pixel is considered. Keyboard-first, distraction-free,
                designed for deep work.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight">
                Your data, yours
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Private by default. Enterprise SSO and isolation available the
                moment you need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Quote ——— */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
          <LogoMark size={40} className="mx-auto" />
          <p className="display mt-10 text-3xl font-medium leading-[1.15] md:text-4xl">
            &ldquo;Genius replaced five tools in our stack. It&apos;s the first
            AI workspace that feels{" "}
            <span className="text-gradient-primary">designed</span>, not
            assembled.&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-fuchsia-400" />
            <div className="text-left text-sm">
              <div className="font-medium">Alex Morgan</div>
              <div className="text-xs text-muted-foreground">
                Head of Product, Lumen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Final CTA ——— */}
      <section className="relative overflow-hidden border-b border-border bg-foreground text-background">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, oklch(0.6 0.25 278 / 0.7), transparent 55%), radial-gradient(ellipse at 75% 40%, oklch(0.65 0.22 320 / 0.55), transparent 55%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <h2 className="display md:col-span-8 text-5xl font-semibold md:text-7xl">
              Start building with Genius today.
            </h2>
            <div className="md:col-span-4 md:text-right">
              <p className="mb-6 text-background/70">
                Create your account in 30 seconds. Free forever.
              </p>
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-background px-7 text-base text-foreground hover:bg-background/90"
                >
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Footer ——— */}
      <footer>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 text-sm text-muted-foreground md:flex-row md:items-center">
          <Logo />
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
          <div>© {new Date().getFullYear()} Genius</div>
        </div>
      </footer>
    </div>
  );
}
