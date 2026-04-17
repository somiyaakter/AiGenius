import React from "react";
import MobileSidebar from "@/components/mobile-sidebar";
import UserMenu from "./user-button";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur md:px-6">
      <MobileSidebar />
      <div className="ml-auto flex items-center gap-3">
        <UserMenu />
      </div>
    </div>
  );
}
