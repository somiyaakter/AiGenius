"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";


export default function Dashboard() {
  const router = useRouter();
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <Button variant="outline">Sign Out</Button>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Welcome!</h2>
        <p className="mt-2 text-gray-600">This is your dashboard. More features coming soon!</p>
      </div>
    </div>
  );
}
