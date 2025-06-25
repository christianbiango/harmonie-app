import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import AuthButton from "@/components/header-auth";
import Footer from "@/components/footer-auth";
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
    <html lang="fr" className={geistSans.className} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-15 items-center">
              <div className="w-full flex justify-center h-52">
                <div className="w-full flex justify-center items-center bg-nephos-bluebg [clip-path:ellipse(100%_100%_at_50%_0)] px-10">
                  <AuthButton></AuthButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-20 max-w-5xl p-5">{children}</div>
          </main>
        </ThemeProvider>
        <Footer />
        <GoogleAnalytics gaId={env.GA_TRACKING_ID} />
      </body>
    </html>
  );
}
