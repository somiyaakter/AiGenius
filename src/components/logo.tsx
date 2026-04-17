import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export function LogoMark({ className, size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.62 0.22 278)" />
          <stop offset="55%" stopColor="oklch(0.58 0.24 300)" />
          <stop offset="100%" stopColor="oklch(0.7 0.18 250)" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
      <path
        d="M21.5 12.25C20.4 10.9 18.8 10 17 10C13.7 10 11 12.7 11 16C11 19.3 13.7 22 17 22C19.76 22 22.1 20.1 22.76 17.5H17V15H25V23H23V21.2C21.6 22.6 19.4 23.5 17 23.5C12.86 23.5 9.5 20.14 9.5 16C9.5 11.86 12.86 8.5 17 8.5C19.4 8.5 21.5 9.64 22.85 11.4L21.5 12.25Z"
        fill="white"
      />
    </svg>
  );
}

export default function Logo({
  className,
  size = 28,
  showWordmark = true,
}: LogoProps & { showWordmark?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoMark size={size} />
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight">Genius</span>
      )}
    </div>
  );
}
