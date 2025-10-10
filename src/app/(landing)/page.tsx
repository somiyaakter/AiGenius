import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          Welcome to{" "}
          <span className="text-indigo-600">AI Genius</span>
        </h1>

        <p className="mt-3 text-2xl text-gray-600">
          The ultimate AI SaaS platform
        </p>

        <div className="flex items-center justify-center mt-10 space-x-4">

          <Link href="/sign-in">
            <Button size="lg">LogIn</Button>
          </Link>
          
          <Link href="/sign-up">
            <Button size="lg" variant="outline">
              Register
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}