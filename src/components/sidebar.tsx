"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import {
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  VideoIcon,
  Music,
  Code,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
});


const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-400",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-400",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-400",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-amber-400",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-400",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-blue-400",
  },
  {     
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
export default function Sidebar() {

  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full space-y-4 py-4 bg-[#111827] text-white ">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <h1 className={cn("text-xl font-bold", montserrat.className)}>
            AIGenius
          </h1>
        </Link>

        <div>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
