"use server";

import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from 'resend';
import { env } from "@/env/server";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(env.RESEND_API_KEY);

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(1, "10 m"),
});

export async function sendContactMessage(
  firstName: string,
  subject: string,
  body: string,
  sender: string
) {
  const headersObject = await headers();
  const ipAddr = headersObject.get("x-forwarded-for") || "127.0.0.1";

  const { success } = await ratelimit.limit(ipAddr);

  if (success) {
    try {
      const { data, error } = await resend.emails.send({
        from: 'AAANH <no-reply@business.aaanh.com>',
        to: [env.DEST_EMAIL],
        replyTo: sender,
        subject: `${subject}`,
        react: EmailTemplate({
          firstName,
          sender,
          subject,
          body
        }),
      });

      if (error) {
        throw error;
      }

      return { success: true, data };
    } catch (e) {
      console.error(e);
      throw e;
    }
  } else {
    redirect("/blocked");
  }
}
