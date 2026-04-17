"use client";
import React, { useState } from "react";
import axios from "axios";

import { Code, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import Heading from "@/components/heading";
import Empty from "@/components/empty";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/user-avatar";
import BotAvatar from "@/components/bot-avatar";
import { formSchema } from "./constant";
import ReactMarkdown from "react-markdown";

export default function CodePage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { prompt: "" },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setError(null);
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];
      const response = await axios.post("/api/code", { messages: newMessages });
      setMessages((prev) => [...prev, userMessage, response.data]);
      form.reset();
    } catch (err) {
      const msg =
        axios.isAxiosError(err) && err.response?.data
          ? String(err.response.data)
          : "Code generation failed.";
      setError(msg);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <Heading
        title="Code Generation"
        description="Generate, refactor, and explain code with a senior engineer mindset."
        icon={Code}
      />

      {/* Prompt bar */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="rounded-xl border border-border bg-card p-2 shadow-sm transition focus-within:border-primary/40 focus-within:shadow-lift"
        >
          <div className="flex items-center gap-2">
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="e.g. A debounce helper in TypeScript"
                      className="h-10 border-0 bg-transparent shadow-none focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              size="sm"
              className="h-10 rounded-lg px-4"
            >
              <Send className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Generate</span>
            </Button>
          </div>
        </form>
      </Form>

      {/* Output */}
      <div className="mt-6 space-y-4">
        {isLoading && (
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <Loader />
          </div>
        )}

        {error && !isLoading && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {messages.length === 0 && !isLoading && !error && (
          <Empty label="Start a prompt to generate code." />
        )}

        <div className="flex flex-col-reverse gap-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex w-full items-start gap-3 rounded-xl border p-4",
                message.role === "user"
                  ? "border-border bg-background"
                  : "border-border bg-muted/40"
              )}
            >
              {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
              <div className="flex-1 overflow-hidden text-sm leading-7">
                <ReactMarkdown
                  components={{
                    pre: ({ ...props }) => (
                      <div className="my-3 overflow-x-auto rounded-lg border border-border bg-[oklch(0.13_0.02_275)] p-3 text-xs text-[oklch(0.95_0.01_275)]">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ ...props }) => (
                      <code
                        className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-xs"
                        {...props}
                      />
                    ),
                    p: ({ ...props }) => (
                      <p className="my-2" {...props} />
                    ),
                  }}
                >
                  {String(message.content) || ""}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
