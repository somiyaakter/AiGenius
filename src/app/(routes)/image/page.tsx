"use client";
import React, { useState } from "react";
import axios from "axios";

import { Download, ImageIcon, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { amountOptions, formSchema, resolutionOptions } from "./constant";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Heading from "@/components/heading";
import Empty from "@/components/empty";
import Loader from "@/components/loader";

export default function ImagePage() {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setImages([]);
      setError(null);
      const response = await axios.post("/api/image", values);
      const urls = (response.data as Array<{ url?: string; b64_json?: string }>)
        .map((img) =>
          img.url
            ? img.url
            : img.b64_json
              ? `data:image/png;base64,${img.b64_json}`
              : null
        )
        .filter((u): u is string => Boolean(u));
      setImages(urls);
      form.reset();
    } catch (err) {
      const msg =
        axios.isAxiosError(err) && err.response?.data
          ? String(err.response.data)
          : "Image generation failed. Check server logs.";
      setError(msg);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="mx-auto max-w-6xl">
      <Heading
        title="Image Generation"
        description="Turn natural language into high-resolution images."
        icon={ImageIcon}
      />

      {/* Prompt bar */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="rounded-xl border border-border bg-card p-3 shadow-sm transition focus-within:border-primary/40 focus-within:shadow-lift"
        >
          <FormField
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="A serene mountain lake at dawn, hyperreal, cinematic lighting"
                    className="h-11 border-0 bg-transparent shadow-none focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="mt-2 flex flex-col gap-2 border-t border-border pt-2 md:flex-row md:items-center">
            <div className="flex flex-1 flex-col gap-2 sm:flex-row">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-9 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((o) => (
                          <SelectItem key={o.value} value={o.value}>
                            {o.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resolution"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-9 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((o) => (
                          <SelectItem key={o.value} value={o.value}>
                            {o.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              size="sm"
              className="h-9 rounded-lg px-4"
            >
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Generate
            </Button>
          </div>
        </form>
      </Form>

      {/* Output */}
      <div className="mt-6">
        {isLoading && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: parseInt(form.getValues("amount")) || 1 }).map(
              (_, i) => (
                <div
                  key={i}
                  className="aspect-square animate-pulse rounded-xl bg-muted"
                />
              )
            )}
          </div>
        )}

        {error && !isLoading && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {images.length === 0 && !isLoading && !error && (
          <Empty label="Describe an image above to generate." />
        )}

        {images.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((src) => (
              <div
                key={src}
                className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-muted"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Generated"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100">
                  <Button
                    onClick={() => window.open(src)}
                    size="sm"
                    variant="secondary"
                    className="m-3 h-8 rounded-md text-xs backdrop-blur"
                  >
                    <Download className="mr-1.5 h-3.5 w-3.5" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
