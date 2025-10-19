"use client";
import React from "react";
import Heading from "@/features/conversation/components/heading";
import { MessageCircle } from "lucide-react";
import {useForm } from "react-hook-form";
import { formSchema } from "@/features/conversation/validations/constant";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";





export default function Conversation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });


  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };


  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation."
        icon={MessageCircle}
        iconColor="text-violet-400"
        bgColor="bg-violet-400/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem
                    className="col-span-12 lg:col-span-10"
                  >
                   
                    <FormControl className="m-0 p-0">
                      <Input
                        disabled={isLoading}
                        placeholder="How do I calculate the result of a circle?"
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        {...field}
                      />
                    </FormControl>
                   
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="col-span-12 lg:col-span-2 w-full"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>



        <div className="space-y-4 my-4">
          Message Content
        </div>
      </div>
    </div>
  );
}
