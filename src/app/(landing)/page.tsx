import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f1117] text-white">
      <header className="absolute top-6 left-8 flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <h1 className="text-2xl font-semibold">Genius</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold">
          The Best AI Tool for{" "}
          <span className="block bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text">
            AIGenius
          </span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Create content using AI 10x faster.
        </p>

        <div className="mt-8">
          <Link href="/sign-up">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-lg font-semibold px-8 py-6 rounded-full shadow-lg hover:opacity-90 transition"
            >
              Start Generating For Free
            </Button>
          </Link>
          <p className="mt-3 text-gray-500 text-sm">No credit card required.</p>
        </div>
      </main>

      <div className="absolute top-6 right-8">
        <Link href="/sign-in">
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 border-gray-500 bg-gradient-to-r from-emerald-500 to-blue-500 text-white"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
