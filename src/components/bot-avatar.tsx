import { LogoMark } from "@/components/logo";

export default function BotAvatar() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background ring-1 ring-border">
      <LogoMark size={20} />
    </div>
  );
}
