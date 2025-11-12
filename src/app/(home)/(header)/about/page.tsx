import AboutUs from "@/components/header/about/AboutUs";
import IncidentAboutUs from "@/components/IMS/Home/AboutUs";
const IS_STANDALONE = process.env.NEXT_PUBLIC_IS_STANDALONE === "true";

const page = () => {
  return <>{IS_STANDALONE ? <IncidentAboutUs /> : <AboutUs />}</>;
};

export default page;
