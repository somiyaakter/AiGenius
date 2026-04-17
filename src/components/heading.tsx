import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export default function Heading({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-lg bg-accent",
          bgColor
        )}
      >
        <Icon className={cn("h-5 w-5 text-primary", iconColor)} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
