import React from "react";

import MobileSidebar from "@/components/mobile-sidebar";
import UserMenu from "./user-button";

export default function Navbar() {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserMenu />
      </div>
    </div>
  );
}
