import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { HeroProvider } from "@/provider/hero-provider";
import { StoreProvider } from "@/store/StoreProvider";
import CookieConsentModal from "@/components/landing/CookieConsentModal";
import Chatbot from "@/components/landing/Chatbot";
import AnnouncementBar from "@/components/landing/AnnouncementBar";
import NextJsTopLoader from "@/lib/NextJsTopLoader";

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
        <NextJsTopLoader />
        <StoreProvider>
          <AnnouncementBar />
          <HeroProvider>
            {children}
            <CookieConsentModal />
            <Chatbot />
          </HeroProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
