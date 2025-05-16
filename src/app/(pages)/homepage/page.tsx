import SecurityFeatures from "@/components/landing/SecurityFeatures";
import SecurityIntelligence from "@/components/landing/SecurityIntelligence";
import BuiltForDevelopers from "@/components/landing/BuiltForDevelopers";
import FiveEasySteps from "@/components/landing/FiveEasySteps";
import Hero from "@/components/landing/Hero";

function HomePage() {
  return (
    <>
      <Hero />
      <SecurityFeatures />
      <BuiltForDevelopers />
      <FiveEasySteps />
      <SecurityIntelligence />
    </>
  );
}

export default HomePage;
