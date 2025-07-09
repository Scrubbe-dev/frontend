const soarFeature = [
  {
    iconSrc: "/check-box.svg",
    title: "Automated Workflows",
    description:
      "Create customizable playbooks to automatically respond to security incidents with predefined actions and responses",
  },
  {
    iconSrc: "/icon-famicons_log-in.svg",
    title: "Advanced Log Analysis",
    description:
      "Collect, normalize, and analyze logs from all sources with powerful search capabilities and correlation rules",
  },
  {
    iconSrc: "/icon-mingcute_alert-fill.svg",
    title: "Real time alerts",
    description:
      "Get instant notifications about security incidents with detailed context to make informed decisions quickly",
  },
  {
    iconSrc: "/dashboard.svg",
    title: "Centralized Monitoring",
    description:
      "Gain a unified view of your security posture across on-premise, cloud, and hybrid environments from a single pane of glass",
  },
  {
    iconSrc: "/analytics2.svg",
    title: "Health Metrics",
    description:
      "Track system performance and security health with customizable metrics and KPIs tailored to your organization",
  },
  {
    iconSrc: "/instructions-rounded.svg",
    title: "Integration Ecosystem",
    description:
      "Connect with 200+ security tools and platforms to create a unified security operations center",
  },
];
const SoarFeature = () => {
  return (
    <div className=" max-w-[1440px] h-full mx-auto flex flex-col items-center gap-y-6 relative z-10 px-4 md:px-6 lg:px-20 xl:px-20 py-20">
      <div className="text-center mb-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-gray-800 mb-2">
          Key Features
        </h2>
        <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm sm:text-base md:max-w-2xl mx-auto">
          Our SOAR Automation platform helps security teams automate response
          workflows, analyze logs efficiently, and monitor their infrastructure
          from a single pane of glass.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full mx-auto">
        {soarFeature.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default SoarFeature;

interface FeatureCardProps {
  iconSrc: string;
  iconAlt?: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`h-full bg-white p-6 rounded-xl border border-neutral-300 flex flex-col hover:border-blue-400 hover:shadow-sm transition-all duration-200 ${className}`}
    >
      <div className="mb-4">
        <div className="relative w-12 h-12 flex items-center justify-center rounded-full  bg-neutral-100 border  border-colorScBlue">
          <img
            src={iconSrc}
            alt={iconAlt ?? ""}
            height={40}
            width={40}
            className="object-contain h-[60%] w-[60%]"
          />
        </div>
      </div>
      <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold mb-2">
        {title}
      </h3>
      <p className="text-[14px] lg:text-[16px] flex-grow">{description}</p>
    </div>
  );
};
