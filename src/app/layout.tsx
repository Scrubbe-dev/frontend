import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import { HeroProvider } from "@/provider/hero-provider";
import { StoreProvider } from "@/store/StoreProvider";
import CookieConsentModal from "@/components/landing/CookieConsentModal";
import CookieToggleButton from "@/components/landing/CookieToggleButton";
import Navbar from "@/components/landing/Navbar";
import FooterWrapper from "@/components/landing/footer/FooterWrapper";
import Chatbot from "@/components/landing/Chatbot";
//import AnnouncementBar from "@/components/landing/AnnouncementBar";
import NextJsTopLoader from "@/lib/NextJsTopLoader";
import AuthProvider from "@/provider/AuthProvider";

const airbnbCereal = localFont({
  src: [
    {
      path: "./fonts/airbnb-cereal/AirbnbCereal_W_Lt.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/airbnb-cereal/AirbnbCereal_W_Bk.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/airbnb-cereal/AirbnbCereal_W_Md.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/airbnb-cereal/AirbnbCereal_W_Bd.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/airbnb-cereal/AirbnbCereal_W_XBd.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/airbnb-cereal/AirbnbCereal_W_Blk.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-airbnb-cereal",
  display: "swap",
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
    <html lang="en" className={`${airbnbCereal.variable}`}>
      <body className="antialiased min-h-screen w-full flex flex-col justify-center items-center bg-[#1F2B71] font-airbnb">
        <AuthProvider>
          <NextJsTopLoader />
          <StoreProvider>
            {/*  <AnnouncementBar /> */}{" "}
            {/* disabled for now till official launch */}
            <HeroProvider>
              <Navbar />
              <main className="flex-grow h-full w-full">{children}</main>
              <FooterWrapper />
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
