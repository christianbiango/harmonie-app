// app/protected/layout.tsx
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/navigation/NavBar";
import { ReactNode } from "react";
import Footer from "@/components/navigation/Footer";

export default async function ProtectedLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <>
      <Navbar loggedIn={true} />
      {children}
    </>
  );
}