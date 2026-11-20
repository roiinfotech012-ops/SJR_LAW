import { NextResponse } from "next/server";
import { grievanceSchema } from "@/lib/validation";
import { deliverSubmission } from "@/lib/submission-delivery";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body?.website) {
      return NextResponse.json(
        { ok: false, message: "Invalid submission." },
        { status: 400 }
      );
    }

    const parsed = grievanceSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please check the required grievance form fields.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const result = await deliverSubmission("grievance", parsed.data);
    return NextResponse.json(
      {
        ok: true,
        delivered: result.delivered,
        mode: result.mode,
        referenceId: result.referenceId,
        message: result.message,
      },
      { status: result.delivered ? 200 : 202 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to process grievance submission." },
      { status: 500 }
    );
  }
}
