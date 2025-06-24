// Example: components/navigation/NavBar.tsx or any logout button component

"use client";
import { signOutAction } from "@/app/(actions)/auth";
import { cn } from "@/lib/utils";

type SignOutButtonProps = {
    className: string;
}

export default function LogoutButton({ className }: SignOutButtonProps) {
  return (
    <form action={signOutAction}>
      <button type="submit" className={cn("bg-white text-[#172C75] font-semibold px-4 py-1 rounded-full text-sm hover:bg-cyan-100")}>Se déconnecter</button>
    </form>
  );
}