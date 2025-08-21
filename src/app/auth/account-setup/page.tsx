import AccountSetup from "@/components/auth/account-setup/AccountSetup";
import { Suspense } from "react";

const AccountSetupPage = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <AccountSetup />
    </Suspense>
    </>
  );
}

export default AccountSetupPage;