import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import { HeroProvider } from "@/provider/hero-provider";
import { StoreProvider } from "@/store/StoreProvider";
import CookieConsentModal from "@/components/landing/CookieConsentModal";
import CookieToggleButton from "@/components/landing/CookieToggleButton";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Chatbot from "@/components/landing/Chatbot";
import AnnouncementBar from "@/components/landing/AnnouncementBar";
import NextJsTopLoader from "@/lib/NextJsTopLoader";
import AuthProvider from "@/provider/AuthProvider";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full flex flex-col justify-center items-center bg-[#1F2B71]`}
      >
        <AuthProvider>
          <NextJsTopLoader />
          <StoreProvider>
            <AnnouncementBar />
            <HeroProvider>
              <Navbar />
              <main className="flex-grow h-full w-full">{children}</main>
              <Footer />
              <CookieConsentModal />
              <CookieToggleButton />
              <Chatbot />
            </HeroProvider>
          </StoreProvider>
          <Toaster position="top-center" />
        </AuthProvider>
      </body>
    </html>
  );
}
