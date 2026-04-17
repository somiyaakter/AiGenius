import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-6">
      <Loader2 className="h-5 w-5 animate-spin text-primary" />
      <p className="text-xs text-muted-foreground">Genius is thinking…</p>
    </div>
  );
}
