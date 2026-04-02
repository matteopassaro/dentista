import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations/appointment";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Payload non valido." }, { status: 400 });
  }

  const parsed = appointmentSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().formErrors.join(" ") },
      { status: 400 },
    );
  }

  // Ready for Resend, SendGrid, database, ecc.
  if (process.env.NODE_ENV === "development") {
    console.info("[appointment]", parsed.data);
  }

  return NextResponse.json({ ok: true });
}
