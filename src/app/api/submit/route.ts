import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { form_type, first_name, last_name, email, company, phone, topic, message, company_size, locations } = body;

    if (!form_type || !email) {
      return NextResponse.json(
        { error: "form_type and email are required" },
        { status: 400 }
      );
    }

    const validTypes = ["contact", "demo", "free_trial", "newsletter"];
    if (!validTypes.includes(form_type)) {
      return NextResponse.json(
        { error: "Invalid form_type" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("form_submissions").insert({
      form_type,
      first_name: first_name || null,
      last_name: last_name || null,
      email,
      company: company || null,
      phone: phone || null,
      topic: topic || null,
      message: message || null,
      company_size: company_size || null,
      locations: locations || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save submission" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
