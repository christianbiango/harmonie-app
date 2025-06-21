import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import AuthButton from "@/components/header-auth";
import { env } from "@/config/env";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-15 items-center">
              <div className="w-full flex justify-center h-16 bg-nephos-primary-dark px-6 py-16">
                <div className="w-4/5 flex justify-center items-center text-sm">
                  <AuthButton></AuthButton>
                </div>
              </div>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
        <GoogleAnalytics gaId={env.GA_TRACKING_ID} />
      </body>
    </html>
  );
}
