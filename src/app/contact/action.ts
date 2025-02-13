"use server";

import { EmailClient, KnownEmailSendStatus } from "@azure/communication-email";
import { AzureKeyCredential } from "@azure/core-auth";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AZURE_COMM_KEY = new AzureKeyCredential(process.env.AZURE_COMM_KEY ?? "");
const AZURE_COMM_ENDPOINT = process.env.AZURE_COMM_ENDPOINT ?? "";
const AZURE_COMM_DEST_ADDR = process.env.AZURE_COMM_DEST_ADDR ?? "";
const AZURE_COMM_ORIG_ADDR = process.env.AZURE_COMM_ORIG_ADDR ?? "";
const POLLER_WAIT_TIME = 10;

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(1, "10 m"),
});

export async function sendContactMessage(
  subject: string,
  body: string,
  sender: string
) {
  const headersObject = await headers();
  const ipAddr = headersObject.get("x-forwarded-for") || "127.0.0.1";

  const { success } = await ratelimit.limit(ipAddr);

  if (success) {
    const emailClient = new EmailClient(AZURE_COMM_ENDPOINT, AZURE_COMM_KEY);
    try {
      const message = {
        senderAddress: AZURE_COMM_ORIG_ADDR,
        content: {
          subject: subject + ` from ${sender}`,
          plainText: body + `\nTo ${AZURE_COMM_DEST_ADDR}`,
        },
        recipients: {
          to: [
            {
              address: AZURE_COMM_DEST_ADDR,
              displayName: "Anh H. Nguyen",
            },
          ],
        },
      };

      const poller = await emailClient.beginSend(message);

      if (!poller.getOperationState().isStarted) {
        throw "Poller was not started.";
      }

      let timeElapsed = 0;
      while (!poller.isDone()) {
        poller.poll();
        console.log("Email send polling in progress");

        await new Promise((resolve) =>
          setTimeout(resolve, POLLER_WAIT_TIME * 1000)
        );
        timeElapsed += 10;

        if (timeElapsed > 18 * POLLER_WAIT_TIME) {
          throw "Polling timed out.";
        }
      }

      if (poller && poller.getResult()) {
        if (poller.getResult()?.status === KnownEmailSendStatus.Succeeded) {
          console.log(
            `Successfully sent the email (operation id: ${
              poller.getResult()?.id
            })`
          );
        } else {
          throw poller.getResult()?.error;
        }
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  } else {
    redirect("/blocked");
  }
}
