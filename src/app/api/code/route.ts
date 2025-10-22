import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessages: ChatCompletionMessageParam = {
  role: "system",
  content: "You are a helpful assistant...",
};

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { messages } = await req.json();

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o", 
      messages: [instructionMessages, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.error("CONVERSATION ERROR:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
