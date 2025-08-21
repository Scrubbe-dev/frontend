import NewNavbar from "@/components/landing/header/NewNavbar";
import NewFooter from "@/components/landing/footer/NewFooter";
import React from "react";
import CookieToggleButton from "@/components/landing/CookieToggleButton";
import Chatbot from "@/components/landing/Chatbot";
import CookieConsentModal from "@/components/landing/CookieConsentModal";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NewNavbar />
      {children}
      <CookieConsentModal />
      <CookieToggleButton />
      <Chatbot />
      <NewFooter />
    </div>
  );
};

export default HomeLayout;
