"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage } from "./action";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LucideArrowLeft } from "lucide-react";

const FormSchema = z.object({
  subject: z.string({ message: "Subject line is malformed." }),
  sender: z.string().email({ message: "Invalid e-mail." }),
  message: z.string().min(8, {
    message: "E-mail inquiry needs to have content at least 8-character long.",
  }),
});

export default function Contact() {
  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState("");
  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      subject: ``,
      sender: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSending(true);
    setErrorMsg("Sending inquiry form...");

    await sendContactMessage(data.subject, data.message, data.sender);

    setIsSending(false);
    setErrorMsg("E-mail sent.");

    router.push("/");
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <Link
        href="/"
        className="group flex justify-center items-center space-x-2"
      >
        <LucideArrowLeft />
        <span className="group-hover:underline underline-offset-2">
          Back to home
        </span>
      </Link>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center space-y-6 p-8 w-2/3"
        >
          <h1 className="font-bold text-4xl">Contact me</h1>

          <FormField
            disabled={isSending}
            control={form.control}
            name="sender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="me@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={isSending}
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Topic of inquiry" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={isSending}
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Lorem ipsum" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {errorMsg ? (
            <p className="text-destructive-foreground">{errorMsg}</p>
          ) : null}

          <Button disabled={isSending} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
