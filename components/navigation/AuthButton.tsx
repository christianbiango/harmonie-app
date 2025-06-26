import Link from "next/link";
import LogoutButton from "../SignOutButton";

export default function AuthButton({ loggedIn }: { loggedIn: boolean }) {
  return (
    <div className="hidden md:block">
      {loggedIn ? (
        <LogoutButton className="bg-white text-[#172C75] font-semibold px-4 py-1 rounded-full text-sm hover:bg-cyan-100 transition-colors duration-200" />
      ) : (
        <Link
          href="/connexion"
          className="bg-white text-[#172C75] font-semibold px-4 py-1 rounded-full text-sm hover:bg-cyan-100 transition-colors duration-200"
        >
          Se connecter
        </Link>
      )}
    </div>
  );
}
