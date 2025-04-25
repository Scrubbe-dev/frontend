import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { HeroProvider } from "@/provider/hero-provider";
import { ZustandProvider } from "@/zustand/ZustandProvider";
import CookieConsentModal from "@/components/landing/CookieConsentModal";
import Chatbot from "@/components/landing/Chatbot";
import AnnouncementBar from "@/components/landing/AnnouncementBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ZustandProvider>
          <AnnouncementBar />
          <HeroProvider>
            {children}
            <CookieConsentModal />
            <Chatbot />
          </HeroProvider>
        </ZustandProvider>
      </body>
    </html>
  );
}
