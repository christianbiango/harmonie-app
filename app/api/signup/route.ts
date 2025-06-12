import { NextRequest, NextResponse } from "next/server";
import { signUpAction } from "@/app/actions";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  try {
    const result = await signUpAction(formData);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
