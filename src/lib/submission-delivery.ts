import fs from "node:fs/promises";
import path from "node:path";

export interface DeliveryResult {
  delivered: boolean;
  mode: "webhook" | "resend" | "local-log" | "unconfigured";
  referenceId: string;
  message: string;
}

export async function deliverSubmission(
  kind: "enquiry" | "alumni" | "grievance",
  payload: Record<string, unknown>
): Promise<DeliveryResult> {
  const referenceId = `SJRCL-${kind.toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
  const record = {
    referenceId,
    kind,
    submittedAt: new Date().toISOString(),
    payload,
  };

  // 1. Optional Webhook Delivery
  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (process.env.ENQUIRY_WEBHOOK_SECRET) {
        headers["X-SJRCL-Secret"] = process.env.ENQUIRY_WEBHOOK_SECRET;
      }
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(record),
      });
      if (!res.ok) {
        throw new Error(`Webhook returned HTTP ${res.status}`);
      }
      return {
        delivered: true,
        mode: "webhook",
        referenceId,
        message: `Your submission has been delivered to SJR College of Law (Ref: ${referenceId}).`,
      };
    } catch (err) {
      console.error("[SJRCL Delivery] Webhook failed:", err);
      return {
        delivered: false,
        mode: "unconfigured",
        referenceId,
        message:
          "Automated delivery failed. Please contact the college office directly at +91 91080 26311 or sjrcl.principal@gmail.com.",
      };
    }
  }

  // 2. Optional Resend Email Delivery
  const resendKey = process.env.RESEND_API_KEY;
  const recipient =
    process.env.ENQUIRY_RECIPIENT_EMAIL || "sjrcl.principal@gmail.com";
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "SJR College of Law Website <onboarding@resend.dev>",
          to: [recipient],
          subject: `[SJRCL Website] New ${kind} submission (${referenceId})`,
          text: JSON.stringify(record, null, 2),
        }),
      });
      if (!res.ok) {
        throw new Error(`Resend returned HTTP ${res.status}`);
      }
      return {
        delivered: true,
        mode: "resend",
        referenceId,
        message: `Your submission has been emailed to SJR College of Law (Ref: ${referenceId}).`,
      };
    } catch (err) {
      console.error("[SJRCL Delivery] Resend failed:", err);
    }
  }

  // 3. Fallback: Local durable log file (honestly disclosed—never pretends an email was sent)
  try {
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(
      path.join(dir, "submissions.jsonl"),
      JSON.stringify(record) + "\n",
      "utf-8"
    );
    return {
      delivered: false,
      mode: "local-log",
      referenceId,
      message: `Your form passed validation and was recorded locally (Ref: ${referenceId}). External email delivery is not yet configured in environment variables—for immediate assistance, please call +91 91080 26311 or email sjrcl.principal@gmail.com.`,
    };
  } catch {
    return {
      delivered: false,
      mode: "unconfigured",
      referenceId,
      message:
        "Email/webhook delivery is not configured on this deployment. Please contact the college directly at +91 91080 26311 or sjrcl.principal@gmail.com.",
    };
  }
}
