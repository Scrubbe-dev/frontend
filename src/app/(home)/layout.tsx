import NewNavbar from "@/components/landing/header/NewNavbar";
import NewFooter from "@/components/landing/footer/NewFooter";
import React from "react";
import CookieToggleButton from "@/components/landing/CookieToggleButton";
import Chatbot from "@/components/landing/Chatbot";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NewNavbar />
      {children}
      <CookieToggleButton />
      <Chatbot />
      <NewFooter />
    </div>
  );
};

export default HomeLayout;
