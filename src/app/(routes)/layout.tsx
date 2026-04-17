import React from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full min-h-screen bg-background">
      <aside className="hidden md:fixed md:inset-y-0 md:z-40 md:flex md:w-64 md:flex-col">
        <Sidebar />
      </aside>
      <main className="md:pl-64">
        <Navbar />
        <div className="px-4 py-8 md:px-8">{children}</div>
      </main>
    </div>
  );
}
