import React from "react";
import { User } from "lucide-react";
import MobileSidebar from "@/components/mobile-sidebar";

export default function Navbar() {
  return (
    <div className="flex items-center p-4">
     <MobileSidebar />
      <div className="flex w-full justify-end">
        <User />
      </div>
    </div>
  );
}
