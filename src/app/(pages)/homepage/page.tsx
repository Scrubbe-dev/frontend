import Hero from "@/components/landing/Hero";
import SecurityFeatures from "@/components/landing/SecurityFeatures";
import BuiltForDevelopers from "@/components/landing/BuiltForDevelopers";
import FiveEasySteps from "@/components/landing/FiveEasySteps";
import SecurityIntelligence from "@/components/landing/security-intelligence/SecurityIntelligence";
import VerifyIdentities from "@/components/landing/VerifyIdentities";
import ContextAware from "@/components/landing/ContextAware";
import SupportedBy from "@/components/landing/SupportedBy";

function HomePage() {
  return (
    <>
      <Hero />
      <SecurityFeatures />
      <BuiltForDevelopers />
      <FiveEasySteps />
      <SecurityIntelligence />
      <VerifyIdentities />
      <ContextAware />
      <SupportedBy />
    </>
  );
}

export default HomePage;
