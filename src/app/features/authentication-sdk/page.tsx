import type { Metadata } from "next";
import AuthenticationSdk from "@/components/features/AuthenticationSdk";

export const metadata: Metadata = {
  title: "Authentication SDK - Scrubbe",
  description:
    "Scrubbe's AI-driven platform combines SIEM and SOAR for automated threat detection, response, and unified security analytics.",
};

const AuthenticationSdkPage = () => {
  return (
    <>
      <AuthenticationSdk />
    </>
  );
}

export default AuthenticationSdkPage;