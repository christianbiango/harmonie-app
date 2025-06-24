import Navbar from "@/components/navigation/NavBar";
import { env } from "@/config/env";
import { createClient } from "@/utils/supabase/server";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

const defaultUrl = env.VERCEL_URL
  ? `https://${env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title:
    "Nephos • Plateforme de missions médicales saisonnières en zones rurales",
  description:
    "Découvrez Nephos, la plateforme digitale qui facilite l'engagement des soignants en zones isolées. Missions temporaires, logements pris en charge, expériences locales : réconciliez soin et ressourcement.",
  icons: {
    icon: [
      { url: "/images/logo/nephos-logo-min.ico" },
      {
        url: "/images/logo/nephos-logo-min.svg",
        type: "image/svg+xml",
      },
      {
        url: "/images/logo/nephos-logo-min.svg",
        sizes: "16x16",
        type: "image/svg+xml",
      },
      {
        url: "/images/logo/nephos-logo-min.svg",
        sizes: "32x32",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/images/logo/nephos-logo-min.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  },
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isLoggedIn = user ? true : false;

  return (
    <html lang="fr" className={geistSans.className} suppressHydrationWarning>
      <body className="text-foreground bg-nephos-bgPrimary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
         <Navbar loggedIn={isLoggedIn} />
          <div>{children}</div>
        </ThemeProvider>
        <GoogleAnalytics gaId={env.GA_TRACKING_ID} />
      </body>
    </html>
  );
}
