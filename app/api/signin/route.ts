import { NextRequest, NextResponse } from "next/server";
import { signInAction } from "@/app/actions";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  try {
    const result = await signInAction(formData);
    return NextResponse.json({ success: "Connexion réussie" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
