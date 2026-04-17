import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessages: ChatCompletionMessageParam = {
  role: "system",
  content:
    "You are a senior software engineer. Answer using Markdown. Explain your reasoning briefly, then provide the full solution inside fenced code blocks with the correct language tag (e.g. ```ts, ```python). Prefer idiomatic, production-quality code.",
};

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse("OpenAI API key is not configured", {
        status: 500,
      });
    }

    const { messages } = await req.json();
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [instructionMessages, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.error("CODE ERROR:", error);
    const message =
      error instanceof Error ? error.message : "Internal Server Error";
    return new NextResponse(message, { status: 500 });
  }
}
